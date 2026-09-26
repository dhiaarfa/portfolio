"use client"

import { motion } from "framer-motion"
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
  role: string
  company?: string
  year: string
  metrics: [string, string]
  description: string
  Icon: LucideIcon
  tint: Tint
}[] = [
  {
    role: "Marketing Manager",
    company: "Speranza Café & Resto",
    year: "2025",
    metrics: ["+40%", "Social Media Engagement"],
    description: "Increased social media engagement by 40%. Managed daily content & promotions.",
    Icon: TrendingUp,
    tint: "pink",
  },
  {
    role: "Marketing Manager",
    company: "CRIT Tunisie",
    year: "2025",
    metrics: ["+80%", "User Experience"],
    description: "Managed digital presence and campaigns. Improved user experience and branding.",
    Icon: Megaphone,
    tint: "sky",
  },
  {
    role: "Freelance Brand Consultant",
    year: "2020–Present",
    metrics: ["20+", "Clients"],
    description:
      "Worked with clients in travel, tech, and education to develop digital strategies and brand visuals.",
    Icon: Compass,
    tint: "amber",
  },
  {
    role: "Marketing Lead",
    company: "AIESEC Tunisia",
    year: "2022–2024",
    metrics: ["National", "Campaigns"],
    description: "Led marketing initiatives, brand storytelling, and national campaign execution.",
    Icon: Globe,
    tint: "violet",
  },
]

const skills: { name: string; Icon: LucideIcon; tint: Tint }[] = [
  { name: "Branding", Icon: Target, tint: "pink" },
  { name: "Social Media", Icon: Smartphone, tint: "sky" },
  { name: "Content Strategy", Icon: PenLine, tint: "amber" },
  { name: "Adobe Suite", Icon: Palette, tint: "violet" },
  { name: "Meta Business", Icon: BarChart3, tint: "sky" },
  { name: "Copywriting", Icon: FileText, tint: "amber" },
  { name: "UI/UX Collab", Icon: Handshake, tint: "pink" },
]

export default function MarketingSection() {
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
            <p className="label">Beyond pixels</p>
            <h2 className="text-slate-900 dark:text-white">Digital marketing &amp; brand strategy</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              I don&apos;t stop at visuals — I help brands define positioning, plan social campaigns, write content
              pillars, and measure what works. Design and marketing as one system, not two separate hires.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {skills.map((skill, i) => {
              const t = tintStyles[skill.tint]
              return (
                <motion.div
                  key={i}
                  className={`relative overflow-hidden rounded-[1.5rem] ring-1 ${t.ring} bg-gradient-to-br ${t.wash} px-4 py-5 flex flex-col items-center text-center gap-2.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                  whileHover={{ y: -2 }}
                >
                  <div className={`w-10 h-10 rounded-full ${t.badge} flex items-center justify-center`}>
                    <skill.Icon className={`w-5 h-5 ${t.icon}`} aria-hidden />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Experience Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => {
              const t = tintStyles[exp.tint]
              return (
                <motion.div
                  key={i}
                  className={`group relative overflow-hidden p-6 md:p-8 rounded-[2rem] ring-1 ${t.ring} bg-gradient-to-br ${t.wash} hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-500`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <exp.Icon
                    className={`pointer-events-none absolute -top-4 -right-2 w-24 h-24 opacity-[0.08] group-hover:scale-110 group-hover:opacity-[0.12] transition-all duration-500 ${t.icon}`}
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <div className="relative space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-full ${t.badge} flex items-center justify-center flex-shrink-0`}>
                        <exp.Icon className={`w-5 h-5 ${t.icon}`} aria-hidden />
                      </div>
                      <div className="flex flex-col gap-1 pt-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        {exp.company && (
                          <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1.5 rounded-full text-sm font-bold ${t.chip}`}>
                        {exp.metrics[0]}
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">{exp.metrics[1]}</p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                    <p className="text-xs text-muted-foreground font-medium pt-2">{exp.year}</p>
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
