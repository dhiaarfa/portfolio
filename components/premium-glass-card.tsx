'use client';

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PremiumGlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: "amber" | "green" | "default"
  hoverLift?: boolean
  animated?: boolean
  onClick?: () => void
}

export default function PremiumGlassCard({
  children,
  className,
  glowColor = "default",
  hoverLift = true,
  animated = true,
  onClick,
}: PremiumGlassCardProps) {
  const glowClasses = {
    amber: "glow-amber-hover",
    green: "glow-green",
    default: "",
  }

  const motionProps = animated
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        whileHover: hoverLift ? { y: -8, transition: { duration: 0.3 } } : {},
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" },
      }
    : {}

  const Component = animated ? motion.div : "div"

  return (
    <Component
      {...motionProps}
      onClick={onClick}
      className={cn(
        "glass glass-premium glass-hover glass-border",
        glowClasses[glowColor],
        "rounded-2xl p-6 md:p-8",
        "relative overflow-hidden",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-2xl" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  )
}
