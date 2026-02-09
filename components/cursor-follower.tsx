"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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
      className="fixed pointer-events-none z-40"
      animate={isVisible ? { x: position.x - 16, y: position.y - 16, opacity: 1 } : { opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-8 h-8 border-2 border-[hsl(var(--zia-green))] rounded-full" />
      <div className="absolute inset-0 w-8 h-8 border border-[hsl(var(--zia-green))]/30 rounded-full animate-pulse" />
    </motion.div>
  )
}
