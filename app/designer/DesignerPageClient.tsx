"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, Target, Layers, LayoutGrid, Compass, Search, PenTool, Package, Handshake, RefreshCw } from "lucide-react"
import { formatStat, designExperience, certifications as profileCertifications } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"
import { featuredWorkProjects, curatedGallery } from "@/lib/work"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ToolsStackSection from "@/components/tools-stack-section"
import ClientLogosStrip from "@/components/client-logos-strip"
import ResourcesInsightsStrip from "@/components/resources-insights-strip"
import { useState } from "react"

const designPhilosophy = [
  { title: "Brand Identity Systems", description: "Logos plus color, type, and usage rules so every touchpoint feels like one brand.", Icon: Layers },
  { title: "Creative Direction", description: "Visual choices tied to business goals, not decoration for its own sake.", Icon: Target },
  { title: "Visual Design & UI/UX", description: "Interfaces and campaigns that are clear, usable, and on-brand.", Icon: LayoutGrid },
  { title: "Design Consulting", description: "Guidance on systems, templates, and how your team keeps consistency.", Icon: Compass },
]

const howWeWork = [
  { step: "01", title: "Discovery & brief", desc: "Goals, audience, competitors, and deliverables locked before pixels.", Icon: Search },
  { step: "02", title: "Concept directions", desc: "2–3 visual routes with rationale. You pick a direction with confidence.", Icon: PenTool },
  { step: "03", title: "Design & iterate", desc: "Refine the system across logo, templates, and key applications.", Icon: RefreshCw },
  { step: "04", title: "Handover & assets", desc: "Export kit, templates, and usage notes so your team can run with it.", Icon: Package },
]

const packages = [
  {
    name: "Brand Identity",
    desc: "Logo, color, typography, and core templates for startups and SMEs.",
    includes: ["Logo suite", "Color & type system", "Social templates", "Brand usage guide"],
    note: "From custom quote",
  },
  {
    name: "Social & Campaigns",
    desc: "Feed systems, promos, and campaign visuals for active brands.",
    includes: ["Template family", "Campaign key visual", "Story & post formats", "Canva/Figma handoff"],
    note: "Project-based",
  },
  {
    name: "Logo & Essentials",
    desc: "Fast turnaround for new businesses that need a credible mark quickly.",
    includes: ["Primary logo", "Color palette", "Basic social avatar", "File exports"],
    note: "Fixed scope",
  },
]

const designTestimonials = [
  { name: "Youssef Touati", role: "CEO, Jasmin Marketing · Direct manager", quote: "Creativity and dedication. Attention to detail, eagerness to learn." },
  { name: "Skander Chebbi", role: "Graphic Designer · Collaborator", quote: "Symbol of dynamism and accuracy. Adds value in design and strategy." },
  { name: "Amir Boujelben", role: "MeetUp Pro Event Manager", quote: "Exceptional strategic marketing and creativity. Crucial to event success." },
]

const categories = ["All", "Brand Identity", "Social Media", "Logo Design", "Packaging"] as const

