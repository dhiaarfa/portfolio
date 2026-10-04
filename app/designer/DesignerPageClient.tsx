"use client"

import { Link } from "next-view-transitions"
import Image from "next/image"
import { ArrowRight, Search, PenTool, Package, RefreshCw, Gift } from "lucide-react"
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
import ResourcesInsightsStrip from "@/components/resources-insights-strip"
import SectionIndex from "@/components/section-index"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import TrackFaq from "@/components/track-faq"
import { fromPrice } from "@/lib/pricing"

const SECTION_INDEX = [
  { id: "case-studies", labelKey: "secCaseStudies" },
  { id: "gallery", labelKey: "secGallery" },
  { id: "services", labelKey: "secServices" },
  { id: "process", labelKey: "secProcess" },
  { id: "contact-form", labelKey: "secContact" },
]

/** Real design clients, all with case studies or gallery work on this page
 *  (lib/work.ts, data/projects.ts). Brand names are not translated. */
const DESIGN_BRANDS = [
  "Speranza Café",
  "Tafani Travel",
  "ONE SPACE",
  "CRIT Tunisie",
  "Nakkla",
  "MeetUp Pro",
  "TravelTodo",
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
    priceId: "brandIdentity",
  },
  {
    nameKey: "packageSocialName",
    descKey: "packageSocialDesc",
    includeKeys: ["packageSocialInclude1", "packageSocialInclude2", "packageSocialInclude3", "packageSocialInclude4"],
    priceId: "socialTemplates",
  },
  {
    nameKey: "packageLogoName",
    descKey: "packageLogoDesc",
    includeKeys: ["packageLogoInclude1", "packageLogoInclude2", "packageLogoInclude3", "packageLogoInclude4"],
    priceId: "logo",
  },
  {
    nameKey: "packageBilingualName",
    descKey: "packageBilingualDesc",
    includeKeys: ["packageBilingualInclude1", "packageBilingualInclude2", "packageBilingualInclude3", "packageBilingualInclude4"],
    priceId: "bilingualIdentity",
  },
] as const

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
  // Design case studies only: featuredWorkProjects() also returns the three
  // web projects (DigiMyTech, CRIT site, BDF site), which showed up here as
  // "design" case studies.
  const featured = featuredWorkProjects().filter((p) => p.kind === "design")
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
      <SectionIndex items={SECTION_INDEX} />

      <main id="main-content" className="w-full pt-0">
        {/* 1. Hero, positioning + work visual */}
        <RoleHero
          variant="split-edge"
          decoration={
            <div className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12] bg-dot-grid" />
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
              {/* Oct 2026: the mosaic used to sit under backdrop-blur-md --
                  the page's most persuasive asset (the work itself) was
                  deliberately out of focus. Now sharp, with only a seam
                  gradient toward the text column. */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0A0A0A]/60 lg:via-transparent" />
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
          {/* Two actions (roadmap 1.1 hierarchy), the free templates demoted
              to a quiet text link instead of a third equal button. */}
          <div className="flex flex-wrap gap-3">
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green">
              {t("designerBtnStartProject")}
            </a>
            <a href="#case-studies" className="btn-outline group inline-flex">
              {t("designerBtnSeeSelectedWork")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </a>
          </div>
          <Link
            href="/freebies?category=design"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <Gift className="h-4 w-4" />
            {t("designerBtnGetFreeTemplates")}
          </Link>
          {/* French clients expect to ask for a "devis" before booking a
              call (inspiration brief); French pages only. */}
          {language === "fr" && (
            <a
              href="#contact-form"
              className="mt-4 ms-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              {t("requestQuote")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          )}
        </RoleHero>

        {/* 2. Brands I've designed for (Oct 2026 restructure): the shared
            ClientLogosStrip that sat here is mostly training partners
            (USAID, IFMSA, JCI, AIESEC...), not design clients. This page
            now names the brands its own case studies and gallery come from. */}
        <section aria-labelledby="designer-brands" className="w-full border-y border-border bg-muted/30 dark:bg-card/40 px-4 py-8 md:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <p id="designer-brands" className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t("designerBrandsLabel")}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {DESIGN_BRANDS.map((name) => (
                <li key={name} className="font-accent-italic text-xl sm:text-2xl text-foreground/75">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Case studies -- proof first, right after the hook */}
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
                  // Bento: the first case study leads at double width on lg.
                  className={`group overflow-hidden rounded-[2rem] border border-border bg-card transition-all hover:border-accent/40 hover:shadow-lg ${
                    i === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <Link href={`/work/${project.slug}`} className="block">
                    <div className={`relative bg-muted ${i === 0 ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3]"}`}>
                      <Image src={project.cardImage} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                    </div>
                    <div className="space-y-2 p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-accent">{t(categoryKey(project.category))}</span>
                        {/* Status tag (inspiration brief, step 11, after
                            sushantvohra.com): real client work vs concept. */}
                        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                          {project.concept ? t("galleryConceptBadge") : t("caseClientBadge")}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      {/* Outcome first, deliverable second (step 10, after
                          NOSIGNER's "HOW" captions). */}
                      <p className="text-sm font-medium text-foreground">{lw.outcome}</p>
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

        {/* 4. Full gallery -- breadth right after depth */}
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
                  {/* Counts on filters (inspiration brief, step 5). */}
                  <span className="ms-1.5 tabular-nums font-normal">
                    {cat === "All" ? curatedGallery.length : curatedGallery.filter((p) => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
            {/* Masonry (inspiration brief, step 6): each piece keeps its own
                proportions (tall packaging, wide banners) instead of being
                cropped to identical squares. */}
            <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
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
                    className="group relative mb-3 block break-inside-avoid overflow-hidden rounded-2xl bg-muted"
                  >
                    <Image src={project.image} alt={project.title} width={0} height={0} className="h-auto w-full transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" />
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

        {/* 5. Marketing & strategy -- design that moved numbers */}
        <MarketingSection />

        {/* 6. Services / packages */}
        <section id="services" className="section-compact w-full px-4 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="label mb-2">{t("designerServicesLabel")}</p>
            <h2 className="mb-10 text-3xl font-bold md:text-4xl">{t("designerServicesHeading")}</h2>
            <div className="grid gap-5 md:grid-cols-2">
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
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-accent">{fromPrice(pkg.priceId, language)}</p>
                  <a href="#contact-form" className="text-sm font-semibold text-foreground hover:text-accent">
                    {t("designerStartProjectArrow")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. How we work -- the one process section (the separate "design philosophy" block, also numbered as 4 steps, was dropped as a duplicate) */}
        <section id="process" className="section-compact w-full bg-muted/30 px-4 md:px-8 dark:bg-background/50">
          <div className="mx-auto max-w-5xl">
            {/* Dhia's "no photos in designer page" fix (Oct 2026): this was
                the only page with zero real photos of him -- a portrait
                now backs this heading, the same photo-banner pattern used
                on /trainer, instead of a plain text header. */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border mb-10">
              <div className="relative aspect-[4/3] sm:aspect-[21/9]">
                <Image
                  src="/images/photos/dhia-hero-green.jpg"
                  alt="Mohamed Dhia Arfa, designer"
                  fill
                  className="object-cover object-[85%_30%] rtl:-scale-x-100"
                  sizes="100vw"
                />
                {/* Text sits on the photo's dark side, away from the face
                    (image is mirrored in RTL so that side is always "start"). */}
                <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-center text-start px-6 sm:px-10 md:px-14 max-w-[60%]">
                {/* The named method (Oct 2026), shared with /trainer. */}
                <p className="label !text-white/80 mb-2">{t("methodName")}</p>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">{t("designerProcessHeading")}</h2>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {howWeWork.map((step) => (
                <div key={step.step} className="rounded-2xl border border-border bg-card p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                      <step.Icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-2xl font-black text-muted-foreground/70">{step.step}</span>
                  </div>
                  <h3 className="mb-2 font-semibold">{t(step.titleKey)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t(step.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Trust: experience + design certs, tools, resources, then the contact form as the single closing ask (the "free templates" band after it was removed; templates are linked in the hero and the resources strip) */}
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

        <TrackFaq track="design" />

        <section id="contact-form" className="section-compact w-full bg-card px-4 md:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">{t("designerContactHeading")}</h2>
              <p className="mt-2 text-muted-foreground">{t("designerContactSubtext")}</p>
            </div>
            <ContactForm />
          </div>
        </section>

      </main>

      <Footer variant="design" />
    </div>
  )
}
