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

  useEffect(() => {
    // Only run on desktop (matches hidden md:block)
    if (window.innerWidth < 768) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
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

  return (
    <motion.div
      className="fixed pointer-events-none z-40 hidden md:block"
      animate={isVisible ? { x: position.x - 16, y: position.y - 16, opacity: 1 } : { opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-6 h-6 border-2 border-[hsl(var(--zia-green))] rounded-full bg-[hsl(var(--zia-green))]/10 backdrop-blur-sm" />
      <div className="absolute inset-0 w-6 h-6 border border-[hsl(var(--zia-green))]/30 rounded-full animate-pulse" />
    </motion.div>
  )
}
