"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle light and dark mode"
      className="relative w-9 h-9 rounded-full border border-slate-200 dark:border-[#1F1F1F] bg-white dark:bg-[#111111] hover:border-accent/50 flex items-center justify-center overflow-hidden transition-all duration-200"
    >
      <Sun className="absolute h-4 w-4 text-slate-700 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 text-slate-300 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-[#F5F5F5]" />
    </button>
  )
}
