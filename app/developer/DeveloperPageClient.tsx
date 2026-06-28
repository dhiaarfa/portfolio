"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ResourcesInsightsStrip from "@/components/resources-insights-strip"
import { siteConfig } from "@/lib/site-config"
import { developerExperience } from "@/lib/profile"
import { devWorkProjects } from "@/lib/work"
import { otherDevProjects } from "@/lib/dev-projects"
import { ExternalLink, Github, Download, ArrowRight } from "lucide-react"
import ToolsStackSection from "@/components/tools-stack-section"

export default function DeveloperPageClient() {
  const projects = devWorkProjects()
  const devExperience = developerExperience.filter((e) => e.id === "crit-dev" || e.id === "self-directed")

  const bridgeItems = [
    {
      title: "UI/UX focused components",
      desc: "Pixel-perfect React from design systems.",
      proof: "DigiMyTech · CRIT Tunisie",
      href: "/work/digimytch",
    },
    {
      title: "Scalable architecture",
      desc: "Modular components with TypeScript and clean APIs.",
      proof: "dhia-portfolio.me (this site)",
      href: "https://github.com/dhiaarfa/portfolio",
      external: true,
    },
    {
      title: "Performance optimized",
      desc: "Next.js with image optimization and Core Web Vitals focus.",
      proof: "Portfolio · client sites",
      href: "/work/best-dates-fruits",
    },
    {
      title: "Rapid prototyping",
      desc: "Wireframes to working prototypes quickly.",
      proof: "Best Dates & Fruits",
      href: "/work/best-dates-fruits",
    },
  ]

  const capabilities = [
    {
      title: "Responsive web interfaces",
      desc: "Mobile-first React with accessible markup.",
      tags: ["React", "Tailwind", "Framer Motion"],
      href: "/work/crit-tunisie",
    },
    {
      title: "React component architecture",
      desc: "TypeScript, reusable systems, ShadCN-style patterns.",
      tags: ["TypeScript", "Next.js", "Component API"],
      href: "https://github.com/dhiaarfa/portfolio",
      external: true,
    },
    {
      title: "AI-integrated products",
      desc: "LLM workflows in product UX, not bolt-on chat widgets.",
      tags: ["OpenRouter", "Supabase", "Next.js"],
      href: "/work/digimytch",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background relative">
      <Navbar />

      <main className="w-full pt-0">
        {/* Hero */}
        <section className="bg-slate-950 text-white min-h-[68vh] flex items-center px-6 py-16 section-compact relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px]" />
          <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-lg px-4 py-2 mb-8 font-mono text-sm">
                <span className="text-accent">$</span>
                <span className="text-slate-300">dhia --role developer</span>
                <span className="text-accent animate-[pulse_1s_ease-in-out_infinite] font-bold ml-1">█</span>
              </div>
              <h1 className="font-display font-black text-[clamp(40px,6vw,72px)] leading-[0.95] tracking-tight mb-4">
                Design-trained developer<br /><span className="text-accent">who ships.</span>
              </h1>
              <p className="text-slate-400 text-[17px] leading-relaxed max-w-md mb-8">
                Turning designs into fast, scalable digital experiences. React · Next.js · Design-first mindset.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="btn-green">View projects</a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[14px] border border-slate-700 px-6 py-3 font-medium text-slate-300 transition-all hover:border-accent/40 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  View GitHub
                </a>
                <a href="#contact-form" className="text-sm font-medium text-slate-400 px-2 py-3 hover:text-white transition-colors">
                  Let&apos;s talk →
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.resumePdfUrl}
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-accent transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download résumé (PDF)
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

        {/* Featured projects */}
        <section id="projects" className="w-full section-compact px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-10">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Featured</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Projects with live demos & case studies</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  Screenshot, stack, live link, GitHub, and a written case study for each. DigiMyTech is the headline AI capstone.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className={`group overflow-hidden rounded-3xl border-2 border-border bg-card transition-all hover:border-accent/40 ${i === 0 ? "lg:col-span-2" : ""}`}
                  >
                    <div className={`relative bg-muted ${i === 0 ? "aspect-[21/9]" : "aspect-video"}`}>
                      <Image src={project.cardImage} alt={project.title} fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 50vw" />
                      {project.slug === "digimytch" && (
                        <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                          Featured · PFE
                        </span>
                      )}
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        {project.metrics && (
                          <p className="text-sm font-medium text-accent mt-1">{project.metrics}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-2">{project.excerpt}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">{project.outcome}</p>
                      <div className="flex flex-wrap gap-4 pt-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live demo
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        )}
                        <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent">
                          Case study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Other noteworthy */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-bold mb-4">Other noteworthy</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {otherDevProjects.map((p) => (
                    <div key={p.title} className="rounded-2xl border border-border bg-card p-5">
                      <h4 className="font-semibold">{p.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 mb-3">{p.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.tech.map((t) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 text-sm">
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                          Live ↗
                        </a>
                        <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent">
                          GitHub ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dev experience (slim) */}
        <section className="w-full section-compact px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <p className="label mb-2 text-center">Experience</p>
            <h2 className="text-2xl font-bold text-center mb-8">Dev-relevant roles</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {devExperience.map((exp) => (
                <div key={exp.id} className="rounded-2xl border border-border p-5 bg-background">
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                  <h3 className="font-bold mt-1">{exp.role}</h3>
                  <p className="text-sm text-accent font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ToolsStackSection compact groups={["frontend", "backend", "ai"]} />

        {/* Design-to-Development Bridge */}
        <section className="w-full section-compact px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Design-to-development bridge</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Graphic design and UI/UX background means I translate vision into code without losing intent. Each claim links to proof.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {bridgeItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border p-5">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                  {"external" in item && item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">
                      Proof: {item.proof} ↗
                    </a>
                  ) : (
                    <Link href={item.href} className="text-sm font-medium text-accent hover:underline">
                      Proof: {item.proof} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities with proof links */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">What I build today</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {capabilities.map((cap) => (
                <div key={cap.title} className="rounded-2xl border border-border bg-card p-5 flex flex-col">
                  <h3 className="font-bold text-sm mb-2">{cap.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 flex-1">{cap.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-muted px-2 py-0.5 rounded-md text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {cap.external ? (
                    <a href={cap.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-accent hover:underline">
                      See proof ↗
                    </a>
                  ) : (
                    <Link href={cap.href} className="text-xs font-semibold text-accent hover:underline">
                      See case study →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full section-compact px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s build together</h2>
            <p className="text-muted-foreground">
              I respond within 24 hours. View the code on GitHub or book a quick call.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2">
                <Github className="h-4 w-4" />
                View GitHub
              </a>
              <a href="#contact-form" className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-semibold hover:border-accent/40 transition-colors">
                Let&apos;s talk
              </a>
            </div>
          </div>
        </section>

        <ResourcesInsightsStrip focus="development" className="bg-section-tint" />

        <section id="contact-form" className="w-full section-compact px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold">Ready for a web project?</h2>
              <p className="text-muted-foreground">Share your timeline and vision. I&apos;ll reply within 24 hours.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
