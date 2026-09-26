"use client"

import Image from "next/image"
import { Link } from "next-view-transitions"
import { motion } from "framer-motion"
import { Calendar, Gift } from "lucide-react"
import Navbar from "@/components/navbar-new"
import RoleHero from "@/components/role-hero"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import TrainingMethodologySection from "@/components/training-methodology-section"
import CertificationsSection from "@/components/certifications-section"
import ClientLogosStrip from "@/components/client-logos-strip"
import TrainerOffersSection from "@/components/trainer-offers-section"
import TrainerHowWeWorkSection from "@/components/trainer-how-we-work-section"
import TrainerRoleClarifier from "@/components/trainer-role-clarifier"
import ResourcesInsightsStrip from "@/components/resources-insights-strip"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"
import { formatStat, profileStats, trainingMilestones } from "@/lib/profile"
import { StatRing } from "@/components/ui/stat-ring"
import { AnimatedNumber } from "@/components/ui/animated-number"

export default function TrainerClientPage() {
  const { t } = useLanguage()

  // `progress` is stylistic (these are counts, not percentages) — varied per
  // stat so the row of rings reads as a designed chart rather than six
  // identical circles with numbers dropped in.
  const impactStats = [
    { number: formatStat("participantsTrained"), label: "Participants Trained", detail: "Across NGOs, youth clubs & associations", progress: 0.86 },
    { number: formatStat("trainingHours"), label: "Training Hours", detail: "Non-formal education & skills building", progress: 0.74 },
    { number: formatStat("facilitationHours"), label: "Facilitation Hours", detail: "Moderation, panels & collaborative spaces", progress: 0.5 },
    { number: formatStat("trainingCycles"), label: "Training Events", detail: "From design to delivery & evaluation", progress: 0.62 },
    { number: formatStat("yearsExperience"), label: "Years Experience", detail: "Youth work, civic engagement & training", progress: 0.4 },
    { number: "15+", label: "Partner Organizations", detail: "NGOs, schools, IFMSA, Rotary, AIESEC & more", progress: 0.58 },
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main id="main-content" className="w-full pt-0">
        {/* 1. Hero — who + outcome + dual CTAs */}
        <RoleHero
          variant="background"
          media={
            <>
              <Image
                src="/images/photos/dhia-trainer-hero.png"
                alt="Dhia facilitating a youth training workshop"
                fill
                className="object-cover object-top"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#1C1C1C]/70 to-[#1C1C1C]/20" />
            </>
          }
        >
            <p className="label text-green-400 mb-4">{t("trainerHeroTitle")}</p>
            <h1 className="h1-hero text-white mb-4 max-w-3xl">
              I help NGOs, schools, and youth organizations run trainings that actually change behavior.
            </h1>
            <p className="text-slate-300 text-[17px] max-w-2xl leading-relaxed mb-8">
              {formatStat("participantsTrained")} participants trained across Tunisia and beyond. CNFCPP-certified facilitator in Arabic, French, and English. Workshops, multi-session programs, and train-the-trainer.
            </p>
            <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-white/15">
              {[
                { stat: profileStats.participantsTrained, label: "Participants" },
                { stat: profileStats.trainingHours, label: "Training Hrs" },
                { stat: profileStats.trainingCycles, label: "Cycles" },
                { stat: profileStats.yearsExperience, label: "Yrs Exp" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    instant
                    className="block font-display font-black text-[clamp(26px,4vw,40px)] text-white leading-none tabular-nums"
                  />
                  <p className="text-slate-400 text-[12px] uppercase tracking-wider mt-1">{label}</p>
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
        </RoleHero>

        {/* 2. Trusted by */}
        <ClientLogosStrip />

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

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 place-items-center">
                {impactStats.map((stat, i) => (
                  <StatRing
                    key={stat.label}
                    value={stat.number}
                    label={stat.label}
                    sublabel={stat.detail}
                    progress={stat.progress}
                    delay={i * 0.06}
                  />
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

        {/* 11. Final CTA + contact — the hero already offers both "book a
            call" and "free resources" up front (see Book a Workshop / Get
            free training resources above), so this used to repeat both
            verbatim in an amber band right before this section. Removed:
            the navbar's persistent CTA plus this one closing CTA is enough
            reinforcement without restating the same two links a third time
            on one scroll (Master to-do list, Tier 4 — CTA redundancy). */}
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
