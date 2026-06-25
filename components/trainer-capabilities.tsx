"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, FileText, Lightbulb, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const capabilities = [
  {
    icon: BookOpen,
    titleEn: "Training Module Design",
    titleFr: "Conception de Modules de Formation",
    titleAr: "تصميم وحدات التدريب",
    descEn: "Create comprehensive, practice-oriented training modules tailored to specific audiences and learning objectives",
    descFr: "Créer des modules de formation complets et axés sur la pratique adaptés à des audiences spécifiques et à des objectifs d'apprentissage",
    descAr: "إنشاء وحدات تدريبية شاملة وعملية موجهة نحو الممارسة مصممة خصيصاً للجماهير المحددة والأهداف التعليمية",
    outcomeEn: "Used in 10+ training cycles",
    outcomeFr: "Utilisé dans 10+ cycles de formation",
    outcomeAr: "مستخدم في أكثر من 10 دورات تدريبية",
  },
  {
    icon: FileText,
    titleEn: "Training Materials & Manuals",
    titleFr: "Matériels de Formation et Manuels",
    titleAr: "مواد التدريب والأدلة",
    descEn: "Develop high-quality training manuals, participant guides, and supplementary materials that enhance learning",
    descFr: "Développer des manuels de formation de haute qualité, des guides des participants et des matériels supplémentaires qui améliorent l'apprentissage",
    descAr: "تطوير أدلة تدريب عالية الجودة وأدلة المشاركين والمواد الإضافية التي تعزز التعلم",
    outcomeEn: "Participant guides for every session",
    outcomeFr: "Guides participants pour chaque session",
    outcomeAr: "أدلة مشاركين لكل جلسة",
  },
  {
    icon: CheckCircle2,
    titleEn: "Training Supervision & Analysis",
    titleFr: "Supervision et Analyse des Formations",
    titleAr: "الإشراف على التدريب والتحليل",
    descEn: "Supervise training delivery, monitor participant progress, and provide data-driven insights for continuous improvement",
    descFr: "Superviser la prestation de formation, suivre les progrès des participants et fournir des informations basées sur les données pour l'amélioration continue",
    descAr: "الإشراف على تقديم التدريب ومراقبة تقدم المشاركين وتقديم رؤى تحليلية لتحسين مستمر",
    outcomeEn: "Evaluation built into every cycle",
    outcomeFr: "Évaluation intégrée à chaque cycle",
    outcomeAr: "تقييم مدمج في كل دورة",
  },
  {
    icon: Users,
    titleEn: "Trainer Mentorship",
    titleFr: "Mentorat des Formateurs",
    titleAr: "إرشاد المدربين",
    descEn: "Guide and support emerging trainers in developing their skills, facilitating techniques, and professional growth",
    descFr: "Guider et soutenir les formateurs émergents dans le développement de leurs compétences et leur croissance professionnelle",
    descAr: "توجيه ودعم المدربين الناشئين في تطوير مهاراتهم وتقنيات تيسير ونموهم المهني",
    outcomeEn: "Train-the-trainer programs delivered",
    outcomeFr: "Programmes formation de formateurs",
    outcomeAr: "برامج تدريب المدربين",
  },
  {
    icon: Lightbulb,
    titleEn: "Coaching in Soft Skills",
    titleFr: "Coaching en Compétences Relationnelles",
    titleAr: "التدريب في المهارات الناعمة",
    descEn: "Provide individual and group coaching on communication, leadership, critical thinking, and professional development",
    descFr: "Fournir un coaching individuel et collectif sur la communication, le leadership, la pensée critique et le développement professionnel",
    descAr: "تقديم تدريب فردي وجماعي في التواصل والقيادة والتفكير النقدي والتطوير المهني",
    outcomeEn: "1:1 and group coaching formats",
    outcomeFr: "Formats coaching individuel et groupe",
    outcomeAr: "تدريب فردي وجماعي",
  },
  {
    icon: MessageSquare,
    titleEn: "Individual & Collective Support",
    titleFr: "Accompagnement Individuel et Collectif",
    titleAr: "الدعم الفردي والجماعي",
    descEn: "Offer tailored follow-up support, one-on-one coaching, and group facilitation to ensure sustained learning outcomes",
    descFr: "Offrir un suivi personnalisé, un coaching individuel et une facilitation de groupe pour assurer des résultats d'apprentissage durables",
    descAr: "تقديم دعم متابعة مخصص وتدريب فردي وتيسير جماعي لضمان نتائج تعليمية مستدامة",
    outcomeEn: "Follow-up after every workshop",
    outcomeFr: "Suivi après chaque atelier",
    outcomeAr: "متابعة بعد كل ورشة",
  },
] as const

export default function TrainerCapabilities() {
  const { language } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"

  return (
    <section className="w-full section-compact px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              {lang === "fr" ? "Domaines de Compétence" : lang === "ar" ? "مجالات الخبرة" : "Core Capabilities"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              {lang === "fr" ? "Services de Formation Complets" : lang === "ar" ? "خدمات التدريب الشاملة" : "Complete Training Services"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {lang === "fr"
                ? "Une gamme complète de services de formation professionnelle conçus pour répondre à vos besoins spécifiques et assurer des résultats durables."
                : lang === "ar"
                ? "مجموعة شاملة من خدمات التدريب المهني المصممة لتلبية احتياجاتك المحددة وضمان نتائج مستدامة."
                : "A comprehensive range of professional training services designed to meet your specific needs and ensure sustainable results."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((capability, i) => {
              const Icon = capability.icon
              const title = lang === "fr" ? capability.titleFr : lang === "ar" ? capability.titleAr : capability.titleEn
              const desc = lang === "fr" ? capability.descFr : lang === "ar" ? capability.descAr : capability.descEn
              const outcome = lang === "fr" ? capability.outcomeFr : lang === "ar" ? capability.outcomeAr : capability.outcomeEn
              const num = String(i + 1).padStart(2, "0")

              return (
                <motion.div
                  key={title}
                  className={`relative p-7 border border-border rounded-2xl hover:border-accent/40 transition-all hover:-translate-y-0.5 h-full flex flex-col ${
                    i % 2 === 0 ? "bg-card" : "bg-accent-subtle/40"
                  }`}
                  whileHover={{ y: -4 }}
                >
                  <span className="absolute top-4 right-5 text-5xl font-black text-accent/10 leading-none select-none">{num}</span>
                  <div className="mb-5 border-l-4 border-accent pl-4">
                    <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 pr-8">{title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1 mb-4">{desc}</p>
                  <p className="text-sm font-semibold text-accent inline-flex items-center gap-1">
                    <ArrowRight className="w-4 h-4" /> {outcome}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
