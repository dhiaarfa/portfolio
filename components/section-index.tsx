"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

type Item = { id: string; labelKey: string }

/** Slim sticky "On this page" index for the long track pages (inspiration
 *  brief, step 7, after brittanychiang.com). Only on very wide screens
 *  (>=1880px): html is 20px from 1024px up, so max-w-7xl is 1600px wide
 *  and the side margin only clears the ~120px index beyond that. And
 *  only once a listed section is on screen, so it never sits over the hero.
 *  Kept near the top of the viewport: the page-flow pills (>=1600px) sit at
 *  mid-height on the same edges. */
export default function SectionIndex({ items }: { items: Item[] }) {
  const { t } = useLanguage()
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el)
    if (!els.length) return
    const visible = new Map<string, number>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio)
          else visible.delete(e.target.id)
        }
        // The first listed section on screen wins, in page order.
        const first = items.find((i) => visible.has(i.id))
        setActive(first ? first.id : null)
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.01] }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [items])

  return (
    <nav
      aria-label={t("secIdxLabel")}
      className={`fixed start-5 top-28 z-30 hidden w-28 min-[1880px]:block transition-opacity duration-300 ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t("secIdxLabel")}</p>
      <ul className="space-y-0.5">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "true" : undefined}
              className={`block border-s-2 py-1 ps-3 text-xs transition-colors ${
                active === i.id
                  ? "border-accent font-semibold text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(i.labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
