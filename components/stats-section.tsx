"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, Users, Presentation, RefreshCw, BookOpen } from "lucide-react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.4, rootMargin: "0px 0px -80px 0px" })
  const numericPart = parseInt(value.replace(/\D/g, ""), 10) || 0

  useEffect(() => {
    if (!isInView || numericPart <= 0) return
    const step = Math.max(1, Math.ceil(numericPart / (duration * 60)))
    const stepMs = (duration * 1000) / Math.ceil(numericPart / step)
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = Math.min(prev + step, numericPart)
        if (next >= numericPart) clearInterval(timer)
        return next
      })
    }, stepMs)
    return () => clearInterval(timer)
  }, [isInView, numericPart, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const { t } = useLanguage()
  const stats = [
    { value: String(siteConfig.stats.participants), suffix: "+", label: "Participants Trained", Icon: Users },
    { value: String(siteConfig.stats.trainingHours), suffix: "+", label: "Training Hours", Icon: Clock },
    { value: "50", suffix: "+", label: "Design Projects", Icon: BookOpen },
    { value: String(siteConfig.stats.yearsExperience), suffix: "+", label: "Years Experience", Icon: Presentation },
    { value: String(siteConfig.stats.trainingCyclesSupervised), suffix: "+", label: "Training Cycles", Icon: RefreshCw },
  ]

  return (
    <section id="stats-section" className="bg-slate-950 dark:bg-slate-950 py-14 px-5 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-green-600/8 blur-[80px]" />
      <div className="relative max-w-4xl mx-auto">
        <p className="label text-center text-green-500 mb-10">By the numbers</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center py-4 sm:px-4 sm:py-0">
              <s.Icon className="w-5 h-5 text-green-500/50 mb-3" />
              <span
                className={`font-display font-black leading-none text-white ${
                  s.label === "NFE Received" ? "text-[clamp(28px,4vw,40px)]" : "text-[clamp(32px,4.5vw,52px)]"
                }`}
              >
                <AnimatedCounter value={s.value} />{s.suffix}
              </span>
              <p className="text-slate-500 text-[11px] font-medium uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
