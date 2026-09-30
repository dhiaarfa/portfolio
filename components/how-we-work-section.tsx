"use client"

import { PhoneCall, FileCheck2, PackageCheck, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"

// Implementation-prompts pass (Sep 2026), P4 "How we work (3 steps) -- once
// on Home": first-time visitors (NGOs, recruiters, small-business clients)
// land on Home with no idea what actually happens after they click "Book a
// free call" -- this closes that gap with the exact 3-step process from the
// prompt brief, no invented details. Sits right after the expertise cards,
// one CTA at the end so it doesn't add a second competing action to the
// hero (P1 already settled that).
const STEPS = [
  { Icon: PhoneCall, titleKey: "homeHowWeWorkStep1Title", descKey: "homeHowWeWorkStep1Desc" },
  { Icon: FileCheck2, titleKey: "homeHowWeWorkStep2Title", descKey: "homeHowWeWorkStep2Desc" },
  { Icon: PackageCheck, titleKey: "homeHowWeWorkStep3Title", descKey: "homeHowWeWorkStep3Desc" },
] as const

export default function HowWeWorkSection() {
  const { t } = useLanguage()

  return (
    <section className="section-compact px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent text-center mb-1">
          {t("homeHowWeWorkLabel")}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
          {t("homeHowWeWorkTitle")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {STEPS.map(({ Icon, titleKey, descKey }, i) => (
            <div
              key={titleKey}
              className="relative rounded-2xl border border-border bg-card p-6 text-center"
            >
              <span className="absolute left-4 top-4 text-xs font-bold text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent-subtle">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{t(titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(descKey)}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-flex"
          >
            {t("bookFreeConsultation")}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  )
}
