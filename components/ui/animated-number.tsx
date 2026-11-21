"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe"

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
  const reducedMotion = useReducedMotionSafe()
  // Starts at the real value so server HTML, crawlers and no-JS readers
  // see "1,120+", never "0+". The count-up only arms when the number
  // is below the fold at mount, so nothing visible ever flashes to 0.
  const [display, setDisplay] = useState(value)
  const [armed, setArmed] = useState(false)

  // Reduced motion / instant: show the final value directly (derived, not
  // set from an effect).
  const skipCount = Boolean(instant || reducedMotion)

  useEffect(() => {
    if (skipCount) return
    const el = ref.current
    if (!el) return
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setDisplay(0)
      setArmed(true)
    }
  }, [skipCount])

  useEffect(() => {
    if (skipCount) return
    if (!armed || !inView) return
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
  }, [armed, inView, value, duration, skipCount])

  return (
    <span ref={ref} className={className}>
      {/* "en-US": a bare toLocaleString() follows the runtime locale, so
          server and a French-locale browser rendered different digits
          ("1,120" vs "1 120") -- a hydration mismatch. */}
      {(skipCount ? value : display).toLocaleString("en-US")}
      {suffix}
    </span>
  )
}
