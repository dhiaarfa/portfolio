"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

/**
 * A radial "impact ring" stat display, replaces the flat rectangular
 * number boxes used across the site (About's "Measurable Results",
 * Trainer's stat row) with an actual circular chart element, per the
 * site-wide request to move away from square boxes toward rounder,
 * more visual, chart-like presentation.
 *
 * `progress` (0–1) is deliberately stylistic, not a literal percentage —
 * these are absolute counts (participants, hours), not ratios, but
 * varying it per stat (rather than one fixed fill) keeps the row from
 * looking like decoration repeated four times with no meaning.
 */
export function StatRing({
  value,
  label,
  sublabel,
  progress = 0.72,
  accent = "var(--site-accent)",
  size = 128,
  delay = 0,
  variant = "auto",
}: {
  value: string
  label: string
  sublabel?: string
  progress?: number
  accent?: string
  size?: number
  delay?: number
  /** "auto" follows the site theme; "dark" forces light text/track for use on a permanently dark card. */
  variant?: "auto" | "dark"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reducedMotion = useReducedMotion()
  const stroke = Math.max(8, size * 0.075)
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const target = circumference * (1 - Math.min(Math.max(progress, 0.06), 1))
  const isDark = variant === "dark"

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            className={isDark ? "text-white/10" : "text-slate-100 dark:text-slate-800"}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={accent}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={reducedMotion ? { strokeDashoffset: target } : { strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: target } : undefined}
            transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg sm:text-xl font-extrabold tabular-nums ${isDark ? "text-white" : "text-slate-900 dark:text-white"}`}>
            {value}
          </span>
        </div>
      </div>
      <div>
        <p className={`text-sm font-semibold leading-snug ${isDark ? "text-white" : "text-slate-900 dark:text-white"}`}>{label}</p>
        {sublabel && (
          <p className={`text-xs mt-0.5 max-w-[16ch] mx-auto ${isDark ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
            {sublabel}
          </p>
        )}
      </div>
    </div>
  )
}
