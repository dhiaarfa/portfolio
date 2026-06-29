"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { pickTestimonials, testimonialText, type TestimonialItem } from "@/lib/testimonials"

const accentStyles: Record<TestimonialItem["accent"], string> = {
  accent: "border-accent/40 bg-gradient-to-br from-accent/10 via-transparent to-emerald-500/5",
  amber: "border-amber-400/40 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5",
  blue: "border-blue-400/40 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/5",
  pink: "border-pink-400/40 bg-gradient-to-br from-pink-500/10 via-transparent to-rose-500/5",
}

const dotColors: Record<TestimonialItem["accent"], string> = {
  accent: "bg-accent",
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  pink: "bg-pink-500",
}

type Props = {
  className?: string
  tag?: TestimonialItem["tags"][number]
  ids?: string[]
  limit?: number
  showTicker?: boolean
  subtitleKey?: string
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function TestimonialsShowcase({
  className = "",
  tag,
  ids,
  limit,
  showTicker = true,
  subtitleKey = "testimonialsSubtitle",
}: Props) {
  const { language, t } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const reducedMotion = useReducedMotion() ?? false
  const items = useMemo(() => pickTestimonials({ tag, ids, limit }), [tag, ids, limit])
  const [active, setActive] = useState(0)

  const go = useCallback(
    (dir: 1 | -1) => {
      setActive((i) => (i + dir + items.length) % items.length)
    },
    [items.length]
  )

  useEffect(() => {
    if (reducedMotion || items.length <= 1) return
    const timer = setInterval(() => go(1), 7000)
    return () => clearInterval(timer)
  }, [go, reducedMotion, items.length])

  if (items.length === 0) return null

  const featured = items[active]!
  const featuredText = testimonialText(featured, lang)
  const rest = items.filter((_, i) => i !== active)

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--site-accent)_8%,transparent),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <p className="label">{t("testimonials")}</p>
          <h2 className="mt-2 font-serif text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-snug text-foreground">
            {t("testimonialsDesc")}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">{t(subtitleKey)}</p>
        </div>

        {/* Featured carousel */}
        <div className="relative mb-8 md:mb-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={featured.id}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-3xl border p-6 sm:p-8 md:p-10 ${accentStyles[featured.accent]}`}
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-accent/15 sm:h-14 sm:w-14" aria-hidden />
              <div className="mb-4 flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
                ))}
              </div>
              <blockquote className="relative z-10 max-w-3xl">
                <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg md:text-xl">
                  &ldquo;{featuredText.quote}&rdquo;
                </p>
              </blockquote>
              <footer className="relative z-10 mt-6 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white ${dotColors[featured.accent]}`}
                >
                  {initials(featured.name)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{featured.name}</p>
                  <p className="text-sm text-muted-foreground">{featuredText.role}</p>
                </div>
              </footer>
            </motion.article>
          </AnimatePresence>

          {items.length > 1 && (
            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex gap-2">
                {items.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? `w-6 ${dotColors[item.accent]}` : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-accent/40"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-accent/40"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Supporting cards — horizontal scroll on mobile */}
        {rest.length > 0 && (
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
            {rest.slice(0, 3).map((item, i) => {
              const text = testimonialText(item, lang)
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  onClick={() => setActive(items.findIndex((x) => x.id === item.id))}
                  className={`min-w-[260px] shrink-0 snap-start rounded-2xl border border-border bg-card p-5 text-left transition-all hover:border-accent/30 hover:shadow-md md:min-w-0`}
                >
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">&ldquo;{text.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-bold text-white ${dotColors[item.accent]}`}>
                      {initials(item.name)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{item.name}</p>
                      <p className="line-clamp-1 text-[11px] text-muted-foreground">{text.role}</p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        )}
      </div>

      {/* Marquee ticker */}
      {showTicker && (
        <div className="mt-10 border-y border-border bg-muted/30 py-4 dark:bg-slate-900/40">
          <div className="flex animate-ticker gap-12 whitespace-nowrap">
            {[...items, ...items].map((item, i) => {
              const text = testimonialText(item, lang)
              return (
                <div key={`${item.id}-${i}`} className="inline-flex items-center gap-3 shrink-0">
                  <span className={`h-2 w-2 rounded-full ${dotColors[item.accent]}`} />
                  <span className="text-sm text-muted-foreground italic max-w-md truncate">
                    &ldquo;{text.quote.slice(0, 90)}…&rdquo;
                  </span>
                  <span className="text-xs font-semibold text-foreground">— {item.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
