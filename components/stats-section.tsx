"use client"

import { Clock, Users, Presentation, RefreshCw, BookOpen } from "lucide-react"
import { homepageStatsRow, profileStats, formatStat } from "@/lib/profile"

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
    display: formatStat(row.statKey),
    Icon: iconMap[row.icon],
  }))

  return (
    <section id="stats-section" className="bg-slate-950 dark:bg-slate-950 py-10 px-5 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-green-600/8 blur-[80px]" />
      <div className="relative max-w-4xl mx-auto">
        <p className="label text-center text-green-500 mb-10">By the numbers</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center py-4 sm:px-4 sm:py-0">
              <s.Icon className="w-5 h-5 text-green-500/50 mb-3" />
              <span className="font-display font-black leading-none text-white text-[clamp(32px,4.5vw,52px)]">
                {s.display}
              </span>
              <p className="text-slate-400 text-[11px] font-medium uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
