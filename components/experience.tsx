"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, TrendingUp, Palette } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      period: "January 2024 - Present",
      title: "Marketing Manager (Part-time)",
      company: "Speranza Café & Resto",
      description: "Managing marketing strategies and digital communication for the café-restaurant.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      period: "June 2022 - Present",
      title: "Freelance Trainer",
      company: "Various Organizations",
      description:
        "Collaborating with Z-Training Center, Étoile Formation – Sousse, Epsylone Training Center, FBL Company (Consulting & Academy), and Ma3an Tunisia.",
      details: ["Trainer Training Programs", "Leadership and Civic Engagement", "Graphic Design"],
      icon: <Users className="h-6 w-6 text-white" />,
      gradient: "from-[hsl(var(--zia-green))] to-emerald-500",
    },
    {
      period: "January 2025 - February 2025",
      title: "Graphic Designer (Internship)",
      company: "Icom Agency",
      description: "Creating visual content and graphic design for various clients.",
      icon: <Palette className="h-6 w-6 text-white" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      period: "October 2024 - November 2024",
      title: "Graphic Designer (Internship)",
      company: "Phenyx Company",
      description: "Creating visual identities and communication materials for the company.",
      icon: <Palette className="h-6 w-6 text-white" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      period: "January 2024 - May 2024",
      title: "Business Developer (Internship)",
      company: "The Shape",
      description: "Commercial and strategic development for the company.",
      icon: <Briefcase className="h-6 w-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      period: "December 2023 - January 2024",
      title: "Graphic Designer (Internship)",
      company: "Jasmin Marketing",
      description: "Graphic design for marketing campaigns and communication materials.",
      icon: <Palette className="h-6 w-6 text-white" />,
      gradient: "from-teal-500 to-[hsl(var(--zia-green))]",
    },
    {
      period: "June 2023 - July 2023",
      title: "Marketing Assistant (Internship)",
      company: "École Polytechnique de Sousse",
      description: "Supporting marketing activities and promotional campaigns.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      period: "June - July 2021",
      title: "Graphic Designer (Internship)",
      company: "FunCoach Space",
      description: "Creating visual content and design materials for coaching programs.",
      icon: <Palette className="h-6 w-6 text-white" />,
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[hsl(var(--zia-green))]/10 px-3 py-1 text-sm font-medium text-[hsl(var(--zia-green))] dark:bg-[hsl(var(--zia-green))]/20 dark:text-[hsl(var(--zia-green))]/80">
              My Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Over 7 years of experience in graphic design and training, with a diverse background in marketing and
              business development.
            </p>
          </div>
        </div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--zia-green))] to-purple-500 transform md:translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:rtl" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 shadow-lg`}
                >
                  {exp.icon}
                </div>

                <div className={`md:text-right ${index % 2 === 0 ? "" : "md:col-start-2"}`}>
                  <div
                    className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${exp.gradient} text-white font-bold mb-2`}
                  >
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                </div>

                <div className={`space-y-4 ${index % 2 === 0 ? "md:text-left md:col-start-2" : ""}`}>
                  <div
                    className={`rounded-lg bg-gradient-to-br ${exp.gradient} p-6 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  >
                    <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                    <p className="text-white/90 mt-2">{exp.description}</p>

                    {exp.details && (
                      <ul className="space-y-2 mt-4">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
                            <span className="text-white/90">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
