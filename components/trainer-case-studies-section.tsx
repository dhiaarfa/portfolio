"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { publishedTrainingCaseStudies } from "@/lib/trainer"

export default function TrainerCaseStudiesSection() {
  const { language, t } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const studies = publishedTrainingCaseStudies()

  return (
    <section id="training-portfolio" className="space-y-8 pt-8 border-t border-border">
      <div>
        <h3 className="text-2xl font-bold md:text-3xl">
          {lang === "fr" ? "Études de cas internationales" : lang === "ar" ? "دراسات حالة دولية" : "International case studies"}
        </h3>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {lang === "fr"
            ? "Contexte, livrables et résultats mesurables, pas seulement des photos."
            : lang === "ar"
            ? "السياق والمخرجات والنتائج، وليس الصور فقط."
            : "Context, deliverables, and measurable outcomes, not just photos."}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {studies.map((study, i) => {
          const client = lang === "fr" ? study.clientFr : lang === "ar" ? study.clientAr : study.clientEn
          const brief = lang === "fr" ? study.briefFr : lang === "ar" ? study.briefAr : study.briefEn
          const delivered = lang === "fr" ? study.deliveredFr : lang === "ar" ? study.deliveredAr : study.deliveredEn
          const outcome = lang === "fr" ? study.outcomeFr : lang === "ar" ? study.outcomeAr : study.outcomeEn
          const quote = study.quoteEn
            ? lang === "fr"
              ? study.quoteFr
              : lang === "ar"
              ? study.quoteAr
              : study.quoteEn
            : null
          const quoteAuthor = study.quoteAuthorEn
            ? lang === "fr"
              ? study.quoteAuthorFr
              : lang === "ar"
              ? study.quoteAuthorAr
              : study.quoteAuthorEn
            : null

          return (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="relative aspect-[16/10] bg-black">
                <Image src={study.image} alt={t(study.titleKey)} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
              <div className="space-y-3 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  {study.orgLogo && (
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-border">
                      <Image src={study.orgLogo} alt="" fill className="object-contain p-1" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-bold">{t(study.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground">{client}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-accent">
                      {lang === "fr" ? "Brief :" : lang === "ar" ? "الموجز:" : "Brief:"}
                    </span>{" "}
                    {brief}
                  </p>
                  <p>
                    <span className="font-semibold text-accent">
                      {lang === "fr" ? "Livré :" : lang === "ar" ? "ما قدمته:" : "Delivered:"}
                    </span>{" "}
                    {delivered}
                  </p>
                  <p>
                    <span className="font-semibold text-accent">
                      {lang === "fr" ? "Résultat :" : lang === "ar" ? "النتيجة:" : "Outcome:"}
                    </span>{" "}
                    {outcome}
                  </p>
                </div>
                {quote && (
                  <blockquote className="border-l-2 border-accent pl-3 text-sm italic text-muted-foreground">
                    &ldquo;{quote}&rdquo;
                    {quoteAuthor && <footer className="mt-1 not-italic text-xs font-medium text-foreground">— {quoteAuthor}</footer>}
                  </blockquote>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
