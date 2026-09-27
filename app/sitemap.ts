import { MetadataRoute } from "next"

import { publishedInsightArticles } from "@/lib/insights"
import { publishedWorkProjects } from "@/lib/work"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dhia-portfolio.com"
  const insightUrls = publishedInsightArticles().map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }))
  const workUrls = publishedWorkProjects().map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }))

  // /fr and /ar twins of the pages with real translated content (see
  // app/[locale]/*). Individual /insights/[slug] articles now have real
  // fr/ar bodies too (see lib/insights-content.ts), so they're included
  // below alongside the work case studies.
  const localizedBases = ["", "/designer", "/trainer", "/developer", "/freebies", "/insights"]
  const localeUrls = (["fr", "ar"] as const).flatMap((locale) =>
    localizedBases.map((base) => ({
      url: `${baseUrl}/${locale}${base}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: base === "" ? 0.9 : 0.7,
    }))
  )
  const localizedWorkUrls = (["fr", "ar"] as const).flatMap((locale) =>
    publishedWorkProjects().map((p) => ({
      url: `${baseUrl}/${locale}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    }))
  )
  const localizedInsightUrls = (["fr", "ar"] as const).flatMap((locale) =>
    publishedInsightArticles().map((a) => ({
      url: `${baseUrl}/${locale}/insights/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/designer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/trainer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/developer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/freebies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/case-study/meetup-pro`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...insightUrls,
    ...workUrls,
    ...localeUrls,
    ...localizedWorkUrls,
    ...localizedInsightUrls,
  ]
}
