"use client"

import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  BookOpen,
  Zap,
  Star,
  ShieldCheck,
  Palette,
  Code,
  GraduationCap,
  School,
  Medal,
  Smartphone,
  Leaf,
  Rocket,
  TrendingUp,
} from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ClientLogosStrip from "@/components/client-logos-strip"
import HeroAnnotatedPortrait from "@/components/hero-annotated-portrait"
import { PageTestimonials } from "@/components/page-testimonials"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"
import { aboutExperience, certifications as profileCertifications, profileStats } from "@/lib/profile"
import ContactForm from "@/components/contact-form"
import ResourcesInsightsStrip from "@/components/resources-insights-strip"

const CERT_ORDER = ["cnfcpp", "youth-clubs", "entrepreneur-leader", "graphic-design", "hubspot", "inco"]
const CERT_TIER1 = new Set(["cnfcpp"])

const skillsConfig = [
  {
    category: "Design & Creative",
    icon: Palette,
    color: "text-pink-600 bg-pink-50",
    skills: [
      "Graphic Design (Adobe Suite)",
      "UI/UX Design (Figma)",
      "Visual Branding & Identity",
      "Digital Marketing Design",
      "Packaging & Print Design",
    ],
  },
  {
    category: "Development",
    icon: Code,
    color: "text-blue-600 bg-blue-50",
    skills: [
      "React & Next.js",
      "Responsive Web Design",
      "Frontend Development",
      "UI Component Architecture",
      "Modern CSS & Tailwind",
    ],
  },
  {
    category: "Training & Leadership",
    icon: Award,
    color: "text-accent bg-accent-subtle",
    skills: [
      "Youth Development",
      "Leadership Training",
      "Workshop Facilitation",
      "Social Justice Advocacy",
      "Team Building & Coaching",
    ],
  },
]

const intentDoors = [
  { href: "/designer", labelKey: "aboutDoorDesign", chip: "chip-pink" },
  { href: "/trainer", labelKey: "aboutDoorTraining", chip: "chip-amber" },
  { href: "/developer", labelKey: "aboutDoorDev", chip: "chip-blue" },
] as const

const certVisuals: Record<
  string,
  { Icon: typeof Medal; color: string; badge: string; iconCls: string }
> = {
  cnfcpp: {
    Icon: Medal,
    color: "border-amber-300 dark:border-amber-700 bg-amber-50/80 dark:bg-amber-950/40 ring-2 ring-amber-200/60 dark:ring-amber-800/40",
    badge: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
    iconCls: "text-amber-600 dark:text-amber-400",
  },
  "youth-clubs": {
    Icon: Award,
    color: "border-accent/30 bg-accent-subtle",
    badge: "bg-accent-subtle text-accent",
    iconCls: "text-accent",
  },
  hubspot: {
    Icon: Smartphone,
    color: "border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/30",
    badge: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
    iconCls: "text-orange-600 dark:text-orange-400",
  },
  inco: {
    Icon: Leaf,
    color: "border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/30",
    badge: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
    iconCls: "text-teal-600 dark:text-teal-400",
  },
  "graphic-design": {
    Icon: Palette,
    color: "border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30",
    badge: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
    iconCls: "text-purple-600 dark:text-purple-400",
  },
  "entrepreneur-leader": {
    Icon: Rocket,
    color: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30",
    badge: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
    iconCls: "text-blue-600 dark:text-blue-400",
  },
}

const experienceVisuals: Record<string, { color: string; Icon: typeof Code }> = {
  "crit-about": { color: "bg-accent text-white", Icon: Code },
  "jasmin-crafts": { color: "bg-blue-500 text-white", Icon: TrendingUp },
  internships: { color: "bg-purple-500 text-white", Icon: Palette },
}

const sortedCerts = [...profileCertifications].sort(
  (a, b) => CERT_ORDER.indexOf(a.id) - CERT_ORDER.indexOf(b.id)
)

