"use client"

import dynamic from "next/dynamic"

const ScrollNavigation = dynamic(() => import("@/components/scroll-navigation"), { ssr: false })
const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button"), { ssr: false })
const ChatWidget = dynamic(() => import("@/components/chat-widget"), { ssr: false })
const NavbarPrefetch = dynamic(() => import("@/components/navbar-prefetch"), { ssr: false })

/** Lazy global widgets — cursor follower removed for performance */
export default function GlobalComponents() {
  return (
    <>
      <NavbarPrefetch />
      <ScrollNavigation />
      <WhatsAppButton />
      <ChatWidget />
    </>
  )
}
