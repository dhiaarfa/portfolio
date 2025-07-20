"use client"

import { motion } from "framer-motion"
import { GraduationCap, BadgeIcon as Certificate } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "License in IT - Web Development & Multimedia",
      institution: "Higher Institute of Technological Studies of Sousse",
      period: "2023 - 2026",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      logo: "/img/organizations/iset-sousse.png",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      degree: "High School Diploma in Computer Science",
      period: "2018 - 2022",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      gradient: "from-green-500 to-teal-500",
    },
  ]

  const certifications = [
    {
      name: "IRI – Agora for Politics 2.0 Program",
      year: "2024 - Ongoing",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Amnesty Camp on Defending Climate Justice & Human Rights",
      year: "2024",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Social Media Marketing with HubSpot Academy",
      year: "2024",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "2D Animation and Digital Painting - TACIR Project",
      year: "2024",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Graphic Design - Summer Academy of GoMyCode",
      year: "2023",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "1000 Challenges School 2nd Cohort",
      year: "2024",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      name: "Green Digital Skills Academy by INCO Academy",
      year: "2024",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "International Trade Training at ADRA Jobs",
      year: "2024",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      name: "External Trainer - IFMSA",
      year: "2023",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "National Student Entrepreneur Status",
      year: "2024",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      name: "Trainer Training Program by YOUTH CLUBs",
      year: "2022",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      name: "Open Startup Tunisia Pre-Incubator Program",
      year: "2021 & 2022",
      gradient: "from-red-500 to-pink-500",
    },
    {
      name: "Debate Training with African Voice",
      year: "2021",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "AMEL Institute Online Training Program",
      year: "2021",
      gradient: "from-orange-500 to-yellow-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              My Learning Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education & Certifications</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl lg:text-base xl:text-xl">
              Academic background and continuous professional development to stay at the forefront of trends.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-500" />
              Academic Background
            </h3>

            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className={`rounded-lg bg-gradient-to-br ${item.gradient} p-6 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm">{item.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                      {item.institution && <p className="text-white/90">{item.institution}</p>}
                      <p className="text-white/80">{item.period}</p>
                      {item.logo && (
                        <div className="mt-3">
                          <img
                            src={item.logo || "/placeholder.svg"}
                            alt="Institution Logo"
                            className="h-12 w-auto opacity-80"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Certificate className="h-6 w-6 text-blue-500" />
              Certifications & Training
            </h3>

            <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={`rounded-lg bg-gradient-to-r ${cert.gradient} p-4 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium text-white">{cert.name}</h4>
                  <p className="text-sm text-white/80">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
