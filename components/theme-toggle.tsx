"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative overflow-hidden group bg-transparent"
      onClick={handleClick}
      aria-label="Toggle light and dark mode"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-20 bg-gradient-to-r from-[hsl(var(--zia-green))] to-purple-500 transition-opacity" />
    </Button>
  )
}
