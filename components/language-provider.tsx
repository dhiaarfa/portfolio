"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { getTranslation, type Language, type TranslationKey, translations } from "@/lib/translations"
import { detectLanguage } from "@/lib/detect-language"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null
    let nextLang: Language

    if (stored && stored in translations) {
      nextLang = stored
    } else {
      // First visit, no saved preference yet -- guess from the browser/OS
      // language instead of always defaulting to English, then remember the
      // guess so this only ever runs once per visitor.
      const browserLocales =
        typeof navigator !== "undefined"
          ? navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language]
          : []
      nextLang = detectLanguage(browserLocales)
      localStorage.setItem("language", nextLang)
    }

    setLanguageState(nextLang)
    document.documentElement.lang = nextLang
    document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr"
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = useMemo(() => {
    return (key: string): string => {
      const isKnownKey = Object.prototype.hasOwnProperty.call(translations.en, key)
      if (!isKnownKey) return key
      return getTranslation(language, key as TranslationKey)
    }
  }, [language])

  // Always provide context so useLanguage() works (e.g. before hydration/mount)
  const value = { language, setLanguage, t }
  return (
    <LanguageContext.Provider value={value}>
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
