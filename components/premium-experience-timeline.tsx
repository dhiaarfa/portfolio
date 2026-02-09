"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import PremiumGlassCard from "@/components/premium-glass-card"

interface Experience {
  role: string
  company: string
  period: string
  type?: string
  description?: string
  highlights?: string[]
}

interface PremiumExperienceTimelineProps {
  title: string
  experiences: Experience[]
}

export default function PremiumExperienceTimeline({
  title,
  experiences,
}: PremiumExperienceTimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full" />
      </div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="space-y-4"
      >
        {experiences.map((exp, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <PremiumGlassCard glowColor="amber" hoverLift className="group">
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-amber-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-amber-400">{exp.company}</p>
                  </div>

                  {exp.type && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium text-emerald-300 whitespace-nowrap">
                      {exp.type}
                    </span>
                  )}
                </div>

                {/* Period */}
                <p className="text-sm text-foreground/60">{exp.period}</p>

                {/* Description */}
                {exp.description && (
                  <p className="text-sm text-foreground/70 leading-relaxed">{exp.description}</p>
                )}

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm text-foreground/70">
                        <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </PremiumGlassCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
