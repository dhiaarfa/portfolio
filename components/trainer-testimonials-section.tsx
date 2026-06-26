"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { trainingTestimonialsList } from "@/lib/trainer"

export default function TrainerTestimonialsSection() {
  const { language, t } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const items = trainingTestimonialsList()

  return (
    <section className="w-full section-compact px-4 md:px-8 bg-muted/30 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl">
        <p className="label mb-2 text-center">{t("testimonials")}</p>
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">{t("testimonialsDesc")}</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm text-muted-foreground">
          {lang === "fr"
            ? "Organisateurs et participants qui ont réservé des formations."
            : lang === "ar"
            ? "منظمون ومشاركون حجزوا جلسات تدريب."
            : "From organizers and participants who booked training sessions."}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, i) => {
            const quote = lang === "fr" ? item.quoteFr : lang === "ar" ? item.quoteAr : item.quoteEn
            const role = lang === "fr" ? item.roleFr : lang === "ar" ? item.roleAr : item.roleEn
            return (
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <Quote className="mb-3 h-5 w-5 text-accent/60" aria-hidden />
                <p className="mb-4 text-[15px] leading-relaxed text-foreground">&ldquo;{quote}&rdquo;</p>
                <footer>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </footer>
              </motion.blockquote>
            )
          })}
        </div>
      </div>
    </section>
  )
}
