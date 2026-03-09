"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Palette, Code, Calendar, Users } from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"
import { siteConfig } from "@/lib/site-config"
import ClientLogosStrip from "@/components/client-logos-strip"
import StatsSection from "@/components/stats-section"
import ServicePackages from "@/components/service-packages"
import ValueRadarChart from "@/components/value-radar-chart"
import FAQSection from "@/components/faq-section"
import NewsletterSection from "@/components/newsletter-section"
import TestimonialsTicker from "@/components/testimonials-ticker"
import { useLanguage } from "@/components/language-provider"
import { FadeUp } from "@/components/ui/motion"

function AnimatedRole() {
  const [i, setI] = useState(0)
  const [show, setShow] = useState(true)
  const roles = [
    { text: "Graphic Designer", cls: "text-pink-500 dark:text-pink-400" },
    { text: "Youth Trainer", cls: "text-amber-500 dark:text-amber-400" },
    { text: "Web Developer", cls: "text-blue-500 dark:text-blue-400" },
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
    <p className="text-[17px] font-medium text-slate-500 dark:text-slate-400">
      A Creative{" "}
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
      color: "from-[hsl(var(--zia-green))]/10 to-emerald-50",
      accentColor: "hsl(var(--zia-green))",
      stats: [t("roleStatTrainer1"), t("roleStatTrainer2"), t("roleStatTrainer3")],
      descriptionKey: "roleTrainerDescription",
      cta: "exploreTraining",
    },
    {
      title: "Visual Designer",
      slug: "designer",
      icon: Palette,
      color: "from-emerald-50 to-teal-50",
      accentColor: "#059669",
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

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center bg-white dark:bg-slate-950 overflow-hidden px-5 pt-24 pb-16">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-green-400/10 dark:bg-green-500/8 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.022] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#16a34a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[58%_42%] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-sm font-medium bg-[#AAFF00]/10 dark:bg-[#AAFF00]/10 border border-[#AAFF00]/30 text-[#0A0A0A] dark:text-[#AAFF00] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>
              Open to new projects · {t("basedInTunisia")}
            </div>
            <h1 className="font-display font-extrabold text-[clamp(44px,7.5vw,84px)] leading-[0.94] tracking-tight text-slate-900 dark:text-white mb-3">
              Hello, I&apos;m<br />
              <span className="text-[#AAFF00]">Mohamed Dhia</span>
            </h1>
            <AnimatedRole />
            <p className="mt-5 mb-8 text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed max-w-[420px]">
              I design, train, and build — 7 years in Tunisia. Here to make brands clear and people sharper.
            </p>
            {/* Social proof micro-stats */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1 mb-6">
              {[
                { value: "950+", label: "youth trained" },
                { value: "50+", label: "brands & campaigns" },
                { value: "7+", label: "years active" },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span className="font-bold text-[#AAFF00] text-sm">{value}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                <Calendar className="w-4 h-4" /> {t("bookFreeConsultation")}
              </a>
              <a href="#expertise" className="btn-outline group">
                {t("exploreMyWork")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </a>
            </div>
          </div>
          <div className="relative hidden lg:flex justify-center">
            <div className="absolute inset-8 bg-green-400/15 dark:bg-green-500/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-green-100 dark:border-green-900/50 w-[340px]">
              <Image
                src="/images/photos/dhia-main.png"
                alt="Mohamed Dhia Arfa"
                width={340}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-4 card-base px-4 py-3 flex items-center gap-3 w-max shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
              <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-display font-black text-[17px] leading-none text-slate-900 dark:text-white">{siteConfig.stats.participants}+</p>
                <p className="text-xs text-slate-400 mt-0.5">People trained</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-3 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl px-3.5 py-2.5 shadow-lg">
              <p className="font-display font-black text-xl leading-none">{siteConfig.stats.yearsExperience}+</p>
              <p className="text-slate-400 text-[10px] mt-0.5 tracking-wide">Yrs exp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Expertise Bento */}
      <section id="expertise" className="bg-section-tint py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-600 text-center mb-2">
              {t("myExpertise")}
            </p>
            <h2 className="font-serif text-[clamp(26px,3.5vw,40px)] text-center text-slate-900 dark:text-white leading-snug mb-12">
              Three specialized areas.
              <br />
              One cohesive vision.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* TILE 1 — Graphic Designer (large, spans 2 rows) */}
            {roles[1] && (
              <Link
                href={`/${roles[1].slug}`}
                className="md:row-span-2 bg-white rounded-3xl border border-green-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between group cursor-pointer"
              >
                    <div>
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <Palette className="w-6 h-6 text-green-700" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-600 mb-2">
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
                        className="text-xs bg-green-50 text-green-700 rounded-full px-3 py-1 font-medium border border-green-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 group-hover/link:gap-2 transition-all">
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
                    ["30+", "Workshops"],
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
                className="md:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-green-500/15 rounded-xl flex items-center justify-center">
                    <Code className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
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
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 group-hover/link:gap-2 transition-all">
                  {t(roles[2].cta)}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                  </Link>
            )}
          </div>
        </div>
      </section>

      {/* Zia Studio — dedicated section */}
      <section className="py-20 px-6 bg-[#0A0A0A] dark:bg-[#0A0A0A]">
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
            <p className="text-[#AAFF00] text-sm font-semibold uppercase tracking-widest mb-2">Creative Agency</p>
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

      {/* Testimonials ticker – names & relations only */}
      <TestimonialsTicker />

      {/* Stats */}
      <StatsSection />

      {/* Service Packages */}
      <ServicePackages />

      {/* Working with me – radar chart */}
      <ValueRadarChart />

      {/* Featured Testimonials */}
      <section className="bg-white dark:bg-slate-950 py-20 px-5">
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
                <span className="font-serif text-5xl text-green-200 dark:text-green-900 leading-none mb-3 block">&quot;</span>
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
