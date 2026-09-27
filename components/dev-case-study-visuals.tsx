"use client"

import Image from "next/image"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"
import { useLanguage } from "@/components/language-provider"
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
  { value: "97", labelKey: "metricDaysLabel", subKey: "metricDaysSub", Icon: Timer },
  { value: "5", labelKey: "metricSprintsLabel", subKey: "metricSprintsSub", Icon: GitBranch },
  { value: "109", labelKey: "metricTestsLabel", subKey: "metricTestsSub", Icon: FlaskConical },
  { value: "11", labelKey: "metricAiFeaturesLabel", subKey: "metricAiFeaturesSub", Icon: Brain },
  { value: "10", labelKey: "metricDbTablesLabel", sub: "PostgreSQL", Icon: Database },
  { value: "<50ms", labelKey: "metricMatchingLabel", subKey: "metricMatchingSub", Icon: Zap },
]

const MODULES = [
  {
    titleKey: "moduleCvEditorTitle",
    descKey: "moduleCvEditorDesc",
    Icon: FileText,
    image: "/images/projects/digimytch/dashboard.png",
  },
  {
    titleKey: "moduleJobMatchingTitle",
    descKey: "moduleJobMatchingDesc",
    Icon: Layers,
    image: "/images/projects/digimytch/analyze-offer.png",
  },
  {
    titleKey: "moduleTrainingCatalogTitle",
    descKey: "moduleTrainingCatalogDesc",
    Icon: GraduationCap,
    image: "/images/projects/digimytch/formations.png",
  },
  {
    titleKey: "moduleAppKanbanTitle",
    descKey: "moduleAppKanbanDesc",
    Icon: Kanban,
    image: "/images/projects/digimytch/kanban.png",
  },
  {
    titleKey: "moduleInterviewSimTitle",
    descKey: "moduleInterviewSimDesc",
    Icon: Mic,
    image: "/images/projects/digimytch/offers-scored.png",
  },
]

const SPRINTS = [
  { n: "0", labelKey: "sprint0Label", datesKey: "sprint0Dates", deliverableKey: "sprint0Deliverable" },
  { n: "1", labelKey: "sprint1Label", datesKey: "sprint1Dates", deliverableKey: "sprint1Deliverable" },
  { n: "2", labelKey: "sprint2Label", datesKey: "sprint2Dates", deliverableKey: "sprint2Deliverable" },
  { n: "3", labelKey: "sprint3Label", datesKey: "sprint3Dates", deliverableKey: "sprint3Deliverable" },
  { n: "4", labelKey: "sprint4Label", datesKey: "sprint4Dates", deliverableKey: "sprint4Deliverable" },
  { n: "5", labelKey: "sprint5Label", datesKey: "sprint5Dates", deliverableKey: "sprint5Deliverable" },
]

const COMPARE = [
  { featureKey: "compareFrenchInterface", hub: true, jobscan: false, rezi: true },
  { featureKey: "compareMatchingScore", hub: true, jobscan: true, rezi: false },
  { featureKey: "compareTrainingRecs", hub: true, jobscan: false, rezi: false },
  { featureKey: "moduleAppKanbanTitle", hub: true, jobscan: false, rezi: "partial" },
  { featureKey: "compareTunisiaFit", hub: true, jobscan: false, rezi: false },
  { featureKey: "compareAiInterviewSim", hub: true, jobscan: false, rezi: false },
  { featureKey: "compareExplainableAlgo", hub: true, jobscan: false, rezi: false },
  { featureKey: "compareFreeForCandidates", hub: true, jobscan: "partial", rezi: true },
]

function Cell({ value, t }: { value: boolean | string; t: (key: string) => string }) {
  if (value === true) return <CheckCircle2 className="mx-auto h-5 w-5 text-accent" aria-label={t("devVisualsYesAria")} />
  if (value === "partial")
    return <span className="text-xs font-medium text-amber-600 dark:text-amber-400">{t("devVisualsPartial")}</span>
  return <span className="text-muted-foreground/40">·</span>
}

export default function DevCaseStudyVisuals({ slug }: { slug: string }) {
  const { t } = useLanguage()
  if (slug !== "digimytch") return null

  return (
    <PhotoProvider>
    <div className="mb-12 space-y-12">
      {/* Key metrics */}
      <div>
        <p className="label mb-4">{t("devVisualsAtAGlance")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {METRICS.map(({ value, labelKey, subKey, sub, Icon }) => (
            <div
              key={labelKey}
              className="rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-accent/30"
            >
              <Icon className="mx-auto mb-2 h-5 w-5 text-accent" />
              <p className="font-display text-2xl font-black text-foreground leading-none">{value}</p>
              <p className="mt-1 text-xs font-semibold text-foreground">{t(labelKey)}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">{subKey ? t(subKey) : sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Five modules */}
      <div>
        <p className="label mb-2">{t("devVisualsPlatformModules")}</p>
        <h3 className="mb-6 text-xl font-bold text-foreground lg:text-2xl">{t("devVisualsFiveModulesHeading")}</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map(({ titleKey, descKey, Icon, image }) => (
            <article
              key={titleKey}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-md"
            >
              <PhotoView src={image}>
              <div className="relative aspect-[16/10] bg-muted cursor-zoom-in">
                <Image src={image} alt={t(titleKey)} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/90 text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-white">{t(titleKey)}</span>
                </div>
              </div>
              </PhotoView>
              <p className="p-4 text-sm leading-relaxed text-muted-foreground">{t(descKey)}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Sprint timeline */}
      <div>
        <p className="label mb-2">{t("devVisualsDelivery")}</p>
        <h3 className="mb-6 text-xl font-bold text-foreground lg:text-2xl">{t("devVisualsScrumHeading")}</h3>
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
                      <p className="font-semibold text-foreground">{t(s.labelKey)}</p>
                      <p className="text-xs text-muted-foreground">{t(s.datesKey)}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground sm:mt-0 sm:text-right">{t(s.deliverableKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive comparison */}
      <div>
        <p className="label mb-2">{t("devVisualsMarketPositioning")}</p>
        <h3 className="mb-4 text-xl font-bold text-foreground lg:text-2xl">{t("devVisualsBuiltForTunisia")}</h3>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold text-foreground">{t("devVisualsFeature")}</th>
                <th className="px-4 py-3 text-center font-semibold text-accent">DigiMyTech</th>
                <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Jobscan</th>
                <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Rezi.ai</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={row.featureKey} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                  <td className="px-4 py-3 text-foreground">{t(row.featureKey)}</td>
                  <td className="px-4 py-3 text-center"><Cell value={row.hub} t={t} /></td>
                  <td className="px-4 py-3 text-center"><Cell value={row.jobscan} t={t} /></td>
                  <td className="px-4 py-3 text-center"><Cell value={row.rezi} t={t} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Architecture strip */}
      <div className="rounded-2xl border border-accent/20 bg-accent-subtle/40 p-6">
        <p className="label mb-3">{t("devVisualsArchitecture")}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { layerKey: "archPresentationLayer", stack: "Next.js 15 · React 19 · Tailwind", noteKey: "archPresentationNote" },
            { layerKey: "archBusinessLayer", stack: "Server Actions · Zod DTOs", noteKey: "archBusinessNote" },
            { layerKey: "archDataLayer", stack: "Supabase · OpenRouter · Vercel AI SDK", noteKey: "archDataNote" },
          ].map((item) => (
            <div key={item.layerKey} className="rounded-xl border border-border bg-card p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{t(item.layerKey)}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{item.stack}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t(item.noteKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PhotoProvider>
  )
}
