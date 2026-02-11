"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-3"
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-[hsl(var(--zia-green))]/60 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        />
        <p className="text-xs font-medium text-muted-foreground">
          Loading…
        </p>
      </motion.div>
    </div>
  )
}

