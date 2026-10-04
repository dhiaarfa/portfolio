"use client"

import { LayoutGrid, Palette, GraduationCap, Code2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { FadeUp } from "@/components/ui/motion"
import type { Pillar } from "@/lib/which-door"

const OPTIONS: { key: Pillar; icon: typeof LayoutGrid; labelKey: string }[] = [
  { key: null, icon: LayoutGrid, labelKey: "whichDoorAll" },
  { key: "designer", icon: Palette, labelKey: "whichDoorDesigner" },
  { key: "trainer", icon: GraduationCap, labelKey: "whichDoorTrainer" },
  { key: "developer", icon: Code2, labelKey: "whichDoorDeveloper" },
]

type Props = {
  active: Pillar
  onChange: (pillar: Pillar) => void
}

/** Checklist item 6.13 ("which door do you need?" router) -- an extension
 *  of the existing "My Expertise" cards (which stay exactly as-is, as
 *  direct navigation) rather than a replacement: this is a lower-key,
 *  opt-in filter further down the page that narrows Service Packages,
 *  Testimonials, and the Insights/Freebies strip to one pillar at a time.
 *  Defaults to "Everything" (pillar = null), so a visitor who never
 *  touches it sees the page completely unchanged. */
export default function WhichDoorSelector({ active, onChange }: Props) {
  const { t } = useLanguage()

  return (
    <section
      // Same tint as the sections above (Journey) and below (Service
      // Packages), with no seam line, so the three read as one continuous
      // band instead of a strip of plain page background with a hard edge
      // on each side (Dhia, Oct 2026).
      data-seamless
      className="px-4 md:px-6 pt-16 pb-6 bg-section-tint"
      aria-label={t("whichDoorHeading")}
    >
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-2">
            {t("whichDoorEyebrow")}
          </p>
          <h2 className="font-serif text-[clamp(20px,2.6vw,28px)] text-slate-900 dark:text-white mb-6">
            {t("whichDoorHeading")}
          </h2>
          <div
            role="group"
            aria-label={t("whichDoorHeading")}
            className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-muted/30 border border-slate-200 dark:border-border"
          >
            {OPTIONS.map((opt) => {
              const isActive = active === opt.key
              return (
                <button
                  key={opt.labelKey}
                  type="button"
                  onClick={() => onChange(opt.key)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-white/5"
                  }`}
                >
                  <opt.icon className="w-4 h-4" aria-hidden />
                  {t(opt.labelKey)}
                </button>
              )
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
