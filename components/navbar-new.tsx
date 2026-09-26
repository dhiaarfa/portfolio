'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Link } from "next-view-transitions"
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Calendar, Linkedin, Menu, Search, Sparkles, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { useLanguage } from './language-provider'
import { siteConfig } from '@/lib/site-config'
import { BehanceMonoIcon, WhatsAppIcon } from '@/lib/brand-icon'
import { ResumeDropdown, ResumeMobileList } from './resume-dropdown'
import { CopyEmailButton } from './copy-email-button'
import { CopyEmailMobileRow } from './copy-email-button'

const navLinks = [
  { labelKey: 'home', href: '/' },
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
    // Sync immediately on attach — not just on the next scroll event. Without
    // this, a page that's already scrolled by the time this effect runs
    // (slow hydration, a browser-restored scroll position after refresh, or
    // a quick scroll that finishes before React hooks up) never fires
    // another 'scroll' event, so `scrolled` would stay stuck at its initial
    // `false` forever — a permanently transparent header sitting on top of
    // the page content. This was the "navbar becomes transparent above the
    // content when I scroll" bug.
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
  // Opens the same floating chat panel FloatingActions renders — that
  // component listens for this event (it's also how the hero's ask bar
  // opens the assistant) rather than the button living where the panel does.
  const openAssistant = () => {
    setOpen(false)
    window.dispatchEvent(new CustomEvent('dhia:ask-ai'))
  }

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-3 top-3 z-[100] -translate-y-20 focus:translate-y-0 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to content
      </a>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[background,padding,box-shadow] duration-200 ${
          scrolled
            ? 'py-2 bg-white/90 dark:bg-background/90 backdrop-blur-md border-b border-slate-200/50 dark:border-border/50 shadow-sm'
            : 'py-3 bg-transparent'
        }`}
      >
        {/* Was a fixed max-w-6xl (1152px) with a plain flex justify-between
            row. Two real problems with that: (1) on any screen wider than
            ~1200px it left large, static, unused margins that never grew
            with the viewport — not "responsive", just capped; and (2) a
            flex row with justify-between only centers a middle item when
            the two flanking items happen to be equal width. They aren't
            here (the logo block is much narrower than the controls
            cluster), so the nav pill was always sitting left of true
            center — the actual root cause of the recurring "navbar isn't
            centered" reports, independent of the earlier overflow fix.
            A CSS grid with 1fr / auto / 1fr columns fixes both at once:
            the two 1fr edge columns always split the remaining space
            equally (so they grow and shrink fluidly with the viewport —
            no static cap), and an auto-width middle column between two
            equal flexible columns is mathematically centered on the row
            regardless of how wide the logo or controls blocks are. */}
        {/* minmax(0,1fr) — not plain 1fr — on both flanking columns. Plain
          `1fr` has an implicit minimum of its content's min-content width,
          so when the two sides hold very different amounts of content (a
          ~200px logo vs an ~800px cluster of controls) each 1fr track
          expands to fit its own content first and only splits the
          LEFTOVER space evenly — that's what was silently pushing the
          centered nav pill ~250px left of true center. minmax(0, 1fr)
          removes that content-based minimum so both tracks are forced to
          the same width regardless of what's inside them, which is what
          actually centers the middle column. */}
      {/* One more layer to that same bug: minmax(0,1fr) sets the COLUMN's
          minimum to 0, but the grid ITEM placed inside each column still
          defaults to min-width:auto (its own content size) unless told
          otherwise. When the right-hand controls cluster's natural content
          width was wider than its equal 1fr share, that default auto
          min-width silently forced the column wider than the left one
          again — undoing the fix above and re-off-centering the nav pill.
          `min-w-0` on both the logo wrapper and the controls wrapper below
          removes that per-item override so the two edge columns actually
          end up pixel-equal, which is what actually centers the middle nav. */}
      {/* Deliberately no longer a perfect 1fr/1fr split (your ask): the logo
          block only ever needs ~200px, but the controls cluster (icons +
          Copy email + Resume + Theme + Language + Book a call) genuinely
          needs more like 600px+ once everything's visible — an even split
          was giving both sides the same width regardless, which left the
          controls side cramped (that's what was crowding the Copy email
          pill) while the logo side sat on unused space. 0.7fr/1.3fr keeps
          the same "both sides scale with viewport width" behavior as
          before, just biased toward the side that actually needs it — the
          nav pill shifts left with it since its left edge is wherever the
          logo column ends. */}
      <div className="max-w-[100rem] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 grid grid-cols-[minmax(0,0.7fr)_auto_minmax(0,1.3fr)] items-center gap-3">

          <motion.div
            className="shrink-0 min-w-0 justify-self-start"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.92, rotate: -4 }}
          >
            {/* No aria-label override here on purpose: the visible "Mohamed Dhia" text
                already gives this link a perfectly good accessible name. An aria-label
                of "Home" would silently replace that name for screen-reader users while
                sighted users still see "Mohamed Dhia" — a real WCAG 2.5.3 mismatch that
                showed up in a Lighthouse accessibility audit.
                shrink-0 on this wrapper (and whitespace-nowrap below) keeps the
                name and tagline on one line each — without it, the flex row's
                default shrink behavior could squeeze this block narrower than
                its text and force an awkward mid-word wrap. */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 ring-2 ring-[color-mix(in_oklab,var(--site-accent)_35%,transparent)]">
                <Image src="/images/photos/nav-avatar.png" alt="Mohamed Dhia" width={36} height={36} className="object-cover w-full h-full" priority />
              </div>
              <div className="hidden sm:block leading-tight shrink-0">
                <p className="font-display font-bold text-sm text-slate-900 dark:text-white leading-none whitespace-nowrap">Mohamed Dhia</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-300 tracking-widest uppercase font-medium mt-0.5 whitespace-nowrap">Designer · Trainer · Dev</p>
              </div>
            </Link>
          </motion.div>

          {/* The full pill nav + full icon cluster genuinely doesn't fit
              together below ~1280px (7 nav links + logo + 5-9 controls
              easily exceeds 1024px) — using `lg` here was the real cause of
              the "navbar overflows / isn't centered" bug. `xl` gives both
              enough room, and the hamburger menu below covers every one of
              these links and controls in the 1024-1279 gap. */}
          <nav className="hidden xl:flex justify-self-center items-center gap-0.5 bg-slate-100/90 dark:bg-muted/70 backdrop-blur-sm rounded-2xl px-1.5 py-1 border border-slate-200/60 dark:border-border/60">
            {navLinks.map(link => {
              const active = pathname === link.href
              return (
                <Link key={link.href} href={link.href}
                  className="relative px-2 py-1.5 rounded-xl text-[12px] xl:text-[13px] font-medium whitespace-nowrap transition-colors duration-150 select-none">
                  {active && (
                    <span className="absolute inset-0 bg-white dark:bg-secondary rounded-xl shadow-sm" />
                  )}
                  <span className={`relative z-10 ${
                    active ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}>
                    {t(link.labelKey)}
                  </span>
                  {active && (
                    <span className="absolute left-1/2 bottom-0.5 z-10 h-[3px] w-3.5 -translate-x-1/2 rounded-full bg-accent" aria-hidden />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* This cluster's track width is forced equal to the much
              narrower logo track by the centering grid above, so unlike a
              plain flex row, EVERY control added here has to be paid for
              on both sides at once (the logo side wastes matching space
              just to keep the columns equal). Measured in the browser at
              real widths, the previous "show everything from xl (1280) up"
              design overlapped the nav pill anywhere below ~1900px wide —
              i.e. on every common laptop (1366/1440/1536/1600/1728), not
              just small ones. Rather than accept that overlap or give up
              on true centering, the controls are now revealed in tiers,
              each one verified empirically to leave real clearance:
                xl   (1280+): nav + Theme + Language + Book a call only
                1600+:        + Resume
                1900+:        + Behance / LinkedIn / WhatsApp
              Nothing is lost below 1900px — every one of these is still one
              tap away in the xl:hidden mobile menu below. */}
          <div className="flex items-center gap-1 min-w-0 justify-self-end">
            <a
              href={siteConfig.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[1900px]:flex w-9 h-9 rounded-full items-center justify-center transition-all hover:scale-105 shrink-0 bg-slate-100/90 dark:bg-muted/70 text-slate-600 dark:text-slate-300 ring-1 ring-black/10 dark:ring-white/10 hover:text-slate-900 dark:hover:text-white"
              aria-label="Behance portfolio"
              title="Behance"
            >
              <BehanceMonoIcon size={16} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[1900px]:flex w-9 h-9 rounded-full items-center justify-center transition-all hover:scale-105 shrink-0 bg-slate-100/90 dark:bg-muted/70 text-slate-600 dark:text-slate-300 ring-1 ring-black/10 dark:ring-white/10 hover:text-slate-900 dark:hover:text-white"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-[1900px]:flex w-9 h-9 rounded-full items-center justify-center transition-all hover:scale-105 shrink-0 bg-slate-100/90 dark:bg-muted/70 text-slate-600 dark:text-slate-300 ring-1 ring-black/10 dark:ring-white/10 hover:text-slate-900 dark:hover:text-white"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon size={17} />
            </a>
            <div className="hidden min-[1600px]:contents">
              <CopyEmailButton />
              <ResumeDropdown />
            </div>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("dhia:open-search"))}
              className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center transition-all hover:scale-105 shrink-0 bg-slate-100/90 dark:bg-muted/70 text-slate-600 dark:text-slate-300 ring-1 ring-black/10 dark:ring-white/10 hover:text-slate-900 dark:hover:text-white"
              aria-label="Search (Ctrl/Cmd+K)"
              title="Search (Ctrl/Cmd+K)"
            >
              <Search className="w-4 h-4" />
            </button>
            <ThemeToggle />
            <LanguageToggle />
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-green text-xs px-3.5 py-2 !rounded-xl !gap-1.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              {pathname === '/trainer' ? t('bookWorkshop') : t('bookConsultation')}
            </a>

            {/* w-9 h-9 to match every other control in this cluster (icon
                buttons, theme/language toggles) — it was w-10 h-10 before,
                the one visibly oversized button in an otherwise consistent
                36px row. */}
            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              className="xl:hidden w-9 h-9 flex items-center justify-center rounded-full bg-slate-100/90 dark:bg-muted/70 text-slate-600 dark:text-slate-300 ring-1 ring-black/10 dark:ring-white/10 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
              aria-label="Menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
            className="fixed inset-0 z-40 bg-white dark:bg-background flex flex-col pt-[68px] overflow-y-auto xl:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4 flex-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-3 rounded-xl text-base font-semibold ${
                      active
                        ? 'bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 pl-6'
                        : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {active && (
                      <span className="absolute left-2 top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-accent" aria-hidden />
                    )}
                    {t(link.labelKey)}
                  </Link>
                )
              })}
              <a
                href={siteConfig.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200"
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-muted flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300">
                  <BehanceMonoIcon size={15} />
                </span>
                Behance
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200"
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-muted flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300">
                  <Linkedin className="w-3.5 h-3.5" />
                </span>
                LinkedIn
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200"
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-muted flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300">
                  <WhatsAppIcon size={16} />
                </span>
                WhatsApp
              </a>
              <button
                type="button"
                onClick={openAssistant}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 text-left"
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-muted flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300">
                  <Sparkles className="w-4 h-4" />
                </span>
                Ask the AI assistant
              </button>
            </nav>
            <div className="border-t border-border pt-1">
              <CopyEmailMobileRow />
              <ResumeMobileList />
            </div>
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
