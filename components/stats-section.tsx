"use client"

import { useEffect } from "react"

import { motion } from "framer-motion"
import { Clock, Users, Award, Briefcase } from "lucide-react"
import { useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
}: { value: number | string; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = typeof value === "string" ? Number.parseInt(value.replace(/\D/g, ""), 10) : value
      const totalMilSecDur = duration * 1000
      const incrementTime = totalMilSecDur / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(timer)
      }, incrementTime)

      return () => {
        clearInterval(timer)
      }
    }
  }, [isInView, value, duration])

  return (
    <span ref={nodeRef}>
      {typeof value === "string" ? value.replace(/\d/g, "") : ""}
      {count}
      {typeof value === "string" ? value.replace(/\D/g, "") : ""}
    </span>
  )
}

export default function StatsSection() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, count: "934+", text: "Participants" },
    { icon: <Clock className="h-6 w-6" />, count: "381+", text: "Training Hours" },
    { icon: <Award className="h-6 w-6" />, count: "61", text: "Events" },
    { icon: <Briefcase className="h-6 w-6" />, count: "21+", text: "Facilitations" },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-950 dark:bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-orange-500">{stat.icon}</div>
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
