"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Award, Briefcase, BookOpen, Zap, Star, ShieldCheck, Palette, Code, Download } from "lucide-react"
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
                <p className="label mb-3">The person behind the work</p>
                <h1 className="font-display font-extrabold text-[clamp(40px,7vw,78px)] leading-[0.93] tracking-tight text-slate-900 dark:text-white mb-5">
                  Mohamed<br />Dhia Arfa
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="chip chip-pink">Graphic Designer</span>
                  <span className="chip chip-amber">Certified Trainer</span>
                  <span className="chip chip-blue">Web Developer</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed max-w-lg">
                  Multi-disciplinary creative based in Tunisia operating where visual design, human development, and technology meet.
                </p>
                <a
                  href="/cv-mohamed-dhia-arfa.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 mt-4 bg-slate-100 dark:bg-slate-800 hover:bg-green-50 dark:hover:bg-green-950 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t("downloadCV")}
                </a>
              </div>
              <div className="hidden md:block">
                <div className="relative inline-block">
                  <div className="bg-white dark:bg-slate-700 p-3 pb-10 shadow-[0_12px_48px_rgba(0,0,0,0.14)] dark:shadow-[0_12px_48px_rgba(0,0,0,0.5)] rounded-sm rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image src="/images/photos/dhia-about.png" alt="Mohamed Dhia" width={260} height={320} className="w-full object-cover" />
                    <p className="text-center text-slate-400 dark:text-slate-500 text-xs font-medium mt-3">Dhia · Tunisia 🇹🇳</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values — icon tiles */}
        <section className="bg-section-tint dark:bg-[#052e16] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="label text-center">Core Values</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { Icon: Zap, label: "Impact Driven", desc: "Meaningful change in every project", bg: "bg-green-50 dark:bg-green-950/40", ic: "text-green-600 dark:text-green-400" },
                { Icon: Star, label: "Excellence", desc: "Highest quality in all endeavors", bg: "bg-amber-50 dark:bg-amber-950/40", ic: "text-amber-600 dark:text-amber-400" },
                { Icon: BookOpen, label: "Continuous Learning", desc: "Always mastering new skills", bg: "bg-blue-50 dark:bg-blue-950/40", ic: "text-blue-600 dark:text-blue-400" },
                { Icon: ShieldCheck, label: "Professional", desc: "Integrity in every interaction", bg: "bg-purple-50 dark:bg-purple-950/40", ic: "text-purple-600 dark:text-purple-400" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Journey</h2>

            {/* Education */}
            <div className="mb-16 space-y-6">
              <h3 className="text-2xl font-bold text-accent">Education</h3>
              <div className="space-y-4">
                <div className="p-6 border border-border rounded-lg hover:border-accent/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold">Bachelor of Science in Web Development & Multimedia</h4>
                    <span className="text-sm text-muted-foreground">2023 - 2026</span>
                  </div>
                  <p className="text-muted-foreground">Higher Institute of Technological Studies (ISET), Sousse, Tunisia</p>
                </div>
                <div className="p-6 border border-border rounded-lg hover:border-accent/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold">High School Diploma in Computer Science</h4>
                    <span className="text-sm text-muted-foreground">2018 - 2022</span>
                  </div>
                  <p className="text-muted-foreground">Farhat Hached Rades High School, Tunisia</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-16 space-y-6">
              <h3 className="text-2xl font-bold text-accent">Certifications & Trainings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'National Certified Trainer (CNFCPP)', year: '2024', org: 'Tunisia - National Certification' },
                  { title: 'Certified Trainer', year: '2025', org: 'Association YOUTH CLUBs' },
                  { title: 'Social Media Marketing', year: '2024', org: 'HubSpot Academy' },
                  { title: 'Green Digital Skills', year: '2024', org: 'INCO Academy' },
                  { title: 'Graphic Design', year: '2023', org: 'GoMyCode' },
                  { title: 'Climate Justice & HR Training', year: '2024', org: 'Amnesty International' },
                  { title: 'TOT Program (Train the Trainer)', year: '2022', org: 'Association YOUTH CLUBs' },
                  { title: '1000 Challenges School Trainer', year: '2025', org: '1000 Challenges School' },
                ].map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="p-4 border border-border rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <span className="text-xs text-accent font-medium">{cert.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cert.org}</p>
                  </motion.div>
                ))}
              </div>
            </div>

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


            {/* Experience Summary */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">Professional Experience</h3>
              <div className="space-y-4">
                {[
                  {
                    role: 'Web Developer & Marketing Manager',
                    company: 'CRIT Tunisie',
                    period: 'Sep 2025 - Dec 2025',
                    description: 'Developed responsive web interfaces using React/Next.js, optimized UX/UI, and improved digital strategy',
                  },
                  {
                    role: 'Marketing Manager',
                    company: 'Speranza Cafe & Resto',
                    period: 'Jan 2025 - Jun 2025',
                    description: 'Managed marketing campaigns, increased engagement by 40%, designed promotional materials and maintained brand consistency',
                  },
                  {
                    role: 'Graphic Designer (Internships)',
                    company: 'Icom Agency, Phenyx Company, Jasmin Marketing & Others',
                    period: '2023 - 2025',
                    description: 'Produced campaign visuals, brand assets, marketing materials, and collaborated on client-facing design solutions',
                  },
                  {
                    role: 'Trainer & Facilitator',
                    company: 'Multiple Organizations (YOUTH CLUBs, 1000 Challenges, AIESEC)',
                    period: '2019 - Present',
                    description: 'Delivered 435+ hours of training to 1000+ participants in youth development, soft skills, communication, and digital literacy',
                  },
                  {
                    role: 'Freelance Graphic Designer & Trainer',
                    company: 'Remote & On-site',
                    period: '2020 - Present',
                    description: 'Created branding assets, marketing visuals, and communication materials for diverse clients and organizations',
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 border border-border rounded-lg hover:border-accent/30 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">{exp.role}</h4>
                        <p className="text-accent text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
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
