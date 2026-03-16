'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'

const links = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Branding',   href: '/designer' },
  { label: 'Training',   href: '/trainer' },
  { label: 'Development', href: '/developer' },
  { label: 'Freebies',   href: '/freebies' },
  { label: 'Insights',   href: '/insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="relative w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 shadow-[0_2px_8px_color-mix(in_oklab,var(--site-accent)_40%,transparent)] group-hover:shadow-[0_4px_12px_color-mix(in_oklab,var(--site-accent)_50%,transparent)] transition-shadow ring-2 ring-[color-mix(in_oklab,var(--site-accent)_30%,transparent)]">
              <Image src="/images/photos/nav-avatar.png" alt="Mohamed Dhia" width={32} height={32} className="object-cover w-full h-full" priority />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-display font-bold text-sm text-slate-900 dark:text-white leading-none">Mohamed Dhia</p>
              <p className="text-[10px] text-slate-400 tracking-widest uppercase font-medium mt-0.5">Designer · Trainer · Dev</p>
            </div>
          </Link>

          {/* DESKTOP NAV PILL */}
          <nav className="hidden md:flex items-center gap-0.5 bg-slate-100/90 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl px-2 py-1.5 border border-slate-200/60 dark:border-slate-700/60">
            {links.map(link => {
              const active = pathname === link.href
              return (
                <Link key={link.href} href={link.href}
                  className="relative px-3.5 py-1.5 rounded-xl text-sm font-medium transition-colors duration-150 select-none">
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white dark:bg-slate-700 rounded-xl shadow-sm"
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-1.5 ${
                    active ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}>
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* RIGHT ACTIONS + MOBILE NAV */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
              <a
                href="https://calendly.com/benarfa367/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green text-xs px-4 py-2.5 !rounded-xl !gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Call
              </a>
            </div>

            {/* Compact mobile nav pill (always visible) */}
            <nav className="flex md:hidden items-center gap-1 bg-slate-100/90 dark:bg-slate-800/70 rounded-2xl px-2 py-1 border border-slate-200/60 dark:border-slate-700/60 overflow-x-auto max-w-[46vw] hide-scrollbar">
              {links.map(link => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`whitespace-nowrap px-2.5 py-1 rounded-xl text-[11px] font-medium ${
                      active
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-slate-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

            {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-950 flex flex-col pt-[72px] overflow-y-auto h-[100dvh]"
          >
            <nav className="flex flex-col gap-1 px-5 py-6 flex-1">
              {links.map((link, i) => {
                const active = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[17px] font-semibold transition-colors ${
                        active
                          ? 'bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
            <div className="px-5 pb-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <ThemeToggle /><LanguageToggle />
              </div>
              <a href="https://calendly.com/benarfa367/30min" target="_blank" rel="noopener noreferrer"
                 className="btn-green w-full justify-center py-4 !rounded-2xl text-[15px]">
                <Calendar className="w-5 h-5" /> Book a Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
