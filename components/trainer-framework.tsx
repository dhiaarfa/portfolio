"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Lightbulb } from "lucide-react"

export default function TrainerFramework() {
  const framework = [
    {
      title: "La Technique",
      icon: <BookOpen className="h-12 w-12 text-orange-500" />,
      description:
        "Foundational knowledge and technical skills. All training parameters (objectives, audience, placement, etc.) and analyses that form the basis of successful training delivery.",
      percentage: "20%",
    },
    {
      title: "Le Marketing",
      icon: <Users className="h-12 w-12 text-orange-500" />,
      description:
        "Strategic promotion and participant engagement. The structure of training campaigns, marketing offers, and communication strategies that ensure your training reaches the right audience.",
      percentage: "40%",
    },
    {
      title: "La Créa",
      icon: <Lightbulb className="h-12 w-12 text-orange-500" />,
      description:
        "Creative execution and content delivery. Transform your training ideas visually and across different formats (images, videos, carousels, stories) for engaging participant experiences.",
      percentage: "40%",
    },
  ]

  return (
    <section id="training-capacity-building" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              <span className="text-orange-500">La réussite en formation s'explique</span>
              <br />
              par cette équation...
            </h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-lg">
              Every successful training combines three essential elements
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {framework.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-all">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">{pillar.description}</p>

                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {pillar.percentage}
                      </span>
                      <div className="flex-grow h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-slate-800 to-orange-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: pillar.percentage }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
