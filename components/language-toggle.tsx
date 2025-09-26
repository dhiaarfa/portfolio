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
        <Button variant="outline" size="icon" className="relative overflow-hidden group card-interactive glow-border">
          <Globe className="h-[1.2rem] w-[1.2rem] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 text-emerald-500" />
          <span className="sr-only">Toggle language</span>
          <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-30 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 transition-all duration-300"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass border border-white/20 dark:border-gray-700/50">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer transition-all ${language === "en" ? "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 glow-border" : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/10 dark:hover:to-purple-900/10"}`}
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("fr")}
          className={`cursor-pointer transition-all ${language === "fr" ? "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 glow-border" : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/10 dark:hover:to-purple-900/10"}`}
        >
          🇫🇷 Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
