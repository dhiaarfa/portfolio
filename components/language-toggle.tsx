"use client"

import { Globe } from "lucide-react"
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
      aria-label="Toggle language"
      className="w-9 h-9 rounded-full border border-slate-200 dark:border-[#1F1F1F] bg-white dark:bg-[#111111] hover:border-[#AAFF00]/50 dark:hover:border-[#AAFF00]/50 flex items-center justify-center gap-1 transition-all duration-200"
    >
      <span className="text-[0.65rem] font-semibold uppercase text-slate-700 dark:text-[#F5F5F5]">
        {language}
      </span>
    </button>
  )
}
