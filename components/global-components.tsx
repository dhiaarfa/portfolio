"use client"

import dynamic from "next/dynamic"

// Lazy load heavy global components to reduce initial bundle (~50KB+ saved)
// These components are client-only and don't need SSR
const CursorFollower = dynamic(() => import("@/components/cursor-follower"), { ssr: false })
const ScrollNavigation = dynamic(() => import("@/components/scroll-navigation"), { ssr: false })
const StickyCtaBar = dynamic(() => import("@/components/sticky-cta-bar"), { ssr: false })
const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button"), { ssr: false })
const NavbarPrefetch = dynamic(() => import("@/components/navbar-prefetch"), { ssr: false })

/**
 * Global components wrapper - lazy loads all client-only components
 * This reduces initial bundle size by ~50KB+
 * Also prefetches routes for instant navigation
 */
export default function GlobalComponents() {
  return (
    <>
      <NavbarPrefetch />
      <CursorFollower />
      <ScrollNavigation />
      <StickyCtaBar />
      <WhatsAppButton />
    </>
  )
}
