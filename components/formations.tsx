"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Heart, Award } from "lucide-react"

export default function Formations() {
  const formations = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Trainer Development",
      description:
        "Develop pedagogical and facilitation competencies to design and deliver effective training sessions.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Leadership & Civic",
      description: "Build leadership skills and encourage active civic engagement among youth.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Social Justice",
      description: "Training on principles of social justice, equity, and inclusion.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Dev",
      description: "Specialized training programs tailored to organizational needs.",
    },
  ]

  return (
    <section id="formations" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-6">Training Programs</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive training solutions for youth development and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-slate-50 dark:bg-slate-900 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-orange-500">{formation.icon}</div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">{formation.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{formation.description}</p>
                  <Button className="w-full bg-slate-950 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 rounded-full text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
