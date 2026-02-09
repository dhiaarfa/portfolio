"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  language: string
  setLanguage: (lang: string) => void
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative overflow-hidden group bg-transparent">
          <Globe className="h-[1.2rem] w-[1.2rem] transition-all group-hover:rotate-12" />
          <span className="sr-only">Toggle language</span>
          <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-20 bg-gradient-to-r from-[hsl(var(--zia-green))] to-purple-500 transition-opacity"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-[hsl(var(--zia-green))]/10 dark:bg-[hsl(var(--zia-green))]/20" : ""}
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ar")}
          className={language === "ar" ? "bg-[hsl(var(--zia-green))]/10 dark:bg-[hsl(var(--zia-green))]/20" : ""}
        >
          🇸🇦 العربية
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("fr")}
          className={language === "fr" ? "bg-[hsl(var(--zia-green))]/10 dark:bg-[hsl(var(--zia-green))]/20" : ""}
        >
          🇫🇷 Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
