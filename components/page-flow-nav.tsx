"use client"

import { useEffect, useState } from "react"
import { Link } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { navNeighbors } from "@/lib/site-nav-flow"
import { useLanguage } from "@/components/language-provider"

export default function PageFlowNav() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { prev, next } = navNeighbors(pathname ?? "/")

  // This nav is fixed at the viewport's vertical center regardless of what
  // page content happens to sit there. A real screenshot audit caught it
  // sitting directly on top of body copy (the About page's location badge,
  // the Branding & Design intro paragraph) whenever a page's hero content
  // reached the middle of the viewport — which most heroes do by design.
  // Rather than tune a magic offset per page, it now only appears once
  // you've scrolled past a typical hero, where there's reliably empty
  // margin beside the content on both sides.
  const [pastHero, setPastHero] = useState(false)
  useEffect(() => {
    setPastHero(false)
    const onScroll = () => setPastHero(window.scrollY > 420)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  if (!prev && !next) return null
  if (!pastHero) return null

  const label = (item: NonNullable<typeof prev>) =>
    language === "fr" ? item.labelFr : language === "ar" ? item.labelAr : item.label

  // Icon-only by default (the label only appears on hover, in a popover that
  // pushes outward rather than staying inline) — the earlier version kept an
  // always-visible text label next to the icon, which made the collision
  // above worse by widening the hit area considerably.
  const pillClass =
    "fixed top-1/2 z-40 -translate-y-1/2 group grid h-11 w-11 place-items-center rounded-full border border-border bg-background/95 backdrop-blur-sm shadow-lg ring-1 ring-black/5 dark:ring-white/10 transition-all animate-in fade-in duration-300 hover:border-accent/40 hover:shadow-xl"

  return (
    <>
      {prev && (
        <Link
          href={prev.path}
          className={`${pillClass} left-3 md:left-5`}
          aria-label={`Previous: ${label(prev)}`}
          title={label(prev)}
        >
          <ChevronLeft className="h-5 w-5 text-foreground group-hover:text-accent transition-colors rtl:rotate-180" />
          <span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1.5 text-xs font-semibold text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
            {label(prev)}
          </span>
        </Link>
      )}
      {next && (
        <Link
          href={next.path}
          className={`${pillClass} right-3 md:right-5`}
          aria-label={`Next: ${label(next)}`}
          title={label(next)}
        >
          <ChevronRight className="h-5 w-5 text-foreground group-hover:text-accent transition-colors rtl:rotate-180" />
          <span className="pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1.5 text-xs font-semibold text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
            {label(next)}
          </span>
        </Link>
      )}
    </>
  )
}
