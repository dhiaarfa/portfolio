"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import PremiumGlassCard from "@/components/premium-glass-card"

interface SkillCategory {
  title: string
  items: string[]
}

interface PremiumSkillsCardProps {
  title: string
  subtitle?: string
  categories: SkillCategory[]
  icon?: ReactNode
}

export default function PremiumSkillsCard({
  title,
  subtitle,
  categories,
  icon,
}: PremiumSkillsCardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <PremiumGlassCard className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            {icon && <span className="text-2xl">{icon}</span>}
            {title}
          </h3>
          {subtitle && <p className="text-sm text-foreground/60">{subtitle}</p>}
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {categories.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants} className="space-y-3">
            <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">{category.title}</h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {category.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  whileHover={{ scale: 1.05, x: 4 }}
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-amber-400 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </PremiumGlassCard>
  )
}
