import type { Metadata } from "next"
import MeetUpProCaseStudyBody from "@/components/case-study-meetup-pro-body"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import { workOgImage } from "@/lib/work"

// This route previously had no metadata export at all (it was a bare
// "use client" page), so it inherited the homepage's title/description and
// had no dedicated OG image, see checklist. Content now lives in
// components/case-study-meetup-pro-body.tsx so this server component can
// export real metadata.
export const metadata: Metadata = pageMetadata({
  path: "/case-study/meetup-pro",
  title: "MeetUp Pro Brand & Campaign · Case Study · Mohamed Dhia",
  description:
    "Event identity, social campaign assets, and on-site promotional design for a youth networking event, sold-out attendance and a template system reused across follow-up editions.",
  ogImage: {
    url: workOgImage("meetup-pro"),
    width: 1200,
    height: 630,
    alt: "MeetUp Pro case study",
  },
  openGraph: { type: "article" },
})

export default function MeetUpProCaseStudyPage() {
  const jsonLd = breadcrumbJsonLd("MeetUp Pro Case Study", "/case-study/meetup-pro")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MeetUpProCaseStudyBody />
    </>
  )
}
