"use client"

import { motion, useReducedMotion } from "framer-motion"

export const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px", amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerGrid = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={className}>{children}</div>
)

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => <div className={className}>{children}</div>
