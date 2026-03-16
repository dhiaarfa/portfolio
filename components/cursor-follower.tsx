"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

/**
 * Optimized cursor follower using lightweight 'm' component instead of 'motion'
 * Reduces bundle size and improves performance
 */
export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Respect reduced motion & only run on desktop pointers
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || window.innerWidth < 768) return

    setEnabled(true)

    let frameRequested = false
    let nextX = 0
    let nextY = 0

    const handleMouseMove = (e: MouseEvent) => {
      nextX = e.clientX
      nextY = e.clientY
      if (!frameRequested) {
        frameRequested = true
        requestAnimationFrame(() => {
          setPosition({ x: nextX, y: nextY })
          setIsVisible(true)
          frameRequested = false
        })
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block w-2 h-2 rounded-full bg-[var(--site-accent)] mix-blend-difference"
        animate={isVisible ? { x: position.x - 4, y: position.y - 4, opacity: 1 } : { opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {/* Follower ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block w-10 h-10 border-2 border-[color-mix(in_oklab,var(--site-accent)_60%,transparent)] rounded-full"
        animate={isVisible ? { x: position.x - 20, y: position.y - 20, opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </>
  )
}
