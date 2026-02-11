"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

import type { Language } from "@/lib/translations"

interface LanguageToggleProps {
  language: Language
  setLanguage: (lang: Language) => void
}

const order: Language[] = ["en", "fr", "ar"]

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  const handleClick = () => {
    const idx = order.indexOf(language)
    const next = order[(idx + 1) % order.length]
    setLanguage(next)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative overflow-hidden group bg-transparent px-3 min-w-[2.6rem] flex items-center justify-center gap-1"
      onClick={handleClick}
      aria-label="Toggle language"
    >
      <Globe className="h-[1.1rem] w-[1.1rem] transition-all group-hover:rotate-12" />
      <span className="text-[0.7rem] font-semibold uppercase">
        {language}
      </span>
      <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-20 bg-gradient-to-r from-[hsl(var(--zia-green))] to-purple-500 transition-opacity" />
    </Button>
  )
}
