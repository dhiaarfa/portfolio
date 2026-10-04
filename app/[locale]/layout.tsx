import type React from "react"
import { notFound } from "next/navigation"
import { preload } from "react-dom"
import { LanguageProvider } from "@/components/language-provider"
import type { Language } from "@/lib/translations"
import { fr } from "@/lib/i18n/fr"
import { ar } from "@/lib/i18n/ar"

// Additive-only: /fr/* and /ar/* twins of the pages that have real,
// complete translated content (see checklist for why individual
// /insights/[slug] articles are NOT part of this tree yet -- their long-form
// body copy is still English-only). Every existing unprefixed English route
// is completely untouched by this segment.
const SUPPORTED_LOCALES = ["fr", "ar"] as const

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

// Anything outside fr/ar (e.g. /en, /de) 404s immediately at the routing
// layer instead of attempting an on-demand render that then calls
// notFound() -- that path can leave a 200 status already flushed on a
// streamed response. This makes the 404 real and immediate.
export const dynamicParams = false

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!SUPPORTED_LOCALES.includes(locale as (typeof SUPPORTED_LOCALES)[number])) {
    notFound()
  }

  // Nests a second LanguageProvider instance scoped to this subtree, seeded
  // from the URL. React context resolves to the nearest provider, so this
  // overrides the root layout's default "en" provider only here -- the
  // unprefixed route tree keeps its existing browser-detect/localStorage
  // behavior untouched.
  // The root layout renders <html lang="en" dir="ltr"> for every route (it
  // sits outside [locale], so it can't know the locale without making every
  // page dynamic). LanguageProvider corrected lang/dir in a useEffect, i.e.
  // only after hydration -- so /ar painted left-to-right first and every
  // /fr, /ar page reported itself as English until JS ran. This inline
  // script runs while the HTML is parsed, before the page content below it
  // is painted. <html> already has suppressHydrationWarning, so React
  // accepts the attribute change. `locale` is validated above (fr|ar only).
  const dir = locale === "ar" ? "rtl" : "ltr"
  // Arabic pages: fetch the two most used Arabic weights with the HTML so
  // text paints in the right face instead of reflowing (see globals.css).
  if (locale === "ar") {
    for (const w of [400, 700]) {
      preload(`/fonts/ibm-plex-sans-arabic/arabic-${w}.woff2`, { as: "font", type: "font/woff2", crossOrigin: "anonymous" })
    }
  }
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${locale}";document.documentElement.dir="${dir}";`,
        }}
      />
      {/* This locale's dictionary only, so the client bundle carries no French
          or Arabic copy (see components/language-provider.tsx). */}
      <LanguageProvider initialLanguage={locale as Language} initialMessages={locale === "ar" ? ar : fr}>
        {children}
      </LanguageProvider>
    </>
  )
}
