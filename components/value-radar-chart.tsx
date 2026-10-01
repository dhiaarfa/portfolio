'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Palette, Handshake, Brain, Globe, Sparkles, Puzzle, Drama, Trophy, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

// Self-assessed strengths, presented as a single self-rating, not a comparison against
// an undisclosed "baseline" (the earlier "Partner" series had no real source behind it).
// Was a radar/hexagon chart (recharts), replaced with a set of animated skill
// bars: smoother (no hard polygon edges), lighter (no recharts bundle for
// this section), and reads as a more modern/Gen-Z "stat bar" pattern
// (Spotify Wrapped / Duolingo style) instead of a boardroom radar chart.
// Icons are Lucide (not emoji) so this section reads as part of the same
// icon system as the nav, footer, and every other section on the site.
// No numeric self-ratings (was "Communication 95%", etc.) -- per Dhia's
// feedback the exact percentages read as arbitrary/annoying "chiffres" for
// a self-assessed soft-skill list. A plain labeled chip grid states the
// strengths without pretending they're precisely measured.
// subjectKey points into translations.ts -- these were hardcoded English
// labels and never translated, so they stayed in English even in French/
// Arabic mode while the surrounding section copy was already localized.
const traits: { Icon: LucideIcon; subjectKey: string }[] = [
  { Icon: MessageCircle, subjectKey: 'radarCommunication' },
  { Icon: Palette, subjectKey: 'radarCreativity' },
  { Icon: Handshake, subjectKey: 'radarReliability' },
  { Icon: Brain, subjectKey: 'radarMethodology' },
  { Icon: Globe, subjectKey: 'radarMultilingual' },
  { Icon: Sparkles, subjectKey: 'radarCulturalFit' },
]

const valueProps: { Icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { Icon: Globe, titleKey: 'radarValue1Title', descKey: 'radarValue1Desc' },
  { Icon: Puzzle, titleKey: 'radarValue2Title', descKey: 'radarValue2Desc' },
  { Icon: Drama, titleKey: 'radarValue3Title', descKey: 'radarValue3Desc' },
  { Icon: Trophy, titleKey: 'radarValue4Title', descKey: 'radarValue4Desc' },
]

export default function ValueRadarChart() {
  const { t } = useLanguage()
  const barsRef = useRef<HTMLDivElement>(null)
  // Bars fill in on scroll rather than on mount, gated behind useInView so
  // the fill animation actually reads as a reveal instead of something that
  // already finished before the visitor scrolls this far.
  const barsInView = useInView(barsRef, { once: true, margin: '-80px' })

  return (
    <section className="relative overflow-hidden py-10 px-4 md:px-8 bg-section-tint">
      {/* Charte-graphique pass (Oct 2026): swapped the faint background
          photo for the site's dot-grid texture. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14] bg-dot-grid"
        style={{
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, black, transparent)",
        }}
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
            {t('radarLabel')}
          </p>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {t('radarTitle')}
          </h2>
          <p className="text-muted-foreground text-xs mt-2 max-w-sm mx-auto">
            {t('radarDesc')}
          </p>
        </motion.div>

        <div className="rounded-2xl border border-border bg-card p-5 md:p-8">
          {/* Redesign (Oct 2026): the old layout was a 2-col grid with
              items-center -- a short 3-row chip grid next to a taller
              4-row list left a visible block of dead space on wide
              screens. Stacking instead (pill row, then card grid) means
              each group is exactly as tall as its own content, no
              leftover space to explain away. */}
          <div ref={barsRef} className="flex flex-wrap justify-center gap-2">
            {traits.map((tr, i) => (
              <motion.div
                key={tr.subjectKey}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 pl-2 pr-3.5 py-1.5"
                initial={{ opacity: 0, y: 8 }}
                animate={barsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <span className="w-6 h-6 rounded-full bg-accent-subtle flex items-center justify-center shrink-0">
                  <tr.Icon className="w-3 h-3 text-accent" aria-hidden />
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                  {t(tr.subjectKey)}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="h-px bg-border my-5 md:my-6" aria-hidden />

          {/* Value props as a proper 2x2 card grid instead of a thin
              divided list -- same icon treatment (accent-gradient circle,
              white icon) as the Home pillar cards and tools-stack section,
              so this section finally reads as part of the same visual
              family instead of a stripped-down afterthought. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {valueProps.map((item, i) => (
              <motion.div
                key={item.titleKey}
                className="rounded-xl border border-border bg-background/40 p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="inline-flex w-9 h-9 rounded-xl bg-accent-gradient items-center justify-center shrink-0 mb-3">
                  <item.Icon className="w-4 h-4 text-white" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{t(item.titleKey)}</p>
                <p className="text-xs text-muted-foreground leading-snug mt-1">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
