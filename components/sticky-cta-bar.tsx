"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200
      const isMd = window.matchMedia("(min-width: 768px)").matches
      setIsVisible(scrolled && !nearBottom && isMd)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-8 md:max-w-sm z-30"
        >
          <div className="bg-card border border-border rounded-xl shadow-lg backdrop-blur-sm p-4 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">
                Ready to collaborate?
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Book a free 30-min consultation
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[hsl(var(--zia-green))] text-white text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Dismiss"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
