import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { workBySlug, publishedWorkProjects, workOgImage, localizedWork } from "@/lib/work"
import { workContent } from "@/lib/work-content"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"
import WorkCaseStudyClient from "@/components/work-case-study-client"
import type { Language } from "@/lib/translations"

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  return publishedWorkProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (locale !== "fr" && locale !== "ar") return {}
  const project = workBySlug(slug)
  if (!project) return {}

  const { excerpt } = localizedWork(project, locale)

  return pageMetadata({
    path: `/${locale}/work/${slug}`,
    title: `${project.title} · ${locale === "fr" ? "Étude de cas" : "دراسة حالة"} · Mohamed Dhia`,
    description: excerpt,
    locale: locale as Language,
    hreflangPath: `/work/${slug}`,
    ogImage: {
      url: workOgImage(slug),
      width: 1200,
      height: 630,
      alt: `${project.title} case study`,
    },
    openGraph: { type: "article" },
  })
}

export default async function LocaleWorkCaseStudyPage({ params }: Props) {
  const { locale, slug } = await params
  if (locale !== "fr" && locale !== "ar") notFound()

  const project = workBySlug(slug)
  const content = workContent[slug]
  if (!project || !content) notFound()

  const nextProject = project.nextSlug ? workBySlug(project.nextSlug) ?? null : null
  const url = `${SITE_URL}/${locale}/work/${slug}`
  const isDev = project.kind === "dev"

  // JSON-LD stays in English, matching the convention on the unprefixed
  // /work/[slug] route (SEO structured data isn't localized elsewhere on
  // this site) -- only the url field points at this locale's page.
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
