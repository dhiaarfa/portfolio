"use client"

import { GraduationCap, Users, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const roles = [
  {
    icon: GraduationCap,
    titleEn: "Training",
    titleFr: "Formation",
    titleAr: "تدريب",
    descEn: "I transfer skills and knowledge with structured learning outcomes.",
    descFr: "Je transfère compétences et savoirs avec des objectifs d'apprentissage structurés.",
    descAr: "أنقل المهارات والمعرفة بأهداف تعلم منظمة.",
  },
  {
    icon: Users,
    titleEn: "Facilitation",
    titleFr: "Facilitation",
    titleAr: "تيسير",
    descEn: "I guide your group to its own answers through safe, participatory process.",
    descFr: "Je guide votre groupe vers ses propres réponses via un processus participatif sécurisé.",
    descAr: "أوجّه مجموعتك نحو إجاباتها عبر عملية مشاركة آمنة.",
  },
  {
    icon: MessageCircle,
    titleEn: "Coaching",
    titleFr: "Coaching",
    titleAr: "تدريب فردي",
    descEn: "I support individuals on leadership, communication, and professional growth.",
    descFr: "J'accompagne les individus en leadership, communication et développement professionnel.",
    descAr: "أدعم الأفراد في القيادة والتواصل والنمو المهني.",
  },
]

export default function TrainerRoleClarifier() {
  const { language } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"

  return (
    <section className="w-full py-10 px-4 md:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 md:p-8">
        <p className="label mb-3 text-center">
          {lang === "fr" ? "Clarification" : lang === "ar" ? "توضيح" : "Clarity"}
        </p>
        <h2 className="mb-2 text-center text-xl font-bold md:text-2xl">
          {lang === "fr"
            ? "Formateur · Facilitateur · Coach"
            : lang === "ar"
            ? "مدرب · ميسّر · coach"
            : "Trainer · Facilitator · Coach"}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground">
          {lang === "fr"
            ? "Dites-moi votre objectif et je recommanderai le format adapté."
            : lang === "ar"
            ? "أخبرني بهدفك وسأقترح الصيغة المناسبة."
            : "Tell me your goal and I'll recommend the right format."}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role) => {
            const title = lang === "fr" ? role.titleFr : lang === "ar" ? role.titleAr : role.titleEn
            const desc = lang === "fr" ? role.descFr : lang === "ar" ? role.descAr : role.descEn
            const Icon = role.icon
            return (
              <div key={title} className="rounded-xl border border-border bg-background p-4 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 font-semibold">{title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
