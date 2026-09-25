import type { Metadata } from "next"
import { SITE_URL } from "@/lib/profile"

/** Shape of an OG/Twitter preview image — kept as a general type (not `typeof DEFAULT_OG_IMAGE`)
 *  so every route can have its own url/alt text without TypeScript narrowing them all to
 *  DEFAULT_OG_IMAGE's exact literal values (this was a real, previously-suppressed type
 *  error — see checklist §5.4/§7 for how it was found). */
type OgImage = {
  url: string
  width: number
  height: number
  alt: string
}

export const DEFAULT_OG_IMAGE: OgImage = {
  url: "/images/photos/dhia-og-image.png",
  width: 1200,
  height: 630,
  alt: "Mohamed Dhia Arfa — Designer, Trainer & Web Developer",
}

/** Per-route OG images for rich link previews on social & messaging apps. */
export const PAGE_OG_IMAGES: Record<string, OgImage> = {
  "/": DEFAULT_OG_IMAGE,
  "/designer": {
    // Generated live by app/api/og/route.tsx (@vercel/og) instead of a
    // static PNG from scripts/gen-og-images.py — see checklist §2.4/§2.6
    // for why this needed to be a real 1200x630 card in the first place,
    // and the Master to-do list (Tier 6) for the @vercel/og migration.
    url: `/api/og?${new URLSearchParams({
      kicker: "Designer · Brand & Marketing",
      title: "Mohamed Dhia Arfa",
      subhead: "Design that sells — brand identity, campaigns, and marketing strategy for Tunisian brands.",
      image: "/images/lone-space-gold.png",
    })}`,
    width: 1200,
    height: 630,
    alt: "Mohamed Dhia Arfa — Brand designer, Zia Studio",
  },
  "/trainer": {
    url: `/api/og?${new URLSearchParams({
      kicker: "Trainer & Educator",
      title: "Mohamed Dhia Arfa",
      subhead: "I help NGOs, schools, and youth organizations run trainings that actually change behavior.",
      image: "/images/photos/dhia-trainer-hero.png",
      top: "1",
    })}`,
    width: 1200,
    height: 630,
    alt: "Mohamed Dhia Arfa — Certified youth trainer in Tunisia",
  },
  "/developer": {
    url: `/api/og?${new URLSearchParams({
      kicker: "Developer · Full-Stack",
      title: "Mohamed Dhia Arfa",
      subhead: "Design-trained developer who ships. React, Next.js, Supabase.",
      image: "/images/projects/digimytch/landing.png",
      top: "1",
    })}`,
    width: 1200,
    height: 630,
    alt: "Mohamed Dhia Arfa — Full-stack developer",
  },
  "/freebies": {
    url: "/images/photos/dhia-og-image.png",
    width: 1200,
    height: 630,
    alt: "Free design & training resources by Mohamed Dhia Arfa",
  },
  "/insights": {
    url: "/images/photos/dhia-og-image.png",
    width: 1200,
    height: 630,
    alt: "Insights on design, training & development",
  },
}

/** Simple two-level BreadcrumbList JSON-LD: Home > current page. */
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  }
}

type PageMetaInput = {
  path: string
  title: string
  description: string
  keywords?: string[]
  openGraph?: Metadata["openGraph"]
  /** Override default route OG image */
  ogImage?: OgImage
}

/** Per-route metadata with canonical, Open Graph, and Twitter cards. */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  openGraph,
  ogImage,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`
  const image = ogImage ?? PAGE_OG_IMAGES[path] ?? DEFAULT_OG_IMAGE
  const ogTitle = (openGraph && "title" in openGraph && openGraph.title) || title
  const ogDescription =
    (openGraph && "description" in openGraph && openGraph.description) || description

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Mohamed Dhia Arfa Portfolio",
      locale: "en_US",
      title: ogTitle,
      description: ogDescription,
      images: [image],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [image.url],
    },
  }
}