export default function AboutPageClient() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-[5.5rem]">
        {/* Hero — story first, then self-select doors */}
        <section className="bg-white dark:bg-slate-950 pb-8 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-400 text-sm hover:text-accent mb-4 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform rtl:rotate-180" />
              {t("backToHome")}
            </Link>
            <div className="max-w-3xl">
                <p className="label mb-3">{t("aboutPersonBehind")}</p>
                <h1 className="font-display font-extrabold text-[clamp(40px,7vw,78px)] leading-[0.93] text-slate-900 dark:text-white mb-4">
                  Mohamed
                  <br />
                  Dhia Arfa
                </h1>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="chip chip-pink">{t("graphicDesigner")}</span>
                  <span className="chip chip-amber">{t("aboutCertifiedTrainer")}</span>
                  <span className="chip chip-blue">{t("aboutWebDeveloper")}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-200 text-[17px] leading-relaxed max-w-xl font-medium">
                  {t("aboutStoryHook")}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 max-w-lg">{t("aboutHeroTagline")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-7">
                  {intentDoors.map((door) => (
                    <Link
                      key={door.href}
                      href={door.href}
                      className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-accent/40 hover:bg-accent-subtle/30 transition-all"
                    >
                      <span>{t(door.labelKey)}</span>
                      <ArrowRight className="w-4 h-4 text-accent opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
                    </Link>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    {t("bookFreeConsultation")}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <a
                      href="https://www.linkedin.com/in/dhia-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="mx-2">·</span>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                      {t("email")}
                    </a>
                  </p>
                </div>
            </div>
          </div>
        </section>

        <HeroAnnotatedPortrait theme="light" compact showCta={false} className="!pt-2 !pb-14" />

        {/* Proof — stats bar */}
        <section className="px-4 md:px-8 py-6">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-5 md:p-7 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
            {[
              { label: "Participants Trained", value: profileStats.participantsTrained },
              { label: "Training Hours", value: profileStats.trainingHours },
              { label: "Facilitation Hours", value: profileStats.facilitationHours },
              { label: "Training Cycles Supervised", value: profileStats.trainingCycles },
              { label: "Years Experience", value: profileStats.yearsExperience },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-black text-[clamp(28px,4vw,40px)] text-white leading-none mb-1.5">
                  {stat.value.value.toLocaleString()}
                  {stat.value.suffix}
                </p>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="px-4 md:px-8 py-10">
          <div className="max-w-5xl mx-auto">
            <PageTestimonials />
          </div>
        </section>

        {/* Client logos */}
        <section className="py-6">
          <p className="label text-center mb-2">{t("aboutTrustedBy")}</p>
          <ClientLogosStrip />
        </section>

        {/* Core Values */}
        <section className="bg-section-tint dark:bg-[#052e16] py-7 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="label text-center">{t("coreValues")}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {[
                { Icon: Zap, label: t("impactDriven"), desc: t("impactDrivenDesc"), bg: "bg-accent-subtle/40", ic: "text-accent" },
                { Icon: Star, label: t("excellence"), desc: t("excellenceDesc"), bg: "bg-amber-50 dark:bg-amber-950/40", ic: "text-amber-600 dark:text-amber-400" },
                { Icon: BookOpen, label: t("continuousLearning"), desc: t("continuousLearningDesc"), bg: "bg-blue-50 dark:bg-blue-950/40", ic: "text-blue-600 dark:text-blue-400" },
                { Icon: ShieldCheck, label: t("professional"), desc: t("professionalDesc"), bg: "bg-purple-50 dark:bg-purple-950/40", ic: "text-purple-600 dark:text-purple-400" },
              ].map((v) => (
                <div key={v.label} className="card-base p-6 text-center">
                  <div className={`w-12 h-12 ${v.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <v.Icon className={`w-6 h-6 ${v.ic}`} />
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{v.label}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compressed resume — journey details */}
        <section className="px-4 md:px-8 py-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">{t("myJourney")}</h2>

            {/* Certifications — weighted hierarchy */}
            <section className="py-4 px-0">
              <div className="max-w-3xl mx-auto w-full">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("certificationsHeading")}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  {sortedCerts.map((cert) => {
                    const visual = certVisuals[cert.id]
                    const isFeatured = CERT_TIER1.has(cert.id)
                    return (
                      <div
                        key={cert.id}
                        className={`rounded-2xl border p-5 flex gap-4 items-start ${visual.color} ${isFeatured ? "sm:col-span-2" : ""}`}
                      >
                        <div
                          className={`${isFeatured ? "w-12 h-12" : "w-10 h-10"} rounded-xl flex items-center justify-center flex-shrink-0 bg-white/80 dark:bg-slate-800/80 ${visual.iconCls}`}
                        >
                          <visual.Icon className={isFeatured ? "w-6 h-6" : "w-5 h-5"} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-semibold text-slate-900 dark:text-white leading-snug ${isFeatured ? "text-base" : "text-sm"}`}>
                            {cert.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                        </div>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${visual.badge}`}>
                          {cert.year}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="py-4 px-0">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("aboutEducation")}</h3>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-slate-200 to-transparent dark:via-slate-700" />
                  <div className="flex flex-col gap-6">
                    {[
                      {
                        year: "2023 – 2026",
                        degree: "Bachelor of Science in Web Development & Multimedia",
                        school: "Higher Institute of Technological Studies (ISET)",
                        location: "Sousse, Tunisia",
                        Icon: GraduationCap,
                        color: "bg-blue-500 text-white",
                      },
                      {
                        year: "2018 – 2022",
                        degree: "High School Diploma in Computer Science",
                        school: "Farhat Hached Rades High School",
                        location: "Tunisia",
                        Icon: School,
                        color: "bg-slate-500 text-white",
                      },
                    ].map((item, i) => (
                      <div key={i} className="relative pl-12">
                        <div className={`absolute left-0 top-1.5 w-9 h-9 rounded-full ${item.color} flex items-center justify-center shadow-md`}>
                          <item.Icon className="w-4 h-4" />
                        </div>
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white text-sm leading-snug">{item.degree}</p>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                {item.school} · {item.location}
                              </p>
                            </div>
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                              {item.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Skills — compressed */}
            <div className="mb-6 space-y-4">
              <h3 className="text-2xl font-bold text-accent text-center">{t("skillsAbilities")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skillsConfig.map((col) => (
                  <div key={col.category} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card">
                    <div className={`w-11 h-11 ${col.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <col.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-4">{col.category}</h4>
                    <ul className="space-y-2">
                      {col.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <section className="py-4 px-0">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-accent-subtle flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("professionalExperience")}</h3>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-slate-200 to-transparent dark:via-slate-700" />
                  <div className="flex flex-col gap-6">
                    {aboutExperience.map((exp) => {
                      const visual = experienceVisuals[exp.id]
                      return (
                        <div key={exp.id} className="relative pl-12">
                          <div className={`absolute left-0 top-1.5 w-9 h-9 rounded-full ${visual.color} flex items-center justify-center shadow-md`}>
                            <visual.Icon className="w-4 h-4" />
                          </div>
                          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                              <div>
                                <p className="font-bold text-slate-900 dark:text-white text-sm">{exp.role}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{exp.company}</p>
                              </div>
                              <span className="text-xs text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{exp.description}</p>
                            {exp.tags && (
                              <div className="flex flex-wrap gap-1.5">
                                {exp.tags.map((tag) => (
                                  <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <ResourcesInsightsStrip focus="all" />

        {/* CTA + Contact */}
        <section className="px-4 md:px-8 py-8 bg-card/30">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold">{t("aboutLetsConnect")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("aboutConnectDesc")}</p>
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold"
              >
                {t("bookFreeConsultation")}
              </a>
            </div>

            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-card">
              <div className="text-center mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  {t("contactMe")}
                </p>
                <p className="text-sm text-muted-foreground">{t("aboutConnectDesc")}</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
