"use client"

import { useLanguage } from "@/components/language-provider"
import { pickTestimonials, testimonialText } from "@/lib/testimonials"

// Nov 2026: three quotes as friendly, tilted note cards in the same three
// colour blocks as the doors, each with a big quote mark and a face-less
// avatar (initial) so it reads as a person talking, not a legal footnote.
const BLOCKS = ["block-sand", "block-sky", "block-lime"]
const TILT = ["tilt-l", "tilt-r", "tilt-l"]

export default function HomeQuotes({ ids }: { ids: string[] }) {
  const { t, language } = useLanguage()
  const items = pickTestimonials({ ids })
  if (!items.length) return null
  return (
    <section id="testimonials" className="section-compact px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-[clamp(28px,4vw,46px)] leading-tight text-slate-900 dark:text-white mb-2">
          {t("testimonialsDesc")}
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl text-base lg:text-lg">{t("testimonialsSubtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7">
          {items.map((item, i) => {
            const text = testimonialText(item, language)
            return (
              <figure key={item.id} className={`tactile tactile-hover flex flex-col p-6 ${BLOCKS[i % 3]} ${TILT[i % 3]}`}>
                <span aria-hidden className="font-display text-6xl leading-none h-8 select-none" >&ldquo;</span>
                <blockquote className="mt-2 text-[15px] leading-relaxed flex-1">{text.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-sm">
                  <span aria-hidden className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-current font-display text-lg">
                    {text.name.trim().charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold">{text.name}</span>
                    <span className="muted block">{text.relation}</span>
                    <span className="muted block text-xs">
                      {t("testimonialSource")} &middot; {item.date.slice(0, 4)}
                      {text.translated ? ` · ${t("testimonialTranslated")}` : ""}
                    </span>
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
