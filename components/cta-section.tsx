"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="p-12 md:p-20 bg-foreground text-background text-center space-y-8 rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Transform Your Team?</h2>
          <p className="text-lg text-balance opacity-90 max-w-2xl mx-auto">
            Let's discuss how I can help develop leaders and drive meaningful change in your organization.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-medium hover:gap-3 transition-all rounded-full"
            whileHover={{ x: 4 }}
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
