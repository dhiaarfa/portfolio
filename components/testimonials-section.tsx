"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Dhia's training transformed how we approach youth engagement. His methodology is practical and highly effective.",
      author: "Participant from Youth Clubs",
      role: "Training Program",
    },
    {
      text: "Exceptional trainer with deep knowledge of social justice advocacy. His sessions were eye-opening and inspiring.",
      author: "Training Attendee",
      role: "Leadership Workshop",
    },
    {
      text: "Professional, well-organized, and genuinely committed to participant development. Highly recommended.",
      author: "Organization Representative",
      role: "Capacity Building Program",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-bold">What People Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="p-8 border border-border rounded-2xl space-y-4 hover:border-foreground transition-colors"
                whileHover={{ y: -4 }}
              >
                <Quote className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
