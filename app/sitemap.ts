import { MetadataRoute } from "next"

import { publishedInsightArticles } from "@/lib/insights"
import { publishedWorkProjects } from "@/lib/work"

export default function sitemap(): MetadataRoute.Sitemap {
  // Sep 30 CRITICAL fix: matches lib/profile.ts's SITE_URL -- see its comment.
  // Vercel serves www as the real primary domain; this was apex, which
  // combined with the live apex->www redirect meant every sitemap URL
  // 308'd forever instead of resolving.
  const baseUrl = "https://www.dhia-portfolio.com"
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
    // Sep 30 SEO fix: /case-study/meetup-pro (a duplicate of /work/meetup-pro,
    // see next.config.js redirects) is deleted and now 301s -- a sitemap
    // should only ever list canonical, 200-status URLs, never a redirecting
    // one, so this entry is removed rather than pointed at a dead route.
    ...insightUrls,
    ...workUrls,
    ...localeUrls,
    ...localizedWorkUrls,
    ...localizedInsightUrls,
  ]
}
