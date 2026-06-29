"use client"

import Image from "next/image"
import {
  Brain,
  FileText,
  GitBranch,
  GraduationCap,
  Kanban,
  Mic,
  Database,
  FlaskConical,
  Timer,
  Layers,
  CheckCircle2,
  Zap,
} from "lucide-react"

const METRICS = [
  { value: "97", label: "Days", sub: "PFE capstone", Icon: Timer },
  { value: "5", label: "Sprints", sub: "Scrum delivery", Icon: GitBranch },
  { value: "109", label: "Tests", sub: "All passing", Icon: FlaskConical },
  { value: "11", label: "AI features", sub: "Embedded in UX", Icon: Brain },
  { value: "10", label: "DB tables", sub: "PostgreSQL", Icon: Database },
  { value: "<50ms", label: "Matching", sub: "Deterministic score", Icon: Zap },
]

const MODULES = [
  {
    title: "Smart CV editor",
    desc: "AI-assisted writing, PDF/Word/OCR import, high-fidelity PDF export.",
    Icon: FileText,
    image: "/images/projects/digimytch/dashboard.png",
  },
  {
    title: "Job matching",
    desc: "0–100 compatibility score with skills gap analysis and AI explanation.",
    Icon: Layers,
    image: "/images/projects/digimytch/analyze-offer.png",
  },
  {
    title: "Training catalog",
    desc: "Formations ranked by detected skill gaps from your profile.",
    Icon: GraduationCap,
    image: "/images/projects/digimytch/formations.png",
  },
  {
    title: "Application Kanban",
    desc: "Four-column tracker with timestamped status history.",
    Icon: Kanban,
    image: "/images/projects/digimytch/kanban.png",
  },
  {
    title: "Interview simulator",
    desc: "8 AI-generated questions, voice or text mode, personalized debrief.",
    Icon: Mic,
    image: "/images/projects/digimytch/offers-scored.png",
  },
]

const SPRINTS = [
  { n: "0", label: "Initiation", dates: "Feb 15–28", deliverable: "Backlog & architecture" },
  { n: "1", label: "Auth & profile", dates: "Mar 2–13", deliverable: "Magic link + RLS dashboard" },
  { n: "2", label: "CV editor", dates: "Mar 16–27", deliverable: "Editor, PDF export, AI quality score" },
  { n: "3", label: "AI & matching", dates: "Mar 30 – Apr 10", deliverable: "Matching engine + formations" },
  { n: "4", label: "Kanban", dates: "Apr 13–24", deliverable: "Application tracking + admin" },
  { n: "5", label: "Interview AI", dates: "Apr 27 – May 8", deliverable: "Voice simulator + final QA" },
]

const COMPARE = [
  { feature: "French interface", hub: true, jobscan: false, rezi: true },
  { feature: "0–100 matching score", hub: true, jobscan: true, rezi: false },
  { feature: "Training recommendations", hub: true, jobscan: false, rezi: false },
  { feature: "Application Kanban", hub: true, jobscan: false, rezi: "partial" },
  { feature: "Tunisia market fit", hub: true, jobscan: false, rezi: false },
  { feature: "AI interview simulator", hub: true, jobscan: false, rezi: false },
  { feature: "Explainable matching algo", hub: true, jobscan: false, rezi: false },
  { feature: "Free for candidates", hub: true, jobscan: "partial", rezi: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 className="mx-auto h-5 w-5 text-accent" aria-label="Yes" />
  if (value === "partial")
    return <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Partial</span>
  return <span className="text-muted-foreground/40">—</span>
}

export default function DevCaseStudyVisuals({ slug }: { slug: string }) {
  if (slug !== "digimytch") return null

  return (
    <div className="mb-12 space-y-12">
      {/* Key metrics */}
      <div>
        <p className="label mb-4">At a glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {METRICS.map(({ value, label, sub, Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-accent/30"
            >
              <Icon className="mx-auto mb-2 h-5 w-5 text-accent" />
              <p className="font-display text-2xl font-black text-foreground leading-none">{value}</p>
              <p className="mt-1 text-xs font-semibold text-foreground">{label}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Five modules */}
      <div>
        <p className="label mb-2">Platform modules</p>
        <h3 className="mb-6 text-xl font-bold text-foreground lg:text-2xl">Five modules, one candidate journey</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map(({ title, desc, Icon, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] bg-muted">
                <Image src={image} alt={title} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/90 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-white">{title}</span>
                </div>
              </div>
              <p className="p-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Sprint timeline */}
      <div>
        <p className="label mb-2">Delivery</p>
        <h3 className="mb-6 text-xl font-bold text-foreground lg:text-2xl">Scrum: 5 sprints in 97 days</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/20 hidden sm:block" aria-hidden />
          <div className="space-y-3">
            {SPRINTS.map((s) => (
              <div key={s.n} className="relative flex gap-4 sm:pl-10">
                <span className="absolute left-2.5 top-4 hidden h-3 w-3 rounded-full border-2 border-accent bg-background sm:block" aria-hidden />
                <div className="flex-1 rounded-xl border border-border bg-card p-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-subtle font-display text-sm font-black text-accent">
                      S{s.n}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{s.label}</p>
                      <p className="text-xs text-muted-foreground">{s.dates}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground sm:mt-0 sm:text-right">{s.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive comparison */}
      <div>
        <p className="label mb-2">Market positioning</p>
        <h3 className="mb-4 text-xl font-bold text-foreground lg:text-2xl">Built for Tunisia — not a US import</h3>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Feature</th>
                <th className="px-4 py-3 text-center font-semibold text-accent">DigiMyTech</th>
                <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Jobscan</th>
                <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Rezi.ai</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                  <td className="px-4 py-3 text-foreground">{row.feature}</td>
                  <td className="px-4 py-3 text-center"><Cell value={row.hub} /></td>
                  <td className="px-4 py-3 text-center"><Cell value={row.jobscan} /></td>
                  <td className="px-4 py-3 text-center"><Cell value={row.rezi} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Architecture strip */}
      <div className="rounded-2xl border border-accent/20 bg-accent-subtle/40 p-6">
        <p className="label mb-3">Architecture</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { layer: "Presentation", stack: "Next.js 15 · React 19 · Tailwind", note: "SSR/SSG hybrid UI" },
            { layer: "Business logic", stack: "Server Actions · Zod DTOs", note: "Repository pattern" },
            { layer: "Data & AI", stack: "Supabase · OpenRouter · Vercel AI SDK", note: "RLS + streaming LLM" },
          ].map((item) => (
            <div key={item.layer} className="rounded-xl border border-border bg-card p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{item.layer}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{item.stack}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
