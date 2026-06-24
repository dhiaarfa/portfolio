import type { Metadata } from "next"
import { SITE_URL } from "@/lib/profile"

type PageMetaInput = {
  path: string
  title: string
  description: string
  keywords?: string[]
  openGraph?: Metadata["openGraph"]
}

/** Per-route metadata with correct canonical + og:url (fixes C-07). */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  openGraph,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`

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
      title,
      description,
      ...openGraph,
    },
  }
}
