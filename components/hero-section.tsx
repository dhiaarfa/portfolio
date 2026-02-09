"use client"

import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center pt-16 md:pt-0">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-80px)]">
            {/* Left content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Top stats - minimal badges */}
              <div className="flex gap-3 flex-wrap">
                <div className="text-xs font-medium tracking-wide text-muted-foreground">934 TRAINEES</div>
                <div className="text-xs font-medium tracking-wide text-muted-foreground">381+ HOURS</div>
                <div className="text-xs font-medium tracking-wide text-muted-foreground">61 EVENTS</div>
              </div>

              {/* Main headline - large and bold */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">Professional Trainer</h1>
                <h2 className="text-3xl md:text-4xl font-light text-muted-foreground">
                  Youth Development & Social Justice
                </h2>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-md">
                Empowering the next generation through evidence-based training in leadership, civic engagement, and
                social justice advocacy.
              </p>

              {/* CTA Button - minimalist */}
              <motion.div className="pt-4" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                <button
                  onClick={scrollToAbout}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                >
                  View My Work
                  <ArrowDown className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right side - Portrait - Make photo independent with rounded corners*/}
            <motion.div
              className="hidden md:flex h-full min-h-[600px] items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/photo-dhia-282-29.png"
                alt="Mohamed Dhia Arfa - Professional Trainer"
                className="w-full max-w-md h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
