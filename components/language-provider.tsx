"use client"

import React, { createContext, useState, useContext, useEffect } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<string, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About",
    designer: "Graphic Designer",
    trainer: "Trainer",
    developer: "Web Dev Enthusiast",
    linkedin: "LinkedIn",
    designer_description: "Creative Design Studio",
    trainer_description: "Trainer & Educator",
    developer_description: "Web Developer Learning by Building",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
    featured_work: "Featured Work",
    portfolio: "Portfolio",
    see_work: "See Work",
    explore_journey: "Explore My Journey",
    design_philosophy: "Design Philosophy",
    my_approach: "My Approach",
    tools_of_trade: "Tools of the Trade",
    software_skills: "Software & Skills",
    work_experience: "Work Experience",
    professional_journey: "Professional Journey",
    design_software: "Design Software",
    ui_ux_design: "UI/UX Design",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    designer: "مصمم جرافيك",
    trainer: "مدرب",
    developer: "متحمس تطوير الويب",
    linkedin: "LinkedIn",
    designer_description: "استوديو تصميم إبداعي",
    trainer_description: "مدرب وتربوي",
    developer_description: "مطور ويب يتعلم من خلال البناء",
    skills: "المهارات",
    experience: "الخبرة",
    projects: "المشاريع",
    certifications: "الشهادات",
    contact: "تواصل معنا",
    featured_work: "الأعمال المميزة",
    portfolio: "معرض الأعمال",
    see_work: "عرض الأعمال",
    explore_journey: "استكشف رحلتي",
    design_philosophy: "فلسفة التصميم",
    my_approach: "نهجي",
    tools_of_trade: "أدوات المهنة",
    software_skills: "البرامج والمهارات",
    work_experience: "خبرات العمل",
    professional_journey: "الرحلة المهنية",
    design_software: "برامج التصميم",
    ui_ux_design: "تصميم الواجهات والتجربة",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    designer: "Designer Graphique",
    trainer: "Formateur",
    developer: "Passionné du Développement Web",
    linkedin: "LinkedIn",
    designer_description: "Studio de Conception Créative",
    trainer_description: "Formateur et Éducateur",
    developer_description: "Développeur Web Apprendre en Construisant",
    skills: "Compétences",
    experience: "Expérience",
    projects: "Projets",
    certifications: "Certifications",
    contact: "Contact",
    featured_work: "Travaux Présentés",
    portfolio: "Portefeuille",
    see_work: "Voir les Travaux",
    explore_journey: "Explorer Mon Parcours",
    design_philosophy: "Philosophie de Conception",
    my_approach: "Mon Approche",
    tools_of_trade: "Outils du Métier",
    software_skills: "Logiciels et Compétences",
    work_experience: "Expérience Professionnelle",
    professional_journey: "Parcours Professionnel",
    design_software: "Logiciels de Conception",
    ui_ux_design: "Conception UI/UX",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<string>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedLang = localStorage.getItem("language") || "en"
    setLanguageState(storedLang)
    document.documentElement.lang = storedLang
    document.documentElement.dir = storedLang === "ar" ? "rtl" : "ltr"
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || key
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
