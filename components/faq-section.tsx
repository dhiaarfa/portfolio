"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Graphic design (brand identity, visual systems, UI/UX), Training & coaching (workshops, leadership, youth programs), and Web development (sites, apps). I also facilitate events and consult on creative strategy.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Brand identity: 2–4 weeks. Training or workshops: tailored to your agenda. Web projects: 2–8 weeks depending on scope. We agree on a clear timeline in our first consultation.",
  },
  {
    question: "Do you work remotely or internationally?",
    answer:
      "Yes. I work with clients worldwide via video calls and async collaboration. I'm based in Tunisia and work in English, French, and Arabic.",
  },
  {
    question: "How do you charge?",
    answer:
      "Pricing depends on the type and size of the project. I give transparent quotes after we define the scope. Book a free 30-minute call to discuss your needs and get an estimate.",
  },
  {
    question: "Can you run in-person workshops or events?",
    answer:
      "Yes. I run in-person workshops in Tunisia and can travel for events. I've delivered 450+ training hours and 30+ facilitation hours to 990+ participants. Get in touch to discuss dates and logistics.",
  },
  {
    question: "What is Zia Studio?",
    answer:
      "Zia Studio is my creative agency focused on branding and visual design. For design-led projects (identity, campaigns, creative direction), we can work under the Zia Studio brand or as a solo designer.",
  },
]

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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
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
