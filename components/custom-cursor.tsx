"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

/**
 * A custom accent-colored cursor (dot + trailing ring) that replaces the OS
 * pointer on desktop/mouse visitors, with a one-time expanding "welcome"
 * ripple the moment someone lands on the site, the "different cursor when
 * people first enter" ask. Skipped entirely on touch devices and for
 * prefers-reduced-motion, and the native cursor is restored automatically
 * (see the `.custom-cursor-active` rule in globals.css) if this never
 * mounts or unmounts.
 */
export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 })

  useEffect(() => {
    if (prefersReducedMotion) return
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      setHovering(!!target?.closest('a, button, [role="button"], input, textarea, select'))
    }
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    document.documentElement.addEventListener("mouseleave", leave)
    document.documentElement.addEventListener("mouseenter", enter)
    const welcomeTimer = setTimeout(() => setShowWelcome(false), 1100)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
      document.documentElement.removeEventListener("mouseleave", leave)
      document.documentElement.removeEventListener("mouseenter", enter)
      clearTimeout(welcomeTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add("custom-cursor-active")
    return () => document.documentElement.classList.remove("custom-cursor-active")
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      {/* One-time entrance ripple, the "different cursor when you first
          enter" moment. Expands from the visitor's first pointer position
          and fades, then never appears again this session. */}
      <AnimatePresence>
        {showWelcome && visible && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border-2"
            style={{
              x,
              y,
              translateX: "-50%",
              translateY: "-50%",
              borderColor: "var(--site-accent)",
            }}
            initial={{ width: 18, height: 18, opacity: 0.7 }}
            animate={{ width: 110, height: 110, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Trailing ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border-2 transition-colors duration-300"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "var(--site-accent)",
          backgroundColor: hovering ? "color-mix(in oklab, var(--site-accent) 14%, transparent)" : "transparent",
          opacity: visible ? (hovering ? 0.9 : 0.55) : 0,
        }}
        animate={{ width: hovering ? 48 : 30, height: hovering ? 48 : 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      />

      {/* Exact-position dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--site-accent)",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}
