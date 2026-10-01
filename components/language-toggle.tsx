"use client"

import { useRouter, usePathname } from "next/navigation"
import { Languages, Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { getLocalizedPath } from "@/lib/locale-routes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
] as const

export function LanguageToggle({ forceLight = false }: { forceLight?: boolean }) {
  const { language, setLanguage } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  const handleSelect = (next: (typeof LANGUAGES)[number]["code"]) => {
    if (next === language) return
    const target = pathname ? getLocalizedPath(pathname, next) : null
    setLanguage(next)
    if (target && target !== pathname) {
      router.push(target)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={`Language: ${language.toUpperCase()}, open language menu`}
          // forceLight: same translucent-white glass treatment as the rest
          // of the nav cluster on Home's always-dark hero (unscrolled) --
          // see ThemeToggle for the full rationale.
          className={
            forceLight
              ? "w-9 h-9 rounded-full bg-white/10 ring-1 ring-white/15 hover:scale-105 flex items-center justify-center transition-all duration-200"
              : "w-9 h-9 rounded-full bg-slate-100/90 dark:bg-muted/70 ring-1 ring-black/10 dark:ring-white/10 hover:scale-105 flex items-center justify-center transition-all duration-200"
          }
        >
          <Languages className={`w-4 h-4 ${forceLight ? "text-white/70" : "text-slate-600 dark:text-slate-300"}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[9rem]">
        {LANGUAGES.map(({ code, label }) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => handleSelect(code)}
            className="flex items-center justify-between gap-2 cursor-pointer"
          >
            <span>{label}</span>
            {language === code ? <Check className="w-3.5 h-3.5 text-primary" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
