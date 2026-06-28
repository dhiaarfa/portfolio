"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Gift } from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import TrainingMethodologySection from "@/components/training-methodology-section"
import CertificationsSection from "@/components/certifications-section"
import ClientLogosStrip from "@/components/client-logos-strip"
import TrainerTestimonialsSection from "@/components/trainer-testimonials-section"
import TrainerOffersSection from "@/components/trainer-offers-section"
import TrainerHowWeWorkSection from "@/components/trainer-how-we-work-section"
import TrainerRoleClarifier from "@/components/trainer-role-clarifier"
import ResourcesInsightsStrip from "@/components/resources-insights-strip"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"
import { formatStat, trainingMilestones } from "@/lib/profile"

export default function TrainerClientPage() {
  const { t } = useLanguage()

  const impactStats = [
    { number: formatStat("participantsTrained"), label: "Participants Trained", detail: "Across NGOs, youth clubs & associations" },
    { number: formatStat("trainingHours"), label: "Training Hours", detail: "Non-formal education & skills building" },
    { number: formatStat("facilitationHours"), label: "Facilitation Hours", detail: "Moderation, panels & collaborative spaces" },
    { number: formatStat("trainingCycles"), label: "Training Cycles Supervised", detail: "From design to delivery & evaluation" },
    { number: formatStat("yearsExperience"), label: "Years Experience", detail: "Youth work, civic engagement & training" },
    { number: "15+", label: "Partner Organizations", detail: "NGOs, schools, IFMSA, Rotary, AIESEC & more" },
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main className="w-full pt-0">
        {/* 1. Hero — who + outcome + dual CTAs */}
        <section className="relative min-h-[68vh] flex items-end overflow-hidden bg-slate-950">
          <div className="absolute inset-0 min-h-[400px]">
            <Image
              src="/images/photos/dhia-trainer-hero.png"
              alt="Dhia facilitating a youth training workshop"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/20" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 pt-32 w-full">
            <p className="label text-green-400 mb-4">{t("trainerHeroTitle")}</p>
            <h1 className="font-display font-black text-[clamp(36px,5.5vw,56px)] leading-[0.95] text-white tracking-tight mb-4 max-w-3xl">
              I help NGOs, schools, and youth organizations run trainings that actually change behavior.
            </h1>
            <p className="text-slate-300 text-[17px] max-w-2xl leading-relaxed mb-8">
              {formatStat("participantsTrained")} participants trained across Tunisia and beyond. CNFCPP-certified facilitator in Arabic, French, and English. Workshops, multi-session programs, and train-the-trainer.
            </p>
            <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-white/15">
              {[
                [formatStat("participantsTrained"), "Participants"],
                [formatStat("trainingHours"), "Training Hrs"],
                [formatStat("trainingCycles"), "Cycles"],
                [formatStat("yearsExperience"), "Yrs Exp"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display font-black text-[clamp(26px,4vw,40px)] text-white leading-none">{v}</p>
                  <p className="text-slate-400 text-[11px] uppercase tracking-wider mt-1">{l}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book a Workshop
              </a>
              <Link
                href="/freebies?category=training"
                className="inline-flex items-center gap-2 rounded-[14px] border border-white/25 px-6 py-3 font-medium text-white transition-all hover:border-white/50 hover:bg-white/5"
              >
                <Gift className="h-4 w-4" />
                Get free training resources
              </Link>
              <a
                href="#training-portfolio"
                className="inline-flex items-center rounded-[14px] border border-white/15 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-white/40 hover:text-white"
              >
                View training portfolio
              </a>
            </div>
          </div>
        </section>

        {/* 2. Trusted by */}
        <ClientLogosStrip />

        {/* 3. Testimonials */}
        <TrainerTestimonialsSection />

        {/* 4. Measurable results */}
        <section id="trainer-impact" className="w-full section-compact px-4 md:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-3 md:space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{t("impactMetrics")}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">{t("measurableResults")}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {impactStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="relative p-4 md:p-5 rounded-2xl md:rounded-3xl border border-border bg-gradient-to-br from-[var(--site-accent)]/10 to-emerald-50 dark:to-emerald-950/20 flex flex-col items-start gap-1 overflow-hidden"
                    whileHover={{ y: -4, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[var(--site-accent)]/15" />
                    <p className="text-3xl md:text-4xl font-bold text-[var(--site-accent)]">{stat.number}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                    <p className="text-[0.7rem] text-muted-foreground leading-snug mt-1">{stat.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Bookable offers */}
        <TrainerOffersSection />

        {/* 6. How we work */}
        <TrainerHowWeWorkSection />

        {/* 7. Trainer vs facilitator vs coach */}
        <TrainerRoleClarifier />

        {/* 8. Methodology depth */}
        <TrainingMethodologySection />

        {/* 9. Journey + In Action (credibility narrative) */}
        <section id="journey" className="w-full section-compact px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{t("myTrainingJourney")}</p>
                <h2 className="text-4xl md:text-5xl font-bold">{t("evolutionAsEducator")}</h2>
                <p className="text-muted-foreground text-lg max-w-3xl">{t("trainerJourneyIntro")}</p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-background to-card">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] md:aspect-square">
                    <Image
                      src="/images/dhia/speaking-mic.png"
                      alt="Mohamed Dhia facilitating a training session"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectPosition: "center top" }}
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center bg-card/50">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">In Action</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Real facilitation with clarity, energy, and measurable learning outcomes. Every session is designed so participants leave as capable actors, not passive listeners.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[var(--site-accent)]/10 text-[var(--site-accent)] rounded-full text-sm font-medium">Interactive Sessions</span>
                      <span className="px-3 py-1 bg-[var(--site-accent)]/10 text-[var(--site-accent)] rounded-full text-sm font-medium">Youth Development</span>
                      <span className="px-3 py-1 bg-[var(--site-accent)]/10 text-[var(--site-accent)] rounded-full text-sm font-medium">Leadership Training</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {trainingMilestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.year}
                    className="group relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start p-5 sm:p-6 md:p-8 border border-border rounded-2xl md:rounded-3xl hover:border-foreground/30 transition-all hover:bg-card">
                      <div className="space-y-1 md:space-y-2">
                        <p className="text-xs md:text-sm font-medium text-muted-foreground">YEAR</p>
                        <h3 className="text-3xl md:text-4xl font-bold">{milestone.year}</h3>
                      </div>
                      <div className="space-y-3 md:space-y-4 md:col-span-2">
                        <h4 className="text-2xl font-bold">{milestone.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                          {milestone.stats}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 10. Credentials + case studies */}
        <CertificationsSection />

        {/* 11. Free resources (secondary CTA reinforced) */}
        <section className="w-full py-14 px-4 md:px-8 bg-amber-50 dark:bg-amber-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="label mb-2 text-amber-800 dark:text-amber-200">Free lead magnet</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Free training resources</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Workshop template, icebreakers, and facilitator checklist. Real tools from real sessions, free to download.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/freebies?category=training" className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2">
                <Gift className="h-4 w-4" />
                Get free resources
              </Link>
              <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-amber-600/40 text-amber-900 dark:text-amber-100 font-semibold rounded-xl hover:bg-amber-100/50 dark:hover:bg-amber-900/30 transition-colors inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book a discovery call
              </a>
            </div>
          </div>
        </section>

        {/* 12. Final CTA + contact */}
        <ResourcesInsightsStrip focus="training" className="bg-section-tint" />

        <section id="contact-form" className="w-full section-compact px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{t("requestTraining")}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">{t("readyToTransformLearning")}</h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">{t("requestTrainingDesc")}</p>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green inline-flex items-center gap-2 mt-2"
                >
                  <Calendar className="h-4 w-4" />
                  Book on Calendly (2 clicks)
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
