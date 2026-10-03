"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Linkedin, Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { pickTestimonials, testimonialText, type TestimonialItem } from "@/lib/testimonials"

// Charte-graphique pass (Oct 2026): each testimonial used to get a
// different per-accent hue (amber/blue/pink) -- retired in favor of the
// site's single green gradient language. Keys kept (the data still tags
// each testimonial with one) but all four now resolve to the same family,
// varied only in strength so the cards don't look identically flat.
const accentStyles: Record<TestimonialItem["accent"], string> = {
  accent: "border-accent/40 bg-gradient-to-br from-accent/10 via-transparent to-emerald-500/5",
  amber: "border-accent/30 bg-gradient-to-br from-accent/8 via-transparent to-emerald-500/5",
  blue: "border-accent/35 bg-gradient-to-br from-accent/12 via-transparent to-emerald-500/5",
  pink: "border-accent/25 bg-gradient-to-br from-accent/6 via-transparent to-emerald-500/5",
}

const dotColors: Record<TestimonialItem["accent"], string> = {
  accent: "bg-accent",
  amber: "bg-accent",
  blue: "bg-accent",
  pink: "bg-accent",
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

/** Self-hosted photo when one has been added (lib/testimonials.ts `photo`),
 *  initials otherwise. */
function Avatar({ item, size }: { item: TestimonialItem; size: number }) {
  if (item.photo) {
    return (
      <Image
        src={item.photo}
        alt={item.name}
        width={size}
        height={size}
        className="shrink-0 rounded-full object-cover ring-2 ring-accent/30"
        style={{ width: size, height: size }}
      />
    )
  }
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ${dotColors[item.accent]}`}
      style={{ width: size, height: size, fontSize: size * 0.32 }}
      aria-hidden
    >
      {initials(item.name)}
    </div>
  )
}

export function TestimonialsShowcase({
  className = "",
  tag,
  ids,
  limit,
  showTicker = false,
  subtitleKey = "testimonialsSubtitle",
}: Props) {
  const { language, t } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const reducedMotion = useReducedMotionSafe()
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
              {/* Oct 2026: removed the five gold stars -- LinkedIn
                  recommendations carry no rating, so the stars implied
                  scores nobody gave. */}
              <blockquote className="relative z-10 max-w-3xl" lang={featuredText.translated ? lang : featured.originalLang}>
                <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg md:text-xl">
                  &ldquo;{featuredText.quote}&rdquo;
                </p>
              </blockquote>
              <footer className="relative z-10 mt-6 flex items-start gap-4">
                <Avatar item={featured} size={52} />
                <div className="min-w-0">
                  <p className="flex items-center gap-2 font-semibold text-foreground">
                    {featured.name}
                    <a
                      href={featured.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${featured.name} on LinkedIn`}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </p>
                  {/* Their own LinkedIn headline, then LinkedIn's description
                      of how they worked with Dhia. */}
                  <p className="text-sm text-muted-foreground line-clamp-1">{featuredText.role}</p>
                  <p className="mt-1 text-sm font-medium text-accent">{featuredText.relation}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t("testimonialSource")} · {featured.date.slice(0, 4)}
                    {featuredText.translated ? ` · ${t("testimonialTranslated")}` : ""}
                  </p>
                </div>
              </footer>
            </motion.article>
          </AnimatePresence>

          {items.length > 1 && (
            <div className="mt-4 flex items-center justify-between gap-3">
              {/* gap-4 (not the original gap-2) so the enlarged tap targets below
                  don't overlap their neighbors, see the button comment. */}
              <div className="flex gap-4">
                {items.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    // -m-2/p-2 expands the actual tap target to a full 24x24px
                    // (touch-target accessibility minimum, non-overlapping given the
                    // gap-4 above) without changing the visual dot size.
                    className="-m-2 flex items-center justify-center p-2"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        i === active ? `w-6 ${dotColors[item.accent]}` : "w-2 bg-muted-foreground/30"
                      }`}
                    />
                  </button>
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

        {/* Supporting cards, softened into the same accent-tinted, rounded
            language as the featured quote above (was a flat white box with
            a hard divider line) so the set reads as one smooth, cohesive
            family instead of a plain grid, per Dhia's feedback. */}
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
                  className={`group relative min-w-[260px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:min-w-0 ${accentStyles[item.accent]}`}
                >
                  <Quote className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 text-foreground opacity-[0.05] transition-transform duration-300 group-hover:scale-110" aria-hidden />
                  <p className="relative line-clamp-3 text-sm leading-relaxed text-foreground/90">&ldquo;{text.quote}&rdquo;</p>
                  <div className="relative mt-5 flex items-center gap-3">
                    <Avatar item={item} size={40} />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="truncate text-xs text-accent">{text.relation}</p>
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
        <div className="mt-10 border-y border-border bg-muted/30 py-4 dark:bg-card/40">
          <div className="flex animate-ticker gap-12 whitespace-nowrap">
            {[...items, ...items].map((item, i) => {
              const text = testimonialText(item, lang)
              return (
                <div key={`${item.id}-${i}`} className="inline-flex items-center gap-3 shrink-0">
                  <span className={`h-2 w-2 rounded-full ${dotColors[item.accent]}`} />
                  <span className="text-sm text-muted-foreground italic max-w-md truncate">
                    &ldquo;{text.quote.slice(0, 90)}…&rdquo;
                  </span>
                  <span className="text-xs font-semibold text-foreground">{item.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
