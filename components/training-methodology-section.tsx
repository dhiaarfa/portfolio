'use client'

import { useState } from 'react'
import { Brain, Users, Target, Repeat, MessageSquare, Lightbulb, Search, Rocket, RefreshCw, LayoutGrid, Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

// ─── Data ─────────────────────────────────────────────────────────────────
// title/subtitle/description/quote are translation keys (see lib/translations.ts) --
// this whole section used to be hardcoded English with no useLanguage import at all.

// Charte-graphique pass (Oct 2026): each pillar used to get its own hue
// (amber/green/purple/blue/rose/teal) plus a faint full-bleed event photo
// behind the text -- both retired. Every pillar now shares one icon
// treatment (bg-accent-gradient) and one accent color; the photo watermark
// is gone (it read as clutter, not texture) in favor of the same
// dot-grid surface used across the rest of the site.
const pillars = [
  {
    number: '01',
    icon: Target,
    titleKey: 'pillarTnaTitle',
    subtitleKey: 'pillarTnaSubtitle',
    descKey: 'pillarTnaDesc',
    quoteKey: 'pillarTnaQuote',
  },
  {
    number: '02',
    icon: Repeat,
    titleKey: 'pillarKolbTitle',
    subtitleKey: 'pillarKolbSubtitle',
    descKey: 'pillarKolbDesc',
    quoteKey: 'pillarKolbQuote',
  },
  {
    number: '03',
    icon: Brain,
    titleKey: 'pillar4matTitle',
    subtitleKey: 'pillar4matSubtitle',
    descKey: 'pillar4matDesc',
    quoteKey: 'pillar4matQuote',
  },
  {
    number: '04',
    icon: Users,
    titleKey: 'pillarGroupTitle',
    subtitleKey: 'pillarGroupSubtitle',
    descKey: 'pillarGroupDesc',
    quoteKey: 'pillarGroupQuote',
  },
  {
    number: '05',
    icon: Lightbulb,
    titleKey: 'pillarTotTitle',
    subtitleKey: 'pillarTotSubtitle',
    descKey: 'pillarTotDesc',
    quoteKey: 'pillarTotQuote',
  },
  {
    number: '06',
    icon: MessageSquare,
    titleKey: 'pillarNfeTitle',
    subtitleKey: 'pillarNfeSubtitle',
    descKey: 'pillarNfeDesc',
    quoteKey: 'pillarNfeQuote',
  },
]

// Charte-graphique pass (Oct 2026): a different hue per framework card
// (green/purple/amber/blue) retired for the same reason as above -- one
// shared green accent, varied only by border opacity so the four cards
// still read as distinct tiles.
const frameworks = [
  {
    nameKey: 'frameworkKolbName',
    year: '1984',
    descKey: 'frameworkKolbDesc',
    color: 'border-accent/20 bg-accent-subtle',
    textColor: 'text-accent',
    Icon: RefreshCw,
  },
  {
    nameKey: 'framework4matName',
    year: '1979',
    descKey: 'framework4matDesc',
    color: 'border-accent/30 bg-accent-subtle',
    textColor: 'text-accent',
    Icon: LayoutGrid,
  },
  {
    nameKey: 'frameworkDeweyName',
    year: '1933',
    descKey: 'frameworkDeweyDesc',
    color: 'border-accent/15 bg-accent-subtle',
    textColor: 'text-accent',
    Icon: Lightbulb,
  },
  {
    nameKey: 'frameworkNfeName',
    year: 'Council of Europe',
    descKey: 'frameworkNfeDesc',
    color: 'border-accent/40 bg-accent-subtle',
    textColor: 'text-accent',
    Icon: Globe,
  },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function TrainingMethodologySection() {
  const { t } = useLanguage()
  // Each pillar card starts collapsed, showing only the title/subtitle and a
  // 2-line description clamp -- the full description + pull quote reveal
  // when the visitor clicks the arrow. Keeps the section from reading as a
  // wall of text while still making the full methodology available.
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({})
  const toggle = (key: string) => setOpenCards((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <section className="py-20 px-6 bg-white dark:bg-background">
      <div className="max-w-5xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            {t("methodologyKicker")}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {t("methodologyHeading1")}<br />
                <span className="text-accent">{t("methodologyHeading2")}</span>
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed lg:text-right">
              {t("methodologyIntro")}
            </p>
          </div>
        </div>

        {/* ── 6 Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            const isOpen = !!openCards[pillar.number]
            return (
              <div
                key={pillar.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 dark:border-border bg-slate-50/50 dark:bg-card/50 p-7 hover:shadow-lg transition-all duration-300"
              >
                {/* Dot-grid texture, the same hero-section pattern used
                    site-wide, in place of the old faint per-card event
                    photo (which read as clutter, not texture). */}
                <div
                  className="absolute inset-0 bg-dot-grid opacity-[0.5] dark:opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
                  aria-hidden
                />

                {/* Header row */}
                <div className="relative flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent-subtle text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold tabular-nums text-accent">
                        {pillar.number}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">·</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
                        {t(pillar.subtitleKey)}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {t(pillar.titleKey)}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggle(pillar.number)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? t("pillarShowLess") : t("pillarReadMore")}
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 dark:border-border text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-muted transition-colors"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Description: 2-line teaser, full text + quote on expand */}
                <p
                  className={`relative text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${
                    isOpen ? "mb-4" : "mb-0 line-clamp-2"
                  }`}
                >
                  {t(pillar.descKey)}
                </p>

                <div
                  className={`relative overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs font-medium italic border-l-2 pl-3 text-accent border-current opacity-75">
                    {t(pillar.quoteKey)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── KOLB CYCLE VISUAL ── */}
        <div className="my-16 bg-slate-900 rounded-3xl p-8 sm:p-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 text-center">
            {t("kolbDiagramKicker")}
          </p>
          <h3 className="text-xl font-bold text-white text-center mb-10">
            {t("kolbDiagramHeading")}
          </h3>

          {/* Charte-graphique pass (Oct 2026): the 4 phases used to cycle
              green/blue/purple/amber -- now a genuine gradient of green
              across the 4 steps (sourced from the same hero-photo range as
              .bg-accent-gradient/.gradient-accent), so the sequence still
              reads left-to-right at a glance without reviving the rainbow. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                phaseKey: 'kolbPhase1Title',
                chipBg: 'bg-[#0b4a12]',
                borderColor: 'border-accent/20',
                Icon: Target,
                descKey: 'kolbPhase1Desc',
                exampleKey: 'kolbPhase1Example',
              },
              {
                step: '02',
                phaseKey: 'kolbPhase2Title',
                chipBg: 'bg-[#155611]',
                borderColor: 'border-accent/30',
                Icon: Search,
                descKey: 'kolbPhase2Desc',
                exampleKey: 'kolbPhase2Example',
              },
              {
                step: '03',
                phaseKey: 'kolbPhase3Title',
                chipBg: 'bg-[#1f6411]',
                borderColor: 'border-accent/40',
                Icon: Lightbulb,
                descKey: 'kolbPhase3Desc',
                exampleKey: 'kolbPhase3Example',
              },
              {
                step: '04',
                phaseKey: 'kolbPhase4Title',
                chipBg: 'bg-[#297210]',
                borderColor: 'border-accent/50',
                Icon: Rocket,
                descKey: 'kolbPhase4Desc',
                exampleKey: 'kolbPhase4Example',
              },
            ].map((phase, i) => (
              <div
                key={phase.step}
                className={`relative rounded-2xl border ${phase.borderColor} bg-slate-800/60 p-5`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black text-[#8ed80c] opacity-30">{phase.step}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                    <phase.Icon className="w-5 h-5" />
                  </span>
                </div>

                <div className={`inline-block px-2.5 py-1 rounded-lg ${phase.chipBg} mb-3`}>
                  <p className="text-xs font-bold text-white">{t(phase.phaseKey)}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">{t(phase.descKey)}</p>

                <div className="border-t border-slate-700 pt-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t("kolbRealExampleLabel")}</p>
                  <p className="text-xs text-slate-400 italic">{t(phase.exampleKey)}</p>
                </div>

                {i < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-slate-300 text-xs">→</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <span className="text-xs text-slate-500 italic">
              ↺ {t("kolbCycleRepeatsNote")}
            </span>
          </div>
        </div>

        {/* ── Theoretical Frameworks ── */}
        <div>
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">
              {t("foundationsKicker")}
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t("foundationsHeading")}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-lg mx-auto">
              {t("foundationsIntro")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {frameworks.map((fw) => (
              <div
                key={fw.nameKey}
                className={`rounded-2xl border p-5 h-full hover:-translate-y-0.5 transition-transform ${fw.color}`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-accent-subtle text-accent">
                  <fw.Icon className="w-5 h-5" />
                </div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${fw.textColor}`}>
                  {fw.year}
                </p>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-2 whitespace-pre-line">
                  {t(fw.nameKey)}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t(fw.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
