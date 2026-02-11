"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import TrainerCapabilities from "@/components/trainer-capabilities"
import CertificationsSection from "@/components/certifications-section"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"
import { useState } from "react"

export default function TrainerClientPage() {
  const { t } = useLanguage()
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Empowering the next generation",
      color: "bg-[hsl(var(--zia-green))]",
      textColor: "text-background",
      x: 70,
      y: 130,
      rotation: 2,
    },
    {
      id: 2,
      text: "Impact through education",
      color: "bg-emerald-100",
      textColor: "text-foreground",
      x: 1020,
      y: 180,
      rotation: -2,
    },
  ])

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
      description: "Delivered 450+ training hours and 30+ facilitation hours for 990+ participants across multiple organizations",
      stats: "990+ Participants",
    },
  ]

  const impactStats = [
    { number: "990+", label: "Participants Trained", detail: "Across NGOs, youth clubs & associations" },
    { number: "450+", label: "Training Hours", detail: "Non‑formal education & skills building" },
    { number: "30+", label: "Facilitation Hours", detail: "Moderation, panels & collaborative spaces" },
    { number: "10+", label: "Training Cycles Supervised", detail: "From design to delivery & evaluation" },
    { number: "7+", label: "Years Experience", detail: "Youth work, civic engagement & training" },
  ]

  const handleMouseDown = (e, noteId) => {
    // Placeholder function for handleMouseDown
  }

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main className="w-full pt-20">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center pt-16 md:pt-0 bg-gradient-to-br from-[hsl(var(--zia-green))]/5 via-background to-emerald-50">
          <div className="w-full px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-80px)]">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex gap-3 flex-wrap">
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">990+ PARTICIPANTS</div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">450+ HOURS</div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">CNFCPP CERTIFIED</div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">{t("trainerHeroTitle")}</h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
                      {t("trainerHeroSubtitle")}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md">
                    {t("trainerHeroDescription")}
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4">
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href="#journey"
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium hover:gap-3 transition-all min-h-[44px] touch-manipulation"
                      >
                        {t("trainerExploreJourney")}
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Link>
                    </motion.div>
                    <a
                      href={siteConfig.trainingPortfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[hsl(var(--zia-green))] hover:underline min-h-[44px] touch-manipulation"
                    >
                      {t("viewFullTrainingPortfolio")} →
                    </a>
                    <button
                      type="button"
                      onClick={() => document.getElementById("trainer-impact")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-full border border-foreground/20 text-xs sm:text-sm font-medium hover:border-[hsl(var(--zia-green))]/60 hover:text-[hsl(var(--zia-green))] transition-colors touch-manipulation"
                    >
                      {t("impactMetrics")} ↓
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  className="flex h-full min-h-[400px] md:min-h-[600px] items-center justify-center order-first md:order-last"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tttt-qeeImhjCNcLxmCrXmbU7ImH2qg0wRJ.png"
                    alt="Mohamed Dhia Arfa - Trainer"
                    width={400}
                    height={600}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded-3xl"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Sticky Notes - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block absolute top-4 right-4 space-y-2 pointer-events-none">
            {notes.map((note) => (
              <motion.div
                key={note.id}
                className={`${note.color} w-40 p-4 rounded-lg shadow-lg text-sm font-medium text-foreground/80 select-none`}
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: note.rotation }}
                transition={{ duration: 0.6, delay: note.id * 0.1 }}
              >
                {note.text}
              </motion.div>
            ))}
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

        {/* In action – facilitation / speaking */}
        <section className="w-full py-12 md:py-16 px-4 md:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">{t("inAction")}</p>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-video bg-black relative">
              <Image
                src="/images/dhia/speaking-mic.png"
                alt="Mohamed Dhia facilitating a session with microphone"
                width={800}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
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
