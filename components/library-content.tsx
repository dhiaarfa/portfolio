"use client"

import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

/**
 * Dhia's movies / series / documentaries library (Oct 2026). The list lives
 * in a Google Sheet he keeps up to date, so the page embeds the sheet instead
 * of copying it: edits show up here without a deploy. The sheet must stay
 * shared as "Anyone with the link can view" or the embed shows a sign-in box.
 */
const SHEET_ID = "1c7JAhAeMp1XFuII_5rtSOrM3uFgN1ruzPC5Stdwzi_E"
const GID = "1266934899"
const EMBED_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/preview?gid=${GID}`
const OPEN_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit?gid=${GID}#gid=${GID}`

type Lang = "en" | "fr" | "ar"

const COPY: Record<Lang, { label: string; title: string; intro: string; open: string; frame: string }> = {
  en: {
    label: "Off the clock",
    title: "My movie, series & documentary library",
    intro:
      "The movies, series and documentaries I've watched, the ones I recommend, and what's next on my list. It updates live from my own sheet.",
    open: "Open in Google Sheets",
    frame: "Movies, series and documentaries library",
  },
  fr: {
    label: "Hors du travail",
    title: "Ma bibliothèque de films, séries et documentaires",
    intro:
      "Les films, séries et documentaires que j'ai vus, ceux que je recommande et ceux qui m'attendent. La liste se met à jour en direct depuis mon tableau.",
    open: "Ouvrir dans Google Sheets",
    frame: "Bibliothèque de films, séries et documentaires",
  },
  ar: {
    label: "خارج العمل",
    title: "مكتبتي من الأفلام والمسلسلات والوثائقيات",
    intro:
      "الأفلام والمسلسلات والوثائقيات التي شاهدتها، وما أوصي به، وما سأشاهده لاحقًا. القائمة تتحدّث مباشرة من جدولي الخاص.",
    open: "فتح في Google Sheets",
    frame: "مكتبة الأفلام والمسلسلات والوثائقيات",
  },
}

export default function LibraryContent() {
  const { language } = useLanguage()
  const lang: Lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const c = COPY[lang]

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-[6.5rem] md:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">{c.label}</p>
      <h1 className="mb-3 text-3xl font-bold md:text-4xl">{c.title}</h1>
      <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <a
        href={OPEN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
      >
        {c.open}
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
      {/* Visually hidden h2 so the outline doesn't jump from this h1 to the
          footer's h3 (heading-level skip flagged by the OpenSEO audit). */}
      <h2 className="sr-only">{c.frame}</h2>
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <iframe
          src={EMBED_URL}
          title={c.frame}
          loading="lazy"
          className="block h-[75vh] min-h-[480px] w-full"
        />
      </div>
    </section>
  )
}
