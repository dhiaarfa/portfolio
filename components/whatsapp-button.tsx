"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="fixed bottom-8 left-4 md:left-8 z-40 w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 touch-manipulation"
      aria-label="Contact on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  )
}
