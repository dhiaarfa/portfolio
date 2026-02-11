"use client"

import { useEffect } from "react"

import { motion } from "framer-motion"
import { Clock, Users, Award, Briefcase, GraduationCap } from "lucide-react"
import { useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "@/components/language-provider"

function AnimatedCounter({
  value,
  duration = 2,
}: { value: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [ref, isInView] = useInView({ once: true })

  const numericPart = parseInt(value.replace(/\D/g, ""), 10) || 0
  const suffix = value.replace(/\d/g, "") // e.g. "+" from "934+"

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
    { icon: <Users className="h-6 w-6" />, count: "990+", text: t("participantsLabel") },
    { icon: <Clock className="h-6 w-6" />, count: "450+", text: t("trainingHoursLabel") },
    { icon: <Briefcase className="h-6 w-6" />, count: "30+", text: t("facilitationHoursLabel") },
    { icon: <Award className="h-6 w-6" />, count: "10+", text: t("trainingCyclesSupervisedLabel") },
    { icon: <GraduationCap className="h-6 w-6" />, count: "2000h+", text: t("trainingsReceivedNfeLabel") },
  ]

  return (
    <section id="stats-section" className="py-12 md:py-20 bg-slate-950 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-[hsl(var(--zia-green))]">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter value={stat.count} />
              </div>
              <div className="text-slate-400 text-sm">{stat.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
