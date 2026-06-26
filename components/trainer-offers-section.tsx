"use client"

import { ArrowRight, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { publishedTrainingOffers } from "@/lib/trainer"
import { siteConfig } from "@/lib/site-config"

export default function TrainerOffersSection() {
  const { language } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const offers = publishedTrainingOffers()

  return (
    <section id="training-offers" className="w-full section-compact px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="label mb-2">
          {lang === "fr" ? "Offres réservables" : lang === "ar" ? "عروض قابلة للحجز" : "Bookable offers"}
        </p>
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">
          {lang === "fr"
            ? "Ce que vous pouvez réserver"
            : lang === "ar"
            ? "ما يمكنك حجزه"
            : "What you can book"}
        </h2>
        <p className="mb-10 max-w-2xl text-muted-foreground">
          {lang === "fr"
            ? "Format, public, livrables et résultat attendu. Chaque offre inclut une analyse des besoins."
            : lang === "ar"
            ? "الصيغة، الجمهور، المخرجات والنتيجة المتوقعة. كل عرض يتضمن تحليل احتياجات."
            : "Format, audience, deliverables, and expected outcome. Every offer includes a needs analysis."}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {offers.map((offer, i) => {
            const name = lang === "fr" ? offer.nameFr : lang === "ar" ? offer.nameAr : offer.nameEn
            const forWho = lang === "fr" ? offer.forFr : lang === "ar" ? offer.forAr : offer.forEn
            const format = lang === "fr" ? offer.formatFr : lang === "ar" ? offer.formatAr : offer.formatEn
            const includes = lang === "fr" ? offer.includesFr : lang === "ar" ? offer.includesAr : offer.includesEn
            const outcome = lang === "fr" ? offer.outcomeFr : lang === "ar" ? offer.outcomeAr : offer.outcomeEn
            const pricing = lang === "fr" ? offer.pricingFr : lang === "ar" ? offer.pricingAr : offer.pricingEn

            return (
              <motion.article
                key={offer.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="mb-1 text-xl font-bold">{name}</h3>
                <p className="mb-3 text-sm text-accent font-medium">
                  {lang === "fr" ? "Pour :" : lang === "ar" ? "لـ:" : "For:"} {forWho}
                </p>
                <p className="mb-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{format}</p>
                <ul className="mb-4 flex-1 space-y-1.5">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-4 text-sm font-semibold text-foreground">{outcome}</p>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="text-sm font-medium text-muted-foreground">{pricing}</span>
                  <a
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    {lang === "fr" ? "Réserver / Demander" : lang === "ar" ? "احجز / استفسر" : "Enquire / Book"}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-border bg-muted/30 p-5 sm:flex-row">
          <div>
            <p className="font-semibold">
              {lang === "fr" ? "Programme sur mesure" : lang === "ar" ? "برنامج مخصص" : "Custom program"}
            </p>
            <p className="text-sm text-muted-foreground">
              {lang === "fr"
                ? "Mix d'ateliers, TOT ou facilitation pour votre organisation."
                : lang === "ar"
                ? "مزيج من ورش العمل أو TOT أو التيسير لمنظمتك."
                : "Mix of workshops, TOT, or facilitation tailored to your organization."}
            </p>
          </div>
          <a href="#contact-form" className="btn-green inline-flex items-center gap-2 whitespace-nowrap">
            <Calendar className="h-4 w-4" />
            {lang === "fr" ? "Discutons" : lang === "ar" ? "لنتحدث" : "Let's talk"}
          </a>
        </div>
      </div>
    </section>
  )
}
