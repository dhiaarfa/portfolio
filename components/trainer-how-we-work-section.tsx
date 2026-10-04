"use client"

import Image from "next/image"
import { ClipboardList, PenTool, Users, FileCheck } from "lucide-react"
import { trainingHowWeWork } from "@/lib/trainer"
import { useLanguage } from "@/components/language-provider"

const icons = [ClipboardList, PenTool, Users, FileCheck]

export default function TrainerHowWeWorkSection() {
  const { language, t } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"

  return (
    <section id="trainer-process" className="w-full section-compact px-4 md:px-8 bg-muted/30 dark:bg-background/50">
      <div className="mx-auto max-w-5xl">
        {/* Charte-graphique pass (Oct 2026): a real facilitation photo now
            backs this heading instead of sitting in the old forced "In the
            field" gallery after the hero -- a genuine fit here since the
            photo shows exactly the facilitation process this section
            describes. */}
        <div className="relative overflow-hidden rounded-[2rem] border border-border mb-10">
          <div className="relative aspect-[4/3] sm:aspect-[21/9]">
            <Image
              src="/images/trainer/moment-keynote.jpg"
              alt="Dhia speaking with a microphone in front of zellige tilework"
              fill
              // Face sits at ~55% x / ~20% y of the source; text goes on the
              // opposite side so the face is never covered or cropped out.
              // Never mirrored in Arabic (Dhia's rule); the text box stays
              // physically on the left instead.
              className="object-cover object-[55%_8%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          </div>
          <div className="absolute inset-y-0 left-0 flex w-[44%] flex-col items-start justify-center text-start px-5 sm:px-10 md:px-14">
            <p className="label !text-white/80 mb-2">
              {/* The named method (Oct 2026), shared with /designer. */}
              {t("methodName")}
            </p>
            <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-white">
              {lang === "fr" ? "Comment nous travaillons ensemble" : lang === "ar" ? "كيف نعمل معاً" : "How we work together"}
            </h2>
          </div>
        </div>
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
                  <span className="font-display text-2xl font-black text-muted-foreground">{step.step}</span>
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
