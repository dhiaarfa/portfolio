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
import ToolsStackSection from "@/components/tools-stack-section"
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

// One real photo per timeline era (Dhia's own event/training photos,
// already used elsewhere on the site), for the compact photo-led timeline
// below -- purely illustrative of that period, not a claim about the exact
// event named in the milestone's title.
const milestonePhotos: Record<string, string> = {
  "2019": "/images/bg/bg-exhibition.jpg",
  "2022": "/images/bg/bg-work-session.jpg",
  "2024": "/images/trainer/scorp-camp-25.png",
  "2025": "/images/trainer/iom-hackathon-doha-2024.png",
  "2026": "/images/trainer/tnhrt-carthaginian-camp.png",
}

export default function TrainerClientPage() {
  const { t } = useLanguage()

  // `progress` is stylistic (these are counts, not percentages), varied per
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
        {/* 1. Hero, who + outcome + dual CTAs */}
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

              {/* Was a 50/50 grid with the image forced to aspect-square --
                  on a wide desktop viewport that made the row extremely
                  tall (the image's own width dictated its height), so the
                  short text column ended up centered inside a huge box with
                  a lot of empty space below it ("beaucoup de gaspillage").
                  Fixed by capping the row's overall height and letting the
                  image use a normal landscape aspect ratio instead of a
                  square, so both columns stay compact and proportional. */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-background to-card">
                <div className="grid md:grid-cols-2 gap-0 md:max-h-[320px]">
                  <div className="relative aspect-[16/10] md:aspect-auto md:h-full">
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

              {/* Was 5 large bordered boxes, each with a giant standalone
                  "YEAR" + 4xl digit taking a full grid column purely for
                  decoration -- tall, repetitive, and static (no motion once
                  the page had loaded). Replaced with a compact connected
                  timeline: a real photo from that era sits in each node on
                  the connecting line, and the year moves into a small pill
                  next to the title instead of its own oversized block, so
                  the whole thing takes roughly half the vertical space and
                  reads as a photo-led story rather than a data table. */}
              <div className="relative pl-16 sm:pl-20">
                <div className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-px bg-border" aria-hidden />
                <div className="space-y-6">
                  {trainingMilestones.map((milestone, i) => (
                    <motion.div
                      key={milestone.year}
                      className="group relative"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true, margin: "-60px" }}
                    >
                      <div className="absolute -left-16 sm:-left-20 top-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-background ring-1 ring-border shadow-sm">
                        <Image
                          src={milestonePhotos[milestone.year]}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="64px"
                          aria-hidden
                        />
                      </div>
                      <div className="rounded-2xl border border-border p-4 sm:p-5 transition-all group-hover:border-foreground/30 group-hover:bg-card">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-bold text-accent bg-accent/10 rounded-full px-2.5 py-0.5">{milestone.year}</span>
                          <h4 className="text-lg sm:text-xl font-bold">{milestone.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{milestone.description}</p>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-background border border-border rounded-full text-xs font-medium">
                          {milestone.stats}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Facilitation-relevant slice of the full tools table -- the
            complete list lives on the homepage now (see HomePageClient.tsx),
            per Dhia's ask to avoid repeating the whole table on every page. */}
        <ToolsStackSection compact groups={["productivity"]} />

        {/* 10. Credentials + case studies */}
        <CertificationsSection />

        {/* 11. Final CTA + contact, the hero already offers both "book a
            call" and "free resources" up front (see Book a Workshop / Get
            free training resources above), so this used to repeat both
            verbatim in an amber band right before this section. Removed:
            the navbar's persistent CTA plus this one closing CTA is enough
            reinforcement without restating the same two links a third time
            on one scroll (Master to-do list, Tier 4, CTA redundancy). */}
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
