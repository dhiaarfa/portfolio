"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CertificationsSection() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en"
    setLanguage(savedLang)
  }, [])

  const certifications = [
    {
      title: language === "fr" ? "Programme Training Youth Trainers (TYT)" : language === "ar" ? "برنامج تدريب المدربين الشباب (TYT)" : "Training Youth Trainers (TYT) Program",
      organization: language === "fr" ? "Association Youth Clubs" : language === "ar" ? "جمعية Youth Clubs" : "Association Youth Clubs",
      year: "2022",
      logo: "/images/logo-tyt-full-color.png",
    },
    {
      title: language === "fr" ? "Formateur Reconnu - Fédération Internationale des Associations d'Étudiants en Médecine" : language === "ar" ? "مدرب معترف به - الاتحاد الدولي لجمعيات طلاب الطب" : "Recognized Trainer Pool - International Federation of Medical Students' Associations (IFMSA)",
      organization: language === "fr" ? "IFMSA - Région Méditerranée Orientale" : language === "ar" ? "IFMSA - منطقة البحر الأبيض المتوسط الشرقية" : "IFMSA - Eastern Mediterranean Region",
      year: "2023",
      logo: "/images/logo-ifmsa.png",
    },
    {
      title: language === "fr" ? "Certification Professionnelle de Formation" : language === "ar" ? "شهادة التدريب المهنية" : "Professional Training Certification",
      organization: language === "fr" ? "Centre National de la Formation Continue et du Perfectionnement Professionnel (CNFCPP)" : language === "ar" ? "المركز الوطني للتكوين المستمر والتحسين المهني" : "National Center for Continuing Training & Professional Development (CNFCPP)",
      year: "2021",
      logo: "/images/logo-cnfcpp.png",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              {language === "fr" ? "Certifications" : language === "ar" ? "الشهادات" : "Certifications"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              {language === "fr" ? "Accréditations et Réalisations" : language === "ar" ? "الاعتمادات والإنجازات" : "Credentials & Achievements"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="p-6 border border-border rounded-2xl hover:border-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  {cert.logo && (
                    <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-foreground/5">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.organization}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  {!cert.logo && <Award className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.organization}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
