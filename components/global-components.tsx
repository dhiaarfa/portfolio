"use client"

import dynamic from "next/dynamic"

const PageFlowNav = dynamic(() => import("@/components/page-flow-nav"), { ssr: false })
const FloatingActions = dynamic(() => import("@/components/floating-actions"), { ssr: false })
const NavbarPrefetch = dynamic(() => import("@/components/navbar-prefetch"), { ssr: false })
const GlobalSearch = dynamic(() => import("@/components/global-search"), { ssr: false })

export default function GlobalComponents() {
  return (
    <>
      <NavbarPrefetch />
      <PageFlowNav />
      <FloatingActions />
      <GlobalSearch />
    </>
  )
}
