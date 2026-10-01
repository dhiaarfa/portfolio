"use client"

import { Link } from "next-view-transitions"
import { ArrowRight, BookOpen, Palette, Users, Code, Code2, Send, Calendar, Download, Linkedin, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar-new"
import { WhatsAppIcon } from "@/lib/brand-icon"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"
import { siteConfig } from "@/lib/site-config"
import { AnimatedNumber } from "@/components/ui/animated-number"
import dynamic from "next/dynamic"
import ClientLogosStrip from "@/components/client-logos-strip"
import ToolkitStrip from "@/components/toolkit-strip"
import HeroAnnotatedPortrait from "@/components/hero-annotated-portrait"
import StatsSection from "@/components/stats-section"
import JourneySection from "@/components/journey-section"
import ServicePackages from "@/components/service-packages"
import HowWeWorkSection from "@/components/how-we-work-section"
import ProjectStack from "@/components/sections/ProjectStack"
import { webProjects, designProjects } from "@/data/projects"
const ValueRadarChart = dynamic(() => import("@/components/value-radar-chart"), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse rounded-2xl bg-muted/40" />,
})
import NewsletterSection from "@/components/newsletter-section"
import { useLanguage } from "@/components/language-provider"
import { FadeUp } from "@/components/ui/motion"
import ResourcesInsightsStrip from "@/components/resources-insights-strip"
import { TestimonialsShowcase } from "@/components/testimonials-showcase"
import WhichDoorSelector from "@/components/which-door-selector"
import { type Pillar, pillarToInsightsFocus, pillarToTestimonialTag } from "@/lib/which-door"

function AnimatedRole() {
  const { t } = useLanguage()
  const [i, setI] = useState(0)
  const [show, setShow] = useState(true)
  const roles = [
    { text: t("homeRotatingDesigner"), cls: "text-pink-500 dark:text-pink-400" },
    { text: t("homeRotatingTrainer"), cls: "text-amber-500 dark:text-amber-400" },
    { text: t("homeRotatingDeveloper"), cls: "text-blue-500 dark:text-blue-400" },
  ]
  useEffect(() => {
    const t = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setI((p) => (p + 1) % 3)
        setShow(true)
      }, 280)
    }, 2800)
    return () => clearInterval(t)
  }, [])
  return (
    <p className="text-xl font-medium text-slate-500 dark:text-slate-400">
      {t("homeRotatingPrefix")}{" "}
      {/* Italic Fraunces serif accent on the rotating word, the "end to
          end."-style flourish from Dhia's reference screenshot, applied here
          instead of to a new line of copy since this word already changes
          per role and doesn't compete with the H1. */}
      <span
        className={`font-accent-italic font-semibold transition-all duration-300 inline-block ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} ${roles[i].cls}`}
      >
        {roles[i].text}
      </span>
    </p>
  )
}

/** Opens the floating AI assistant (components/floating-actions.tsx) via a
 *  DOM CustomEvent instead of prop-drilling or a new shared context, the
 *  hero's suggestion pills / "ask me anything" bar and the floating widget
 *  don't otherwise share a parent that could hold this state. Omit `prompt`
 *  to just open the panel (the "Let's chat" pill); pass it to open and send
 *  in one step (the other pills, and the ask bar's own submit). */
function askAI(prompt?: string) {
  window.dispatchEvent(new CustomEvent("dhia:ask-ai", { detail: { prompt } }))
}

function HeroAskBar() {
  const { t } = useLanguage()
  const [value, setValue] = useState("")

  // Implementation-prompts pass (Sep 2026), P1 "Hero CTA hierarchy": this
  // used to also render 6 canned-question pills (Work/What I Do/
  // Availability/Chat/Resume/LinkedIn) above this input, competing with the
  // primary Book-a-call / secondary Explore-work pair for attention. Resume
  // and LinkedIn moved into the compact icon row next to those buttons;
  // the canned questions were redundant with that same row plus the
  // floating assistant, so they're gone rather than relocated. Only the
  // free-text ask input remains here, visually de-emphasized (smaller,
  // muted) since it's now a secondary path, not the first thing offered.
  return (
    <form
      className="mt-5 flex max-w-[420px] items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-2 py-1 pl-4 backdrop-blur-sm dark:border-border/70 dark:bg-card/50"
      onSubmit={(e) => {
        e.preventDefault()
        if (!value.trim()) return
        askAI(value)
        setValue("")
      }}
    >
      <Sparkles className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t("heroAskPlaceholder")}
        className="flex-1 bg-transparent text-xs text-slate-600 placeholder:text-slate-400 focus:outline-none dark:text-slate-300 dark:placeholder:text-slate-500"
      />
      <button
        type="submit"
        aria-label="Send"
        className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-white transition-transform hover:scale-105 disabled:opacity-40"
        disabled={!value.trim()}
      >
        <Send className="h-3 w-3" />
      </button>
    </form>
  )
}

