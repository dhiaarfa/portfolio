"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Palette, Code } from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"
import { siteConfig } from "@/lib/site-config"
import { formatStat } from "@/lib/profile"
import dynamic from "next/dynamic"
import ClientLogosStrip from "@/components/client-logos-strip"
import HeroAnnotatedPortrait from "@/components/hero-annotated-portrait"
import { BasedInTunisia } from "@/components/based-in-tunisia"
import StatsSection from "@/components/stats-section"
import ServicePackages from "@/components/service-packages"
const ValueRadarChart = dynamic(() => import("@/components/value-radar-chart"), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse rounded-2xl bg-muted/40" />,
})
import FAQSection from "@/components/faq-section"
import NewsletterSection from "@/components/newsletter-section"
import { useLanguage } from "@/components/language-provider"
import { FadeUp } from "@/components/ui/motion"

function AnimatedRole() {
  const { t } = useLanguage()
  const [i, setI] = useState(0)
  const [show, setShow] = useState(true)
  const roles = [
    { text: t("homeRotatingDesigner"), cls: "text-pink-500 dark:text-pink-400" },
    { text: t("homeRotatingTrainer"), cls: "text-amber-500 dark:text-amber-400" },
    { text: t("homeRotatingDeveloper"), cls: "text-blue-500 dark:text-blue-400" },
  ]
  useEffect(() => {
    const t = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setI((p) => (p + 1) % 3)
        setShow(true)
      }, 280)
    }, 2800)
    return () => clearInterval(t)
  }, [])
  return (
    <p className="text-xl font-medium text-slate-500 dark:text-slate-400">
      {t("homeRotatingPrefix")}{" "}
      <span
        className={`font-semibold transition-all duration-300 inline-block ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} ${roles[i].cls}`}
      >
        {roles[i].text}
      </span>
    </p>
  )
}

