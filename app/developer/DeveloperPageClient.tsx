"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import ContactForm from "@/components/contact-form"
import { siteConfig } from "@/lib/site-config"
import CritProjectModal from "@/components/crit-project-modal"
import BdafProjectModal from "@/components/bdaf-project-modal"
import { Monitor, Box, Gauge, Server } from "lucide-react"

export default function DeveloperPageClient() {
  const [critModalOpen, setCritModalOpen] = useState(false)
  const [bdafModalOpen, setBdafModalOpen] = useState(false)

  const webSites = [
    {
      title: "Best Dates and Fruits",
      slug: "bdaf",
      description:
        "Premium Tunisian dates brand website with product storytelling, clean sections, and clear contact paths.",
      image: "/images/bdaf-thumbnail.png",
      url: "https://bestdatesandfruits.com/",
      tech: "Next.js · Marketing site",
      isModal: true, // This one opens modal instead of external link
    },
    {
      title: "CRIT Tunisie",
      slug: "crit",
      description:
        "Corporate recruitment platform for CRIT Tunisie, clarifying services, job offers, and contact for both talents and companies.",
      image: "/images/crit-thumbnail.png",
      url: "https://crit-tunisie.net/",
      tech: "Next.js · Corporate site",
      isModal: true, // This one opens modal instead of external link
    },
  ]

  const projects = [
    {
      role: "Web Developer",
      company: "CRIT Tunisie",
      period: "Sep 2025 – Dec 2025",
      tech: "React / Next.js",
      description: "Developing responsive web interfaces, optimizing user experience, shipping features to production",
      icon: "🚀",
      isCurrent: true,
    },
    {
      role: "Marketing & Web Strategy",
      company: "Speranza Cafe & Resto",
      isCurrent: false,
      period: "Jan 2025 – Jun 2025",
      tech: "Web & Digital Marketing",
      description: "Managed web presence, digital marketing campaigns, and data-driven strategy execution",
      icon: "📱",
    },
    {
      role: "Full-Stack Development",
      company: "Self-Directed & Open Source",
      isCurrent: false,
      period: "2023 – Present",
      tech: "React, Next.js, Node.js, SQL",
      description: "Building personal projects, contributing to real applications, mastering frontend and backend fundamentals",
      icon: "📚",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background relative">
      <Navbar />

      <main className="w-full pt-0">
        {/* Hero — dark terminal aesthetic */}
        <section className="bg-slate-950 text-white min-h-[85vh] flex items-center px-6 py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px]" />
          <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-lg px-4 py-2 mb-8 font-mono text-sm">
                <span className="text-accent">$</span>
                <span className="text-slate-300">dhia --role developer</span>
                <span className="text-accent animate-[pulse_1s_ease-in-out_infinite] font-bold ml-1">█</span>
              </div>
              <h1 className="font-display font-black text-[clamp(44px,6.5vw,80px)] leading-[0.93] tracking-tight mb-4">
                Web Developer<br /><span className="text-accent">Learning by</span><br />Building.
              </h1>
              <p className="text-slate-400 text-[17px] leading-relaxed max-w-md mb-8">
                Turning designs into fast, scalable digital experiences. React · Next.js · Design-first mindset.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="btn-green">View Projects</a>
                <a href="#contact" className="border border-slate-700 text-slate-300 font-medium px-6 py-3 rounded-[14px] hover:border-accent/40 hover:text-white transition-all">
                  Start a Project
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/60 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900/60 border-b border-slate-700/60">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-accent/80" />
                  <span className="ml-4 font-mono text-slate-500 text-xs">dhia.dev</span>
                </div>
                <Image src="/images/photos/dhia-developer.png" alt="Dhia — Developer" width={380} height={400} className="w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full py-12 md:py-24 px-4 md:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Experience</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Building & Growing</h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Production experience with continuous skill development</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    className={`p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 border-border hover:border-foreground/30 transition-all hover:bg-background space-y-4 ${(project as { isCurrent?: boolean }).isCurrent ? "" : ""}`}
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start justify-between gap-3">
                    <div className="text-4xl">{project.icon}</div>
                      {(project as { isCurrent?: boolean }).isCurrent && (
                        <span className="text-xs font-semibold bg-accent-subtle text-accent rounded-full px-2.5 py-1 inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{project.role}</h3>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[var(--site-accent)]">{project.company}</p>
                      <p className="text-xs text-muted-foreground">{project.period}</p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="pt-2">
                        <span className="text-xs font-medium px-3 py-1 bg-[var(--site-accent)]/10 text-[var(--site-accent)] rounded-full">
                          {project.tech}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Websites & projects */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-10">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Websites</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Projects & websites</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {webSites.map((site, i) => {
                  const Component = site.isModal ? motion.button : motion.a
                  const onClickHandler = site.slug === "crit" 
                    ? () => setCritModalOpen(true)
                    : site.slug === "bdaf"
                    ? () => setBdafModalOpen(true)
                    : undefined
                  
                  const props = site.isModal
                    ? {
                        onClick: onClickHandler,
                        className: "group block p-6 rounded-3xl border-2 border-border hover:border-[var(--site-accent)] bg-card transition-all relative overflow-hidden w-full text-left cursor-pointer",
                      }
                    : {
                        href: site.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group block p-6 rounded-3xl border-2 border-border hover:border-[var(--site-accent)] bg-card transition-all relative overflow-hidden",
                      }

                  return (
                    <Component
                      key={site.slug}
                      {...props}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-muted">
                        <Image
                          src={site.image}
                          alt={site.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--site-accent)]/10 via-transparent to-emerald-200/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-bold text-xl">{site.title}</h3>
                          <span className="inline-flex items-center justify-center px-3 py-1 text-[10px] font-semibold rounded-full bg-gradient-to-r from-[var(--site-accent)] to-emerald-500 text-white uppercase tracking-wide">
                            Featured
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{site.description}</p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="inline-block text-xs font-medium px-3 py-1 bg-gradient-to-r from-[var(--site-accent)]/10 to-emerald-500/10 text-[var(--site-accent)] rounded-full">
                            {site.tech}
                          </span>
                          <span className="text-xs font-medium flex items-center gap-1 bg-gradient-to-r from-[var(--site-accent)] to-emerald-500 bg-clip-text text-transparent group-hover:gap-2 transition-all">
                            {site.isModal ? "View project details" : "Visit live site"}
                            <span aria-hidden="true">{site.isModal ? "→" : "↗"}</span>
                          </span>
                        </div>
                      </div>
                    </Component>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Tools — skill bars */}
        <section className="bg-section-subtle dark:bg-slate-900 py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="label text-center">Technical Skills</p>
            <h2 className="font-serif text-[clamp(24px,3vw,38px)] text-center text-slate-900 dark:text-white leading-snug mb-12">
              Languages & Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { cat: "Frontend", Icon: Monitor, bg: "bg-blue-50 dark:bg-blue-950/40", ic: "text-blue-600 dark:text-blue-400", tools: [{ n: "React / Next.js", v: 88 }, { n: "Tailwind CSS", v: 95 }, { n: "TypeScript", v: 72 }, { n: "Framer Motion", v: 68 }] },
                { cat: "Tools & Backend", Icon: Server, bg: "bg-purple-50 dark:bg-purple-950/40", ic: "text-purple-600 dark:text-purple-400", tools: [{ n: "Git & GitHub", v: 85 }, { n: "Figma", v: 82 }, { n: "Node.js", v: 58 }, { n: "Vercel / Netlify", v: 78 }] },
              ].map((col) => (
                <div key={col.cat} className="card-base p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 ${col.bg} rounded-xl flex items-center justify-center`}>
                      <col.Icon className={`w-5 h-5 ${col.ic}`} />
                    </div>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white">{col.cat}</h3>
                  </div>
                  <div className="space-y-4">
                    {col.tools.map((t) => (
                      <div key={t.n}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{t.n}</span>
                          <span className="text-xs text-slate-400">{t.v}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-accent dark:bg-green-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${t.v}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design-to-Development Bridge */}
        <section className="w-full py-12 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Design-to-Development Bridge</h2>
                <p className="text-lg text-muted-foreground">
                  With a background in graphic design and UI/UX, I translate design concepts directly into clean,
                  maintainable code. This bridges the gap between vision and implementation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-start gap-3">
                    <span className="text-[var(--site-accent)] text-2xl leading-none">→</span>
                    <span>UI/UX Focused Components</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building responsive interfaces that translate design systems into pixel-perfect React components
                    with intuitive interactions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-start gap-3">
                    <span className="text-[var(--site-accent)] text-2xl leading-none">→</span>
                    <span>Scalable Architecture</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designing modular, reusable components that maintain consistency and scale across the entire
                    application.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-start gap-3">
                    <span className="text-[var(--site-accent)] text-2xl leading-none">→</span>
                    <span>Performance Optimized</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating fast, efficient interfaces with attention to performance metrics and user experience
                    quality.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-start gap-3">
                    <span className="text-[var(--site-accent)] text-2xl leading-none">→</span>
                    <span>Rapid Prototyping</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transforming wireframes and designs into working prototypes quickly, enabling faster iteration and
                    feedback cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT I CAN BUILD TODAY ── */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-2 text-center">
              Capabilities
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-3">
              What I Can Build Today
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10 max-w-md mx-auto">
              Production-ready solutions across the modern web stack.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: '🖥️',
                  iconBg: 'bg-blue-50 dark:bg-blue-950',
                  title: 'Responsive Web Interfaces',
                  description:
                    'Pixel-perfect, mobile-first React components with smooth interactions and accessible markup.',
                  tags: ['React', 'Tailwind', 'Framer Motion', 'WCAG'],
                  color: 'border-blue-100 dark:border-blue-900',
                },
                {
                  icon: '⚙️',
                  iconBg: 'bg-green-50 dark:bg-green-950',
                  title: 'React Component Architecture',
                  description:
                    'Scalable, reusable component systems with TypeScript, proper state management, and clean APIs.',
                  tags: ['TypeScript', 'Context API', 'Zustand', 'ShadCN'],
                  color: 'border-green-100 dark:border-green-900',
                },
                {
                  icon: '⚡',
                  iconBg: 'bg-amber-50 dark:bg-amber-950',
                  title: 'Performance-Optimized Sites',
                  description:
                    'Next.js sites with 90+ Lighthouse scores, optimal loading, and great Core Web Vitals.',
                  tags: ['Next.js', 'Image Opt.', 'Edge Functions', '90+ Score'],
                  color: 'border-amber-100 dark:border-amber-900',
                },
              ].map((cap, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border ${cap.color} bg-white dark:bg-slate-950 p-6 hover:shadow-lg hover:-translate-y-1 transition-all`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${cap.iconBg} flex items-center justify-center text-2xl mb-4`}
                  >
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-[var(--site-accent)] to-emerald-500 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Looking for a developer who ships quality code? Let's discuss your project and how I can contribute.
            </p>

            <div className="flex gap-4 flex-col sm:flex-row justify-center flex-wrap">
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--site-accent)] text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                {siteConfig.ctaText}
              </a>
              <motion.button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-lg hover:shadow-lg transition-colors"
              >
                Discuss A Project
              </motion.button>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/30 font-semibold rounded-lg hover:bg-foreground/5 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="w-full py-12 md:py-24 px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4 mx-auto max-w-2xl">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Let's Talk</p>
                <h2 className="text-4xl md:text-5xl font-bold">Ready for a Web Project?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Share your project details, timeline, and vision. I'll respond within 24 hours with next steps.
                </p>
              </div>

              <ContactForm /> {/* ContactForm component is now declared */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* CRIT Project Modal */}
      <CritProjectModal isOpen={critModalOpen} onClose={() => setCritModalOpen(false)} />
      
      {/* BD&F Project Modal */}
      <BdafProjectModal isOpen={bdafModalOpen} onClose={() => setBdafModalOpen(false)} />
    </div>
  )
}
