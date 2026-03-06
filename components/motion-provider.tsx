"use client"

import { ReactNode } from "react"

/**
 * Motion provider - pass-through for reliability.
 * LazyMotion was removed as it can cause white screen when domAnimation loads late
 * or when reducedMotion conflicts. Full motion bundle loads with components.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}
