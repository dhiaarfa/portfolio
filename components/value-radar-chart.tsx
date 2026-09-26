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
const traits: { Icon: LucideIcon; subject: string; value: number }[] = [
  { Icon: MessageCircle, subject: 'Communication', value: 95 },
  { Icon: Palette, subject: 'Creativity', value: 92 },
  { Icon: Handshake, subject: 'Reliability', value: 98 },
  { Icon: Brain, subject: 'Methodology', value: 90 },
  { Icon: Globe, subject: 'Multilingual', value: 88 },
  { Icon: Sparkles, subject: 'Cultural Fit', value: 94 },
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
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-cover bg-center grayscale"
        style={{ backgroundImage: "url(/images/bg/bg-speaking.jpg)" }}
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

        <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {/* Skill bars, each fills in with a short staggered delay once
                scrolled into view. Rounded, gradient-free, single accent
                color: reads cleaner and more "app stat" than a filled
                polygon, and takes noticeably less vertical space. */}
            <div ref={barsRef} className="flex flex-col gap-3">
              {traits.map((tr, i) => (
                <motion.div
                  key={tr.subject}
                  initial={{ opacity: 0, x: -10 }}
                  animate={barsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white">
                      <tr.Icon className="w-3.5 h-3.5 text-accent" aria-hidden /> {tr.subject}
                    </span>
                    <span className="text-xs font-bold text-accent tabular-nums">{tr.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-border overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      initial={{ width: 0 }}
                      animate={barsInView ? { width: `${tr.value}%` } : { width: 0 }}
                      transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Value props, one compact row per item, same rhythm as the
                Journey card's rows, instead of large individually-animated
                bento tiles. */}
            <div className="divide-y divide-border rounded-xl border border-border overflow-hidden">
              {valueProps.map((item, i) => (
                <motion.div
                  key={item.titleKey}
                  className="flex items-start gap-2.5 px-3 py-2.5"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <span className="w-7 h-7 rounded-full bg-accent-subtle flex items-center justify-center shrink-0">
                    <item.Icon className="w-3.5 h-3.5 text-accent" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">{t(item.titleKey)}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">{t(item.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Self-assessed, not benchmarked against a third party
          </p>
        </div>
      </div>
    </section>
  )
}
