"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Scale, Paintbrush } from "lucide-react"

export default function Formations() {
  const formations = [
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Formation de Formateurs",
      description:
        "Programme complet pour développer les compétences pédagogiques et d'animation nécessaires pour concevoir et animer des formations efficaces.",
      details: [
        { icon: "clock", text: "35 heures" },
        { icon: "users", text: "8-15 participants" },
        { icon: "certificate", text: "Certification" },
      ],
    },
    {
      icon: <Award className="h-10 w-10 text-blue-500" />,
      title: "Leadership et Engagement Citoyen",
      description:
        "Formation pour développer les compétences de leadership et encourager l'engagement citoyen actif chez les jeunes.",
      details: [
        { icon: "clock", text: "21 heures" },
        { icon: "users", text: "10-20 participants" },
        { icon: "certificate", text: "Attestation" },
      ],
    },
    {
      icon: <Scale className="h-10 w-10 text-blue-500" />,
      title: "Justice Sociale et Inclusion",
      description:
        "Formation sur les principes de justice sociale, d'équité et d'inclusion pour construire une société plus juste et solidaire.",
      details: [
        { icon: "clock", text: "18 heures" },
        { icon: "users", text: "12-25 participants" },
        { icon: "certificate", text: "Attestation" },
      ],
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-blue-500" />,
      title: "Design Graphique",
      description:
        "Initiation aux principes fondamentaux du design graphique et aux outils professionnels pour créer des visuels impactants.",
      details: [
        { icon: "clock", text: "24 heures" },
        { icon: "users", text: "8-12 participants" },
        { icon: "certificate", text: "Attestation" },
      ],
    },
  ]

  return (
    <section id="formations" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              Mes Programmes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Formations</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Plus de 900 participants formés sur des thématiques variées, avec une approche pratique et interactive.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col h-full p-6">
                  <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit dark:bg-blue-900/30">{formation.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{formation.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 flex-grow">{formation.description}</p>
                  <div className="space-y-2 mb-4">
                    {formation.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className={`fas fa-${detail.icon} text-blue-500 mr-2`}></i>
                        <span>{detail.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-auto">
                    En savoir plus
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
