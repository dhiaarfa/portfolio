"use client"

import { useRouter, usePathname } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { getLocalizedPath } from "@/lib/locale-routes"

const order = ["en", "fr", "ar"] as const

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    const idx = order.indexOf(language)
    const next = order[(idx + 1) % order.length]

    // On a route that has a real translated /fr or /ar twin (see
    // lib/locale-routes.ts), navigate there so the URL and <html lang>
    // are correct from the server, not just the in-page text. Everywhere
    // else (e.g. individual English-only insight articles), fall back to
    // the original in-place context switch exactly as before.
    const target = pathname ? getLocalizedPath(pathname, next) : null
    if (target && target !== pathname) {
      setLanguage(next)
      router.push(target)
      return
    }

    setLanguage(next)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      // Includes the visible "EN"/"FR"/"AR" text in the accessible name on purpose --
      // a plain "Toggle language" label doesn't include what's visibly displayed,
      // which is a real WCAG 2.5.3 mismatch a Lighthouse audit flagged.
      aria-label={`Language: ${language.toUpperCase()}, tap to switch`}
      // Same bg-slate-100/90 + ring-1 treatment as every other icon-only
      // navbar control, for one consistent button language instead of two.
      className="w-9 h-9 rounded-full bg-slate-100/90 dark:bg-muted/70 ring-1 ring-black/10 dark:ring-white/10 hover:scale-105 flex items-center justify-center gap-1 transition-all duration-200"
    >
      <span className="text-[0.65rem] font-semibold uppercase text-slate-600 dark:text-slate-300">
        {language}
      </span>
    </button>
  )
}
