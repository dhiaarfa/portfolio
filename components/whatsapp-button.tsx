"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <>
      {/* Behance portfolio bubble */}
      <motion.a
        href={siteConfig.behance}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-24 left-4 md:left-8 z-40 w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-[#1769FF] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation"
        aria-label="Open Behance portfolio"
        title="View Behance portfolio"
      >
        <Image
          src="/img/tools/behance-logo.png"
          alt="Behance"
          width={24}
          height={24}
          className="object-contain"
        />
      </motion.a>

      {/* WhatsApp bubble */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-8 left-4 md:left-8 z-40 w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 touch-manipulation"
        aria-label="Contact on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </>
  )
}
