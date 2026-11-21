"use client"

import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"

// Nov 2026 audit: was three icon-topped cards numbered 01/02/03, the most
// recognisable template block on the page. Same three steps, now a plain
// ordered list: the content is a sequence, so it reads as one.
const STEPS = [
  { titleKey: "homeHowWeWorkStep1Title", descKey: "homeHowWeWorkStep1Desc" },
  { titleKey: "homeHowWeWorkStep2Title", descKey: "homeHowWeWorkStep2Desc" },
  { titleKey: "homeHowWeWorkStep3Title", descKey: "homeHowWeWorkStep3Desc" },
] as const

export default function HowWeWorkSection() {
  const { t } = useLanguage()

  return (
    <section className="section-compact px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] gap-x-10 gap-y-6">
        <div>
          <h2 className="font-display text-[clamp(24px,3vw,34px)] leading-tight text-slate-900 dark:text-white mb-5">
            {t("homeHowWeWorkTitle")}
          </h2>
          <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex">
            {t("bookFreeConsultation")}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>
        <ol className="space-y-4">
          {STEPS.map(({ titleKey, descKey }, i) => (
            <li key={titleKey} className="tactile flex gap-4 items-start p-4 bg-card">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-[var(--tactile-ink)] bg-[var(--block-lime)] font-display text-lg text-[#14140f] tabular-nums" aria-hidden>
                {i + 1}
              </span>
              <span>
                <span className="block font-semibold text-foreground">{t(titleKey)}</span>
                <span className="block text-sm text-muted-foreground">{t(descKey)}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
