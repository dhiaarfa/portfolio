"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export default function AboutAgency() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Collaboration",
      description: "Notre force réside dans notre travail d'équipe et notre capacité à comprendre vos besoins.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-500" />,
      title: "Innovation",
      description: "Nous restons à la pointe des technologies pour vous offrir des solutions modernes.",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Qualité",
      description: "Chaque livrable respecte nos standards de qualité élevés et vos exigences.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                À propos de DevTeam
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Une agence née de la passion pour l'innovation digitale
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Fondée en <strong>2025</strong>, DevTeam est une agence digitale spécialisée qui réunit 4 experts
                passionnés par les technologies émergentes. Nous combinons nos expertises complémentaires pour offrir
                des solutions complètes à nos clients.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                De la conception graphique au développement d'applications complexes, en passant par la formation de vos
                équipes, nous accompagnons votre transformation digitale de A à Z.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Année de création</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction client</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              onClick={() => {
                const element = document.getElementById("team")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Rencontrer l'équipe
            </Button>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">Nos Valeurs</h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">{value.icon}</div>
                        <div>
                          <h4 className="font-semibold mb-2">{value.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
