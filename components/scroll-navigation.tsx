"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, ArrowDown } from "lucide-react"

export default function ScrollNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  const checkScroll = () => {
    // Show button if scrolled more than 300px
    const isScrolled = window.scrollY > 300
    setIsVisible(isScrolled)

    // Check if near bottom (within 500px of bottom)
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY
    const isNearBottom = scrollTop + windowHeight >= documentHeight - 500

    setIsAtBottom(!isNearBottom && isScrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Home") {
        scrollToTop()
      } else if (e.key === "End") {
        scrollToBottom()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="Scroll to top"
            title="Scroll to top (Press Home)"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>

          {/* Scroll to Bottom Button */}
          {isAtBottom && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToBottom}
              className="w-12 h-12 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
              aria-label="Scroll to bottom"
              title="Scroll to bottom (Press End)"
            >
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      )}
    </AnimatePresence>
  )
}
