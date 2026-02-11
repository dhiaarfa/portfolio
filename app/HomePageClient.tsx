"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Palette, Code, Calendar } from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { siteConfig } from "@/lib/site-config"
import ClientLogosStrip from "@/components/client-logos-strip"
import StatsSection from "@/components/stats-section"
import ServicePackages from "@/components/service-packages"
import FAQSection from "@/components/faq-section"
import NewsletterSection from "@/components/newsletter-section"
import TestimonialsTicker from "@/components/testimonials-ticker"
import { useLanguage } from "@/components/language-provider"

export default function HomePageClient() {
  const { t } = useLanguage()
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Currently crafting digital experiences",
      color: "bg-yellow-200",
      x: 50,
      y: 100,
      rotation: 3,
      section: "hero",
    },
    {
      id: 2,
      text: "Designer • Trainer • Developer",
      color: "bg-[hsl(var(--zia-green))]/20",
      x: 150,
      y: 250,
      rotation: -2,
      section: "hero",
    },
    {
      id: 3,
      text: "7+ Years Experience",
      color: "bg-green-100",
      x: 800,
      y: 150,
      rotation: 1,
      section: "hero",
    },
    {
      id: 4,
      text: "Building meaningful experiences",
      color: "bg-[hsl(var(--zia-green))]/10",
      x: 100,
      y: 800,
      rotation: -3,
      section: "roles",
    },
    {
      id: 5,
      text: "Creative problem solving",
      color: "bg-pink-100",
      x: 700,
      y: 900,
      rotation: 2,
      section: "roles",
    },
    {
      id: 6,
      text: "Always learning & growing",
      color: "bg-purple-100",
      x: 200,
      y: 1100,
      rotation: -1,
      section: "roles",
    },
    {
      id: 7,
      text: "Design + Code + Teaching",
      color: "bg-[hsl(var(--zia-green))]/20",
      x: 900,
      y: 1000,
      rotation: 3,
      section: "roles",
    },
    {
      id: 8,
      text: "Let's collaborate!",
      color: "bg-yellow-100",
      x: 400,
      y: 300,
      rotation: -2,
      section: "hero",
    },
  ])

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

  const [draggingId, setDraggingId] = useState(null);

  const handleMouseDown = (e, id) => {
    setDraggingId(id);
  };

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 md:py-0 px-4 md:px-8 pt-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full flex flex-col items-center md:items-stretch">
          {/* Sticky Notes - Below Navbar */}
          <div className="absolute top-28 right-4 space-y-2 pointer-events-none">
            {notes.slice(0, 2).map((note) => (
              <motion.div
                key={note.id}
                className={`${note.color} p-3 rounded-lg shadow-md w-32 text-xs font-medium select-none`}
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: note.rotation }}
                transition={{ duration: 0.6, delay: note.id * 0.1 }}
              >
                <span className={note.color.includes("yellow") ? "text-black" : "text-foreground"}>{note.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left: Text content */}
            <motion.div
              className="space-y-8 relative text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block relative">
                <div></div>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">{t("hello")}</h1>
                  <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                    {t("homeHeadlinePrefix")}{" "}
                    <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                      {t("homeHeadlineHighlight")}
                    </span>
                  </h2>
                </div>

                {/* Description with better spacing */}
                <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto md:mx-0">
                  {t("heroDescription")}
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--zia-green))] text-white rounded-lg font-medium hover:opacity-90 transition-all active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  {t("bookFreeConsultation")}
                </a>
                <a
                  href="#roles"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
                >
                  {t("exploreMyWork")}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
                >
                  {t("learnMore")}
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Professional Photo */}
            <motion.div
              className="flex justify-center relative w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-sm">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-foreground/10 shadow-lg bg-background">
                  <Image
                    src="/images/photo-dhia.png"
                    alt="Mohamed Dhia Arfa"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Cards Section */}
      <section id="roles" className="w-full py-12 md:py-16 px-4 md:px-8 bg-foreground/2">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t("myExpertise")}</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t("myExpertiseSubtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch">
            {roles.map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.slug}
                  className="group p-8 rounded-2xl bg-background border border-foreground/10 hover:border-[hsl(var(--zia-green))]/30 transition-all w-full max-w-md md:max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--zia-green))]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[hsl(var(--zia-green))]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {role.slug === "trainer" ? t("training") : role.slug === "designer" ? t("design") : t("webDevelopment")}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">{t(role.descriptionKey)}</p>

                  <div className="flex gap-4 mb-6">
                    {role.stats.map((stat) => (
                      <span key={stat} className="text-xs font-medium px-3 py-1 bg-foreground/5 rounded-full">
                        {stat}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/${role.slug}`}
                    className="text-sm font-medium text-[hsl(var(--zia-green))] hover:text-[hsl(var(--zia-green))]/80 inline-flex items-center gap-2"
                  >
                    {t(role.cta)}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
        {/* Scroll CTA to stats/services */}
        <div className="max-w-6xl mx-auto w-full mt-10 flex justify-center">
          <button
            onClick={() => document.getElementById("stats-section")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-foreground/20 bg-background/80 text-xs font-medium hover:border-[hsl(var(--zia-green))]/60 hover:text-[hsl(var(--zia-green))] transition-colors"
          >
            {t("exploreMyWork")} ↓
          </button>
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

      {/* FAQ */}
      <FAQSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
