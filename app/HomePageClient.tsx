"use client"

import { Link } from "next-view-transitions"
import { ArrowRight, BookOpen, Palette, Users, Code, Code2, Calendar, Download, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar-new"
import { WhatsAppIcon } from "@/lib/brand-icon"
import Footer from "@/components/footer"
import { siteConfig } from "@/lib/site-config"
import { AnimatedNumber } from "@/components/ui/animated-number"
import ClientLogosStrip from "@/components/client-logos-strip"
import HeroAnnotatedPortrait from "@/components/hero-annotated-portrait"
import HowWeWorkSection from "@/components/how-we-work-section"
import WorkList from "@/components/sections/WorkList"
import { selectedWork, localizeProject } from "@/data/projects"
import { useLanguage } from "@/components/language-provider"
import { FadeUp } from "@/components/ui/motion"
import HomeQuotes from "@/components/home-quotes"

/** Master roadmap (Oct 2026), 1.2 "Freeze rotating role line": this used
 *  to cycle one role at a time every 2.8s ("A Creative Graphic Designer"
 *  -> "Certified Trainer" -> ...), so a visitor only ever saw a third of
 *  the offer and had to wait to read the rest. Now one static line built
 *  from the same three already-translated role strings. */
function StaticRole() {
  const { t } = useLanguage()
  const roles = [t("homeRotatingDesigner"), t("homeRotatingTrainer"), t("homeRotatingDeveloper")]
  // Each role is a no-wrap unit with its "·" attached to the front, so on
  // narrow screens lines break between whole roles and a separator never
  // dangles at the end of a line.
  return (
    // font-accent-italic goes on each span, not the <p>: a global span rule
    // in globals.css resets span font-family, so it won't inherit.
    // Off-white, not green (inspiration brief, step 1): the primary button
    // is the hero's only green element.
    <p className="flex flex-wrap gap-x-2 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200">
      {roles.map((role, i) => (
        <span key={role} className="whitespace-nowrap font-accent-italic">
          {i > 0 && <span aria-hidden className="me-2">·</span>}
          {role}
        </span>
      ))}
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

export default function HomePageClient() {
  const { t, language } = useLanguage()
  const roles = [
    {
      title: "Trainer",
      slug: "trainer",
      icon: BookOpen,
      stats: [t("roleStatTrainer1"), t("roleStatTrainer2"), t("roleStatTrainer3")],
      descriptionKey: "roleTrainerDescription",
      cta: "exploreTraining",
    },
    {
      title: "Visual Designer",
      slug: "designer",
      icon: Palette,
      stats: [t("roleStatDesigner1"), t("roleStatDesigner2"), t("roleStatDesigner3")],
      descriptionKey: "roleDesignerDescription",
      cta: "viewDesignWork",
    },
    {
      title: "Web Developer",
      slug: "developer",
      icon: Code,
      stats: [t("roleStatDeveloper1"), t("roleStatDeveloper2"), t("roleStatDeveloper3")],
      descriptionKey: "roleDeveloperDescription",
      cta: "seeMyProjects",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main id="main-content">
      {/* Hero, full-bleed blended portrait background (Oct 2026) */}
      <HeroAnnotatedPortrait className="!pb-10" showCta={false}>
        {/* RTL fix (Oct 2026 code review): the full-bleed photo is pinned
            to the physical right via `object-position`/masks in
            hero-annotated-portrait.tsx, which (unlike the old CSS Grid
            layout) doesn't auto-mirror under dir="rtl". Without an
            explicit `mr-auto`, this column's default block-start edge
            flips to the physical right in Arabic, landing the text and
            CTA buttons directly on top of the subject's face. `mr-auto`
            is a physical margin (ignores `dir`), so it keeps this column
            pinned to the physical left -- opposite the photo -- in every
            language, with no visual change in LTR (where it was already
            flush left by default). In Arabic the lines are right-aligned,
            so they end at this column's right edge: on desktop the column
            is narrower there (rtl:lg:max-w-lg) so the text stops before
            the photo instead of running into the face. */}
        <div className="max-w-2xl mr-auto rtl:lg:max-w-lg">
          {/* 3-way audit synthesis (Sep 2026): promotes the existing,
              already-translated positioning tagline into the literal <h1>
              (previously just the name greeting), so the page's core
              positioning statement is the actual top heading rather than a
              paragraph below it. The greeting moves to a small kicker line
              above; the hover-glow treatment Dhia asked for on the tagline
              carries over onto the h1 itself instead of being dropped.
              Hero text pass (Oct 2026): colors here are theme-aware `dark:`
              pairs again, not hardcoded light-on-dark -- the hero section
              itself now follows the site theme (light bg/dark text in
              light mode, dark bg/light text in dark mode) instead of
              forcing dark regardless of theme. */}
          <span className="sticker mb-3">{language === "fr" ? "Disponible pour projets" : language === "ar" ? "متاح لمشاريع جديدة" : "Open for new projects"}</span>
          <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">
            {t("helloGreeting")}{" "}
            <span className="text-slate-900 dark:text-white font-semibold">{language === "ar" ? "ضياء" : "Dhia"}</span>
          </p>
          <h1 className="h1-hero-tagline text-slate-900 dark:text-white mb-2">
            {/* Dhia's ask: a real line break after "build." rather than
                whatever the browser's own wrap happens to land on. */}
            {t("homeHeroTaglinePart1")}
            <br />
            {/* Two-tone headline (inspiration brief, step 2): the claim in
                full strength, the context muted, so the eye reads it first. */}
            <span className="text-slate-500 dark:text-slate-400">{t("homeHeroTaglinePart2")}</span>
          </h1>
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
              not just the footer's. (The comment had survived a later
              refactor that dropped the line itself; restored Oct 2026.) */}
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{t("footerCallShort")}</p>

          {/* Proof chips (inspiration brief, step 4): three facts inside the
              first screen; the full stats strip further down stays. */}
          <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">
            {["heroProof1", "heroProof2", "heroProof3"].map((key) => t(key)).join(" · ")}
          </p>


          <span className="desk-chip" style={{ top: "6%", right: "4%", rotate: "5deg" }} aria-hidden>(01) Figma</span>
          <span className="desk-chip" style={{ top: "38%", right: "-2%", rotate: "-4deg" }} aria-hidden>(02) Workshops</span>
          <span className="desk-chip" style={{ bottom: "12%", right: "8%", rotate: "3deg" }} aria-hidden>(03) Next.js</span>
        </div>
      </HeroAnnotatedPortrait>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) =>
            ["Brand identity", "Youth training", "Next.js sites", "UI/UX", "Workshops", "Motion", "Arabic · French · English", "Print", "Web apps", "Facilitation"].map((w) => (
              <span key={`${k}-${w}`} className="marquee-item">{w}</span>
            ))
          )}
        </div>
      </div>

      {/* My Expertise Bento */}
      <section id="expertise" className="bg-section-tint section-compact px-4">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="font-display text-[clamp(28px,4vw,46px)] text-slate-900 dark:text-white leading-tight mb-3 max-w-3xl">
              {t("homeExpertiseLine1")} {t("homeExpertiseLine2")}
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mb-10 leading-relaxed">
              {t("homeExpertiseDesc")}
            </p>
          </FadeUp>

          {/* Three role cards, redesigned as one coherent family instead of
              three differently-styled rectangles. Charte-graphique pass (Oct
              2026): dropped the per-card pink/amber/sky "discipline color"
              and the low-opacity photo watermark -- Dhia's actual brand
              identity is the single green gradient (sourced from his own
              hero photo, see .bg-accent-gradient/.gradient-accent in
              globals.css), not a rainbow per card, and the faint photo
              behind the text read as visual clutter rather than a feature.
              Every card now shares one icon treatment, one dot-grid-textured
              surface, and one accent color -- distinguished only by its own
              title/description/stats, exactly like the rest of the site. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-3">
            {[
              {
                role: roles[1],
                icon: Palette,
                eyebrowKey: "design",
                title: "Zia Studio",
                tags: language === "fr" ? ["Identité de marque", "UI/UX", "Motion", "Print"] : language === "ar" ? ["هوية بصرية", "UI/UX", "موشن", "مطبوعات"] : ["Brand Identity", "UI/UX", "Motion", "Print"],
                flagship: "Speranza Café, full brand identity",
              },
              {
                role: roles[0],
                icon: Users,
                eyebrowKey: "training",
                title: t("pillarYouthDevelopment"),
                stats: [
                  [siteConfig.stats.participants, t("statLabelParticipants")],
                  [siteConfig.stats.trainingHours, t("statLabelHours")],
                  [siteConfig.stats.facilitationHours, t("statLabelFacilitationHrs")],
                ],
                // Was "1st place", contradicting the detailed record
                // (dohaEventDesc in all 3 languages: 2nd place team, 11
                // selected from 200+). Not rendered today, kept accurate.
                flagship: "IOM Youth Hackathon, Doha, 2nd place team",
              },
              {
                role: roles[2],
                icon: Code2,
                eyebrowKey: "webDevelopment",
                title: t("pillarFullStackDevelopment"),
                // Master roadmap 2.4: outcome chips here; the framework
                // list (React/Next.js/Tailwind/TypeScript) lives on /developer.
                tags: language === "fr" ? ["Sites web", "Applications web", "Responsive", "Rapide"] : language === "ar" ? ["مواقع ويب", "تطبيقات ويب", "متجاوب", "سريع"] : ["Websites", "Web apps", "Responsive", "Fast"],
                flagship: "DigiMyTech Talent Hub, graduation project",
              },
            ].map(
              (card, idx) =>
                card.role && (
                  <Link
                    key={card.role.slug}
                    href={`/${card.role.slug}`}
                    className={`tactile group flex flex-col p-6 md:p-7 min-h-[300px] ${["block-lime", "block-sky", "block-ink"][idx]}`}
                  >
                    <span className="font-display text-5xl md:text-6xl leading-none" aria-hidden>({idx + 1})</span>
                    <h3 className="title-lg font-display text-2xl md:text-[1.75rem] leading-tight mt-6">
                      {card.title}
                    </h3>
                    <p className="muted text-base leading-relaxed mt-2">
                      {t(card.role.descriptionKey)}
                    </p>
                    <p className="muted mt-3 text-sm">
                      {card.stats
                        ? card.stats.map(([val, label]) => `${Number(val).toLocaleString("en-US")}+ ${label}`).join(" · ")
                        : card.tags?.join(" · ")}
                    </p>
                    <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4">
                      {t(card.role.cta)}
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5 rtl:rotate-180 rtl:group-hover:-translate-x-1.5" />
                    </span>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>

      {/* Cards Almanac-style project stacks (Dhia's port of the GetLayers.ai
          effect, Sep 2026) -- one for web dev, one for design, placed right
          after the toolkit strip so "here's what I work with" is
          immediately followed by "here's what I built with it". */}
      {/* Master roadmap 2.1 (Oct 2026): the two stacks (web, then design)
          are merged into one mixed "Selected work" stack -- see
          selectedWork in data/projects.ts. The link row underneath gives
          each track, training included, a next step from the proof. */}
      <section className="px-4 py-14 md:py-20">
        <div className="max-w-5xl mx-auto tactile block-ink p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-6">
          {[
            [siteConfig.stats.participants, "statParticipantsTrained"],
            [siteConfig.stats.trainingHours, "statTrainingHoursLabel"],
            [siteConfig.stats.designProjects, "statDesignProjectsLabel"],
            [siteConfig.stats.yearsExperience, "statYearsExperienceLabel"],
          ].map(([val, key]) => (
            <div key={String(key)}>
              <div className="font-display text-4xl sm:text-5xl md:text-6xl leading-none" style={{ color: "var(--block-lime)" }}>
                <AnimatedNumber value={Number(val)} suffix="+" instant />
              </div>
              <p className="muted mt-3 text-sm">{t(String(key))}</p>
            </div>
          ))}
        </div>
      </section>

      <WorkList
        title={t("homeSelectedWorkTitle")}
        subtitle={t("homeSelectedWorkSubtitle")}
        projects={selectedWork.map((p) => localizeProject(p, language))}
      />
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 pb-12 text-sm font-semibold">
        {[
          { href: "/designer", key: "viewDesignWork" },
          { href: "/trainer", key: "exploreTraining" },
          { href: "/developer", key: "seeMyProjects" },
        ].map(({ href, key }) => (
          <Link key={href} href={href} className="group inline-flex items-center gap-1.5 text-accent hover:underline">
            {t(key)}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
          </Link>
        ))}
      </nav>

      {/* Nov 2026 audit: Home is six blocks -- hero, three doors, selected
          work, organisations, recommendations, process. Stats, credentials,
          tools, the service filter, articles and the newsletter repeated
          what the role pages and /about already say; they live there now. */}
      {/* Client Logos */}
      <ClientLogosStrip />

      <HomeQuotes ids={["yassine", "youssef", "amir"]} />

      {/* Implementation-prompts pass (Sep 2026), P4 "How we work": placed
          right after the expertise cards per the prompt brief, before Zia
          Studio -- first-time visitors now see what happens after booking
          before they hit the Zia Studio / stats / testimonials content. */}
      <HowWeWorkSection />

      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto tactile block-lime p-8 md:p-14 text-center">
          <p className="paren mb-3">{language === "fr" ? "On se parle ?" : language === "ar" ? "لنتحدث؟" : "Let's talk"}</p>
          <h2 className="font-display text-[clamp(30px,5vw,56px)] leading-tight">
            {language === "fr" ? "Envie de construire quelque chose ensemble ?" : language === "ar" ? "هل نبني شيئاً معاً؟" : "Ready to build something together?"}
          </h2>
          <p className="muted mt-3 text-base md:text-lg">
            {language === "fr" ? "Je serais ravi d'en discuter. Un appel de 30 minutes, sans engagement." : language === "ar" ? "يسعدني أن نتحدث. مكالمة 30 دقيقة، بلا التزام." : "I'd love to hear about it. A 30-minute call, no commitment."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-green !bg-[#14140f] !text-[#f4f4ef]">
              <Calendar className="w-4 h-4" />{t("bookFreeConsultation")}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="btn-outline">{siteConfig.email}</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">LinkedIn</a>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