export default function DesignerPageClient() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All")
  const featured = featuredWorkProjects()
  const workExperience = designExperience.slice(0, 3)
  const certifications = profileCertifications
    .filter((c) => ["graphic-design", "hubspot", "inco"].includes(c.id))
    .map((c) => ({ title: c.title, issuer: c.issuer, year: c.year }))

  const filteredGallery =
    activeCategory === "All"
      ? curatedGallery
      : curatedGallery.filter((p) => p.category === activeCategory)

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main className="w-full pt-0">
        {/* 1. Hero — positioning + work visual */}
        <section className="min-h-[72vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="relative order-2 flex flex-col justify-between bg-slate-950 p-8 lg:order-1 lg:p-14">
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#22c55e 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }} />
            <div className="relative z-10 my-auto py-6">
              <p className="label mb-4 text-accent">Brand design · Zia Studio</p>
              <h1 className="font-display mb-5 text-[clamp(36px,5.5vw,64px)] font-black leading-[0.95] text-white">
                Brand identity and social design that make Tunisian brands impossible to ignore.
              </h1>
              <p className="mb-8 max-w-md text-[17px] leading-relaxed text-slate-400">
                I&apos;m Dhia. I build brands that look as good as they work, from logo to launch, for cafés, startups, and NGOs across Tunisia.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green">
                  Start a project
                </a>
                <a href="#case-studies" className="rounded-[14px] border border-slate-700 px-6 py-3 font-medium text-slate-300 transition-all hover:border-accent/60 hover:text-white">
                  See selected work
                </a>
              </div>
            </div>
            <div className="relative z-10 flex gap-8 border-t border-slate-800 pt-6">
              {[
                [formatStat("designProjects"), "Projects"],
                [formatStat("yearsExperience"), "Years"],
                [formatStat("brands"), "Brands"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl font-black leading-none text-white">{v}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 grid min-h-[45vh] grid-cols-2 grid-rows-2 gap-1 bg-slate-900 lg:order-2 lg:min-h-full">
            {[
              "/images/lone-space-gold.png",
              "/images/445771850-916829483581375-1053755579034856379-n.png",
              "/images/tafani-white-png.png",
              "/images/meetuppro-thumbnail.png",
            ].map((src, i) => (
              <div key={src} className="relative overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" priority={i < 2} sizes="50vw" />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-slate-950/30" />
          </div>
        </section>

        {/* 2. Client logos */}
        <ClientLogosStrip />

        {/* 3. Featured case studies */}
        <section id="case-studies" className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="label mb-2">Case studies</p>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Selected work, with context</h2>
            <p className="mb-10 max-w-2xl text-muted-foreground">
              Problem, process, and outcome for each project. Not just thumbnails.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project, i) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-lg"
                >
                  <Link href={`/work/${project.slug}`} className="block">
                    <div className="relative aspect-[4/3] bg-muted">
                      <Image src={project.cardImage} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                    </div>
                    <div className="space-y-2 p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent">{project.category}</span>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{project.role} · {project.timeline}</p>
                      <span className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-accent">
                        View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How we work */}
        <section className="section-compact w-full bg-muted/30 px-4 md:px-8 dark:bg-slate-950/50">
          <div className="mx-auto max-w-5xl">
            <p className="label mb-2 text-center">Process</p>
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">How we work together</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {howWeWork.map((step) => (
                <div key={step.step} className="rounded-2xl border border-border bg-card p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                      <step.Icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-2xl font-black text-muted-foreground/40">{step.step}</span>
                  </div>
                  <h3 className="mb-2 font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Services / packages */}
        <section className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="label mb-2">Services</p>
            <h2 className="mb-10 text-3xl font-bold md:text-4xl">What I design for clients</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {packages.map((pkg) => (
                <div key={pkg.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-2 text-lg font-bold">{pkg.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{pkg.desc}</p>
                  <ul className="mb-6 flex-1 space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-accent">{pkg.note}</p>
                  <a href="#contact-form" className="text-sm font-semibold text-foreground hover:text-accent">
                    Start a project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Design philosophy */}
        <section className="section-compact w-full bg-gradient-to-b from-background via-accent/5 to-background px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="label mb-2">Approach</p>
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Design philosophy in four moves</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {designPhilosophy.map((item, i) => (
                <div key={item.title} className="rounded-2xl border border-accent/20 bg-card p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                    <item.Icon className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Step 0{i + 1}</p>
                  <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Curated gallery */}
        <section id="gallery" className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="label mb-2">Portfolio</p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">More selected work</h2>
            <div className="mb-8 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat ? "bg-accent text-white shadow-md" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {filteredGallery.map((project) => {
                const href = project.workSlug ? `/work/${project.workSlug}` : project.externalUrl ?? siteConfig.behance
                const internal = !!project.workSlug
                const Wrapper = internal ? Link : "a"
                const linkProps = internal
                  ? { href }
                  : { href, target: "_blank" as const, rel: "noopener noreferrer" as const }

                return (
                  <Wrapper
                    key={project.title}
                    {...linkProps}
                    className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
                  >
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="25vw" />
                    <div className="absolute inset-0 flex items-end bg-slate-900/0 p-3 transition-all group-hover:bg-slate-900/70">
                      {project.concept && (
                        <span className="absolute left-3 top-3 rounded-full bg-amber-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                          Concept
                        </span>
                      )}
                      <div className="translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm font-semibold text-white">{project.title}</p>
                        <p className="text-xs text-white/70">{internal ? "Case study" : "Behance"}</p>
                      </div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>
            <div className="mt-8 text-center">
              <a href={siteConfig.behance} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:underline">
                See full archive on Behance ↗
              </a>
            </div>
          </div>
        </section>

        {/* 8. Short experience + design certs */}
        <section className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            <div>
              <p className="label mb-2">Experience</p>
              <h2 className="mb-6 text-2xl font-bold">Selected studio journey</h2>
              <div className="space-y-4">
                {workExperience.map((job) => (
                  <div key={job.company} className="rounded-xl border border-border p-4">
                    <p className="font-semibold text-sm">{job.role}</p>
                    <p className="text-xs text-muted-foreground">{job.company} · {job.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="label mb-2">Credentials</p>
              <h2 className="mb-6 text-2xl font-bold">Design-relevant certifications</h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.title} className="flex items-center justify-between rounded-xl border border-border p-4">
                    <div>
                      <p className="text-sm font-semibold">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-bold text-accent">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Testimonials */}
        <section className="section-compact w-full bg-muted/30 px-4 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="label mb-2 text-center">Clients & collaborators</p>
            <h2 className="mb-8 text-center text-3xl font-bold">What people say about the design work</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {designTestimonials.map((t) => (
                <blockquote key={t.name} className="rounded-2xl border border-border bg-card p-5">
                  <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <footer>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <ToolsStackSection />

        {/* Final CTA */}
        <section className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Handshake className="mx-auto h-10 w-10 text-accent" />
            <h2 className="text-3xl font-bold md:text-4xl">Ready to sharpen your brand?</h2>
            <p className="text-muted-foreground">One primary path: tell me about your project. I respond within 24 hours.</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Start a project
              </a>
              <a href={siteConfig.behance} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-accent">
                Full archive on Behance ↗
              </a>
            </div>
          </div>
        </section>

        <ResourcesInsightsStrip focus="design" className="bg-section-tint" />

        <section id="contact-form" className="section-compact w-full bg-card px-4 md:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Tell me about your project</h2>
              <p className="mt-2 text-muted-foreground">Brand identity, social campaigns, or a full visual system.</p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="w-full bg-pink-50 px-4 py-10 dark:bg-pink-950/20 md:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Free design templates</p>
              <p className="text-sm text-muted-foreground">Brand brief, color guide, and workshop tools I use with clients.</p>
            </div>
            <Link href="/freebies?category=design" className="whitespace-nowrap rounded-xl bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-500">
              Get free templates
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
