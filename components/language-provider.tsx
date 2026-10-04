"use client"

import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { en, type TranslationKey } from "@/lib/i18n/en"
import { interpolate, LANGUAGES, type Language } from "@/lib/i18n/core"
import { detectLanguage } from "@/lib/detect-language"

// Only English ships in the main bundle (Oct 2026 performance pass): the
// three dictionaries together were ~220 KB of JavaScript on every page.
// /fr and /ar pages get their dictionary from the server as a prop
// (app/[locale]/layout.tsx); unprefixed pages fetch French or Arabic on
// demand when the visitor's saved or browser language asks for it.
type Dictionary = Partial<Record<TranslationKey, string>>
const dictionaries: Partial<Record<Language, Dictionary>> = { en }
const loaders: Record<Exclude<Language, "en">, () => Promise<Dictionary>> = {
  fr: () => import("@/lib/i18n/fr").then((m) => m.fr),
  ar: () => import("@/lib/i18n/ar").then((m) => m.ar),
}
function seedDictionary(lang?: Language, dict?: Dictionary): Dictionary {
  if (!lang || !dict) return en
  dictionaries[lang] ??= dict
  return dict
}
async function loadDictionary(lang: Language): Promise<Dictionary> {
  const cached = dictionaries[lang]
  if (cached) return cached
  const dict = await loaders[lang as Exclude<Language, "en">]()
  dictionaries[lang] = dict
  return dict
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// useLayoutEffect on the client, useEffect on the server (where layout
// effects never run and older React versions warn about them).
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export function LanguageProvider({
  children,
  initialLanguage,
  initialMessages,
}: {
  children: React.ReactNode
  /** Set only by app/[locale]/layout.tsx for the /fr/* and /ar/* route tree,
   *  where the URL itself declares the language server-side. When present,
   *  this skips the browser-locale guess and localStorage read entirely --
   *  the URL is authoritative there, not the visitor's saved preference.
   *  Unprefixed routes never pass this, so their behavior is unchanged. */
  initialLanguage?: Language
  /** The initialLanguage dictionary, passed from the server so /fr and /ar
   *  render translated on the first paint without a client fetch. */
  initialMessages?: Dictionary
}) {
  // Shared module cache: also lets the root provider (which sits above the
  // [locale] one) reuse this dictionary instead of fetching it again.
  const [dict, setDict] = useState<Dictionary>(() => seedDictionary(initialLanguage, initialMessages))
  const [language, setLanguageState] = useState<Language>(initialLanguage ?? "en")

  // URL-declared locale (a /fr/* or /ar/* route): sync the <html> lang/dir
  // the root layout can't set server-side, and persist the choice so an
  // unprefixed page later remembers French/Arabic. A LAYOUT effect, not a
  // plain one: React resets <html>'s attributes to the root layout's
  // lang="en" dir="ltr" when it hydrates, and a plain effect only restored
  // them after the browser had already painted (a left-to-right flash on
  // /ar). Layout effects run before that paint. The inline script in
  // app/[locale]/layout.tsx covers the very first, pre-hydration paint.
  useIsomorphicLayoutEffect(() => {
    if (!initialLanguage) return
    document.documentElement.lang = initialLanguage
    document.documentElement.dir = initialLanguage === "ar" ? "rtl" : "ltr"
    localStorage.setItem("language", initialLanguage)
  }, [initialLanguage])

  useEffect(() => {
    if (initialLanguage) return

    const stored = localStorage.getItem("language") as Language | null
    let nextLang: Language

    if (stored && (LANGUAGES as readonly string[]).includes(stored)) {
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
    if (nextLang === "en") return
    let cancelled = false
    loadDictionary(nextLang).then((d) => {
      if (cancelled) return
      setDict(d)
      setLanguageState(nextLang)
      document.documentElement.lang = nextLang
      document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr"
    })
    return () => {
      cancelled = true
    }
  }, [initialLanguage])

  const setLanguage = (lang: Language) => {
    localStorage.setItem("language", lang)
    // Switch only once the dictionary is here, so the page never shows
    // the new direction with the old language's text.
    loadDictionary(lang).then((d) => {
      setDict(d)
      setLanguageState(lang)
      document.documentElement.lang = lang
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    })
  }

  const t = useMemo(() => {
    return (key: string, params?: Record<string, string | number>): string => {
      if (!Object.prototype.hasOwnProperty.call(en, key)) return key
      return interpolate(language, dict[key as TranslationKey] || en[key as TranslationKey], params)
    }
  }, [language, dict])

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
