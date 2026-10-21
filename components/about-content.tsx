"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { PERSON_NAME, PERSON_LONG_BIO, PERSON_FAQ } from "@/lib/identity"
import {
  formatStat,
  aboutExperience,
  education,
  certifications,
  localizedExperience,
  localizedEducation,
  localizedCertification,
} from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"

/**
 * /about (Oct 2026): the page that answers "who is Mohamed Dhia Arfa?" for
 * people, Google and AI assistants. All text comes from lib/identity.ts and
 * lib/profile.ts, so it always matches the rest of the site.
 */

type Lang = "en" | "fr" | "ar"

const UI: Record<Lang, Record<string, string>> = {
  en: {
    kicker: "About",
    roles: "Graphic designer · Certified trainer · Web developer · Tunisia",
    numbers: "In numbers",
    experience: "Experience",
    education: "Education",
    certs: "Certifications",
    faq: "Questions people ask",
    profiles: "Official profiles",
    book: "Book a free 30-minute call",
    work: "See the work",
    participants: "participants trained",
    hours: "training hours",
    projects: "design projects",
    years: "years of experience",
  },
  fr: {
    kicker: "À propos",
    roles: "Designer graphique · Formateur certifié · Développeur web · Tunisie",
    numbers: "En chiffres",
    experience: "Expérience",
    education: "Formation",
    certs: "Certifications",
    faq: "Questions fréquentes",
    profiles: "Profils officiels",
    book: "Réserver un appel gratuit de 30 min",
    work: "Voir les réalisations",
    participants: "participants formés",
    hours: "heures de formation",
    projects: "projets de design",
    years: "ans d'expérience",
  },
  ar: {
    kicker: "نبذة",
    roles: "مصمم جرافيك · مدرّب معتمد · مطوّر ويب · تونس",
    numbers: "بالأرقام",
    experience: "الخبرة",
    education: "التعليم",
    certs: "الشهادات",
    faq: "أسئلة شائعة",
    profiles: "الحسابات الرسمية",
    book: "احجز مكالمة مجانية لمدة 30 دقيقة",
    work: "شاهد الأعمال",
    participants: "مشارك تم تدريبهم",
    hours: "ساعة تدريب",
    projects: "مشروع تصميم",
    years: "سنوات خبرة",
  },
}

const NAME: Record<Lang, string> = { en: PERSON_NAME, fr: PERSON_NAME, ar: "محمد ضياء عرفة" }

export default function AboutContent() {
  const { language } = useLanguage()
  const lang: Lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const ui = UI[lang]
  const prefix = lang === "en" ? "" : `/${lang}`

  const stats = [
    { v: formatStat("participantsTrained"), l: ui.participants },
    { v: formatStat("trainingHours"), l: ui.hours },
    { v: formatStat("designProjects"), l: ui.projects },
    { v: formatStat("yearsExperience"), l: ui.years },
  ]
  const profiles = [
    { name: "LinkedIn", href: siteConfig.linkedin },
    { name: "Behance", href: siteConfig.behance },
    { name: "GitHub", href: siteConfig.github },
    { name: "Instagram (Zia Studio)", href: siteConfig.instagram },
  ]

  return (
    <article className="mx-auto max-w-4xl px-4 pb-20 pt-[6.5rem] md:px-6">
      <header className="mb-10 flex flex-col-reverse items-start gap-8 md:flex-row md:items-center">
        <div className="flex-1">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">{ui.kicker}</p>
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">{NAME[lang]}</h1>
          <p className="text-muted-foreground">{ui.roles}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {ui.book}
            </a>
            <Link
              href={`${prefix}/designer`}
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {ui.work}
            </Link>
          </div>
        </div>
        <Image
          src="/images/photos/dhia-main.png"
          alt={`${PERSON_NAME}, graphic designer, certified trainer and web developer in Tunisia`}
          width={220}
          height={234}
          priority
          className="h-[180px] w-auto rounded-3xl object-cover shadow-md md:h-[234px]"
        />
      </header>

      <section className="space-y-4 text-lg leading-relaxed text-muted-foreground">
        {PERSON_LONG_BIO[lang].map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>

      <section className="mt-12" aria-labelledby="about-numbers">
        <h2 id="about-numbers" className="mb-4 text-xl font-semibold">{ui.numbers}</h2>
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border p-4">
              <dt className="sr-only">{s.l}</dt>
              <dd className="text-2xl font-bold text-accent" dir="ltr">{s.v}</dd>
              <dd className="text-sm text-muted-foreground">{s.l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12" aria-labelledby="about-exp">
        <h2 id="about-exp" className="mb-4 text-xl font-semibold">{ui.experience}</h2>
        <ul className="space-y-3">
          {aboutExperience.map((e) => {
            const x = localizedExperience(e, lang)
            return (
              <li key={e.id} className="flex flex-col gap-1 border-b border-border pb-3 md:flex-row md:gap-6">
                <span className="w-44 shrink-0 text-sm text-muted-foreground">{x.period}</span>
                <span>
                  <span className="font-semibold">{x.role}</span>
                  <span className="text-muted-foreground"> · {x.company}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </section>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <section aria-labelledby="about-edu">
          <h2 id="about-edu" className="mb-4 text-xl font-semibold">{ui.education}</h2>
          <ul className="space-y-3">
            {education.map((e) => {
              const x = localizedEducation(e, lang)
              return (
                <li key={e.id}>
                  <p className="font-semibold">{x.degree}</p>
                  <p className="text-sm text-muted-foreground">{x.school}, {x.location} · {x.year}</p>
                </li>
              )
            })}
          </ul>
        </section>
        <section aria-labelledby="about-certs">
          <h2 id="about-certs" className="mb-4 text-xl font-semibold">{ui.certs}</h2>
          <ul className="space-y-2">
            {certifications.map((c) => {
              const x = localizedCertification(c, lang)
              return (
                <li key={c.id} className="text-sm">
                  <span className="font-semibold">{x.title}</span>
                  <span className="text-muted-foreground"> · {x.issuer} · {x.year}</span>
                </li>
              )
            })}
          </ul>
        </section>
      </div>

      <section className="mt-12" aria-labelledby="about-faq">
        <h2 id="about-faq" className="mb-4 text-xl font-semibold">{ui.faq}</h2>
        <div className="divide-y divide-border rounded-2xl border border-border">
          {PERSON_FAQ[lang].map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="about-profiles">
        <h2 id="about-profiles" className="mb-4 text-xl font-semibold">{ui.profiles}</h2>
        <ul className="flex flex-wrap gap-3">
          {profiles.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
