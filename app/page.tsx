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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 particle-bg">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-950/80 glass">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg glow-border animate-pulse-glow">
              <span className="text-white font-bold text-sm neon-text">MD</span>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-800 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">Mohamed Dhia</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300 cursor-pointer relative group"
            >
              {t("about")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text transition-all duration-300 cursor-pointer relative group"
            >
              {t("services")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("graphic-design-marketing")}
              className="text-sm font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:bg-clip-text transition-all duration-300 cursor-pointer relative group"
            >
              {t("design")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("training-capacity-building")}
              className="text-sm font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300 cursor-pointer relative group"
            >
              {t("training")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("civic-work")}
              className="text-sm font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:bg-clip-text transition-all duration-300 cursor-pointer relative group"
            >
              {t("civicWork")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:bg-clip-text transition-all duration-300 cursor-pointer relative group"
            >
              {t("contact")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <ThemeToggle />
            <Button
              className="hidden md:flex bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 btn-morph glow-border text-white font-semibold shadow-lg hover:shadow-xl animate-pulse-glow"
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
