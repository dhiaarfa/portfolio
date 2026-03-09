"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Award, Briefcase, BookOpen, Zap, Star, ShieldCheck, Palette, Code, GraduationCap, School, Medal, Smartphone, Leaf, Rocket, TrendingUp } from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { FadeUp } from "@/components/ui/motion"
import { siteConfig } from "@/lib/site-config"
import ContactForm from "@/components/contact-form"

const skillsConfig = [
  {
    category: "Design & Creative",
    icon: Palette,
    color: "text-pink-600 bg-pink-50",
    skills: ["Graphic Design (Adobe Suite)", "UI/UX Design (Figma)", "Visual Branding & Identity", "Digital Marketing Design", "Packaging & Print Design"],
  },
  {
    category: "Development",
    icon: Code,
    color: "text-blue-600 bg-blue-50",
    skills: ["React & Next.js", "Responsive Web Design", "Frontend Development", "UI Component Architecture", "Modern CSS & Tailwind"],
  },
  {
    category: "Training & Leadership",
    icon: Award,
    color: "text-green-700 bg-green-50",
    skills: ["Youth Development", "Leadership Training", "Workshop Facilitation", "Social Justice Advocacy", "Team Building & Coaching"],
  },
]

export default function AboutPageClient() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-28">
        {/* Hero — editorial polaroid layout */}
        <section className="bg-white dark:bg-slate-950 pt-28 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-slate-400 text-sm hover:text-green-600 mb-10 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform rtl:rotate-180" />
              {t("backToHome")}
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-12 items-start">
              <div>
                <p className="label mb-3">{t("aboutPersonBehind")}</p>
                <h1 className="font-display font-extrabold text-[clamp(40px,7vw,78px)] leading-[0.93] tracking-tight text-slate-900 dark:text-white mb-5">
                  Mohamed<br />Dhia Arfa
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="chip chip-pink">{t("graphicDesigner")}</span>
                  <span className="chip chip-amber">{t("aboutCertifiedTrainer")}</span>
                  <span className="chip chip-blue">{t("aboutWebDeveloper")}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed max-w-lg">
                  {t("aboutHeroTagline")}
                </p>
              </div>
              <div className="hidden md:block">
                <div className="relative inline-block">
                  <div className="bg-white dark:bg-slate-700 p-3 pb-10 shadow-[0_12px_48px_rgba(0,0,0,0.14)] dark:shadow-[0_12px_48px_rgba(0,0,0,0.5)] rounded-sm rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image src="/images/photos/dhia-about.png" alt="Mohamed Dhia" width={260} height={320} className="w-full object-cover" />
                    <p className="text-center text-slate-400 dark:text-slate-500 text-xs font-medium mt-3">{t("aboutLocationTag")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values — icon tiles */}
        <section className="bg-section-tint dark:bg-[#052e16] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="label text-center">{t("coreValues")}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { Icon: Zap, label: t("impactDriven"), desc: t("impactDrivenDesc"), bg: "bg-green-50 dark:bg-green-950/40", ic: "text-green-600 dark:text-green-400" },
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

        {/* Professional Journey */}
        <section className="px-4 md:px-8 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("myJourney")}</h2>

            {/* ── EDUCATION TIMELINE ── */}
            <section className="py-16 px-0">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("aboutEducation")}</h3>
                </div>

                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-slate-200 to-transparent dark:via-slate-700" />

                  <div className="flex flex-col gap-8">
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
                        {/* Dot on timeline */}
                        <div
                          className={`absolute left-0 top-1.5 w-9 h-9 rounded-full ${item.color} flex items-center justify-center shadow-md`}
                        >
                          <item.Icon className="w-4 h-4" />
                        </div>

                        {/* Card */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                                {item.degree}
                              </p>
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

            {/* ── CERTIFICATIONS ── */}
            <section className="py-8 px-0">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("certificationsHeading")}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "National Certified Trainer (CNFCPP)",
                      issuer: "Tunisia · National Certification",
                      year: "2024",
                      Icon: Medal,
                      color: "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30",
                      badge: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
                      iconCls: "text-amber-600 dark:text-amber-400",
                    },
                    {
                      title: "Certified Trainer",
                      issuer: "Association YOUTH CLUBs",
                      year: "2025",
                      Icon: Award,
                      color: "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30",
                      badge: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
                      iconCls: "text-green-600 dark:text-green-400",
                    },
                    {
                      title: "Social Media Marketing",
                      issuer: "HubSpot Academy",
                      year: "2024",
                      Icon: Smartphone,
                      color: "border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/30",
                      badge: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
                      iconCls: "text-orange-600 dark:text-orange-400",
                    },
                    {
                      title: "Green Digital Skills",
                      issuer: "INCO Academy",
                      year: "2024",
                      Icon: Leaf,
                      color: "border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/30",
                      badge: "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300",
                      iconCls: "text-teal-600 dark:text-teal-400",
                    },
                    {
                      title: "Graphic Design",
                      issuer: "Canva",
                      year: "2023",
                      Icon: Palette,
                      color: "border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/30",
                      badge: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
                      iconCls: "text-purple-600 dark:text-purple-400",
                    },
                    {
                      title: "Certified Trainer Entrepreneur Leader",
                      issuer: "International Certification",
                      year: "2025",
                      Icon: Rocket,
                      color: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30",
                      badge: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
                      iconCls: "text-blue-600 dark:text-blue-400",
                    },
                  ].map((cert, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl border p-5 flex gap-4 items-start ${cert.color}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/80 dark:bg-slate-800/80 ${cert.iconCls}`}>
                        <cert.Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 dark:text-white text-sm leading-snug">
                          {cert.title}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                      </div>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${cert.badge}`}
                      >
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Skills — visual grid with icon badges */}
            <div className="mb-16 space-y-6">
              <h3 className="text-2xl font-bold text-accent">Key Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillsConfig.map((col) => (
                  <div key={col.category} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card">
                    <div className={`w-11 h-11 ${col.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <col.icon className="w-5 h-5" />
                </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-4">{col.category}</h4>
                    <ul className="space-y-2">
                      {col.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                  </ul>
                </div>
                ))}
              </div>
            </div>

            {/* Impact Statistics — dark card, prominent numbers */}
            <div className="mb-16 bg-slate-900 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { label: "Participants Trained", value: `${siteConfig.stats.participants}+` },
                { label: "Training Hours", value: `${siteConfig.stats.trainingHours}+` },
                { label: "Facilitation Hours", value: `${siteConfig.stats.facilitationHours}+` },
                { label: "Training Cycles Supervised", value: `${siteConfig.stats.trainingCyclesSupervised}+` },
                { label: "Years Experience", value: `${siteConfig.stats.yearsExperience}+` },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display font-black text-[clamp(28px,4vw,40px)] text-white leading-none mb-1.5">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>


            {/* ── PROFESSIONAL EXPERIENCE ── */}
            <section className="py-8 px-0">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-green-50 dark:bg-green-950 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("professionalExperience")}</h3>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-slate-200 to-transparent dark:via-slate-700" />

                  <div className="flex flex-col gap-6">
                    {[
                      {
                        period: "Sep 2023 – Dec 2023",
                        role: "Web Developer & Marketing Manager",
                        company: "CRIT Tunisie",
                        description:
                          "Developed responsive web interfaces using React/Next.js, optimized UI/UX, and improved digital strategy.",
                        tags: ["React", "Next.js", "UI/UX", "Strategy"],
                        color: "bg-green-500 text-white",
                        Icon: Code,
                      },
                      {
                        period: "Jul 2022 – Jul 2023",
                        role: "Marketing Manager",
                        company: "Jasmin Crafts & Plants",
                        description:
                          "Managed marketing campaigns, increased engagement by 40%, designed promotional materials and maintained social consistency.",
                        tags: ["Marketing", "Social Media", "Design", "+40% Engagement"],
                        color: "bg-blue-500 text-white",
                        Icon: TrendingUp,
                      },
                      {
                        period: "2021 – 2023",
                        role: "Graphic Designer (Internships)",
                        company: "Icon Agency, Phenyx Company, Jasmin Marketing & Others",
                        description:
                          "Produced campaign visuals, brand assets, marketing materials, and collaborated on client-facing design solutions.",
                        tags: ["Brand Identity", "Campaigns", "Visual Design"],
                        color: "bg-purple-500 text-white",
                        Icon: Palette,
                      },
                    ].map((exp, i) => (
                      <div key={i} className="relative pl-12">
                        <div
                          className={`absolute left-0 top-1.5 w-9 h-9 rounded-full ${exp.color} flex items-center justify-center shadow-md`}
                        >
                          <exp.Icon className="w-4 h-4" />
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
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Call to Action + Contact Form */}
        <section className="px-4 md:px-8 py-12 md:py-20 bg-card/30">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
              <p className="text-lg text-muted-foreground">
                Whether you're interested in training, design collaboration, or development work, I'd love to hear from
                you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/dhia-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-white rounded-lg font-semibold hover:from-[hsl(var(--zia-green))]/90 hover:to-emerald-500/90 transition-all"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-card">
              <div className="text-center mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">Send a message</p>
                <p className="text-sm text-muted-foreground">
                  I respond to every message within 24 hours.
                </p>
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
