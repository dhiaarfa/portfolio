"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/**
 * Prefetches all navigation routes on mount for instant navigation
 * This makes page transitions feel instant (< 100ms) by preloading routes
 */
export default function NavbarPrefetch() {
  const router = useRouter()

  useEffect(() => {
    // Prefetch all main navigation routes immediately
    const routes = ["/", "/about", "/designer", "/trainer", "/developer"]
    
    routes.forEach((route) => {
      router.prefetch(route)
    })
  }, [router])

  return null
}
