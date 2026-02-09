"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      text: "Dhia's pedagogical approach has been a game-changer for our students. His dedication to youth development is truly remarkable.",
      author: "Mehdi Zouari",
      position: "Founder & CEO",
      company: "Z Training",
      image: "/img/testimonials/zouari-mehdi.jpg",
    },
    {
      text: "Working with Dhia has been an inspiring journey. His leadership and passion drive meaningful change.",
      author: "Rayen Bejaoui",
      position: "Project Manager",
      company: "1000 Challenges School",
      image: "/img/testimonials/rayen-bejaoui.jpg",
    },
    {
      text: "Exceptional skills in training delivery, creativity, and attention to detail. Highly recommended for any initiative.",
      author: "Omayma Arfaoui",
      position: "Engineer",
      company: "Harvard ALP Fellow",
      image: "/img/testimonials/omayma-arfaoui.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4">What People Say</h2>
            <p className="text-slate-600 dark:text-slate-400">Testimonials from trainers and participants</p>
          </div>

          <div className="relative">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 bg-white dark:bg-slate-800">
                    <CardContent className="p-8 md:p-12">
                      <div className="mb-6 text-orange-500">
                        <Quote className="h-8 w-8" />
                      </div>
                      <p className="text-lg text-slate-700 dark:text-slate-200 mb-8 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                        <div style={{width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, backgroundColor: "#f1f5f9"}}>
                          <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} style={{width: "100%", height: "100%", display: "block", objectFit: "cover"}} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-950 dark:text-white">{testimonial.author}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.position}</p>
                          <p className="text-xs text-slate-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-orange-500 w-8" : "bg-slate-300 dark:bg-slate-600 w-2"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
