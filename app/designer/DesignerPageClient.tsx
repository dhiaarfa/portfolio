"use client"

import { Link } from "next-view-transitions"
import Image from "next/image"
import { ArrowRight, Target, Layers, LayoutGrid, Compass, Search, PenTool, Package, RefreshCw, Gift } from "lucide-react"
import { formatStat, designExperience, certifications as profileCertifications, localizedExperience, localizedCertification } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"
import { featuredWorkProjects, curatedGallery, categoryKey, localizedWork } from "@/lib/work"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import RoleHero from "@/components/role-hero"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ToolsStackSection from "@/components/tools-stack-section"
import MarketingSection from "@/components/marketing-section"
import ClientLogosStrip from "@/components/client-logos-strip"
import ResourcesInsightsStrip from "@/components/resources-insights-strip"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

const designPhilosophy = [
  { titleKey: "philosophyBrandTitle", descKey: "philosophyBrandDesc", Icon: Layers },
  { titleKey: "philosophyDirectionTitle", descKey: "philosophyDirectionDesc", Icon: Target },
  { titleKey: "philosophyVisualTitle", descKey: "philosophyVisualDesc", Icon: LayoutGrid },
  { titleKey: "philosophyConsultingTitle", descKey: "philosophyConsultingDesc", Icon: Compass },
]

const howWeWork = [
  { step: "01", titleKey: "howWeWorkStep1Title", descKey: "howWeWorkStep1Desc", Icon: Search },
  { step: "02", titleKey: "howWeWorkStep2Title", descKey: "howWeWorkStep2Desc", Icon: PenTool },
  { step: "03", titleKey: "howWeWorkStep3Title", descKey: "howWeWorkStep3Desc", Icon: RefreshCw },
  { step: "04", titleKey: "howWeWorkStep4Title", descKey: "howWeWorkStep4Desc", Icon: Package },
]

const packages = [
  {
    nameKey: "packageBrandIdentityName",
    descKey: "packageBrandIdentityDesc",
    includeKeys: ["packageBrandIdentityInclude1", "packageBrandIdentityInclude2", "packageBrandIdentityInclude3", "packageBrandIdentityInclude4"],
    noteKey: "packageBrandIdentityNote",
  },
  {
    nameKey: "packageSocialName",
    descKey: "packageSocialDesc",
    includeKeys: ["packageSocialInclude1", "packageSocialInclude2", "packageSocialInclude3", "packageSocialInclude4"],
    noteKey: "packageSocialNote",
  },
  {
    nameKey: "packageLogoName",
    descKey: "packageLogoDesc",
    includeKeys: ["packageLogoInclude1", "packageLogoInclude2", "packageLogoInclude3", "packageLogoInclude4"],
    noteKey: "packageLogoNote",
  },
]

const categories = ["All", "Brand Identity", "Social Media", "Logo Design", "Packaging"] as const
const categoryLabelKeys: Record<(typeof categories)[number], string> = {
  All: "categoryAll",
  "Brand Identity": "categoryBrandIdentity",
  "Social Media": "categorySocialMedia",
  "Logo Design": "categoryLogoDesign",
  Packaging: "categoryPackaging",
}

