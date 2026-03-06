"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import TrainerCapabilities from "@/components/trainer-capabilities"
import CertificationsSection from "@/components/certifications-section"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"

export default function TrainerClientPage() {
  const { t } = useLanguage()

  const journeyMilestones = [
    {
      year: "2022",
      title: "National Certified Trainer from CNFCPP",
      description:
        "Achieved official certification from National Center for Continuing Training and Professional Promotion",
      stats: "Professional Credentials",
    },
    {
      year: "2022",
      title: "Training Pioneer",
      description: "Began delivering comprehensive training through ONGs, social programs, and youth events",
      stats: "Training Launch",
    },
    {
      year: "2019",
      title: "Youth Development Leader & Activist",
      description: "Started youth development and civic engagement initiatives, driving social impact",
      stats: "Advocacy Start",
    },
    {
      year: "2025",
      title: "Certified Trainer & Impact Leader",
      description:
        "Delivered 450+ training hours and 30+ facilitation hours for 1000+ participants across multiple organizations",
      stats: "1000+ Participants",
    },
  ]

  const impactStats = [
    { number: "1000+", label: "Participants Trained", detail: "Across NGOs, youth clubs & associations" },
    { number: "450+", label: "Training Hours", detail: "Non‑formal education & skills building" },
    { number: "30+", label: "Facilitation Hours", detail: "Moderation, panels & collaborative spaces" },
    { number: "10+", label: "Training Cycles Supervised", detail: "From design to delivery & evaluation" },
    { number: "7+", label: "Years Experience", detail: "Youth work, civic engagement & training" },
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main className="w-full pt-0">
        {/* Hero — full-cover photo + overlaid text */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-slate-950">
          <div className="absolute inset-0 min-h-[400px]">
            <Image
              src="/images/photos/dhia-trainer.png"
              alt="Dhia training"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/65 to-slate-900/10" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 pt-32 w-full">
            <p className="label text-green-400 mb-4">{t("trainerHeroTitle")}</p>
            <h1 className="font-display font-black text-[60px] leading-[0.93] text-white tracking-tight mb-4 max-w-2xl">
              Youth Development<br />& Leadership
            </h1>
            <p className="text-slate-300 text-[18px] max-w-xl leading-relaxed mb-8">
              1000+ participants trained. Certified by CNFCPP. Empowering the next generation.
            </p>
            <div className="flex flex-wrap gap-10 mb-8 pb-8 border-b border-white/15">
              {[["1000+", "Participants"], ["450+", "Training Hrs"], ["10+", "Cycles"], ["7+", "Yrs Exp"]].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display font-black text-[clamp(26px,4vw,40px)] text-white leading-none">{v}</p>
                  <p className="text-slate-400 text-[11px] uppercase tracking-wider mt-1">{l}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green">
                Book a Workshop
              </a>
              <a href={siteConfig.trainingPortfolioUrl} target="_blank" rel="noopener noreferrer" className="border border-white/25 text-white font-medium px-6 py-3 rounded-[14px] hover:border-white/50 hover:bg-white/5 transition-all">
                Training Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Impact Metrics Grid - Moved earlier for emphasis */}
        <section id="trainer-impact" className="w-full py-12 md:py-24 px-4 md:px-8 bg-card">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {impactStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="relative p-4 md:p-5 rounded-2xl md:rounded-3xl border border-border bg-gradient-to-br from-[hsl(var(--zia-green))]/10 to-emerald-50 flex flex-col items-start gap-1 overflow-hidden"
                    whileHover={{ y: -4, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[hsl(var(--zia-green))]/15" />
                    <p className="text-3xl md:text-4xl font-bold text-[hsl(var(--zia-green))]">{stat.number}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                    <p className="text-[0.7rem] text-muted-foreground leading-snug mt-1">{stat.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Evolution As An Educator Timeline - After impact metrics */}
        <section id="journey" className="w-full py-12 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  {t("myTrainingJourney")}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">{t("evolutionAsEducator")}</h2>
                <p className="text-muted-foreground text-lg max-w-3xl">
                  {t("trainerJourneyIntro")}
                </p>
                <a
                  href={siteConfig.trainingPortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--zia-green))] hover:underline mt-2"
                >
                  {t("viewFullTrainingPortfolio")} →
                </a>
              </div>
              
              {/* Microphone photo in context - showing trainer in action */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-gradient-to-br from-background to-card">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] md:aspect-square">
                    <Image
                      src="/images/dhia/speaking-mic.png"
                      alt="Mohamed Dhia facilitating training session"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectPosition: "center top" }}
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center bg-card/50">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">In Action</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Facilitating engaging workshops and training sessions with a focus on clarity, energy, and measurable learning outcomes. Every session is designed to empower participants and drive real-world impact.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[hsl(var(--zia-green))]/10 text-[hsl(var(--zia-green))] rounded-full text-sm font-medium">Interactive Sessions</span>
                      <span className="px-3 py-1 bg-[hsl(var(--zia-green))]/10 text-[hsl(var(--zia-green))] rounded-full text-sm font-medium">Youth Development</span>
                      <span className="px-3 py-1 bg-[hsl(var(--zia-green))]/10 text-[hsl(var(--zia-green))] rounded-full text-sm font-medium">Leadership Training</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-8">
                {journeyMilestones.map((milestone, i) => (
                  <motion.div
                    key={i}
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

        {/* Trainer Capabilities */}
        <TrainerCapabilities />

        {/* Certifications Section - Imported component */}
        <CertificationsSection />

        {/* Contact Form Section */}
        <section id="contact-form" className="w-full py-12 md:py-24 px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{t("requestTraining")}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">{t("readyToTransformLearning")}</h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
                  {t("requestTrainingDesc")}
                </p>
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
