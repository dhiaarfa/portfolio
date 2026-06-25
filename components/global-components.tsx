"use client"

import dynamic from "next/dynamic"

const ScrollNavigation = dynamic(() => import("@/components/scroll-navigation"), { ssr: false })
const FloatingActions = dynamic(() => import("@/components/floating-actions"), { ssr: false })
const NavbarPrefetch = dynamic(() => import("@/components/navbar-prefetch"), { ssr: false })

export default function GlobalComponents() {
  return (
    <>
      <NavbarPrefetch />
      <ScrollNavigation />
      <FloatingActions />
    </>
  )
}
