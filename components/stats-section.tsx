"use client"

import { motion } from "framer-motion"
import { Clock, Users, Paintbrush, Award, GraduationCap, Lightbulb } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Counter animation component
function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
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
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-white/80" />,
      count: 7,
      suffix: "+",
      text: "Years of Experience",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Users className="h-8 w-8 text-white/80" />,
      count: 900,
      suffix: "+",
      text: "People Trained",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-white/80" />,
      count: 300,
      suffix: "+",
      text: "Training Hours",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-white/80" />,
      count: 50,
      suffix: "+",
      text: "Creative Projects",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: <Award className="h-8 w-8 text-white/80" />,
      count: 20,
      suffix: "+",
      text: "Certifications Earned",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white/80" />,
      count: 15,
      suffix: "+",
      text: "Training Programs",
      color: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900 text-white relative overflow-hidden particle-bg">
      {/* Enhanced Decorative elements with more vibrant colors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text-animated neon-text">My Impact in Numbers</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Discover the concrete results of my expertise and commitment in design and training.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-6 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-25 backdrop-blur-sm border border-white/20 shadow-xl glass card-interactive hover-lift glow-border`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4 bg-white/20 p-3 rounded-full w-16 h-16 mx-auto glow-border animate-bounce-gentle">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 font-playfair neon-text">
                <AnimatedCounter value={stat.count} suffix={stat.suffix} />
              </div>
              <div className="text-white/90 font-montserrat text-sm">{stat.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
