import type { Metadata } from "next"
import { SITE_URL } from "@/lib/profile"

export const DEFAULT_OG_IMAGE = {
  url: "/images/photos/dhia-main.png",
  width: 1200,
  height: 630,
  alt: "Mohamed Dhia Arfa — Designer, Trainer & Web Developer",
} as const

/** Per-route OG images for rich link previews on social & messaging apps. */
export const PAGE_OG_IMAGES: Record<string, typeof DEFAULT_OG_IMAGE> = {
  "/": DEFAULT_OG_IMAGE,
  "/about": DEFAULT_OG_IMAGE,
  "/designer": {
    url: "/images/lone-space-gold.png",
    width: 1200,
    height: 630,
    alt: "Zia Studio brand design work by Mohamed Dhia Arfa",
  },
  "/trainer": {
    url: "/images/photos/dhia-trainer-hero.png",
    width: 1200,
    height: 630,
    alt: "Mohamed Dhia Arfa — Certified youth trainer in Tunisia",
  },
  "/developer": {
    url: "/images/projects/digimytch/landing.png",
    width: 1200,
    height: 630,
    alt: "DigiMyTech Talent Hub — AI web app by Mohamed Dhia Arfa",
  },
  "/freebies": {
    url: "/images/photos/dhia-main.png",
    width: 1200,
    height: 630,
    alt: "Free design & training resources by Mohamed Dhia Arfa",
  },
  "/insights": {
    url: "/images/photos/dhia-main.png",
    width: 1200,
    height: 630,
    alt: "Insights on design, training & development",
  },
}

type PageMetaInput = {
  path: string
  title: string
  description: string
  keywords?: string[]
  openGraph?: Metadata["openGraph"]
  /** Override default route OG image */
  ogImage?: typeof DEFAULT_OG_IMAGE
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
