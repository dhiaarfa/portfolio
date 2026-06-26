import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import WorkCaseStudyBody from "@/components/work-case-study-body"
import { workBySlug, publishedWorkProjects } from "@/lib/work"
import { getWorkContent } from "@/lib/work-content"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"

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
    openGraph: { type: "article" },
  })
}

export default async function WorkCaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = workBySlug(slug)
  const content = getWorkContent(slug)
  if (!project || !content) notFound()

  const nextProject = project.nextSlug ? workBySlug(project.nextSlug) : null
  const url = `${SITE_URL}/work/${slug}`
  const isDev = project.kind === "dev"

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
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="pb-14 pt-[5.5rem]">
        <article className="mx-auto max-w-4xl px-6">
          <Link
            href={isDev ? "/developer#projects" : "/designer#case-studies"}
            className="mb-6 inline-block text-sm text-accent hover:underline"
          >
            ← Back to {isDev ? "development work" : "design work"}
          </Link>

          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority sizes="(max-width: 896px) 100vw, 896px" />
          </div>

          <p className="label mb-2">
            {project.category}
            {project.concept ? " · Concept" : ""}
            {project.metrics ? ` · ${project.metrics}` : ""}
          </p>
          <h1 className="font-display mb-4 text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">{project.title}</h1>
          <p className="mb-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{project.clientLine}</p>

          <div className="mb-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-border bg-card px-3 py-1.5 font-medium">{project.role}</span>
            <span className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground">{project.timeline}</span>
            {isDev && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent/30 bg-accent-subtle px-3 py-1.5 font-medium text-accent hover:underline"
              >
                Live demo ↗
              </a>
            )}
            {isDev && project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-3 py-1.5 font-medium hover:text-accent"
              >
                GitHub ↗
              </a>
            )}
          </div>

          <div className="mb-10 rounded-xl border border-accent/20 bg-accent-subtle px-4 py-3 text-sm text-foreground">
            <strong>Outcome:</strong> {project.outcome}
          </div>

          <WorkCaseStudyBody content={content} />

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Stack:</strong> {project.tools.join(", ")}
            </div>
            {isDev ? (
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:underline">
                    Visit live site ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:underline">
                    View on GitHub ↗
                  </a>
                )}
              </div>
            ) : (
              <a
                href={project.behanceUrl ?? siteConfig.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent hover:underline"
              >
                Full project on Behance ↗
              </a>
            )}
          </div>

          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="mt-8 flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <span className="text-sm text-muted-foreground">Next project</span>
              <span className="font-semibold text-foreground">{nextProject.title} →</span>
            </Link>
          )}

          <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white">
            <h2 className="mb-2 text-2xl font-bold">{isDev ? "Building something similar?" : "Like this work?"}</h2>
            <p className="mb-6 text-slate-400">
              {isDev ? "Tell me about your product or site. I respond within 24 hours." : "Tell me about your brand. I'll reply within 24 hours."}
            </p>
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex">
              {isDev ? "Let's talk" : "Start a project"}
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
