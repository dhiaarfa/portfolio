"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import { ReactNode } from "react"

/**
 * Lightweight Framer Motion provider using LazyMotion + domAnimation
 * Reduces bundle size from 34kb (motion) to ~20kb (LazyMotion + domAnimation)
 * Loads animation features asynchronously after initial hydration
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
