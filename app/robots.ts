import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // Sep 30 CRITICAL fix: matches lib/profile.ts's SITE_URL -- see its comment.
  const baseUrl = "https://www.dhia-portfolio.com"
  
  return {
    rules: [
      {
        userAgent: "*",
        // Oct 2026: /_next/ was disallowed, which blocked the CSS and JS
        // Google needs to render every page. /api/og stays crawlable so the
        // share-card images can be indexed with the pages that use them.
        allow: ["/", "/api/og"],
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
