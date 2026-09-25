"use client"

import { Link } from "next-view-transitions"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

// Content here is kept in sync with the verified MeetUp Pro facts in
// lib/work-content.ts / lib/work.ts (role, timeline, tools, outcome). This
// page previously carried invented metrics (attendee/lead counts, radio &
// TV coverage, tools never used on this project) that contradicted the
// fact-checked copy on /work/meetup-pro, which this page is linked from as
// the "detailed case study". See checklist for the audit note.
export default function MeetUpProCaseStudyBody() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="w-full section-compact px-4 md:px-8 bg-gradient-to-b from-[hsl(var(--zia-green))]/5 to-background dark:from-[hsl(var(--zia-green))]/10 dark:to-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Link
                href="/designer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Design Work
              </Link>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium tracking-widest text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 uppercase mb-3">
                    Case Study
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    MeetUp Pro{" "}
                    <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 bg-clip-text text-transparent">
                      Brand & Campaign
                    </span>
                  </h1>
                </div>

                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  Event identity, social campaign assets, and on-site promotional design for a youth networking
                  event that needed to sell tickets through social before anyone saw the venue — resulting in
                  sold-out attendance and a template system reused across follow-up editions.
                </p>

                <div className="grid md:grid-cols-4 gap-6 pt-8">
                  {[
                    { label: "Attendance", value: "Sold Out" },
                    { label: "Timeline", value: "6 Weeks" },
                    { label: "Format", value: "Event + Social" },
                    { label: "Legacy", value: "Reused Across Events" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="space-y-2"
                    >
                      <p className="text-sm font-medium text-muted-foreground uppercase">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Context & Challenge */}
        <section className="w-full section-compact px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  MeetUp Pro 1.0 needed to sell tickets through social before anyone saw the venue. Visuals had to
                  feel energetic, credible, and shareable, under a tight production timeline:
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "No existing visual identity for a first-time event series",
                  "Content needed to scale across speakers, schedules, and countdown posts",
                  "Assets had to feel energetic and credible enough to sell tickets on social alone",
                  "Tight timeline against a speaker lineup that kept growing",
                  "The team needed to keep publishing daily without waiting on the designer",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start"
                  >
                    <span className="text-[hsl(var(--zia-green))] font-bold mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* My Role */}
        <section className="w-full section-compact px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">My Role</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Campaign Identity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built a campaign identity around bold type, high contrast, and repeatable layouts, so every
                    asset was instantly recognizable as MeetUp Pro across the countdown.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Social Templates</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed speaker cards, countdown stories, and registration CTAs that all share one grid, so
                    new content stays on-brand without a fresh layout every time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Production System</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Standardized photography slots so the team could swap in new speaker faces themselves without
                    breaking alignment — the system had to outlast my own involvement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="w-full section-compact px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-12">Process</h2>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Brief & Constraints",
                    description:
                      "Event branding, social campaign assets, and on-site promotional design, against a tight timeline that had to scale across speakers, schedules, and countdown posts.",
                    tools: "Illustrator, Photoshop",
                  },
                  {
                    step: "02",
                    title: "Campaign Identity",
                    description:
                      "Bold type, high contrast, and a repeatable grid so the identity would read clearly at social sizes and stay legible in a crowded feed.",
                    tools: "Illustrator, Photoshop",
                  },
                  {
                    step: "03",
                    title: "Template Production",
                    description:
                      "Speaker cards, countdown stories, and registration CTAs built on one shared grid, with standardized photo slots for fast turnaround.",
                    tools: "Illustrator, Canva",
                  },
                  {
                    step: "04",
                    title: "Rollout & Reuse",
                    description:
                      "Handed the templates to the team so they could publish daily on their own; the same system was reused for follow-up editions instead of starting over.",
                    tools: "Canva",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-8 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[hsl(var(--zia-green))]/20 text-[hsl(var(--zia-green))] font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow space-y-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      <p className="text-sm text-muted-foreground italic">Tools: {item.tools}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="w-full section-compact px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-12">Key Deliverables</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Campaign Identity",
                    items: [
                      "Bold type & high-contrast color system",
                      "Repeatable grid for all campaign assets",
                      "Standardized photo-slot template",
                    ],
                  },
                  {
                    title: "Social Templates",
                    items: [
                      "Speaker card templates",
                      "Countdown story templates",
                      "Registration CTA templates",
                    ],
                  },
                  {
                    title: "On-Site Promotion",
                    items: ["On-site event branding assets", "Promotional design for the venue"],
                  },
                  {
                    title: "Handoff",
                    items: [
                      "Editable template files for the team",
                      "System reused for follow-up editions",
                    ],
                  },
                ].map((deliverable, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4 p-6 rounded-2xl border border-border hover:border-[hsl(var(--zia-green))]/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold">{deliverable.title}</h3>
                    <ul className="space-y-2">
                      {deliverable.items.map((item, j) => (
                        <li key={j} className="flex gap-2 items-start text-sm text-muted-foreground">
                          <span className="text-[hsl(var(--zia-green))] font-bold mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Outcomes & Impact */}
        <section className="w-full section-compact px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-12">Outcome</h2>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      metric: "Sold Out",
                      label: "First Event Attendance",
                      description: "Tickets sold through social before anyone saw the venue",
                    },
                    {
                      metric: "Reused",
                      label: "Template System",
                      description: "Visuals reused for follow-up editions, not one-off exports",
                    },
                    {
                      metric: "One Grid",
                      label: "Repeatable Layout",
                      description: "Speaker cards, countdowns, and CTAs all share one system",
                    },
                    {
                      metric: "Self-Serve",
                      label: "Team Independence",
                      description: "The team could publish daily without waiting on the designer",
                    },
                  ].map((outcome, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl border border-border bg-gradient-to-br from-[hsl(var(--zia-green))]/5 to-emerald-50/50 dark:from-[hsl(var(--zia-green))]/10 dark:to-emerald-950/20"
                    >
                      <p className="text-4xl font-bold text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 mb-2">{outcome.metric}</p>
                      <p className="text-lg font-semibold mb-2">{outcome.label}</p>
                      <p className="text-sm text-muted-foreground">{outcome.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-8 rounded-2xl border border-border bg-gradient-to-r from-[hsl(var(--zia-green))]/10 to-emerald-500/10">
                  <h3 className="text-xl font-semibold mb-4">Key Success Factors</h3>
                  <ul className="space-y-3">
                    {[
                      "One flexible template family instead of bespoke layouts per speaker or session",
                      "Bold, high-contrast visuals designed to be scannable and shareable on social",
                      "Standardized photo slots that kept the grid intact as the speaker lineup grew",
                      "A system built to outlast the designer, so the team could publish independently",
                    ].map((factor, i) => (
                      <li key={i} className="flex gap-3 items-start text-muted-foreground">
                        <span className="text-[hsl(var(--zia-green))] font-bold mt-1">→</span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="w-full section-compact px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Trade-Off & What I&apos;d Do Differently</h2>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border-l-4 border-[hsl(var(--zia-green))] bg-[hsl(var(--zia-green))]/5 dark:bg-[hsl(var(--zia-green))]/10">
                  <h3 className="font-semibold mb-2">One Template Family, Not Bespoke Layouts</h3>
                  <p className="text-muted-foreground text-sm">
                    With a tight timeline and a growing speaker lineup, I built one flexible template family
                    rather than bespoke layouts per speaker or session. That kept the team able to publish daily
                    without waiting on me, but it meant some visual repetition across the countdown series that a
                    fully custom approach would have avoided.
                  </p>
                </div>

                <div className="p-6 rounded-xl border-l-4 border-[hsl(var(--zia-green))] bg-[hsl(var(--zia-green))]/5 dark:bg-[hsl(var(--zia-green))]/10">
                  <h3 className="font-semibold mb-2">What I&apos;d Do Differently</h3>
                  <p className="text-muted-foreground text-sm">
                    With more lead time, I&apos;d design two or three template variants instead of one, so the feed
                    reads as consistent without individual posts starting to look interchangeable by the third
                    week of the countdown.
                  </p>
                </div>

                <div className="p-6 rounded-xl border-l-4 border-[hsl(var(--zia-green))] bg-[hsl(var(--zia-green))]/5 dark:bg-[hsl(var(--zia-green))]/10">
                  <h3 className="font-semibold mb-2">Standardized Slots Held the Grid Together</h3>
                  <p className="text-muted-foreground text-sm">
                    Photography slots were standardized so the team could swap faces without breaking alignment —
                    the small constraint that made daily, self-serve publishing possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full section-compact px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to Elevate Your{" "}
                  <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 bg-clip-text text-transparent">
                    Brand?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  I help brands stand out through strategic design and integrated marketing campaigns that drive
                  real results. Let&apos;s create something impactful for your project.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <motion.button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(var(--zia-green))] text-background font-semibold rounded-lg hover:bg-[hsl(var(--zia-green))]/90 transition-colors"
                >
                  Start Your Project
                </motion.button>
                <a
                  href="https://behance.net/dhiaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/30 font-semibold rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  View More Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="w-full section-compact px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 uppercase">
                  Let&apos;s Collaborate
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">Start Your Design Project</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Whether you need branding, marketing design, or a complete campaign strategy, let&apos;s discuss
                  how I can help your business grow.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
