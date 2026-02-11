"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Award, Briefcase, BookOpen, Target } from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative px-4 md:px-8 py-12 md:py-20 max-w-6xl mx-auto overflow-hidden">
          {/* Zia-inspired layered background */}
          <div className="pointer-events-none absolute -right-32 -top-24 w-80 h-80 bg-[hsl(var(--zia-green))]/15 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 w-72 h-72 bg-[hsl(var(--zia-green))]/10 rounded-full blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
          >
            <div className="space-y-6 flex-1">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{t("backToHome")}</span>
              </Link>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                  Mohamed Dhia Arfa
                </h1>
                <p className="text-2xl text-muted-foreground">
                  {t("trainerDesignerDeveloper")}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {t("aboutHeroDesc")}
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                <Image
                  src="/images/dhia/indoor-bomber.png"
                  alt="Mohamed Dhia Arfa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 224px, 288px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="px-4 md:px-8 py-12 md:py-20 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">{t("coreValues")}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Target, titleKey: "impactDriven", descKey: "impactDrivenDesc" },
                { icon: Award, titleKey: "excellence", descKey: "excellenceDesc" },
                { icon: BookOpen, titleKey: "continuousLearning", descKey: "continuousLearningDesc" },
                { icon: Briefcase, titleKey: "professional", descKey: "professionalDesc" },
              ].map((value, i) => (
                <motion.div
                  key={value.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="space-y-3 p-6 rounded-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <value.icon className="h-8 w-8 text-accent" />
                  <h3 className="font-bold text-lg">{t(value.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm">{t(value.descKey)}</p>
                </motion.div>
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

            {/* Key Skills */}
            <div className="mb-16 space-y-6">
              <h3 className="text-2xl font-bold text-accent">Key Skills</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold">Design & Creative</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Graphic Design (Adobe Suite)</li>
                    <li>• UI/UX Design (Figma)</li>
                    <li>• Visual Branding & Identity</li>
                    <li>• Digital Marketing Design</li>
                    <li>• Packaging & Print Design</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold">Development</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• React & Next.js</li>
                    <li>• Responsive Web Design</li>
                    <li>• Frontend Development</li>
                    <li>• UI Component Architecture</li>
                    <li>• Modern CSS & Tailwind</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold">Training & Leadership</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Youth Development</li>
                    <li>• Leadership Training</li>
                    <li>• Workshop Facilitation</li>
                    <li>• Social Justice Advocacy</li>
                    <li>• Team Building & Coaching</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact Statistics */}
            <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-8 bg-card/50 rounded-lg border border-border">
              {[
                { label: 'Participants Trained', value: '990+' },
                { label: 'Training Hours', value: '450+' },
                { label: 'Facilitation Hours', value: '30+' },
                { label: 'Training Cycles Supervised', value: '10+' },
                { label: 'Years Experience', value: '7+' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CV Download */}
            <div className="mb-16 flex justify-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity border border-accent"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v6m0 0l-3-3m3 3l3-3M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                Download CV
              </a>
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

        {/* Call to Action */}
        <section className="px-4 md:px-8 py-12 md:py-20 bg-card/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
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
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Connect on LinkedIn
              </a>
              <a
                href="mailto:mohameddhiaarfa@gmail.com"
                className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
