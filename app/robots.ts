import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // Sep 30 CRITICAL fix: matches lib/profile.ts's SITE_URL -- see its comment.
  const baseUrl = "https://www.dhia-portfolio.com"
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
