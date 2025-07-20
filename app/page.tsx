"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import MobileMenu from "@/components/mobile-menu"
import Services from "@/components/services"
import Contact from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import Skills from "@/components/skills"
import GraphicDesignMarketing from "@/components/graphic-design-marketing"
import TrainerPortfolio from "@/components/trainer-portfolio"
import CivicWork from "@/components/civic-work"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Testimonials from "@/components/testimonials"
import Formations from "@/components/formations"
import { getTranslation, type Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const t = (key: keyof typeof import("@/lib/translations").translations.en) => getTranslation(language, key)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80 glass">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">MD</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-800 dark:text-blue-400">Mohamed Dhia</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("services")}
            </button>
            <button
              onClick={() => scrollToSection("graphic-design-marketing")}
              className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("design")}
            </button>
            <button
              onClick={() => scrollToSection("training-capacity-building")}
              className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("training")}
            </button>
            <button
              onClick={() => scrollToSection("civic-work")}
              className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("civicWork")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t("contact")}
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <ThemeToggle />
            <Button
              className="hidden md:flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
              onClick={() => scrollToSection("contact")}
            >
              {t("letsCollaborate")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <MobileMenu language={language} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection language={language} />
        <AboutSection language={language} />
        <StatsSection language={language} />
        <Services language={language} />
        <Skills language={language} />
        <GraphicDesignMarketing language={language} />
        <TrainerPortfolio language={language} />
        <CivicWork language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Formations language={language} />
        <Testimonials language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  )
}
