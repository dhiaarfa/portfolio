import { MetadataRoute } from "next"

import { publishedInsightArticles } from "@/lib/insights"
import { publishedWorkProjects } from "@/lib/work"
import { SITE_URL } from "@/lib/profile"

/**
 * Oct 2026: every entry used `lastModified: new Date()`, so all 87 URLs
 * claimed "changed today" on every build. Search engines learn to ignore
 * a lastmod that is always "now". Articles now carry their real
 * publish/update date; other pages omit lastmod rather than invent one.
 * Each URL also lists its EN/FR/AR alternates (hreflang in the sitemap).
 */
const LOCALES = ["fr", "ar"] as const

function alternates(base: string) {
  const path = base === "/" ? "" : base
  return {
    languages: {
      en: `${SITE_URL}${path}`,
      fr: `${SITE_URL}/fr${path}`,
      ar: `${SITE_URL}/ar${path}`,
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { base: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { base: "/", priority: 1, changeFrequency: "monthly" },
    { base: "/designer", priority: 0.8, changeFrequency: "monthly" },
    { base: "/trainer", priority: 0.8, changeFrequency: "monthly" },
    { base: "/developer", priority: 0.8, changeFrequency: "monthly" },
    { base: "/freebies", priority: 0.7, changeFrequency: "monthly" },
    { base: "/insights", priority: 0.7, changeFrequency: "weekly" },
    { base: "/privacy", priority: 0.2, changeFrequency: "monthly" },
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const p of pages) {
    const path = p.base === "/" ? "" : p.base
    entries.push({ url: `${SITE_URL}${path}`, changeFrequency: p.changeFrequency, priority: p.priority, alternates: alternates(p.base) })
    for (const l of LOCALES) {
      entries.push({ url: `${SITE_URL}/${l}${path}`, changeFrequency: p.changeFrequency, priority: p.priority - 0.1, alternates: alternates(p.base) })
    }
  }

  for (const a of publishedInsightArticles()) {
    const base = `/insights/${a.slug}`
    const lastModified = new Date(a.updated ?? a.date)
    entries.push({ url: `${SITE_URL}${base}`, lastModified, changeFrequency: "monthly", priority: 0.6, alternates: alternates(base) })
    for (const l of LOCALES) {
      entries.push({ url: `${SITE_URL}/${l}${base}`, lastModified, changeFrequency: "monthly", priority: 0.5, alternates: alternates(base) })
    }
  }

  for (const w of publishedWorkProjects()) {
    const base = `/work/${w.slug}`
    entries.push({ url: `${SITE_URL}${base}`, changeFrequency: "monthly", priority: 0.65, alternates: alternates(base) })
    for (const l of LOCALES) {
      entries.push({ url: `${SITE_URL}/${l}${base}`, changeFrequency: "monthly", priority: 0.55, alternates: alternates(base) })
    }
  }

  return entries
}
