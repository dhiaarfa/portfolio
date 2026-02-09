"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Palette, Code2, BookOpen, Linkedin, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [language, setLanguage] = useState("en")
  const [mounted, setMounted] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem("language") || "en"
    setLanguage(savedLang)
  }, [])

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Left: Profile Circle with Name */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-fit">
          <div className="w-12 h-12 rounded-full bg-foreground/10 border-2 border-foreground/20 flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="w-full h-full relative">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-dhia-%282%29-ar6Th0hlC8l3coCAbXxlnP5fDflNkN.png" alt="Mohamed Dhia Arfa" fill className="object-cover" priority />
            </div>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-wide">Mohamed Dhia Arfa</span>
            <span className="text-xs text-muted-foreground">Designer • Trainer • Developer</span>
          </div>
        </Link>

        {/* Center: Navigation Links + Search */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link
            href="/"
            className="text-sm font-medium hover:text-[hsl(var(--zia-green))] transition-colors flex items-center gap-1.5"
          >
            <span className="text-xs">Home</span>
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-[hsl(var(--zia-green))] transition-colors flex items-center gap-1.5"
          >
            <span className="text-xs">About</span>
          </Link>
          <Link
            href="/designer"
            className="text-sm font-medium hover:text-[hsl(var(--zia-green))] transition-colors flex items-center gap-1.5"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="text-xs">Graphic Designer</span>
          </Link>
          <Link
            href="/trainer"
            className="text-sm font-medium hover:text-[hsl(var(--zia-green))] transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="text-xs">Trainer</span>
          </Link>
          <Link
            href="/developer"
            className="text-sm font-medium hover:text-[hsl(var(--zia-green))] transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="text-xs">Web Dev Enthusiast</span>
          </Link>
          <a
            href="https://www.linkedin.com/in/dhia-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[hsl(var(--zia-green))] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="text-xs">LinkedIn</span>
          </a>

          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center"
            >
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 text-sm bg-foreground/5 border border-foreground/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[hsl(var(--zia-green))] w-full"
                autoFocus
              />
            </motion.div>
          )}
        </div>

        {/* Right: Search + Language Toggle + Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors hidden md:flex"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-full hover:bg-foreground/10 active:bg-foreground/20 transition-all duration-200 cursor-pointer" aria-label="Change language">
                <Globe className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => handleLanguageChange("en")}
                className={language === "en" ? "bg-[hsl(var(--zia-green))]/10" : ""}
              >
                🇺🇸 English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("ar")}
                className={language === "ar" ? "bg-[hsl(var(--zia-green))]/10" : ""}
              >
                🇸🇦 العربية
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange("fr")}
                className={language === "fr" ? "bg-[hsl(var(--zia-green))]/10" : ""}
              >
                🇫🇷 Français
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


        </div>
      </div>
    </motion.nav>
  )
}
