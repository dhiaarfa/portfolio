"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "MeetUp Pro",
      subtitle: "Brand & Marketing Campaign",
      description:
        "Complete rebranding and integrated marketing campaign that attracted 200+ attendees and generated 800+ qualified leads.",
      metrics: ["200+ Attendees", "800+ Leads", "Radio & TV Coverage"],
      category: "Design",
      href: "/case-study/meetup-pro",
      color: "from-[hsl(var(--zia-green))] to-emerald-500",
      year: "2023",
    },
    {
      id: 2,
      title: "CRIT Tunisie",
      subtitle: "UI/UX & Web Development",
      description:
        "Designed and built responsive web interfaces with focus on user experience. Optimized performance and accessibility across all devices.",
      metrics: ["100% Responsive", "Mobile-First", "Performance Optimized"],
      category: "Development",
      href: "#coming-soon",
      color: "from-[hsl(var(--zia-green))] to-emerald-500",
      year: "2025",
    },
    {
      id: 3,
      title: "Youth Leadership Training",
      subtitle: "Education & Trainer Impact",
      description:
        "Delivered comprehensive training programs to 934+ participants across 61 events, focusing on soft skills and leadership development.",
      metrics: ["934+ Trainees", "381+ Hours", "61 Events"],
      category: "Training",
      href: "#coming-soon",
      color: "from-green-500 to-teal-500",
      year: "Ongoing",
    },
  ]

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
              className="text-center space-y-6"
            >
              <div>
                <p className="text-xs font-medium tracking-widest text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 uppercase mb-3">
                  Case Studies
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Real Projects.{" "}
                  <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 bg-clip-text text-transparent">
                    Real Results.
                  </span>
                </h1>
              </div>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore how I've helped clients achieve their goals through strategic design, web development, and
                impactful training programs. Each case study demonstrates a unique approach to solving real business
                challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full"
                >
                  <Link href={study.href} className="h-full block">
                    <div className="h-full p-8 rounded-2xl border border-border hover:border-foreground/30 transition-all duration-300 bg-card hover:bg-card hover:shadow-lg group-hover:shadow-xl flex flex-col">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.color} text-white`}
                        >
                          {study.category}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">{study.year}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-grow space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-[hsl(var(--zia-green))] dark:group-hover:text-[hsl(var(--zia-green))]/80 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2">{study.subtitle}</p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{study.description}</p>
                      </div>

                      {/* Metrics */}
                      <div className="pt-6 border-t border-border">
                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric, j) => (
                            <div key={j} className="text-center">
                              <p className="text-xs text-muted-foreground truncate">{metric}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-6">
                        <div className="inline-flex items-center gap-2 text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 font-semibold group-hover:gap-4 transition-all">
                          Read Case Study
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold">What You'll Learn</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each case study walks through the challenge, my approach, and measurable outcomes. See how strategic
                thinking and execution drive real business impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 pt-8"
            >
              {[
                { title: "The Challenge", description: "Real business problems and market context" },
                { title: "My Approach", description: "Strategic process and methodology used" },
                { title: "The Results", description: "Measurable outcomes and business impact" },
              ].map((item, i) => (
                <div key={i} className="space-y-3 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Have a Project in Mind?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you need design, development, or training, I'd love to discuss how I can help your business
                succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link
                href="/designer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--zia-green))] text-background font-semibold rounded-lg hover:bg-[hsl(var(--zia-green))]/90 transition-colors"
              >
                View Design Work
              </Link>
              <Link
                href="/developer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/30 font-semibold rounded-lg hover:bg-foreground/5 transition-colors"
              >
                View Development Work
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
