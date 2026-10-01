"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle({ forceLight = false }: { forceLight?: boolean }) {
  const { setTheme, resolvedTheme } = useTheme()

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle light and dark mode"
      // Matches the bg-slate-100/90 + ring-1 treatment used by every other
      // icon-only navbar control (Behance, LinkedIn, WhatsApp, AI assistant,
      // language toggle), this used to be a bespoke white-bg/border style,
      // the one icon button in the cluster that looked visually unrelated
      // to the rest.
      // forceLight (Home's always-dark hero, unscrolled): swap the pill for
      // the same translucent-white glass treatment the other nav controls
      // use there, instead of the light-gray bg-slate-100/90 that would
      // otherwise look like a mismatched light-mode leftover on a dark photo.
      className={
        forceLight
          ? "relative w-9 h-9 rounded-full bg-white/10 ring-1 ring-white/15 hover:scale-105 flex items-center justify-center overflow-hidden transition-all duration-200"
          : "relative w-9 h-9 rounded-full bg-slate-100/90 dark:bg-muted/70 ring-1 ring-black/10 dark:ring-white/10 hover:scale-105 flex items-center justify-center overflow-hidden transition-all duration-200"
      }
    >
      <Sun className={`absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${forceLight ? "text-white/70" : "text-slate-700"}`} />
      <Moon className={`absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${forceLight ? "text-white/70" : "text-slate-300 dark:text-[#F5F5F5]"}`} />
    </button>
  )
}
