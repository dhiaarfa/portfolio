"use client"

import { useState } from "react"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { ArrowUpRight } from "lucide-react"
import DeviceFrame, { type FrameVariant } from "@/components/ui/device-frame"
import type { Project } from "@/components/sections/ProjectStack"

// Nov 2026 audit: replaces the sticky card pile on Home. Stacked cards slid
// over each other's text while scrolling and left a tall empty band after
// the last one. Same projects, laid out as a plain list: two large rows,
// then a two-column set. No cards, no pills; the screenshots do the work.
type Props = { title: string; subtitle: string; projects: Project[] }

function ProjectLink({ project, className, children }: { project: Project; className?: string; children: React.ReactNode }) {
  if (!project.href) return <div className={className}>{children}</div>
  return project.href.startsWith("/") ? (
    <Link href={project.href} className={className}>{children}</Link>
  ) : (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  )
}

const isWeb = (p: Project) => p.tags.some((t) => /next|react|tailwind|supabase/i.test(t)) || /^web/i.test(p.meta)
const WEB: FrameVariant[] = ["laptop", "phone", "window"]
const ART: FrameVariant[] = ["poster", "polaroid", "sticker"]
function frameFor(p: Project, i: number): FrameVariant { return (isWeb(p) ? WEB : ART)[i % 3] }

function Text({ project, large }: { project: Project; large?: boolean }) {
  return (
    <div>
      <p className="sticker !rotate-0 mb-3">{project.meta}</p>
      <h3 className={`title-lg font-display leading-tight text-slate-900 dark:text-white group-hover:text-accent transition-colors ${large ? "text-2xl md:text-[2rem]" : "text-xl md:text-2xl"}`}>
        {project.name}
        {project.href && <ArrowUpRight className="inline-block ms-1.5 h-[0.7em] w-[0.7em] align-baseline opacity-60 rtl:-scale-x-100" aria-hidden />}
      </h3>
      <p className={`mt-2 text-slate-600 dark:text-slate-300 leading-relaxed ${large ? "text-base" : "text-sm"}`}>{project.description}</p>
      {project.tags?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border-2 border-foreground/80 px-3 py-0.5 text-xs font-semibold">{tag}</li>
          ))}
        </ul>
      ) : null}
      {project.href && (
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--block-lime)] px-4 py-1.5 text-sm font-bold text-[#14140f] border-2 border-[var(--tactile-ink)]">
          Take a look <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
        </span>
      )}
    </div>
  )
}

export default function WorkList({ title, subtitle, projects }: Props) {
  const lead = projects.slice(0, 2)
  const [all, setAll] = useState(false)
  const rest = projects.slice(2, all ? undefined : 4)
  const hidden = projects.length - 4
  return (
    <section className="section-compact px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-[clamp(28px,4vw,46px)] leading-tight text-slate-900 dark:text-white mb-2">{title}</h2>
        <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mb-10">{subtitle}</p>

        <div className="space-y-14 md:space-y-20">
          {lead.map((project, i) => (
            <ProjectLink
              key={project.name}
              project={project}
              className="group grid grid-cols-1 md:grid-cols-12 items-center gap-x-10 gap-y-5"
            >
              <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <DeviceFrame variant={isWeb(project) ? (i % 2 ? "window" : "laptop") : (i % 2 ? "polaroid" : "poster")} src={project.image} alt={project.name} label={project.href ? "View project ↗" : undefined} />
              </div>
              <div className="md:col-span-5">
                <Text project={project} large />
              </div>
            </ProjectLink>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
            {rest.map((project, ri) => (
              <ProjectLink key={project.name} project={project} className="group block">
                <div className="mb-6 pt-2">
                  <DeviceFrame variant={frameFor(project, ri)} src={project.image} alt={project.name} sizes="(max-width: 640px) 100vw, 480px" label={project.href ? "View ↗" : undefined} />
                </div>
                <Text project={project} />
              </ProjectLink>
            ))}
          </div>
        )}
        {!all && hidden > 0 && (
          <div className="mt-14 text-center">
            <button type="button" onClick={() => setAll(true)} className="btn-outline">Load more projects</button>
          </div>
        )}
      </div>
    </section>
  )
}