export default function HomePageClient() {
  const { t } = useLanguage()
  const [pillar, setPillar] = useState<Pillar>(null)
  const roles = [
    {
      title: "Trainer",
      slug: "trainer",
      icon: BookOpen,
      color: "from-accent-muted to-emerald-50",
      accentColor: "var(--site-accent)",
      stats: [t("roleStatTrainer1"), t("roleStatTrainer2"), t("roleStatTrainer3")],
      descriptionKey: "roleTrainerDescription",
      cta: "exploreTraining",
    },
    {
      title: "Visual Designer",
      slug: "designer",
      icon: Palette,
      color: "from-accent-muted to-teal-50",
      accentColor: "var(--site-accent)",
      stats: [t("roleStatDesigner1"), t("roleStatDesigner2"), t("roleStatDesigner3")],
      descriptionKey: "roleDesignerDescription",
      cta: "viewDesignWork",
    },
    {
      title: "Web Dev Enthusiast",
      slug: "developer",
      icon: Code,
      color: "from-orange-50 to-amber-50",
      accentColor: "#ea580c",
      stats: [t("roleStatDeveloper1"), t("roleStatDeveloper2"), t("roleStatDeveloper3")],
      descriptionKey: "roleDeveloperDescription",
      cta: "seeMyProjects",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white dark:bg-background">
      <Navbar />

      <main id="main-content">
      {/* Hero, annotated portrait HUD */}
      <HeroAnnotatedPortrait theme="light" gradientBg className="!pb-10" showCta={false}>
        <div className="max-w-2xl">
          {/* 3-way audit synthesis (Sep 2026): promotes the existing,
              already-translated positioning tagline into the literal <h1>
              (previously just the name greeting), so the page's core
              positioning statement is the actual top heading rather than a
              paragraph below it. The greeting moves to a small kicker line
              above; the hover-glow treatment Dhia asked for on the tagline
              carries over onto the h1 itself instead of being dropped. */}
          <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">
            {t("helloGreeting")}{" "}
            <span className="text-accent font-semibold">Dhia</span>
          </p>
          <h1 className="h1-hero-tagline text-slate-900 dark:text-white mb-2 transition-[text-shadow] duration-300 hover:[text-shadow:0_0_18px_var(--site-accent)]">
            {/* Dhia's ask: a real line break after "build." rather than
                whatever the browser's own wrap happens to land on. */}
            {t("homeHeroTaglinePart1")}
            <br />
            {t("homeHeroTaglinePart2")}
          </h1>
          <AnimatedRole />
          {/* Implementation-prompts pass (Sep 2026), P2 "Kill duplicate
              stats": this hero used to also carry its own 3-number micro
              stats row (participants/projects/years), a partial repeat of
              the fuller 5-stat StatsSection ("By the numbers") further down
              this same page. Removed here rather than there -- StatsSection
              has the complete, correctly-labeled set (it also includes
              training hours and event count that this row didn't), so
              keeping it as the one stats strip on Home loses nothing and
              also declutters the hero itself. */}
          {/* Implementation-prompts pass (Sep 2026), P1 "Hero CTA
              hierarchy": one primary + one secondary action, everything
              else (resume/LinkedIn/WhatsApp/email/AI chat) demoted to a
              compact icon row below so it doesn't compete with booking. */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              <Calendar className="w-4 h-4" />
              {t("bookFreeConsultation")}
            </a>
            <a href="#expertise" className="btn-outline group inline-flex">
              {t("exploreMyWork")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </a>
          </div>

          {/* Implementation-prompts pass (Sep 2026), P18 "Contact/booking
              microcopy": reuses the footer's existing "footerCallShort"
              string ("30-min call - no commitment") right under the primary
              CTA so the reassurance sits next to both booking entry points,
              not just the footer's. */}
          <div className="flex items-center gap-2 mt-4">
            {[
              { href: siteConfig.resumePdfUrl, icon: Download, label: t("downloadResumePdf"), external: true },
              { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
              { href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`, icon: WhatsAppIcon, label: "WhatsApp", external: true },
              { href: `mailto:${siteConfig.email}`, icon: null, label: "Email", external: false },
            ].map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent dark:border-border dark:bg-card/70 dark:text-slate-300"
              >
                {Icon ? <Icon className="h-4 w-4" /> : <span className="text-[10px] font-bold">@</span>}
              </a>
            ))}
          </div>

          {/* De-emphasized "ask me anything" input, opens the existing
              floating AI assistant (see askAI() / floating-actions.tsx)
              instead of duplicating a second chat UI. Sits after the
              primary/secondary CTAs and icon row per P1, not competing
              with booking for first attention. */}
          <HeroAskBar />
        </div>
      </HeroAnnotatedPortrait>

      {/* My Expertise Bento */}
      <section id="expertise" className="bg-section-tint section-compact px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent text-center mb-2">
              {t("myExpertise")}
            </p>
            <h2 className="font-serif text-[clamp(26px,3.5vw,40px)] text-center text-slate-900 dark:text-white leading-snug mb-4">
              {t("homeExpertiseLine1")}
              <br />
              {t("homeExpertiseLine2")}
            </h2>
            <p className="text-center text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              {t("homeExpertiseDesc")}
            </p>
          </FadeUp>

          {/* Three role cards, redesigned as one coherent family instead of
              three differently-styled rectangles: same soft blobby corner
              radius, same low-opacity portrait-photo watermark, same eyebrow
              → emoji → title → description → CTA rhythm, so the only thing
              that changes between them is the accent color and the emoji —
              per Dhia's feedback that the old tiles were "boring, not
              coherent" and asking for emojis + faded photos instead of flat
              icon-in-circle badges. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                role: roles[1],
                icon: Palette,
                iconCls: "w-9 h-9 p-2 rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-950/60 dark:text-pink-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6",
                eyebrowKey: "design",
                title: "Zia Studio",
                photo: "/images/photos/dhia-designer.png",
                tint: "from-pink-50/95 via-white/97 to-white/98 dark:from-pink-950/30 dark:via-card/97 dark:to-card/98",
                eyebrowCls: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50",
                tags: ["Brand Identity", "UI/UX", "Motion", "Print"],
                flagship: "Speranza Café, full brand identity",
                tagCls: "bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border-pink-200/60 dark:border-pink-900/50",
                ctaCls: "text-pink-600 dark:text-pink-400",
              },
              {
                role: roles[0],
                icon: Users,
                iconCls: "w-9 h-9 p-2 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
                eyebrowKey: "training",
                title: t("pillarYouthDevelopment"),
                photo: "/images/photos/dhia-trainer.png",
                tint: "from-amber-50/95 via-white/97 to-white/98 dark:from-amber-950/30 dark:via-card/97 dark:to-card/98",
                eyebrowCls: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50",
                stats: [
                  [siteConfig.stats.participants, t("statLabelParticipants")],
                  [siteConfig.stats.trainingHours, t("statLabelHours")],
                  [siteConfig.stats.facilitationHours, t("statLabelFacilitationHrs")],
                ],
                flagship: "IOM Youth Hackathon, Doha, 1st place",
                ctaCls: "text-amber-600 dark:text-amber-400",
              },
              {
                role: roles[2],
                icon: Code2,
                iconCls: "w-9 h-9 p-2 rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-950/60 dark:text-sky-400 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6",
                eyebrowKey: "webDevelopment",
                title: t("pillarFullStackDevelopment"),
                photo: "/images/photos/dhia-developer.png",
                tint: "from-sky-50/95 via-white/97 to-white/98 dark:from-sky-950/30 dark:via-card/97 dark:to-card/98",
                eyebrowCls: "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50",
                tags: ["React", "Next.js", "Tailwind", "TypeScript"],
                flagship: "DigiMyTech Talent Hub, graduation project",
                tagCls: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-900/50",
                ctaCls: "text-sky-600 dark:text-sky-400",
              },
            ].map(
              (card) =>
                card.role && (
                  <Link
                    key={card.role.slug}
                    href={`/${card.role.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-100 dark:border-border shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500 p-7"
                  >
                    {/* Low-opacity portrait photo, faded into the card as a
                        watermark rather than shown as a hard image. */}
                    <Image
                      src={card.photo}
                      alt=""
                      fill
                      sizes="360px"
                      className="object-cover object-top opacity-[0.07] grayscale group-hover:opacity-[0.13] transition-opacity duration-500"
                      aria-hidden
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.tint}`} aria-hidden />

                    <div className="relative flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-5">
                        <card.icon className={card.iconCls} aria-hidden />
                        <span className={`text-[12px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full ${card.eyebrowCls}`}>
                          {t(card.eyebrowKey)}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                        {t(card.role.descriptionKey)}
                      </p>

                      {card.tags && (
                        <div className="flex gap-2 flex-wrap mb-5">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs font-medium rounded-full px-3 py-1 border ${card.tagCls}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {card.stats && (
                        <div className="flex gap-6 pb-5 border-b border-slate-100 dark:border-border mb-4">
                          {card.stats.map(([val, label]) => (
                            <div key={label} className="min-w-[64px]">
                              <AnimatedNumber
                                value={Number(val)}
                                suffix="+"
                                instant
                                className="block font-display font-bold text-lg text-slate-900 dark:text-white leading-none tabular-nums"
                              />
                              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      <span className={`inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2 transition-all ${card.ctaCls}`}>
                        {t(card.role.cta)}
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
                      </span>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>

      {/* Implementation-prompts pass (Sep 2026), P4 "How we work": placed
          right after the expertise cards per the prompt brief, before Zia
          Studio -- first-time visitors now see what happens after booking
          before they hit the Zia Studio / stats / testimonials content. */}
      <HowWeWorkSection />

      {/* Zia Studio, dedicated section. Was hardcoded to the same near-black
          background in both light and dark mode -- always rendered dark
          regardless of the visitor's theme, which is the bug being fixed
          here. Now uses the site's theme-aware bg-card token like every
          other section (the logo itself already has its own black lockup
          backdrop baked into the PNG, so it still reads as a framed logo
          either way). */}
      <section className="section-compact px-6 bg-card">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/images/zia/zia-logo-full.png"
              alt="Zia Studio"
              width={180}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">{t("homeCreativeAgency")}</p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              {t("homeZiaDesc")}
            </p>
            <a href="#contact" className="btn-green">
              {t("workWithZiaStudio")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogosStrip />

      {/* Toolkit, condensed cross-discipline sample -- the small icon strip
          visitors see first. */}
      <ToolkitStrip />

      {/* Cards Almanac-style project stacks (Dhia's port of the GetLayers.ai
          effect, Sep 2026) -- one for web dev, one for design, placed right
          after the toolkit strip so "here's what I work with" is
          immediately followed by "here's what I built with it". */}
      <ProjectStack
        eyebrow={t("homeWebStackEyebrow")}
        title={t("homeWebStackTitle")}
        subtitle={t("homeWebStackSubtitle")}
        projects={webProjects}
      />
      <ProjectStack
        eyebrow={t("homeDesignStackEyebrow")}
        title={t("homeDesignStackTitle")}
        subtitle={t("homeDesignStackSubtitle")}
        projects={designProjects}
      />

      {/* Implementation-prompts pass (Sep 2026), P5 "Collapse tools/stack
          noise on Home": the full grouped table used to render here, right
          after ToolkitStrip's own condensed preview of the same tools --
          two back-to-back renderings of one dataset, on top of Designer/
          Trainer/Developer each already showing their own filtered slice
          of it (see DesignerPageClient.tsx / TrainerClientPage.tsx /
          DeveloperPageClient.tsx). Removed here; ToolkitStrip above now
          links to /developer for the complete breakdown instead of
          repeating it. */}

      {/* Stats */}
      <StatsSection />

      {/* My Journey, compact credentials snapshot (certs, education,
          experience, civic work) that used to live on the now-removed
          About page. Kept small on purpose: one tabbed card, one category
          visible at a time. */}
      <JourneySection />

      {/* "Which door do you need?" filter (checklist 6.13) -- narrows the
          Service Packages, Testimonials, and Insights/Freebies sections
          below to one pillar at a time. Defaults to showing everything. */}
      <WhichDoorSelector active={pillar} onChange={setPillar} />

      {/* Service Packages */}
      <ServicePackages pillar={pillar} />

      {/* Working with me – radar chart */}
      <ValueRadarChart />

      {/* Featured Testimonials -- when the developer pillar is selected,
          no client testimonial in lib/testimonials.ts is actually about a
          web-dev engagement, so this shows an honest fallback instead of
          either nothing unexplained or a misleading tag match. */}
      <div id="testimonials">
        {pillar === "developer" ? (
          <div className="bg-white dark:bg-background py-12 md:py-16 px-4 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
              {t("whichDoorDevNoTestimonials")}{" "}
              <Link href="/developer" className="text-accent font-semibold hover:underline">
                {t("whichDoorDevSeeWork")}
              </Link>
            </p>
          </div>
        ) : (
          <TestimonialsShowcase
            className="bg-white dark:bg-background py-12 md:py-16"
            {...(pillar
              ? { tag: pillarToTestimonialTag(pillar) }
              : { ids: ["rayen", "ikram", "youssef", "skander", "amir"] })}
            showTicker={false}
          />
        )}
      </div>

      <ResourcesInsightsStrip focus={pillarToInsightsFocus(pillar)} className="bg-section-tint" />

      {/* Newsletter */}
      <NewsletterSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
