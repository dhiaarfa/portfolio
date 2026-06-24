"use client"

import { useEffect, useRef } from "react"
import { Clock, Users, Presentation, RefreshCw, BookOpen } from "lucide-react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { useReducedMotion } from "framer-motion"
import { homepageStatsRow, profileStats } from "@/lib/profile"

const iconMap = {
  Users,
  Clock,
  BookOpen,
  Presentation,
  RefreshCw,
} as const

function AnimatedCounter({
  value,
  suffix = "+",
  duration = 2,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const finalLabel = `${value.toLocaleString()}${suffix}`
  const [count, setCount] = useState(value)
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const prefersReducedMotion = useReducedMotion()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (prefersReducedMotion || value <= 0) {
      setCount(value)
      return
    }
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const step = Math.max(1, Math.ceil(value / (duration * 60)))
    const stepMs = (duration * 1000) / Math.ceil(value / step)
    setCount(0)

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = Math.min(prev + step, value)
        if (next >= value) clearInterval(timer)
        return next
      })
    }, stepMs)

    return () => clearInterval(timer)
  }, [isInView, value, duration, prefersReducedMotion])

  const display = count > 0 || value === 0 ? `${count.toLocaleString()}${suffix}` : finalLabel

  return (
    <span ref={ref} aria-label={finalLabel}>
      {display}
    </span>
  )
}

export default function StatsSection() {
  const stats = homepageStatsRow.map((row) => ({
    value: profileStats[row.statKey].value,
    suffix: profileStats[row.statKey].suffix,
    label: row.label,
    Icon: iconMap[row.icon],
  }))

  return (
    <section id="stats-section" className="bg-slate-950 dark:bg-slate-950 py-14 px-5 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-green-600/8 blur-[80px]" />
      <div className="relative max-w-4xl mx-auto">
        <p className="label text-center text-green-500 mb-10">By the numbers</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center py-4 sm:px-4 sm:py-0">
              <s.Icon className="w-5 h-5 text-green-500/50 mb-3" />
              <span className="font-display font-black leading-none text-white text-[clamp(32px,4.5vw,52px)]">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </span>
              <p className="text-slate-500 text-[11px] font-medium uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
