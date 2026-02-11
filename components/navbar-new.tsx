"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Palette, Code2, BookOpen, Linkedin, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"

const navLinks = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/designer", labelKey: "design", icon: Palette },
  { href: "/trainer", labelKey: "training", icon: BookOpen },
  { href: "/developer", labelKey: "webDevelopment", icon: Code2 },
] as const

const greenPortraitSrc = "/images/photo-dhia.png"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const profileSrc = greenPortraitSrc

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Profile */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity min-w-fit shrink-0">
          <div className="w-12 h-12 rounded-full bg-foreground/10 border-2 border-foreground/20 flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="w-full h-full relative">
              <Image src={profileSrc} alt="Mohamed Dhia Arfa" fill className="object-cover" priority sizes="48px" />
            </div>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-wide">Mohamed Dhia Arfa</span>
            <span className="text-xs text-muted-foreground">Designer • Trainer • Developer</span>
          </div>
        </Link>

        {/* Center: Navigation Links + LinkedIn / Search */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-[hsl(var(--zia-green))] transition-colors flex items-center gap-1.5"
            >
              {item.icon && <item.icon className="w-3.5 h-3.5" />}
              <span className="text-xs">{t(item.labelKey)}</span>
            </Link>
          ))}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[hsl(var(--zia-green))] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="text-xs">{t("linkedin")}</span>
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

        {/* Right: Mobile menu + Search + Language + Theme */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 min-w-[44px] min-h-[44px] rounded-lg hover:bg-foreground/10 transition-colors md:hidden touch-manipulation flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors hidden md:flex"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-3 px-4 min-h-[44px] rounded-lg text-sm font-medium hover:bg-foreground/10 hover:text-[hsl(var(--zia-green))] transition-colors touch-manipulation active:bg-foreground/15"
              >
                {item.icon && <item.icon className="w-4 h-4 shrink-0" />}
                {t(item.labelKey)}
              </Link>
            ))}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-3 px-4 min-h-[44px] rounded-lg text-sm font-medium hover:bg-foreground/10 hover:text-[hsl(var(--zia-green))] transition-colors touch-manipulation"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              {t("linkedin")}
            </a>
          </nav>
        </div>
      )}
    </motion.nav>
  )
}
