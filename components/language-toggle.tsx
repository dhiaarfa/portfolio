"use client"

import { useLanguage } from "@/components/language-provider"

const order = ["en", "fr", "ar"] as const

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const handleClick = () => {
    const idx = order.indexOf(language)
    const next = order[(idx + 1) % order.length]
    setLanguage(next)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      // Includes the visible "EN"/"FR"/"AR" text in the accessible name on purpose —
      // a plain "Toggle language" label doesn't include what's visibly displayed,
      // which is a real WCAG 2.5.3 mismatch a Lighthouse audit flagged.
      aria-label={`Language: ${language.toUpperCase()} — tap to switch`}
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
