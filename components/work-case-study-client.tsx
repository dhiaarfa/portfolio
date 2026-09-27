"use client"

import { Link } from "next-view-transitions"
import Image from "next/image"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import WorkCaseStudyBody from "@/components/work-case-study-body"
import DevCaseStudyVisuals from "@/components/dev-case-study-visuals"
import { useLanguage } from "@/components/language-provider"
import { categoryKey, localizedWork, type WorkProject } from "@/lib/work"
import type { WorkContentLocale } from "@/lib/work-content"
import { siteConfig } from "@/lib/site-config"

type Props = {
  slug: string
  project: WorkProject
  content: Record<WorkContentLocale, string>
  nextProject: WorkProject | null
}

export default function WorkCaseStudyClient({ slug, project, content, nextProject }: Props) {
  const { t, language } = useLanguage()
  const lw = localizedWork(project, language)
  const bodyContent = content[language] ?? content.en
  const isDev = project.kind === "dev"

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" className="pb-14 pt-[5.5rem]">
        <article className="mx-auto max-w-4xl px-6">
          <Link
            href={isDev ? "/developer#projects" : "/designer#case-studies"}
            className="mb-6 inline-block text-sm text-accent hover:underline"
          >
            {isDev ? t("workBackToDev") : t("workBackToDesign")}
          </Link>

          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority sizes="(max-width: 896px) 100vw, 896px" />
          </div>

          <p className="label mb-2">
            {t(categoryKey(project.category))}
            {project.concept ? " · Concept" : ""}
            {lw.metrics ? ` · ${lw.metrics}` : ""}
          </p>
          <h1 className="h1-article mb-4 text-foreground">{project.title}</h1>
          <p className="mb-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{lw.clientLine}</p>

          <div className="mb-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-border bg-card px-3 py-1.5 font-medium">{lw.role}</span>
            <span className="rounded-full border border-border bg-card px-3 py-1.5 text-muted-foreground">{lw.timeline}</span>
            {isDev && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent/30 bg-accent-subtle px-3 py-1.5 font-medium text-accent hover:underline"
              >
                {t("devLiveDemo")} ↗
              </a>
            )}
            {isDev && project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-3 py-1.5 font-medium hover:text-accent"
              >
                {t("devGithubLabel")} ↗
              </a>
            )}
          </div>

          <div className="mb-10 rounded-xl border border-accent/20 bg-accent-subtle px-4 py-3 text-sm text-foreground">
            <strong>{t("workOutcomeLabel")}</strong> {lw.outcome}
          </div>

          {isDev && <DevCaseStudyVisuals slug={slug} />}

          <WorkCaseStudyBody content={bodyContent} />

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">{t("workStackLabel")}</strong> {project.tools.join(", ")}
            </div>
            {isDev ? (
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:underline">
                    {t("workVisitLiveSite")}
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:underline">
                    {t("workViewOnGithub")}
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
                {t("workFullProjectBehance")}
              </a>
            )}
          </div>

          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="mt-8 flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <span className="text-sm text-muted-foreground">{t("workNextProject")}</span>
              <span className="font-semibold text-foreground">{nextProject.title} →</span>
            </Link>
          )}

          <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white">
            <h2 className="mb-2 text-2xl font-bold">{isDev ? t("workBuildingSimilarHeading") : t("workLikeThisHeading")}</h2>
            <p className="mb-6 text-slate-400">
              {isDev ? t("workBuildingSimilarSubtext") : t("workLikeThisSubtext")}
            </p>
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex">
              {isDev ? t("devBtnLetsTalk") : t("designerStartProjectArrow")}
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
