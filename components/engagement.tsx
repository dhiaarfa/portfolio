"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Engagement() {
  const engagements = [
    {
      organization: "AIESEC",
      logo: "/img/organizations/aiesec.png",
      roles: [
        "Global Support Team Member - AIESEC Global (2024)",
        "Business Development Manager - AIESEC in Lebanon (2024)",
        "Organizing Team Graphic Designer - International President's Meeting (2024)",
        "Organizing Team Graphic Designer - MEA International Summit (2023)",
        "Head of Marketing & PR - MeetUp Pro 1.0 - Sousse (2023)",
        "Marketing National Assistant - AIESEC in Tunisia (2023-2024)",
        "Marketing Team Member - LC Sousse (2022-2024)",
        "Marketing & PR Responsible - Youth Speak Forum Sousse 2.0 (2022)",
      ],
      period: "October 2022 - June 2024",
    },
    {
      organization: "Association YOUTH CLUBs (AYCs)",
      logo: "/img/organizations/youth-clubs.png",
      description:
        "Trainer, Education Activist, Ex-Leader of a local chapter, Jural Advisor of 3 General Assemblies. Training and facilitation of sessions and workshops on different fields and subjects.",
      period: "September 2019 - Present",
    },
    {
      organization: "Tunisian International Model United Nations",
      logo: "/img/organizations/timun.png",
      description: "Member/Delegate in some MUN (Model of United Nations) simulations.",
      period: "January - December 2021 & October 2024 - Present",
    },
    {
      organization: "JCI Nouvelle Medina",
      logo: "/img/organizations/jci.png",
      description: "Member actively participating in community development and leadership programs.",
      period: "July 2020 - December 2021",
    },
    {
      organization: "1000 Challenges School",
      logo: "/img/organizations/1000-challenges.png",
      description: "2nd Cohort participant focusing on negotiation, advocacy, democracy, leadership, and geopolitics.",
      period: "2024",
    },
    {
      organization: "IFMSA",
      logo: "/img/organizations/ifmsa.png",
      description: "External Trainer for the International Federation of Medical Students' Associations.",
      period: "2023",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              Social Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Civic Engagement</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Active in several civil society organizations at local, national, and international levels.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((engagement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <img
                        src={engagement.logo || "/placeholder.svg"}
                        alt={engagement.organization}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{engagement.organization}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{engagement.period}</p>
                    </div>
                  </div>

                  {engagement.roles ? (
                    <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                      {engagement.roles.slice(0, 4).map((role, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-sm">{role}</span>
                        </li>
                      ))}
                      {engagement.roles.length > 4 && (
                        <li className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          +{engagement.roles.length - 4} more roles
                        </li>
                      )}
                    </ul>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400">{engagement.description}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
