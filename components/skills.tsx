"use client"

import { motion } from "framer-motion"
import { Palette, PenTool, Users, Code, Globe } from "lucide-react"
import { getTranslation, type Language } from "@/lib/translations"

interface SkillsProps {
  language: Language
}

export default function Skills({ language }: SkillsProps) {
  const t = (key: keyof typeof import("@/lib/translations").translations.en) => getTranslation(language, key)

  const skillCategories = [
    {
      title: language === "fr" ? "Design & Créativité" : "Design & Creativity",
      icon: <Palette className="h-6 w-6 text-white" />,
      color: "text-white",
      borderColor: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      skills: [
        { name: language === "fr" ? "Design Graphique" : "Graphic Design", percentage: 95 },
        { name: "UI/UX Design", percentage: 85 },
        { name: language === "fr" ? "Identité de Marque" : "Brand Identity", percentage: 90 },
        { name: language === "fr" ? "Montage Vidéo" : "Video Editing", percentage: 80 },
        { name: language === "fr" ? "Animation 2D" : "2D Animation", percentage: 75 },
      ],
    },
    {
      title: language === "fr" ? "Développement Web" : "Web Development",
      icon: <Code className="h-6 w-6 text-white" />,
      color: "text-white",
      borderColor: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
      skills: [
        { name: "HTML/CSS", percentage: 85 },
        { name: "JavaScript", percentage: 80 },
        { name: "PHP", percentage: 75 },
        { name: "Python", percentage: 70 },
        { name: "SQL", percentage: 75 },
      ],
    },
    {
      title: language === "fr" ? "Marketing & Business" : "Marketing & Business",
      icon: <Globe className="h-6 w-6 text-white" />,
      color: "text-white",
      borderColor: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-600",
      skills: [
        { name: language === "fr" ? "Marketing Digital" : "Digital Marketing", percentage: 90 },
        { name: language === "fr" ? "Marketing Réseaux Sociaux" : "Social Media Marketing", percentage: 95 },
        { name: language === "fr" ? "Gestion de Projet" : "Project Management", percentage: 85 },
        { name: language === "fr" ? "Développement Commercial" : "Business Development", percentage: 80 },
        { name: language === "fr" ? "Stratégie de Contenu" : "Content Strategy", percentage: 85 },
      ],
    },
    {
      title: language === "fr" ? "Formation & Communication" : "Training & Communication",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "text-white",
      borderColor: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      skills: [
        { name: language === "fr" ? "Conception de Formation" : "Training Design", percentage: 95 },
        { name: language === "fr" ? "Animation de Groupe" : "Group Facilitation", percentage: 90 },
        { name: language === "fr" ? "Prise de Parole" : "Public Speaking", percentage: 85 },
        { name: language === "fr" ? "Animation d'Ateliers" : "Workshop Animation", percentage: 90 },
        { name: language === "fr" ? "Développement Curriculaire" : "Curriculum Development", percentage: 80 },
      ],
    },
  ]

  const tools = [
    { name: "Adobe Creative Suite", image: "/img/tools/adobe-creative-suite.png" },
    { name: "Figma", image: "/img/tools/figma.png" },
    { name: "Canva", image: "/img/tools/canva.png" },
    { name: "HubSpot", image: "/img/tools/hubspot.png" },
    { name: "Google Suite", image: "/img/tools/google-suite.png" },
    { name: "Microsoft Office Suite", image: "/img/tools/microsoft-office.png" },
    { name: "Trello", image: "/img/tools/trello.png" },
    { name: "Slack", image: "/img/tools/slack.png" },
  ]

  const languages = [
    { name: language === "fr" ? "Arabe" : "Arabic", level: language === "fr" ? "Natif" : "Native", percentage: 100 },
    {
      name: language === "fr" ? "Anglais" : "English",
      level: language === "fr" ? "Courant" : "Fluent",
      percentage: 90,
    },
    {
      name: language === "fr" ? "Français" : "French",
      level: language === "fr" ? "Courant" : "Fluent",
      percentage: 90,
    },
    {
      name: language === "fr" ? "Italien" : "Italian",
      level: language === "fr" ? "Débutant" : "Beginner",
      percentage: 30,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 font-montserrat"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {language === "fr" ? "Mon Expertise" : "My Expertise"}
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {language === "fr" ? "Compétences & Capacités" : "Skills & Abilities"}
            </motion.h2>
            <motion.p
              className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {language === "fr"
                ? "Un ensemble de compétences complet alliant créativité, technologie et communication pour des résultats percutants."
                : "A comprehensive skill set combining creativity, technology, and communication for impactful results."}
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-xl bg-white dark:bg-gray-950 shadow-xl border-0 overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
                {/* Gradient background */}
                <div className={`absolute inset-0 ${category.bgColor} opacity-90`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold flex items-center gap-3 mb-6 ${category.color}`}>
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">{category.icon}</div>
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium font-montserrat text-sm text-white">{skill.name}</span>
                          <span className="text-sm font-bold text-white">{skill.percentage}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-white shadow-lg"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-bold text-center flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <PenTool className="h-6 w-6 text-blue-500" />
              {language === "fr" ? "Outils & Logiciels" : "Tools & Software"}
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-800 hover:shadow-xl transition-all group-hover:scale-110 p-2">
                    <img src={tool.image || "/placeholder.svg"} alt={tool.name} className="w-10 h-10 object-contain" />
                  </div>
                  <span className="mt-2 text-sm font-montserrat text-center font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-bold text-center flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              <Globe className="h-6 w-6 text-green-500" />
              {language === "fr" ? "Langues" : "Languages"}
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-gray-500">{lang.level}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
