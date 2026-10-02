"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { getTranslation, type Language, type TranslationKey, translations } from "@/lib/translations"
import { detectLanguage } from "@/lib/detect-language"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode
  /** Set only by app/[locale]/layout.tsx for the /fr/* and /ar/* route tree,
   *  where the URL itself declares the language server-side. When present,
   *  this skips the browser-locale guess and localStorage read entirely --
   *  the URL is authoritative there, not the visitor's saved preference.
   *  Unprefixed routes never pass this, so their behavior is unchanged. */
  initialLanguage?: Language
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage ?? "en")

  useEffect(() => {
    if (initialLanguage) {
      // URL-declared locale (a /fr/* or /ar/* route): just sync the <html>
      // attributes the root layout can't set server-side for this segment,
      // and persist it so navigating back to an unprefixed page later still
      // remembers the visitor picked French/Arabic.
      document.documentElement.lang = initialLanguage
      document.documentElement.dir = initialLanguage === "ar" ? "rtl" : "ltr"
      localStorage.setItem("language", initialLanguage)
      return
    }

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

    // Deliberate mount-time read: the saved/browser language only exists in
    // the browser, so the server and first client render use "en" and this
    // switches afterwards. Reading it during render would cause a hydration
    // mismatch for every non-English visitor.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguageState(nextLang)
    document.documentElement.lang = nextLang
    document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr"
  }, [initialLanguage])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = useMemo(() => {
    return (key: string, params?: Record<string, string | number>): string => {
      const isKnownKey = Object.prototype.hasOwnProperty.call(translations.en, key)
      if (!isKnownKey) return key
      return getTranslation(language, key as TranslationKey, params)
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
