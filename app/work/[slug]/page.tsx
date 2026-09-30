import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { workBySlug, publishedWorkProjects, workOgImage } from "@/lib/work"
import { workContent } from "@/lib/work-content"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"
import WorkCaseStudyClient from "@/components/work-case-study-client"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return publishedWorkProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = workBySlug(slug)
  if (!project) return {}

  return pageMetadata({
    path: `/work/${slug}`,
    title: `${project.title} · Case Study · Mohamed Dhia`,
    description: project.excerpt,
    // Sep 30 SEO addition: real per-project keywords (client/brand name,
    // category, and the actual tools/tech used) instead of relying on the
    // site-wide default -- lets each case study rank for the specific
    // technologies and project names it's actually about.
    keywords: [project.title, project.category, ...project.tools],
    ogImage: {
      // Real 1200x630 branded card, not the raw screenshot (which is an
      // arbitrary aspect ratio), see lib/work.ts's workOgImage() and
      // checklist §2.4/§2.6.
      url: workOgImage(slug),
      width: 1200,
      height: 630,
      alt: `${project.title} case study`,
    },
    openGraph: { type: "article" },
  })
}

export default async function WorkCaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = workBySlug(slug)
  const content = workContent[slug]
  if (!project || !content) notFound()

  const nextProject = project.nextSlug ? workBySlug(project.nextSlug) ?? null : null
  const url = `${SITE_URL}/work/${slug}`
  const isDev = project.kind === "dev"

  // JSON-LD stays in English (SEO metadata isn't localized elsewhere on this
  // site either, see lib/page-metadata.ts's other structured-data blocks).
  const jsonLd = isDev
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.excerpt,
        applicationCategory: "WebApplication",
        author: { "@type": "Person", name: "Mohamed Dhia Arfa" },
        url: project.liveUrl ?? url,
        image: `${SITE_URL}${project.heroImage}`,
      }
    : {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.excerpt,
        author: { "@type": "Person", name: "Mohamed Dhia Arfa" },
        url,
        image: `${SITE_URL}${project.heroImage}`,
      }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WorkCaseStudyClient slug={slug} project={project} content={content} nextProject={nextProject} />
    </>
  )
}
