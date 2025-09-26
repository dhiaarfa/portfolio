"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative overflow-hidden group card-interactive glow-border">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-400" />
          <span className="sr-only">Toggle theme</span>
          <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-30 bg-gradient-to-r from-amber-400 via-orange-500 to-purple-500 transition-all duration-300"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass border border-white/20 dark:border-gray-700/50">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/20 dark:hover:to-orange-900/20">
          ☀️ Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20">
          🌙 Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer hover:bg-gradient-to-r hover:from-gray-100 hover:to-slate-100 dark:hover:from-gray-900/20 dark:hover:to-slate-900/20">
          💻 System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
