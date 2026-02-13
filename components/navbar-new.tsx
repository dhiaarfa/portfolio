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
              prefetch={true}
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

        {/* Right: Mobile quick access + Menu + Search + Language + Theme */}
        <div className="flex items-center gap-1.5 md:gap-3">
          {/* Mobile Quick Access Buttons - Designer, Trainer, Developer */}
          <div className="hidden sm:flex md:hidden items-center gap-1.5">
            <Link
              href="/designer"
              prefetch={true}
              className="p-2.5 min-w-[40px] min-h-[40px] rounded-lg bg-[hsl(var(--zia-green))]/10 hover:bg-[hsl(var(--zia-green))]/20 text-[hsl(var(--zia-green))] transition-all touch-manipulation flex items-center justify-center border border-[hsl(var(--zia-green))]/20"
              aria-label="Designer"
            >
              <Palette className="w-5 h-5" />
            </Link>
            <Link
              href="/trainer"
              prefetch={true}
              className="p-2.5 min-w-[40px] min-h-[40px] rounded-lg bg-[hsl(var(--zia-green))]/10 hover:bg-[hsl(var(--zia-green))]/20 text-[hsl(var(--zia-green))] transition-all touch-manipulation flex items-center justify-center border border-[hsl(var(--zia-green))]/20"
              aria-label="Trainer"
            >
              <BookOpen className="w-5 h-5" />
            </Link>
            <Link
              href="/developer"
              prefetch={true}
              className="p-2.5 min-w-[40px] min-h-[40px] rounded-lg bg-[hsl(var(--zia-green))]/10 hover:bg-[hsl(var(--zia-green))]/20 text-[hsl(var(--zia-green))] transition-all touch-manipulation flex items-center justify-center border border-[hsl(var(--zia-green))]/20"
              aria-label="Developer"
            >
              <Code2 className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Mobile Menu Button - More visible */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-3 min-w-[48px] min-h-[48px] rounded-lg transition-all md:hidden touch-manipulation flex items-center justify-center ${
              mobileMenuOpen 
                ? "bg-[hsl(var(--zia-green))] text-white shadow-lg" 
                : "bg-[hsl(var(--zia-green))]/10 hover:bg-[hsl(var(--zia-green))]/20 text-[hsl(var(--zia-green))] border-2 border-[hsl(var(--zia-green))]/30"
            }`}
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

      {/* Mobile menu dropdown - Enhanced visibility */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            style={{ top: "64px" }}
          />
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b-2 border-[hsl(var(--zia-green))]/30 shadow-2xl z-50"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Navigation</div>
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 min-h-[52px] rounded-xl text-base font-semibold bg-gray-50 dark:bg-gray-800 hover:bg-[hsl(var(--zia-green))]/10 hover:text-[hsl(var(--zia-green))] active:bg-[hsl(var(--zia-green))]/20 transition-all touch-manipulation border border-transparent hover:border-[hsl(var(--zia-green))]/20"
                >
                  {item.icon && <item.icon className="w-5 h-5 shrink-0 text-[hsl(var(--zia-green))]" />}
                  {t(item.labelKey)}
                </Link>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-4">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 min-h-[52px] rounded-xl text-base font-semibold bg-gray-50 dark:bg-gray-800 hover:bg-[hsl(var(--zia-green))]/10 hover:text-[hsl(var(--zia-green))] transition-all touch-manipulation"
                >
                  <Linkedin className="w-5 h-5 shrink-0 text-[hsl(var(--zia-green))]" />
                  {t("linkedin")}
                </a>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </motion.nav>
  )
}
