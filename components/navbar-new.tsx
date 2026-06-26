'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Calendar, Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { useLanguage } from './language-provider'
import { siteConfig } from '@/lib/site-config'
import { BehanceIcon } from '@/lib/brand-icon'

const navLinks = [
  { labelKey: 'home', href: '/' },
  { labelKey: 'about', href: '/about' },
  { labelKey: 'branding', href: '/designer' },
  { labelKey: 'training', href: '/trainer' },
  { labelKey: 'nav.webDev', href: '/developer' },
  { labelKey: 'nav.freebies', href: '/freebies' },
  { labelKey: 'nav.insights', href: '/insights' },
] as const

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background,padding,box-shadow] duration-200 ${
          scrolled
            ? 'py-2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
            : 'py-3 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-5 flex items-center justify-between gap-3">

          <motion.div whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.92, rotate: -4 }}>
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group" aria-label="Home">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-[color-mix(in_oklab,var(--site-accent)_35%,transparent)]">
                <Image src="/images/photos/nav-avatar.png" alt="Mohamed Dhia" width={36} height={36} className="object-cover w-full h-full" priority />
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="font-display font-bold text-sm text-slate-900 dark:text-white leading-none">Mohamed Dhia</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-300 tracking-widest uppercase font-medium mt-0.5">Designer · Trainer · Dev</p>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-0.5 bg-slate-100/90 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl px-1.5 py-1 border border-slate-200/60 dark:border-slate-700/60">
            {navLinks.map(link => {
              const active = pathname === link.href
              return (
                <Link key={link.href} href={link.href}
                  className="relative px-2 py-1.5 rounded-xl text-[12px] xl:text-[13px] font-medium whitespace-nowrap transition-colors duration-150 select-none">
                  {active && (
                    <span className="absolute inset-0 bg-white dark:bg-slate-700 rounded-xl shadow-sm" />
                  )}
                  <span className={`relative z-10 ${
                    active ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}>
                    {t(link.labelKey)}
                  </span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={siteConfig.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex w-9 h-9 rounded-full border border-[#1769FF]/30 bg-[#1769FF] hover:brightness-110 items-center justify-center transition-all ml-1 shrink-0"
              aria-label="Behance portfolio"
              title="Behance"
            >
              <BehanceIcon size={20} color="#ffffff" />
            </a>
            <ThemeToggle />
            <LanguageToggle />
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-green text-xs px-3.5 py-2 !rounded-xl !gap-1.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              {t("bookConsultation")}
            </a>

            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-950 flex flex-col pt-[68px] overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4 flex-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-semibold ${
                      active
                        ? 'bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400'
                        : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                )
              })}
              <a
                href={siteConfig.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-[#1769FF]"
              >
                <span className="w-8 h-8 rounded-lg bg-[#1769FF] flex items-center justify-center">
                  <BehanceIcon size={16} color="#ffffff" />
                </span>
                Behance
              </a>
            </nav>
            <div className="px-4 pb-6 pt-3 border-t border-border">
              <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer"
                 className="btn-green w-full justify-center py-3.5 !rounded-xl text-base">
                <Calendar className="w-5 h-5" /> {t("bookFreeConsultation")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
