"use client"

import { ClipboardList, PenTool, Users, FileCheck } from "lucide-react"
import { trainingHowWeWork } from "@/lib/trainer"
import { useLanguage } from "@/components/language-provider"

const icons = [ClipboardList, PenTool, Users, FileCheck]

export default function TrainerHowWeWorkSection() {
  const { language } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"

  return (
    <section className="w-full section-compact px-4 md:px-8 bg-muted/30 dark:bg-slate-950/50">
      <div className="mx-auto max-w-5xl">
        <p className="label mb-2 text-center">
          {lang === "fr" ? "Processus" : lang === "ar" ? "العملية" : "Process"}
        </p>
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          {lang === "fr" ? "Comment nous travaillons ensemble" : lang === "ar" ? "كيف نعمل معاً" : "How we work together"}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainingHowWeWork.map((step, i) => {
            const Icon = icons[i] ?? ClipboardList
            const title = lang === "fr" ? step.titleFr : lang === "ar" ? step.titleAr : step.titleEn
            const desc = lang === "fr" ? step.descFr : lang === "ar" ? step.descAr : step.descEn
            return (
              <div key={step.step} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-display text-2xl font-black text-muted-foreground/40">{step.step}</span>
                </div>
                <h3 className="mb-2 font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
