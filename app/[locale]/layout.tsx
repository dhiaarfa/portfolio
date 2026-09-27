import type React from "react"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/components/language-provider"
import type { Language } from "@/lib/translations"

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
  return <LanguageProvider initialLanguage={locale as Language}>{children}</LanguageProvider>
}
