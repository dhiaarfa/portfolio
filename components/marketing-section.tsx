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

// Charte-graphique pass (Oct 2026): this section used to cycle pink/amber/sky
// per card purely for visual variety -- but this page IS the Design
// discipline, so mixing in blue/amber (which elsewhere on the site mean
// Dev/Training) read as off-brand noise rather than intentional color-coding.
// Every skill and experience card now shares one accent language: the site's
// green gradient (.bg-accent-gradient, sourced from Dhia's own hero-photo
// gradient, same one used on CTA buttons) for the icon badge, and a soft
// green tint for the surrounding wash/chip. No more per-card "tint" prop.
const cardStyle = {
  wash: "from-accent-subtle via-white to-white dark:from-accent-subtle dark:via-card dark:to-card",
  ring: "ring-accent/15 dark:ring-accent/25",
  chip: "bg-accent-subtle text-accent",
  decorIcon: "text-accent",
}

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
}[] = [
  {
    roleKey: "expMktMgrSperanzaRole",
    company: "Speranza Café & Resto",
    year: "2025",
    metricValue: "+40%",
    metricLabelKey: "expMktMgrSperanzaMetricLabel",
    descKey: "expMktMgrSperanzaDesc",
    Icon: TrendingUp,
  },
  {
    roleKey: "expMktMgrCritRole",
    company: "CRIT Tunisie",
    year: "2025",
    metricValue: "+80%",
    metricLabelKey: "expMktMgrCritMetricLabel",
    descKey: "expMktMgrCritDesc",
    Icon: Megaphone,
  },
  {
    roleKey: "expFreelanceRole",
    yearKey: "expFreelanceYear",
    metricValue: "20+",
    metricLabelKey: "expFreelanceMetricLabel",
    descKey: "expFreelanceDesc",
    Icon: Compass,
  },
  {
    roleKey: "expAiesecRole",
    company: "AIESEC Tunisia",
    year: "2022–2024",
    metricValueKey: "expAiesecMetricValue",
    metricLabelKey: "expAiesecMetricLabel",
    descKey: "expAiesecDesc",
    Icon: Globe,
  },
]

const skills: { nameKey: string; Icon: LucideIcon }[] = [
  { nameKey: "skillBranding", Icon: Target },
  { nameKey: "skillSocialMedia", Icon: Smartphone },
  { nameKey: "skillContentStrategy", Icon: PenLine },
  { nameKey: "skillAdobeSuite", Icon: Palette },
  { nameKey: "skillMetaBusiness", Icon: BarChart3 },
  { nameKey: "skillCopywriting", Icon: FileText },
  { nameKey: "skillUiUxCollab", Icon: Handshake },
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
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className={`relative overflow-hidden rounded-[1.5rem] ring-1 ${cardStyle.ring} bg-gradient-to-br ${cardStyle.wash} px-4 py-5 flex flex-col items-center text-center gap-2.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                whileHover={{ y: -2 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent-gradient flex items-center justify-center">
                  <skill.Icon className="w-5 h-5 text-white" aria-hidden />
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{t(skill.nameKey)}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className={`group relative overflow-hidden p-6 md:p-8 rounded-[2rem] ring-1 ${cardStyle.ring} bg-gradient-to-br ${cardStyle.wash} hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-500`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <exp.Icon
                  className={`pointer-events-none absolute -top-4 -right-2 w-24 h-24 opacity-[0.08] group-hover:scale-110 group-hover:opacity-[0.12] transition-all duration-500 ${cardStyle.decorIcon}`}
                  strokeWidth={1.25}
                  aria-hidden
                />
                <div className="relative space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center flex-shrink-0">
                      <exp.Icon className="w-5 h-5 text-white" aria-hidden />
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t(exp.roleKey)}</h3>
                      {exp.company && (
                        <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className={`px-3 py-1.5 rounded-full text-sm font-bold ${cardStyle.chip}`}>
                      {exp.metricValueKey ? t(exp.metricValueKey) : exp.metricValue}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">{t(exp.metricLabelKey)}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{t(exp.descKey)}</p>

                  <p className="text-xs text-muted-foreground font-medium pt-2">{exp.yearKey ? t(exp.yearKey) : exp.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
