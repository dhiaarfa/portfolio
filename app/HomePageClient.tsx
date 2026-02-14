"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Palette, Code, Calendar } from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"

/* Below-the-fold sections: load after hero for faster first paint */
const ClientLogosStrip = dynamic(() => import("@/components/client-logos-strip"), { ssr: true })
const TestimonialsTicker = dynamic(() => import("@/components/testimonials-ticker"), { ssr: true })
const StatsSection = dynamic(() => import("@/components/stats-section"), { ssr: true })
const ServicePackages = dynamic(() => import("@/components/service-packages"), { ssr: true })
const FAQSection = dynamic(() => import("@/components/faq-section"), { ssr: true })
const NewsletterSection = dynamic(() => import("@/components/newsletter-section"), { ssr: true })

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
          {/* Sticky Notes - Positioned lower on mobile to avoid hero text overlap */}
          <div className="hidden lg:block absolute top-32 right-4 space-y-2 pointer-events-none">
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
          {/* Mobile notes - positioned much lower to avoid hero text */}
          <div className="lg:hidden absolute top-[calc(100vh-200px)] right-4 space-y-2 pointer-events-none z-10">
            {notes.slice(0, 2).map((note) => (
              <motion.div
                key={note.id}
                className={`${note.color} p-2 rounded-lg shadow-md w-28 text-[10px] font-medium select-none`}
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

              <div className="space-y-4 md:space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">{t("hello")}</h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 leading-tight">
                    {t("homeHeadlinePrefix")}{" "}
                    <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                      {t("homeHeadlineHighlight")}
                    </span>
                  </h2>
                </div>

                {/* Description with better spacing */}
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto md:mx-0">
                  {t("heroDescription")}
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 md:pt-6 justify-center md:justify-start">
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-lg font-medium hover:from-[hsl(var(--zia-green))]/90 hover:to-emerald-500/90 transition-all active:scale-[0.98] touch-manipulation"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{t("bookFreeConsultation")}</span>
                </a>
                <a
                  href="#roles"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] border border-foreground/30 rounded-lg font-medium hover:bg-foreground/5 transition-colors touch-manipulation"
                >
                  <span className="text-sm sm:text-base">{t("exploreMyWork")}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] border border-foreground/30 rounded-lg font-medium hover:bg-foreground/5 transition-colors touch-manipulation"
                >
                  <span className="text-sm sm:text-base">{t("learnMore")}</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Professional Photo */}
            <motion.div
              className="flex justify-center relative w-full order-first md:order-last"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Mobile: Larger portrait (280px), Desktop: Standard */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-xs lg:max-w-sm mx-auto md:mx-0">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-foreground/10 shadow-lg bg-background">
                  <Image
                    src="/images/photo-dhia.png"
                    alt="Mohamed Dhia Arfa"
                    width={500}
                    height={500}
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 500px"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 px-2">{t("myExpertise")}</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-10 md:mb-16 max-w-2xl mx-auto px-2">
            {t("myExpertiseSubtitle")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {roles.map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.slug}
                  className="group p-6 md:p-8 rounded-2xl bg-background border border-foreground/10 hover:border-[hsl(var(--zia-green))]/30 transition-all w-full"
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

                  <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6">
                    {role.stats.map((stat) => (
                      <span key={stat} className="text-xs font-medium px-2 md:px-3 py-1 bg-foreground/5 rounded-full whitespace-nowrap">
                        {stat}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/${role.slug}`}
                    className="text-sm font-medium text-[hsl(var(--zia-green))] hover:text-[hsl(var(--zia-green))]/80 inline-flex items-center gap-2 min-h-[44px] touch-manipulation"
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
        <div className="max-w-6xl mx-auto w-full mt-8 md:mt-10 flex justify-center">
          <button
            onClick={() => document.getElementById("stats-section")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full border border-foreground/20 bg-background/80 text-xs sm:text-sm font-medium hover:border-[hsl(var(--zia-green))]/60 hover:text-[hsl(var(--zia-green))] transition-colors touch-manipulation"
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