export default function HomePageClient() {
  const { t } = useLanguage()
  const roles = [
    {
      title: "Trainer",
      slug: "trainer",
      icon: BookOpen,
      color: "from-accent-muted to-emerald-50",
      accentColor: "var(--site-accent)",
      stats: [t("roleStatTrainer1"), t("roleStatTrainer2"), t("roleStatTrainer3")],
      descriptionKey: "roleTrainerDescription",
      cta: "exploreTraining",
    },
    {
      title: "Visual Designer",
      slug: "designer",
      icon: Palette,
      color: "from-accent-muted to-teal-50",
      accentColor: "var(--site-accent)",
      stats: [t("roleStatDesigner1"), t("roleStatDesigner2"), t("roleStatDesigner3")],
      descriptionKey: "roleDesignerDescription",
      cta: "viewDesignWork",
    },
    {
      title: "Web Dev Enthusiast",
      slug: "developer",
      icon: Code,
      color: "from-orange-50 to-amber-50",
      accentColor: "#ea580c",
      stats: [t("roleStatDeveloper1"), t("roleStatDeveloper2"), t("roleStatDeveloper3")],
      descriptionKey: "roleDeveloperDescription",
      cta: "seeMyProjects",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Hero — annotated portrait HUD */}
      <HeroAnnotatedPortrait theme="light" className="!min-h-[min(92vh,860px)]">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0 lg:absolute lg:top-[18%] lg:left-0 lg:z-30 mb-6 lg:mb-0">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-sm font-medium bg-accent-subtle dark:bg-accent-subtle border border-accent/30 text-foreground dark:text-accent w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to new projects · <BasedInTunisia />
          </div>
          <h1 className="font-display font-extrabold text-[clamp(36px,6vw,64px)] leading-[0.96] tracking-tight text-slate-900 dark:text-white mb-2">
            Hello, I&apos;m{" "}
            <span className="text-accent">Mohamed Dhia</span>
          </h1>
          <AnimatedRole />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-[480px] mx-auto lg:mx-0">
            {t("homeHeroTagline")}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mt-5 mb-2">
            {[
              { value: formatStat("participantsTrained"), label: t("homeMicroYouth") },
              { value: formatStat("designProjects"), label: t("homeMicroProjects") },
              { value: formatStat("yearsExperience"), label: t("homeMicroYears") },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <span className="font-bold text-accent text-sm">{value}</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">{label}</span>
              </div>
            ))}
          </div>
          <a href="#expertise" className="btn-outline group mt-4 inline-flex mx-auto lg:mx-0">
            {t("exploreMyWork")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </a>
        </div>
      </HeroAnnotatedPortrait>

      {/* My Expertise Bento */}
      <section id="expertise" className="bg-section-tint section-compact px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent text-center mb-2">
              {t("myExpertise")}
            </p>
            <h2 className="font-serif text-[clamp(26px,3.5vw,40px)] text-center text-slate-900 dark:text-white leading-snug mb-4">
              Three specialized areas.
              <br />
              One cohesive vision.
            </h2>
            <p className="text-center text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Design + training + development in one person means no hand-offs, one brand voice, and someone who can both make it and ship it.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* TILE 1 — Graphic Designer (large, spans 2 rows) */}
            {roles[1] && (
              <Link
                href={`/${roles[1].slug}`}
                className="md:row-span-2 bg-white rounded-3xl border border-accent/15 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between group cursor-pointer"
              >
                    <div>
                  <div className="w-12 h-12 bg-accent-subtle rounded-2xl flex items-center justify-center mb-6">
                    <Palette className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">
                    {t("design")}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Zia Studio</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {t(roles[1].descriptionKey)}
                  </p>
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {["Brand Identity", "UI/UX", "Motion", "Print"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-accent-subtle text-accent rounded-full px-3 py-1 font-medium border border-accent/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover/link:gap-2 transition-all">
                  {t(roles[1].cta)}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            )}

            {/* TILE 2 — Trainer */}
            {roles[0] && (
              <Link
                href={`/${roles[0].slug}`}
                className="md:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    {t("training")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Youth Development</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                  {t(roles[0].descriptionKey)}
                </p>
                <div className="flex gap-6 pb-5 border-b border-slate-100 mb-4">
                  {[
                    [`${siteConfig.stats.participants}+`, "Participants"],
                    [`${siteConfig.stats.trainingHours}+`, "Hours"],
                    [`${siteConfig.stats.facilitationHours}+`, "Facilitation Hrs"],
                  ].map(([val, label]) => (
                    <div key={label}>
                      <p className="font-display font-bold text-lg text-slate-900 leading-none">{val}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 group-hover/link:gap-2 transition-all">
                  {t(roles[0].cta)}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            )}

            {/* TILE 3 — Developer (dark) */}
            {roles[2] && (
                  <Link
                href={`/${roles[2].slug}`}
                className="md:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-accent-muted rounded-xl flex items-center justify-center">
                    <Code className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent bg-accent-subtle px-3 py-1 rounded-full">
                    {t("webDevelopment")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">React & Next.js</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {t(roles[2].descriptionKey)}
                </p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {["React", "Next.js", "Tailwind", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-800 text-slate-300 rounded-full px-3 py-1 font-medium border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover/link:gap-2 transition-all">
                  {t(roles[2].cta)}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                  </Link>
            )}
          </div>
        </div>
      </section>

      {/* Zia Studio — dedicated section */}
      <section className="section-compact px-6 bg-[#0A0A0A] dark:bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/images/zia/zia-logo-full.png"
              alt="Zia Studio"
              width={180}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Creative Agency</p>
            <p className="text-[#F5F5F5] text-lg leading-relaxed mb-6">
              Brand identity, digital campaigns, and visual storytelling for startups, NGOs, and ambitious projects across Tunisia and beyond.
            </p>
            <a href="#contact" className="btn-green">
              Work with Zia Studio
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogosStrip />

      {/* Stats */}
      <StatsSection />

      {/* Service Packages */}
      <ServicePackages />

      {/* Working with me – radar chart */}
      <ValueRadarChart />

      {/* Featured Testimonials */}
      <section className="bg-white dark:bg-slate-950 section-compact px-5">
        <div className="max-w-5xl mx-auto">
          <p className="label text-center">What people say</p>
          <h2 className="font-serif text-[clamp(24px,3vw,38px)] text-center text-slate-900 dark:text-white leading-snug mb-12">
            Trusted by the people I&apos;ve worked with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { q: "True leader, remarkable leadership. Joy to collaborate with.", name: "Rayen Bejaoui", role: "Jr. Project Manager · 1000 Challenges" },
              { q: "Highly-qualified designer, motivated digital marketer, inspiring youth worker.", name: "Ikram Allah Nemri", role: "Social Entrepreneur · AIESEC Sousse" },
              { q: "Creativity and dedication. Attention to detail, eagerness to learn.", name: "Youssef Touati", role: "CEO, Jasmin Marketing" },
            ].map((tst) => (
              <div key={tst.name} className="card-base flex flex-col p-7">
                <span className="font-serif text-5xl text-accent-muted leading-none mb-3 block">&quot;</span>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1 mb-6">{tst.q}</p>
                <div className="pt-5 border-t border-slate-100 dark:border-slate-700/60">
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{tst.name}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{tst.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
