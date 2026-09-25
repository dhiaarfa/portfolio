"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "next-view-transitions"
import Navbar from "@/components/navbar-new"
import RoleHero from "@/components/role-hero"
import Footer from "@/components/footer"
import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ResourcesInsightsStrip from "@/components/resources-insights-strip"
import { siteConfig } from "@/lib/site-config"
import { developerExperience } from "@/lib/profile"
import { devWorkProjects, devCardAspectRatio, devCardTheme } from "@/lib/work"
import { otherDevProjects } from "@/lib/dev-projects"
import { ExternalLink, Github, Download, ArrowRight, Gift, Clock, FolderGit2, Images } from "lucide-react"
import ToolsStackSection from "@/components/tools-stack-section"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function DeveloperPageClient() {
  const projects = devWorkProjects()
  // Which project's full screenshot pack is open in the lightbox (by slug),
  // or null when closed — one Dialog reused for every card instead of one
  // per project.
  const [galleryOpen, setGalleryOpen] = useState<string | null>(null)
  const activeProject = projects.find((p) => p.slug === galleryOpen)
  const activeTheme = activeProject ? devCardTheme[activeProject.slug] : undefined
  const activeScreenshots =
    activeTheme?.screenshots?.length ? activeTheme.screenshots : activeProject ? [activeProject.cardImage] : []
  const devExperience = developerExperience.filter(
    (e) => e.id === "digimytch-dev" || e.id === "crit-dev" || e.id === "self-directed"
  )

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
      proof: "dhia-portfolio.com (this site)",
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

      <main id="main-content" className="w-full pt-0">
        {/* Hero */}
        <RoleHero
          variant="split-contained"
          decoration={
            <>
              <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
              <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px]" />
            </>
          }
          media={
            <div className="bg-[#2E2E2E] rounded-2xl overflow-hidden border border-[#383838]/60 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1C1C1C]/60 border-b border-[#383838]/60">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-accent/80" />
                <span className="ml-4 font-mono text-slate-500 text-xs">dhia.dev</span>
              </div>
              <Image src="/images/photos/dhia-developer.png" alt="Dhia — Developer" width={380} height={400} className="w-full object-cover" />
            </div>
          }
        >
          <div className="inline-flex items-center gap-2 bg-[#2E2E2E]/80 border border-[#383838]/60 rounded-lg px-4 py-2 mb-8 font-mono text-sm">
            <span className="text-accent">$</span>
            <span className="text-slate-300">dhia --role developer</span>
            <span className="text-accent animate-[pulse_1s_ease-in-out_infinite] font-bold ml-1">█</span>
          </div>
          <h1 className="h1-hero mb-4">
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
              className="inline-flex items-center gap-2 rounded-[14px] border border-[#383838] px-6 py-3 font-medium text-slate-300 transition-all hover:border-accent/40 hover:text-white"
            >
              <Github className="h-4 w-4" />
              View GitHub
            </a>
            <Link
              href="/freebies?category=development"
              className="inline-flex items-center gap-2 rounded-[14px] border border-[#383838] px-6 py-3 font-medium text-slate-300 transition-all hover:border-accent/60 hover:text-white"
            >
              <Gift className="h-4 w-4" />
              Get free checklist
            </Link>
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
        </RoleHero>

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
                {projects.map((project, i) => {
                  const theme = devCardTheme[project.slug]
                  return (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden rounded-3xl border-2 border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] ${i === 0 ? "lg:col-span-2" : ""}`}
                  >
                    {/* Colour-blocked header: real screenshot "sheet(s)" peek out of
                        the top, over a project-specific dark gradient — a category
                        tag, bold title and compact meta line sit below the peek. */}
                    <div className={`relative overflow-visible bg-gradient-to-br ${theme?.gradient ?? "from-slate-900 to-slate-950"} pt-14 pb-5 px-6`}>
                      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                      <span className="absolute top-4 right-5 z-10 font-mono text-[11px] font-semibold text-white/40 tracking-wider">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Peeking screenshot "sheet(s)" — sized by a fixed HEIGHT with
                          width left to the image's own aspect ratio (not the other
                          way around), so a tall or wide source screenshot always
                          shows as one small, legible thumbnail instead of a huge
                          cropped fragment. The whole stack is a real button: this
                          is only a preview of the pack — clicking opens every
                          screenshot for this project in a lightbox carousel, and
                          a "View N screens" pill fades in on hover/focus as the
                          affordance for that. */}
                      <button
                        type="button"
                        onClick={() => setGalleryOpen(project.slug)}
                        aria-label={`View all ${(theme?.screenshots?.length ?? 1)} screenshots of ${project.title}`}
                        className="group/gallery relative flex w-full justify-center items-end gap-3 -mt-20 sm:-mt-24 mb-5 cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {theme?.secondaryImage && (
                          <div
                            className="relative h-24 sm:h-32 shrink-0 -rotate-[10deg] translate-y-2 rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/20 transition-transform duration-500 group-hover/gallery:-rotate-[16deg] group-hover/gallery:-translate-x-1 group-hover/gallery:-translate-y-1 hidden sm:block"
                            style={{ aspectRatio: 4 / 3 }}
                          >
                            <Image src={theme.secondaryImage} alt="" fill className="object-cover object-top" sizes="280px" />
                          </div>
                        )}
                        <div
                          className="relative z-10 h-36 sm:h-44 shrink-0 rotate-[4deg] rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/20 transition-transform duration-500 group-hover/gallery:rotate-[7deg] group-hover/gallery:-translate-y-1.5"
                          style={{ aspectRatio: devCardAspectRatio[project.slug] ?? 16 / 9 }}
                        >
                          <Image
                            src={project.cardImage}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                            sizes="400px"
                            priority={i === 0}
                          />
                        </div>
                        {theme?.tertiaryImage && (
                          <div
                            className="relative h-24 sm:h-32 shrink-0 rotate-[13deg] translate-y-2 rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/20 transition-transform duration-500 group-hover/gallery:rotate-[19deg] group-hover/gallery:translate-x-1 group-hover/gallery:-translate-y-1 hidden sm:block"
                            style={{ aspectRatio: 4 / 3 }}
                          >
                            <Image src={theme.tertiaryImage} alt="" fill className="object-cover object-top" sizes="280px" />
                          </div>
                        )}
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/gallery:opacity-100 group-focus-visible/gallery:opacity-100">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-xl">
                            <Images className="h-3.5 w-3.5" />
                            View {theme?.screenshots?.length ?? 1} screens
                          </span>
                        </span>
                      </button>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        {project.slug === "digimytch" && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                        {theme?.tag ?? "Web Dev"}
                      </span>
                      <h3 className="text-white text-xl sm:text-2xl font-bold mt-3 leading-snug">{project.title}</h3>
                      {theme?.meta && (
                        <p className="text-white/60 text-xs mt-2 flex flex-wrap gap-x-1.5">
                          {theme.meta.split(" | ").map((part, idx, arr) => (
                            <span key={part}>
                              {part}
                              {idx < arr.length - 1 && <span className="text-white/30 ml-1.5">|</span>}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        {project.metrics && (
                          <p className="text-sm font-medium text-accent">{project.metrics}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-2">{project.excerpt}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium transition-colors group-hover:bg-accent/15">
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">{project.outcome}</p>
                      <div className="flex flex-wrap items-center gap-4 border-t border-border/60 mt-1 pt-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform hover:-translate-y-0.5"
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
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:text-accent"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        )}
                        <Link href={`/work/${project.slug}`} className="group/link ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent">
                          Case study
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                  )
                })}
              </div>

              {/* Screenshot pack lightbox — one Dialog reused for every card.
                  Opens on click of a card's screenshot stack and carousels
                  through every real screenshot for that project. */}
              <Dialog open={!!galleryOpen} onOpenChange={(open) => !open && setGalleryOpen(null)}>
                <DialogContent
                  showCloseButton
                  className="max-w-3xl w-[calc(100%-2rem)] gap-0 overflow-hidden border-slate-800 bg-slate-950 p-0 sm:max-w-3xl"
                >
                  {activeProject && (
                    <>
                      <DialogTitle className="sr-only">
                        {activeProject.title} — screenshots
                      </DialogTitle>
                      <Carousel className="w-full" opts={{ loop: true }}>
                        <CarouselContent className="ml-0">
                          {activeScreenshots.map((src, idx) => (
                            <CarouselItem key={src} className="pl-0">
                              <div className="relative h-[55vh] w-full bg-slate-900 sm:h-[70vh]">
                                <Image
                                  src={src}
                                  alt={`${activeProject.title} — screenshot ${idx + 1} of ${activeScreenshots.length}`}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 768px) 100vw, 768px"
                                  priority={idx === 0}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {activeScreenshots.length > 1 && (
                          <>
                            <CarouselPrevious className="left-3 border-slate-700 bg-slate-900/80 text-white hover:bg-slate-800 hover:text-white" />
                            <CarouselNext className="right-3 border-slate-700 bg-slate-900/80 text-white hover:bg-slate-800 hover:text-white" />
                          </>
                        )}
                      </Carousel>
                      <div className="flex items-center justify-between gap-3 border-t border-slate-800 px-5 py-3.5">
                        <div>
                          <p className="text-sm font-semibold text-white">{activeProject.title}</p>
                          <p className="text-xs text-slate-400">{activeScreenshots.length} screenshots</p>
                        </div>
                        {activeProject.liveUrl && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live demo
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </DialogContent>
              </Dialog>

              {/* Other noteworthy */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-bold mb-4">Other noteworthy</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherDevProjects.map((p) => (
                    <div
                      key={p.title}
                      className="group relative overflow-hidden flex flex-col rounded-[28px] border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.55)]"
                    >
                      <div className="pointer-events-none absolute -top-8 -right-8 w-20 h-20 rounded-full bg-accent-subtle/40 group-hover:scale-110 transition-transform" aria-hidden />
                      <div className="relative flex items-start justify-between gap-2 mb-3">
                        <span className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                          {p.status ? <Clock className="w-4 h-4" /> : <FolderGit2 className="w-4 h-4" />}
                        </span>
                        <div className="flex items-center gap-1">
                          {p.liveUrl && (
                            <a
                              href={p.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${p.title} live site`}
                              title="Live site"
                              className="flex w-8 h-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          {p.repoUrl && (
                            <a
                              href={p.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${p.title} on GitHub`}
                              title="GitHub"
                              className="flex w-8 h-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="relative flex items-center gap-2 mb-1.5">
                        <h4 className="font-semibold leading-snug">{p.title}</h4>
                        {p.status && (
                          <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
                            {p.status}
                          </span>
                        )}
                      </div>
                      <p className="relative text-sm text-muted-foreground mb-4 flex-1">{p.excerpt}</p>
                      <div className="relative flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {t}
                          </span>
                        ))}
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
              {devExperience.map((exp, i) => (
                <div key={exp.id} className="relative overflow-hidden rounded-[28px] border border-border p-5 bg-background">
                  <div className="pointer-events-none absolute -top-8 -right-8 w-20 h-20 rounded-full bg-accent-subtle/40" aria-hidden />
                  <span className="relative mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-subtle text-sm font-bold text-accent">
                    {i + 1}
                  </span>
                  <p className="relative text-xs text-muted-foreground">{exp.period}</p>
                  <h3 className="relative font-bold mt-1">{exp.role}</h3>
                  <p className="relative text-sm text-accent font-medium">{exp.company}</p>
                  <p className="relative text-sm text-muted-foreground mt-2">{exp.description}</p>
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
                <div key={item.title} className="relative overflow-hidden rounded-[28px] border border-border p-5">
                  <div className="pointer-events-none absolute -top-8 -right-8 w-20 h-20 rounded-full bg-accent-subtle/40" aria-hidden />
                  <h3 className="relative font-semibold mb-2">{item.title}</h3>
                  <p className="relative text-sm text-muted-foreground mb-3">{item.desc}</p>
                  {"external" in item && item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="relative inline-block text-sm font-medium text-accent hover:underline">
                      Proof: {item.proof} ↗
                    </a>
                  ) : (
                    <Link href={item.href} className="relative inline-block text-sm font-medium text-accent hover:underline">
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
                <div key={cap.title} className="relative overflow-hidden rounded-[28px] border border-border bg-card p-5 flex flex-col">
                  <div className="pointer-events-none absolute -top-8 -right-8 w-20 h-20 rounded-full bg-accent-subtle/40" aria-hidden />
                  <h3 className="relative font-bold text-sm mb-2">{cap.title}</h3>
                  <p className="relative text-xs text-muted-foreground mb-4 flex-1">{cap.desc}</p>
                  <div className="relative flex flex-wrap gap-1.5 mb-4">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {cap.external ? (
                    <a href={cap.href} target="_blank" rel="noopener noreferrer" className="relative text-xs font-semibold text-accent hover:underline">
                      See proof ↗
                    </a>
                  ) : (
                    <Link href={cap.href} className="relative text-xs font-semibold text-accent hover:underline">
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