export default function DesignerPageClient() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All")
  const featured = featuredWorkProjects()
  const workExperience = designExperience.slice(0, 3)
  const certifications = profileCertifications.filter((c) =>
    ["graphic-design", "hubspot", "inco"].includes(c.id)
  )

  const filteredGallery =
    activeCategory === "All"
      ? curatedGallery
      : curatedGallery.filter((p) => p.category === activeCategory)

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main id="main-content" className="w-full pt-0">
        {/* 1. Hero, positioning + work visual */}
        <RoleHero
          variant="split-edge"
          decoration={
            <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-dot-grid" />
          }
          mediaClassName="relative bg-[#1C1C1C]"
          media={
            <>
              {/* Was a flat 2x2 grid of 4 project logos. Dhia asked for more
                  detail: every curated project now tiles as small squares,
                  repeating the list to fill the whole panel, with a frosted
                  blur layer over the mosaic instead of the images sitting
                  fully sharp -- reads as a rich "wall of work" texture
                  behind the hero rather than 4 isolated logos. */}
              <div className="absolute inset-0 grid grid-cols-5 sm:grid-cols-6 auto-rows-fr gap-[2px]">
                {Array.from({ length: 30 }).map((_, i) => {
                  const item = curatedGallery[i % curatedGallery.length]
                  return (
                    <div key={i} className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                        priority={i < 6}
                        sizes="(min-width: 1024px) 17vw, 20vw"
                      />
                    </div>
                  )
                })}
              </div>
              <div className="pointer-events-none absolute inset-0 backdrop-blur-md bg-black/10" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent lg:bg-gradient-to-r lg:from-[#0A0A0A]/30" />
            </>
          }
          footer={
            <div className="flex gap-8 border-t border-border pt-6">
              {[
                [formatStat("designProjects"), t("designerStatProjects")],
                [formatStat("yearsExperience"), t("designerStatYears")],
                [formatStat("brands"), t("designerStatBrands")],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl font-black leading-none text-foreground">{v}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-widest text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          }
        >
          <p className="label mb-4 text-accent">{t("designerHeroLabel")}</p>
          <h1 className="h1-hero-tagline mb-5 text-foreground">
            {t("designerHeroHeadline")}
          </h1>
          <p className="mb-8 max-w-md text-[17px] leading-relaxed text-muted-foreground">
            {t("designerHeroSubtext")}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green">
              {t("designerBtnStartProject")}
            </a>
            <a href="#case-studies" className="rounded-[14px] border border-border px-6 py-3 font-medium text-muted-foreground transition-all hover:border-accent/60 hover:text-foreground">
              {t("designerBtnSeeSelectedWork")}
            </a>
            <Link
              href="/freebies?category=design"
              className="inline-flex items-center gap-2 rounded-[14px] border border-border px-6 py-3 font-medium text-muted-foreground transition-all hover:border-accent/60 hover:text-foreground"
            >
              <Gift className="h-4 w-4" />
              {t("designerBtnGetFreeTemplates")}
            </Link>
          </div>
        </RoleHero>

        {/* 2. Client logos */}
        <ClientLogosStrip />

        {/* 2b. Marketing & strategy */}
        <MarketingSection />

        {/* 3. Featured case studies */}
        <section id="case-studies" className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="label mb-2">{t("designerCaseStudiesLabel")}</p>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">{t("designerCaseStudiesHeading")}</h2>
            <p className="mb-10 max-w-2xl text-muted-foreground">
              {t("designerCaseStudiesIntro")}
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project, i) => {
                const lw = localizedWork(project, language)
                return (
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
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent">{t(categoryKey(project.category))}</span>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{lw.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{lw.role} · {lw.timeline}</p>
                      <span className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-accent">
                        {t("designerViewCaseStudy")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. How we work */}
        <section className="section-compact w-full bg-muted/30 px-4 md:px-8 dark:bg-background/50">
          <div className="mx-auto max-w-5xl">
            {/* Dhia's "no photos in designer page" fix (Oct 2026): this was
                the only page with zero real photos of him -- a portrait
                now backs this heading, the same photo-banner pattern used
                on /trainer, instead of a plain text header. */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border mb-10">
              <div className="relative aspect-[16/7] sm:aspect-[21/9]">
                <Image
                  src="/images/photos/dhia-designer.png"
                  alt="Mohamed Dhia Arfa, designer"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="label !text-white/80 mb-2">{t("designerProcessLabel")}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t("designerProcessHeading")}</h2>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {howWeWork.map((step) => (
                <div key={step.step} className="rounded-2xl border border-border bg-card p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                      <step.Icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-2xl font-black text-muted-foreground/40">{step.step}</span>
                  </div>
                  <h3 className="mb-2 font-semibold">{t(step.titleKey)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(step.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Services / packages */}
        <section className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="label mb-2">{t("designerServicesLabel")}</p>
            <h2 className="mb-10 text-3xl font-bold md:text-4xl">{t("designerServicesHeading")}</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {packages.map((pkg) => (
                <div key={pkg.nameKey} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-2 text-lg font-bold">{t(pkg.nameKey)}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{t(pkg.descKey)}</p>
                  <ul className="mb-6 flex-1 space-y-2">
                    {pkg.includeKeys.map((itemKey) => (
                      <li key={itemKey} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {t(itemKey)}
                      </li>
                    ))}
                  </ul>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-accent">{t(pkg.noteKey)}</p>
                  <a href="#contact-form" className="text-sm font-semibold text-foreground hover:text-accent">
                    {t("designerStartProjectArrow")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Design philosophy */}
        <section className="section-compact w-full bg-gradient-to-b from-background via-accent/5 to-background px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="label mb-2">{t("designerApproachLabel")}</p>
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">{t("designerApproachHeading")}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {designPhilosophy.map((item, i) => (
                <div key={item.titleKey} className="rounded-2xl border border-accent/20 bg-card p-5 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                    <item.Icon className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t("designerStepPrefix", { n: i + 1 })}</p>
                  <h3 className="mb-2 text-sm font-semibold">{t(item.titleKey)}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Curated gallery */}
        <section id="gallery" className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="label mb-2">{t("designerPortfolioLabel")}</p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t("designerPortfolioHeading")}</h2>
            <div className="mb-8 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat ? "bg-accent text-white shadow-md" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {t(categoryLabelKeys[cat])}
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
                        // Neutral status tag ("concept" vs. a delivered
                        // client piece), not a discipline color.
                        <span className="absolute left-3 top-3 rounded-full bg-slate-700/90 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                          {t("galleryConceptBadge")}
                        </span>
                      )}
                      <div className="translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm font-semibold text-white">{project.title}</p>
                        <p className="text-xs text-white/70">{internal ? t("caseStudyLabel") : t("galleryBehanceLabel")}</p>
                      </div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>
            <div className="mt-8 text-center">
              <a href={siteConfig.behance} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:underline">
                {t("designerSeeFullArchive")}
              </a>
            </div>
          </div>
        </section>

        {/* 8. Short experience + design certs */}
        <section className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            <div>
              <p className="label mb-2">{t("designerExperienceLabel")}</p>
              <h2 className="mb-6 text-2xl font-bold">{t("designerExperienceHeading")}</h2>
              <div className="space-y-4">
                {workExperience.map((job) => {
                  const lj = localizedExperience(job, language)
                  return (
                    <div key={job.company} className="rounded-xl border border-border p-4">
                      <p className="font-semibold text-sm">{lj.role}</p>
                      <p className="text-xs text-muted-foreground">{lj.company} · {lj.period}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <p className="label mb-2">{t("designerCredentialsLabel")}</p>
              <h2 className="mb-6 text-2xl font-bold">{t("designerCredentialsHeading")}</h2>
              <div className="space-y-3">
                {certifications.map((cert) => {
                  const lc = localizedCertification(cert, language)
                  return (
                    <div key={cert.title} className="flex items-center justify-between rounded-xl border border-border p-4">
                      <div>
                        <p className="text-sm font-semibold">{lc.title}</p>
                        <p className="text-xs text-muted-foreground">{lc.issuer}</p>
                      </div>
                      <span className="text-xs font-bold text-accent">{lc.year}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Only the design-relevant slice of the full stack lives here now
            -- the complete list moved to the homepage (see HomePageClient.tsx),
            per Dhia's ask to avoid repeating the whole table on every page. */}
        <ToolsStackSection compact groups={["design", "ai"]} />

        {/* The hero already offers "Start a project" and the Behance archive
            link up front, and the contact-form section right below closes
            the page with the same ask, so the generic "Ready to sharpen
            your brand?" band that used to sit here just restated both a
            third time on one scroll. Removed (Master to-do list, Tier 4 —
            CTA redundancy), same fix already applied on /trainer. */}
        <ResourcesInsightsStrip focus="design" className="bg-section-tint" />

        <section id="contact-form" className="section-compact w-full bg-card px-4 md:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">{t("designerContactHeading")}</h2>
              <p className="mt-2 text-muted-foreground">{t("designerContactSubtext")}</p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="w-full bg-accent-subtle px-4 py-10 md:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="font-bold text-slate-900 dark:text-white">{t("designerFreeTemplatesTitle")}</p>
              <p className="text-sm text-muted-foreground">{t("designerFreeTemplatesDesc")}</p>
            </div>
            <Link href="/freebies?category=design" className="btn-green whitespace-nowrap">
              {t("designerBtnGetFreeTemplates")}
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="design" />
    </div>
  )
}
