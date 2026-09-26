"use client"

import { ReactNode } from "react"
import { MotionConfig } from "framer-motion"

/**
 * Motion provider - wraps the app in MotionConfig so every framer-motion
 * component site-wide automatically respects the visitor's OS-level
 * "reduce motion" preference (reducedMotion="user"), without each
 * component needing its own useReducedMotion() check.
 *
 * Note: this is NOT LazyMotion -- that was removed previously because its
 * lazy-loaded animation bundle could arrive after first paint and cause a
 * white screen. MotionConfig carries no such lazy-loading behavior; it's a
 * plain context provider that adjusts existing motion components' default
 * transition/reduced-motion behavior, so it doesn't reintroduce that bug.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
