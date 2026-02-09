"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

export default function MeetUpProCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-[hsl(var(--zia-green))]/5 to-background dark:from-[hsl(var(--zia-green))]/10 dark:to-background">
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
                  Complete rebranding and integrated marketing campaign that attracted 200+ attendees and generated
                  800+ qualified leads through strategic visual identity and coordinated marketing execution.
                </p>

                <div className="grid md:grid-cols-4 gap-6 pt-8">
                  {[
                    { label: "Attendees Acquired", value: "200+" },
                    { label: "Leads Generated", value: "800+" },
                    { label: "Media Coverage", value: "Radio & TV" },
                    { label: "Timeline", value: "2023" },
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
        <section className="w-full py-20 md:py-32 px-4 md:px-8">
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
                  MeetUp Pro needed a complete brand overhaul and integrated marketing campaign to launch their event
                  series successfully. The organization faced several obstacles:
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "No recognizable brand identity or visual language",
                  "Limited awareness in the target market (young professionals, entrepreneurs)",
                  "Need to differentiate from competing networking events",
                  "Requirement for coordinated marketing across multiple channels",
                  "Ambitious goal to attract 200+ attendees to the first event",
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
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
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
                  <h3 className="text-xl font-semibold mb-3">Brand Strategy & Visual Identity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Led the complete brand positioning and created a modern, professional visual identity that resonates
                    with young professionals and entrepreneurs. Developed logo, color palette, typography system, and brand
                    guidelines.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Marketing Campaign Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed coordinated marketing materials including social media assets, digital ads, print collateral,
                    and outdoor advertising. Ensured visual consistency across all touchpoints for maximum brand impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Campaign Execution & Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Collaborated with marketing team to execute integrated campaign across multiple channels. Monitored
                    performance metrics and optimized creative assets based on engagement data.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-12">Process & Methodology</h2>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Research & Strategy",
                    description:
                      "Analyzed target audience, competitive landscape, and industry trends. Developed brand positioning strategy emphasizing professional networking and business growth.",
                    tools: "Figma, Adobe XD, Research",
                  },
                  {
                    step: "02",
                    title: "Visual Identity Design",
                    description:
                      "Created cohesive brand system including logo, color palette, typography, and iconography. Ensured all elements communicated professionalism and innovation.",
                    tools: "Adobe Illustrator, Photoshop, Figma",
                  },
                  {
                    step: "03",
                    title: "Campaign Asset Creation",
                    description:
                      "Designed social media graphics, digital ads (various formats), email templates, posters, and print materials. All assets followed brand guidelines for consistency.",
                    tools: "Adobe Creative Suite, Canva, Figma",
                  },
                  {
                    step: "04",
                    title: "Multi-Channel Execution",
                    description:
                      "Coordinated campaign across Instagram, Facebook, LinkedIn, email, and traditional media. Managed asset deployment and monitored performance metrics.",
                    tools: "HubSpot, Social Media Analytics, Adobe",
                  },
                  {
                    step: "05",
                    title: "Results & Optimization",
                    description:
                      "Analyzed campaign performance data and optimized creative based on engagement metrics. Scaled successful campaigns and refined underperforming assets.",
                    tools: "Google Analytics, HubSpot, Analytics Dashboard",
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
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
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
                    title: "Brand Identity System",
                    items: [
                      "Logo design (primary + variations)",
                      "Color palette & guidelines",
                      "Typography system",
                      "Icon set & patterns",
                      "Brand guidelines document",
                    ],
                  },
                  {
                    title: "Digital Campaign Assets",
                    items: [
                      "Social media graphics (30+ designs)",
                      "Digital ad variations",
                      "Email templates (5+ designs)",
                      "Website banner designs",
                      "Presentation templates",
                    ],
                  },
                  {
                    title: "Print & Outdoor Materials",
                    items: [
                      "Event posters (A2 & A3)",
                      "Business cards",
                      "Flyers & brochures",
                      "Outdoor advertising (billboard designs)",
                      "Event signage",
                    ],
                  },
                  {
                    title: "Campaign Strategy",
                    items: [
                      "Audience targeting strategy",
                      "Channel strategy & timeline",
                      "Performance metrics framework",
                      "Content calendar",
                      "Optimization recommendations",
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

        {/* Outcomes & Metrics */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-12">Outcomes & Impact</h2>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      metric: "200+",
                      label: "First Event Attendees",
                      description: "Exceeded initial target, establishing strong market presence",
                    },
                    {
                      metric: "800+",
                      label: "Qualified Leads Generated",
                      description: "High-quality prospects from targeted campaign reach",
                    },
                    {
                      metric: "Multi-Channel",
                      label: "Radio & TV Media Coverage",
                      description: "Organic media earned through campaign momentum and visibility",
                    },
                    {
                      metric: "100%",
                      label: "Brand Consistency",
                      description: "All touchpoints aligned to cohesive visual identity",
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
                      "Strong brand differentiation that stood out in competitive market",
                      "Integrated approach across digital and traditional channels",
                      "Data-driven optimization that improved campaign performance over time",
                      "Clear messaging aligned with target audience pain points and aspirations",
                      "Professional execution and attention to detail across all materials",
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
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Key Learnings</h2>

              <div className="space-y-6">
                <div className="p-6 rounded-xl border-l-4 border-[hsl(var(--zia-green))] bg-[hsl(var(--zia-green))]/5 dark:bg-[hsl(var(--zia-green))]/10">
                  <h3 className="font-semibold mb-2">1. Brand Consistency Drives Results</h3>
                  <p className="text-muted-foreground text-sm">
                    Maintaining visual consistency across all touchpoints—from social media to outdoor advertising—created
                    a unified brand experience that increased recognition and trust. This consistency was critical to
                    converting leads into attendees.
                  </p>
                </div>

                <div className="p-6 rounded-xl border-l-4 border-[hsl(var(--zia-green))] bg-[hsl(var(--zia-green))]/5 dark:bg-[hsl(var(--zia-green))]/10">
                  <h3 className="font-semibold mb-2">2. Data-Driven Design Optimization</h3>
                  <p className="text-muted-foreground text-sm">
                    Rather than relying solely on aesthetic preferences, analyzing engagement metrics on different creative
                    variations revealed what actually resonated with the audience. This iterative approach improved
                    campaign performance and lead generation efficiency.
                  </p>
                </div>

                <div className="p-6 rounded-xl border-l-4 border-[hsl(var(--zia-green))] bg-[hsl(var(--zia-green))]/5 dark:bg-[hsl(var(--zia-green))]/10">
                  <h3 className="font-semibold mb-2">3. Integrated Channels Multiply Impact</h3>
                  <p className="text-muted-foreground text-sm">
                    The combination of digital, print, and earned media (radio/TV coverage) created network effects. Each
                    channel reinforced the others, resulting in amplified reach and more qualified leads than any single
                    channel could deliver alone.
                  </p>
                </div>

                <div className="p-6 rounded-xl border-l-4 border-[hsl(var(--zia-green))] bg-[hsl(var(--zia-green))]/5 dark:bg-[hsl(var(--zia-green))]/10">
                  <h3 className="font-semibold mb-2">4. Target Audience Research Informs Everything</h3>
                  <p className="text-muted-foreground text-sm">
                    Deep understanding of the target audience—young professionals and entrepreneurs—shaped every design
                    decision. This audience-centric approach resulted in materials that didn't just look good, but spoke
                    directly to their aspirations and values.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8">
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
                  I help brands stand out through strategic design and integrated marketing campaigns that drive real
                  business results. Let's create something impactful for your project.
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
        <section id="contact-form" className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 uppercase">
                  Let's Collaborate
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">Start Your Design Project</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Whether you need branding, marketing design, or a complete campaign strategy, let's discuss how I can
                  help your business grow.
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
