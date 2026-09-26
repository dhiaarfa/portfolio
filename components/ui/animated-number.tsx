"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

/**
 * Counts a number up from 0 the first time it scrolls into view, then holds.
 * Replaces static stat figures (1,120+ / 477+ / 50+ / 7+ ...) with a small,
 * cheap piece of motion, the kind of first-view "count up" pattern seen
 * constantly on award-recognized portfolio sites specifically because a
 * static stat row is otherwise easy to skim right past.
 *
 * `instant` skips the count-up and shows the final value immediately. Use it
 * for a stat row that sits above the fold (a hero): those are visible on
 * the very first paint with no scroll required, so the "reveal on scroll"
 * premise doesn't apply, every visitor was instead seeing the number sit
 * at "0" for the first ~1.4s of every page load, which reads as a stat that
 * hasn't loaded rather than a nice animation.
 */
export function AnimatedNumber({
  value,
  suffix = "",
  duration = 1.4,
  className,
  instant = false,
}: {
  value: number
  suffix?: string
  duration?: number
  className?: string
  instant?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(reducedMotion || instant ? value : 0)

  useEffect(() => {
    if (instant) return
    if (!inView) return
    if (reducedMotion) {
      setDisplay(value)
      return
    }
    let raf: number
    const start = performance.now()
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000
      const progress = Math.min(elapsed / duration, 1)
      setDisplay(Math.round(value * easeOutCubic(progress)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration, reducedMotion, instant])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
