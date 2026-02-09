"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, FileText, Lightbulb, CheckCircle2, MessageSquare } from "lucide-react"
import { useState, useEffect } from "react"

export default function TrainerCapabilities() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en"
    setLanguage(savedLang)
  }, [])

  const capabilities = [
    {
      icon: BookOpen,
      titleEn: "Training Module Design",
      titleFr: "Conception de Modules de Formation",
      titleAr: "تصميم وحدات التدريب",
      descEn: "Create comprehensive, practice-oriented training modules tailored to specific audiences and learning objectives",
      descFr: "Créer des modules de formation complets et axés sur la pratique adaptés à des audiences spécifiques et à des objectifs d'apprentissage",
      descAr: "إنشاء وحدات تدريبية شاملة وعملية موجهة نحو الممارسة مصممة خصيصاً للجماهير المحددة والأهداف التعليمية",
    },
    {
      icon: FileText,
      titleEn: "Training Materials & Manuals",
      titleFr: "Matériels de Formation et Manuels",
      titleAr: "مواد التدريب والأدلة",
      descEn: "Develop high-quality training manuals, participant guides, and supplementary materials that enhance learning",
      descFr: "Développer des manuels de formation de haute qualité, des guides des participants et des matériels supplémentaires qui améliorent l'apprentissage",
      descAr: "تطوير أدلة تدريب عالية الجودة وأدلة المشاركين والمواد الإضافية التي تعزز التعلم",
    },
    {
      icon: CheckCircle2,
      titleEn: "Training Supervision & Analysis",
      titleFr: "Supervision et Analyse des Formations",
      titleAr: "الإشراف على التدريب والتحليل",
      descEn: "Supervise training delivery, monitor participant progress, and provide data-driven insights for continuous improvement",
      descFr: "Superviser la prestation de formation, suivre les progrès des participants et fournir des informations basées sur les données pour l'amélioration continue",
      descAr: "الإشراف على تقديم التدريب ومراقبة تقدم المشاركين وتقديم رؤى تحليلية لتحسين مستمر",
    },
    {
      icon: Users,
      titleEn: "Trainer Mentorship",
      titleFr: "Mentorat des Formateurs",
      titleAr: "إرشاد المدربين",
      descEn: "Guide and support emerging trainers in developing their skills, facilitating techniques, and professional growth",
      descFr: "Guider et soutenir les formateurs émergents dans le développement de leurs compétences et leur croissance professionnelle",
      descAr: "توجيه ودعم المدربين الناشئين في تطوير مهاراتهم وتقنيات تيسير ونموهم المهني",
    },
    {
      icon: Lightbulb,
      titleEn: "Coaching in Soft Skills",
      titleFr: "Coaching en Compétences Relationnelles",
      titleAr: "التدريب في المهارات الناعمة",
      descEn: "Provide individual and group coaching on communication, leadership, critical thinking, and professional development",
      descFr: "Fournir un coaching individuel et collectif sur la communication, le leadership, la pensée critique et le développement professionnel",
      descAr: "تقديم تدريب فردي وجماعي في التواصل والقيادة والتفكير النقدي والتطوير المهني",
    },
    {
      icon: MessageSquare,
      titleEn: "Individual & Collective Support",
      titleFr: "Accompagnement Individuel et Collectif",
      titleAr: "الدعم الفردي والجماعي",
      descEn: "Offer tailored follow-up support, one-on-one coaching, and group facilitation to ensure sustained learning outcomes",
      descFr: "Offrir un suivi personnalisé, un coaching individuel et une facilitation de groupe pour assurer des résultats d'apprentissage durables",
      descAr: "تقديم دعم متابعة مخصص وتدريب فردي وتيسير جماعي لضمان نتائج تعليمية مستدامة",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              {language === "fr" ? "Domaines de Compétence" : language === "ar" ? "مجالات الخبرة" : "Core Capabilities"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              {language === "fr"
                ? "Services de Formation Complets"
                : language === "ar"
                ? "خدمات التدريب الشاملة"
                : "Complete Training Services"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {language === "fr"
                ? "Une gamme complète de services de formation professionnelle conçus pour répondre à vos besoins spécifiques et assurer des résultats durables."
                : language === "ar"
                ? "مجموعة شاملة من خدمات التدريب المهني المصممة لتلبية احتياجاتك المحددة وضمان نتائج مستدامة."
                : "A comprehensive range of professional training services designed to meet your specific needs and ensure sustainable results."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, i) => {
              const Icon = capability.icon
              const title =
                language === "fr"
                  ? capability.titleFr
                  : language === "ar"
                  ? capability.titleAr
                  : capability.titleEn
              const desc =
                language === "fr"
                  ? capability.descFr
                  : language === "ar"
                  ? capability.descAr
                  : capability.descEn

              return (
                <motion.div
                  key={i}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/50 transition-all hover:bg-card/50 group"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--zia-green))] to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
