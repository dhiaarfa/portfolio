"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import {
  Target,
  Smartphone,
  PenLine,
  Palette,
  BarChart3,
  FileText,
  Handshake,
  TrendingUp,
  Megaphone,
  Compass,
  Globe,
  type LucideIcon,
} from "lucide-react"

type Tint = "pink" | "amber" | "sky" | "violet"

const tintStyles: Record<Tint, { wash: string; ring: string; badge: string; chip: string; icon: string }> = {
  pink: {
    wash: "from-pink-50 via-white to-white dark:from-pink-500/10 dark:via-slate-900 dark:to-slate-900",
    ring: "ring-pink-100 dark:ring-pink-500/20",
    badge: "bg-pink-100 dark:bg-pink-500/15",
    chip: "bg-pink-50 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300",
    icon: "text-pink-600 dark:text-pink-300",
  },
  amber: {
    wash: "from-amber-50 via-white to-white dark:from-amber-500/10 dark:via-slate-900 dark:to-slate-900",
    ring: "ring-amber-100 dark:ring-amber-500/20",
    badge: "bg-amber-100 dark:bg-amber-500/15",
    chip: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    icon: "text-amber-600 dark:text-amber-300",
  },
  sky: {
    wash: "from-sky-50 via-white to-white dark:from-sky-500/10 dark:via-slate-900 dark:to-slate-900",
    ring: "ring-sky-100 dark:ring-sky-500/20",
    badge: "bg-sky-100 dark:bg-sky-500/15",
    chip: "bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    icon: "text-sky-600 dark:text-sky-300",
  },
  violet: {
    wash: "from-violet-50 via-white to-white dark:from-violet-500/10 dark:via-slate-900 dark:to-slate-900",
    ring: "ring-violet-100 dark:ring-violet-500/20",
    badge: "bg-violet-100 dark:bg-violet-500/15",
    chip: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    icon: "text-violet-600 dark:text-violet-300",
  },
}

// Icons instead of emoji: keeps this section on the same Lucide icon
// language as the rest of the site (nav, footer, skill bars) rather than
// mixing in emoji, whose weight/style shifts per OS and font.
const experiences: {
  roleKey: string
  company?: string
  yearKey?: string
  year?: string
  metricValueKey?: string
  metricValue?: string
  metricLabelKey: string
  descKey: string
  Icon: LucideIcon
  tint: Tint
}[] = [
  {
    roleKey: "expMktMgrSperanzaRole",
    company: "Speranza Café & Resto",
    year: "2025",
    metricValue: "+40%",
    metricLabelKey: "expMktMgrSperanzaMetricLabel",
    descKey: "expMktMgrSperanzaDesc",
    Icon: TrendingUp,
    tint: "pink",
  },
  {
    roleKey: "expMktMgrCritRole",
    company: "CRIT Tunisie",
    year: "2025",
    metricValue: "+80%",
    metricLabelKey: "expMktMgrCritMetricLabel",
    descKey: "expMktMgrCritDesc",
    Icon: Megaphone,
    tint: "sky",
  },
  {
    roleKey: "expFreelanceRole",
    yearKey: "expFreelanceYear",
    metricValue: "20+",
    metricLabelKey: "expFreelanceMetricLabel",
    descKey: "expFreelanceDesc",
    Icon: Compass,
    tint: "amber",
  },
  {
    roleKey: "expAiesecRole",
    company: "AIESEC Tunisia",
    year: "2022–2024",
    metricValueKey: "expAiesecMetricValue",
    metricLabelKey: "expAiesecMetricLabel",
    descKey: "expAiesecDesc",
    Icon: Globe,
    tint: "violet",
  },
]

const skills: { nameKey: string; Icon: LucideIcon; tint: Tint }[] = [
  { nameKey: "skillBranding", Icon: Target, tint: "pink" },
  { nameKey: "skillSocialMedia", Icon: Smartphone, tint: "sky" },
  { nameKey: "skillContentStrategy", Icon: PenLine, tint: "amber" },
  { nameKey: "skillAdobeSuite", Icon: Palette, tint: "violet" },
  { nameKey: "skillMetaBusiness", Icon: BarChart3, tint: "sky" },
  { nameKey: "skillCopywriting", Icon: FileText, tint: "amber" },
  { nameKey: "skillUiUxCollab", Icon: Handshake, tint: "pink" },
]

export default function MarketingSection() {
  const { t } = useLanguage()
  return (
    <section id="marketing" className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="space-y-4">
            <p className="label">{t("marketingLabel")}</p>
            <h2 className="text-slate-900 dark:text-white">{t("marketingHeading")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t("marketingIntro")}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {skills.map((skill, i) => {
              const ts = tintStyles[skill.tint]
              return (
                <motion.div
                  key={i}
                  className={`relative overflow-hidden rounded-[1.5rem] ring-1 ${ts.ring} bg-gradient-to-br ${ts.wash} px-4 py-5 flex flex-col items-center text-center gap-2.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                  whileHover={{ y: -2 }}
                >
                  <div className={`w-10 h-10 rounded-full ${ts.badge} flex items-center justify-center`}>
                    <skill.Icon className={`w-5 h-5 ${ts.icon}`} aria-hidden />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{t(skill.nameKey)}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Experience Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => {
              const ts = tintStyles[exp.tint]
              return (
                <motion.div
                  key={i}
                  className={`group relative overflow-hidden p-6 md:p-8 rounded-[2rem] ring-1 ${ts.ring} bg-gradient-to-br ${ts.wash} hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-500`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <exp.Icon
                    className={`pointer-events-none absolute -top-4 -right-2 w-24 h-24 opacity-[0.08] group-hover:scale-110 group-hover:opacity-[0.12] transition-all duration-500 ${ts.icon}`}
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <div className="relative space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-full ${ts.badge} flex items-center justify-center flex-shrink-0`}>
                        <exp.Icon className={`w-5 h-5 ${ts.icon}`} aria-hidden />
                      </div>
                      <div className="flex flex-col gap-1 pt-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t(exp.roleKey)}</h3>
                        {exp.company && (
                          <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1.5 rounded-full text-sm font-bold ${ts.chip}`}>
                        {exp.metricValueKey ? t(exp.metricValueKey) : exp.metricValue}
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">{t(exp.metricLabelKey)}</p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{t(exp.descKey)}</p>

                    <p className="text-xs text-muted-foreground font-medium pt-2">{exp.yearKey ? t(exp.yearKey) : exp.year}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
