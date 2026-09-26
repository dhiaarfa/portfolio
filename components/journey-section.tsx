"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Award, GraduationCap, Briefcase, Star } from "lucide-react"
import { certifications, education, aboutExperience, civicExperience } from "@/lib/profile"
import { useLanguage } from "@/components/language-provider"

// Kept off the About page (removed) but the underlying data is still worth
// having on Home, just compressed into one small tabbed card instead of
// four separate full-width sections with timelines and colored badges.
// Only one tab's rows render at a time, so this never grows past a handful
// of short lines no matter how much career history gets added later.

const CERT_ORDER = ["cnfcpp", "youth-clubs", "entrepreneur-leader", "graphic-design", "hubspot", "inco"]
const sortedCerts = [...certifications].sort(
  (a, b) => CERT_ORDER.indexOf(a.id) - CERT_ORDER.indexOf(b.id)
)

type TabId = "certifications" | "education" | "experience" | "civic"

type Row = { id: string; title: string; sub: string; when: string }

export default function JourneySection() {
  const { t } = useLanguage()
  const [tab, setTab] = useState<TabId>("certifications")

  const tabs: { id: TabId; label: string; Icon: typeof Award }[] = [
    { id: "certifications", label: t("certificationsHeading"), Icon: Award },
    { id: "education", label: t("aboutEducation"), Icon: GraduationCap },
    { id: "experience", label: t("professionalExperience"), Icon: Briefcase },
    { id: "civic", label: t("civicImpactTab"), Icon: Star },
  ]

  const rows: Record<TabId, Row[]> = {
    certifications: sortedCerts.map((c) => ({ id: c.id, title: c.title, sub: c.issuer, when: c.year })),
    education: education.map((e) => ({ id: e.id, title: e.degree, sub: `${e.school} · ${e.location}`, when: e.year })),
    experience: aboutExperience.map((x) => ({ id: x.id, title: x.role, sub: x.company, when: x.period })),
    civic: civicExperience.map((x) => ({ id: x.id, title: x.role, sub: x.company, when: x.period })),
  }

  return (
    <section className="relative overflow-hidden py-10 px-4 md:px-8 bg-section-tint">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-cover bg-center grayscale"
        style={{ backgroundImage: "url(/images/bg/bg-exhibition.jpg)" }}
        aria-hidden
      />
      <div className="relative max-w-2xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent text-center mb-1">
          Credentials
        </p>
        <h2 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-5">
          {t("myJourney")}
        </h2>

        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              type="button"
              onClick={() => setTab(tb.id)}
              aria-pressed={tab === tb.id}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                tab === tb.id
                  ? "bg-accent text-white"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <tb.Icon className="w-3.5 h-3.5" />
              {tb.label}
            </button>
          ))}
        </div>

        <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
          {/* Switching tabs used to swap content instantly with no
              transition -- felt like a static table rather than an
              interactive section. Each tab's rows now cross-fade + slide in
              as a group when the active tab changes. */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="divide-y divide-border"
            >
              {rows[tab].map((r) => (
                <div key={r.id} className="flex items-center justify-between gap-3 px-4 py-2.5">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{r.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{r.sub}</p>
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground shrink-0 whitespace-nowrap">
                    {r.when}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
