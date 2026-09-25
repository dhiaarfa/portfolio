"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/faqs"

// This full accordion section is no longer rendered on the homepage (see
// lib/faqs.ts) — the same questions now surface as one-at-a-time
// suggestions inside the floating AI assistant instead. Left in place,
// unused, in case a dedicated FAQ page or section is wanted again later.

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[hsl(var(--zia-green))] mb-2">FAQ</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight px-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Quick answers to common questions. Still have questions?{" "}
            <a href="#contact" className="text-[hsl(var(--zia-green))] hover:underline font-medium">
              Get in touch
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold hover:text-[hsl(var(--zia-green))] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
