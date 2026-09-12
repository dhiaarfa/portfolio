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
  "/about": DEFAULT_OG_IMAGE,
  "/designer": {
    // Real 1200x630 branded card — see checklist §2.4/§2.6: the old value here
    // pointed straight at lone-space-gold.png (an actual 1080x1080 square)
    // while claiming 1200x630, so social previews were cropping it badly.
    url: "/images/og/pillar-designer.png",
    width: 1200,
    height: 630,
    alt: "Mohamed Dhia Arfa — Brand designer, Zia Studio",
  },
  "/trainer": {
    // Old value (dhia-trainer-hero.png) is actually 1024x682, not 1200x630.
    url: "/images/og/pillar-trainer.png",
    width: 1200,
    height: 630,
    alt: "Mohamed Dhia Arfa — Certified youth trainer in Tunisia",
  },
  "/developer": {
    // Old value (digimytch/landing.png) is actually a 757x1024 portrait screenshot.
    url: "/images/og/pillar-developer.png",
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
