"use client"

import { useSyncExternalStore } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener("change", onChange)
  return () => mql.removeEventListener("change", onChange)
}

/**
 * framer-motion's useReducedMotion() returns the real preference on the
 * very first client render, while the server always rendered "false". For
 * visitors with "reduce motion" turned on, that made the first client render
 * differ from the server HTML (React hydration error #418 on /, /trainer).
 * useSyncExternalStore renders the server value during hydration, then
 * switches to the real preference right after.
 */
export function useReducedMotionSafe(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  )
}
