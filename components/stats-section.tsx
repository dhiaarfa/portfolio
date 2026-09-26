"use client"

import { Clock, Users, Presentation, RefreshCw, BookOpen } from "lucide-react"
import { homepageStatsRow, profileStats } from "@/lib/profile"
import { AnimatedNumber } from "@/components/ui/animated-number"

const iconMap = {
  Users,
  Clock,
  BookOpen,
  Presentation,
  RefreshCw,
} as const

export default function StatsSection() {
  const stats = homepageStatsRow.map((row) => ({
    label: row.label,
    value: profileStats[row.statKey].value,
    suffix: profileStats[row.statKey].suffix,
    Icon: iconMap[row.icon],
  }))

  return (
    <section id="stats-section" className="relative overflow-hidden bg-section-tint py-10 px-5">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-cover bg-center grayscale"
        style={{ backgroundImage: "url(/images/bg/bg-graduation.jpg)" }}
        aria-hidden
      />
      {/* Seam fade: eases the transition from the section above into this
          tinted band (Master to-do, Tier 2). */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent"
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto">
        <p className="label text-center text-accent mb-8">By the numbers</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center py-4 sm:px-4 sm:py-0">
              <div className="w-9 h-9 rounded-full bg-accent-subtle flex items-center justify-center mb-3">
                <s.Icon className="w-4 h-4 text-accent" />
              </div>
              <AnimatedNumber
                value={s.value}
                suffix={s.suffix}
                className="font-display font-bold leading-none text-slate-900 dark:text-white text-[clamp(28px,4vw,44px)] tabular-nums"
              />
              <p className="label text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
