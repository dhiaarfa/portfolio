"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, MapPin, Calendar, Award } from "lucide-react"
import { getTranslation, type Language } from "@/lib/translations"

interface CivicWorkProps {
  language: Language
}

export default function CivicWork({ language }: CivicWorkProps) {
  const t = (key: keyof typeof import("@/lib/translations").translations.en) => getTranslation(language, key)

  const internationalDelegations = [
    {
      title: "IOM - UN Migration Regional Hackathon",
      location: "Doha, Qatar 🇶🇦",
      year: "2024",
      logo: "/img/organizations/iom-logo.jpg",
      description:
        language === "fr"
          ? "Sélectionné parmi les 5% meilleurs pour représenter la Tunisie au hackathon régional de l'OIM sur la migration. L'événement a rassemblé des individus passionnés de Tunisie et du Qatar, tous animés par un objectif commun : rendre le parcours migratoire plus fluide et inclusif pour les jeunes."
          : "Selected as part of the top 5% to represent Tunisia at the IOM - UN Migration Regional Hackathon. The event brought together passionate individuals from Tunisia and Qatar, all driven by a shared goal: making the migration journey smoother and more inclusive for young people.",
      achievement: language === "fr" ? "Top 5% Sélection" : "Top 5% Selection",
      details:
        language === "fr"
          ? "Travail axé sur la résolution des défis clés comme les barrières de communication et l'accès aux ressources fiables. Exploration de l'utilisation de l'IA et d'outils innovants pour mieux connecter les migrants avec leurs nouvelles communautés et opportunités."
          : "Work focused on overcoming key challenges like communication barriers and access to trusted resources. Explored ways to leverage AI and innovative tools to better connect migrants with their new communities and opportunities.",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      color: "border-l-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "IFMSA EMR Camp 3.0",
      location: "Amman, Jordan 🇯🇴",
      year: "2025 (June 20-24)",
      logo: "/img/organizations/emr-camp.jpg",
      description:
        language === "fr"
          ? "Formateur/Facilitateur au Camp EMR 3.0 de l'IFMSA, la troisième édition du camp de la Région Méditerranée Orientale organisé par IFMSA-Jo. Plateforme pour les étudiants en médecine pour améliorer leurs compétences en leadership, plaidoyer et gestion de projet."
          : "Trainer/Facilitator at IFMSA EMR Camp 3.0, the third edition of the Eastern Mediterranean Region Camp organized by IFMSA-Jo. Platform for medical students to enhance their skills in leadership, advocacy, and project management.",
      achievement: language === "fr" ? "Formateur International" : "International Trainer",
      details:
        language === "fr"
          ? "Conception et animation d'ateliers interactifs sur la santé sexuelle et reproductive, les droits humains et le plaidoyer en santé publique. Mentorat des participants et collaboration avec d'autres formateurs pour une expérience d'apprentissage cohérente."
          : "Designing and delivering interactive workshops on sexual and reproductive health, human rights, and public health advocacy. Mentoring participants and collaborating with other trainers for a cohesive learning experience.",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      color: "border-l-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ]

  const civicEngagements = [
    {
      organization: "AIESEC",
      logo: "/img/organizations/aiesec.png",
      roles: [
        language === "fr"
          ? "Membre de l'Équipe de Support Global - AIESEC Global (2024)"
          : "Global Support Team Member - AIESEC Global (2024)",
        language === "fr"
          ? "Responsable Développement Commercial - AIESEC au Liban (2024)"
          : "Business Development Manager - AIESEC in Lebanon (2024)",
        language === "fr"
          ? "Designer Graphique Équipe Organisatrice - Réunion Internationale des Présidents (2024)"
          : "Organizing Team Graphic Designer - International President's Meeting (2024)",
        language === "fr"
          ? "Designer Graphique Équipe Organisatrice - Sommet International MEA (2023)"
          : "Organizing Team Graphic Designer - MEA International Summit (2023)",
        language === "fr"
          ? "Responsable Marketing & RP - MeetUp Pro 1.0 - Sousse (2023)"
          : "Head of Marketing & PR - MeetUp Pro 1.0 - Sousse (2023)",
        language === "fr"
          ? "Assistant National Marketing - AIESEC en Tunisie (2023-2024)"
          : "Marketing National Assistant - AIESEC in Tunisia (2023-2024)",
        language === "fr"
          ? "Membre Équipe Marketing - LC Sousse (2022-2024)"
          : "Marketing Team Member - LC Sousse (2022-2024)",
        language === "fr"
          ? "Responsable Marketing & RP - Youth Speak Forum Sousse 2.0 (2022)"
          : "Marketing & PR Responsible - Youth Speak Forum Sousse 2.0 (2022)",
      ],
      period: language === "fr" ? "Octobre 2022 - Juin 2024" : "October 2022 - June 2024",
      impact: language === "fr" ? "Leadership International" : "International Leadership",
    },
    {
      organization: "Association YOUTH CLUBs (AYCs)",
      logo: "/img/organizations/youth-clubs.png",
      description:
        language === "fr"
          ? "Formateur, Activiste de l'Éducation, Ex-Leader d'un chapitre local, Conseiller Juridique de 3 Assemblées Générales. Formation et animation de sessions et ateliers sur différents domaines et sujets."
          : "Trainer, Education Activist, Ex-Leader of a local chapter, Jural Advisor of 3 General Assemblies. Training and facilitation of sessions and workshops on different fields and subjects.",
      period: language === "fr" ? "Septembre 2019 - Présent" : "September 2019 - Present",
      impact: language === "fr" ? "Développement Jeunesse" : "Youth Development",
    },
    {
      organization: "Tunisian International Model United Nations",
      logo: "/img/organizations/timun.png",
      description:
        language === "fr"
          ? "Membre/Délégué dans les simulations de Modèle des Nations Unies, représentant divers pays et abordant les enjeux mondiaux."
          : "Member/Delegate in Model United Nations simulations, representing various countries and addressing global issues.",
      period:
        language === "fr"
          ? "Janvier - Décembre 2021 & Octobre 2024 - Présent"
          : "January - December 2021 & October 2024 - Present",
      impact: language === "fr" ? "Diplomatie & Affaires Mondiales" : "Diplomacy & Global Affairs",
    },
    {
      organization: "JCI Nouvelle Medina",
      logo: "/img/organizations/jci.png",
      description:
        language === "fr"
          ? "Membre actif participant aux programmes de développement communautaire et de leadership axés sur l'impact local."
          : "Active member participating in community development and leadership programs focused on local impact.",
      period: language === "fr" ? "Juillet 2020 - Décembre 2021" : "July 2020 - December 2021",
      impact: language === "fr" ? "Développement Communautaire" : "Community Development",
    },
    {
      organization: "1000 Challenges School",
      logo: "/img/organizations/1000-challenges.png",
      description:
        language === "fr"
          ? "Participant de la 2ème cohorte axée sur la négociation, le plaidoyer, la démocratie, le leadership et la géopolitique."
          : "2nd Cohort participant focusing on negotiation, advocacy, democracy, leadership, and geopolitics.",
      period: "2024",
      impact: language === "fr" ? "Développement du Leadership" : "Leadership Development",
    },
    {
      organization: "IFMSA",
      logo: "/img/organizations/ifmsa.png",
      description:
        language === "fr"
          ? "Formateur Externe pour la Fédération Internationale des Associations d'Étudiants en Médecine."
          : "External Trainer for the International Federation of Medical Students' Associations.",
      period: "2023",
      impact: language === "fr" ? "Éducation Médicale" : "Medical Education",
    },
  ]

  return (
    <section id="civic-work" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t("globalImpact")}
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t("civicWorkTitle")}
            </motion.h2>
            <motion.p
              className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("civicWorkDesc")}
            </motion.p>
          </div>
        </div>

        {/* International Delegations */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Globe className="h-6 w-6 text-blue-500" />
            {t("internationalDelegations")}
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {internationalDelegations.map((delegation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full border-l-4 ${delegation.color} hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                >
                  <div className={`h-2 ${delegation.bgColor}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex flex-col items-center gap-2">
                        <motion.div
                          className={`rounded-full ${delegation.bgColor} p-3 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {delegation.icon}
                        </motion.div>
                        {delegation.logo && (
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md">
                            <img
                              src={delegation.logo || "/placeholder.svg"}
                              alt={delegation.title}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
                          {delegation.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{delegation.location}</span>
                          <span>•</span>
                          <Calendar className="h-4 w-4" />
                          <span>{delegation.year}</span>
                        </div>
                        <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          <Award className="inline h-3 w-3 mr-1" />
                          {delegation.achievement}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{delegation.description}</p>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-l-4 border-l-blue-300">
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">{delegation.details}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Civic Engagements */}
        <div className="mt-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t("civilSocietyOrgs")}
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {civicEngagements.map((engagement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group glass">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="h-16 w-16 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <img
                          src={engagement.logo || "/placeholder.svg"}
                          alt={engagement.organization}
                          className="w-12 h-12 object-contain"
                        />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-bold group-hover:text-green-600 transition-colors">
                          {engagement.organization}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{engagement.period}</p>
                        <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium mt-1">
                          {engagement.impact}
                        </div>
                      </div>
                    </div>

                    {engagement.roles ? (
                      <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                        {engagement.roles.slice(0, 3).map((role, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm">{role}</span>
                          </motion.li>
                        ))}
                        {engagement.roles.length > 3 && (
                          <li className="text-sm text-green-600 dark:text-green-400 font-medium">
                            +{engagement.roles.length - 3} {language === "fr" ? "autres rôles" : "more roles"}
                          </li>
                        )}
                      </ul>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{engagement.description}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
