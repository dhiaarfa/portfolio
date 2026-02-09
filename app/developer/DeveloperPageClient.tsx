"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"
import ContactForm from "@/components/contact-form" // Import ContactForm component

export default function DeveloperPageClient() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Learning by shipping",
      color: "bg-[hsl(var(--zia-green))]",
      textColor: "text-background",
      x: 80,
      y: 200,
      rotation: 2,
    },
    {
      id: 2,
      text: "Real projects drive growth",
      color: "bg-[hsl(var(--zia-green))]",
      textColor: "text-background",
      x: 1000,
      y: 280,
      rotation: -2,
    },
  ])



  const techStack = [
    { category: "Frontend", techs: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
    { category: "Backend", techs: ["PHP", "Symfony", "SQL", "Python"] },
    { category: "Tools & Learning", techs: ["Angular", "Jira", "GitHub", "VS Code"] },
  ]

  const projects = [
    {
      role: "Web Developer",
      company: "CRIT Tunisie",
      period: "Sep 2025 – Dec 2025",
      tech: "React / Next.js",
      description: "Developing responsive web interfaces, optimizing user experience, shipping features to production",
      icon: "🚀",
    },
    {
      role: "Marketing & Web Strategy",
      company: "Speranza Cafe & Resto",
      period: "Jan 2025 – Jun 2025",
      tech: "Web & Digital Marketing",
      description: "Managed web presence, digital marketing campaigns, and data-driven strategy execution",
      icon: "📱",
    },
    {
      role: "Full-Stack Development",
      company: "Self-Directed & Open Source",
      period: "2023 – Present",
      tech: "React, Next.js, Node.js, SQL",
      description: "Building personal projects, contributing to real applications, mastering frontend and backend fundamentals",
      icon: "📚",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background relative">
      <Navbar />

      {/* Sticky Notes - Top Right */}
      <div className="absolute top-24 right-4 space-y-2 pointer-events-none">
        {notes.map((note) => (
          <motion.div
            key={note.id}
            className={`${note.color} p-3 rounded-lg shadow-lg max-w-40 text-xs font-bold select-none border border-white/20`}
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: note.rotation }}
            transition={{ duration: 0.6, delay: note.id * 0.1 }}
          >
            <span className={note.textColor}>{note.text}</span>
          </motion.div>
        ))}
      </div>

      <main className="w-full pt-20">
        {/* Hero Section */}
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-16 md:py-0 px-4 md:px-8 bg-gradient-to-br from-[hsl(var(--zia-green))]/5 via-background to-emerald-50">
          <div className="w-full px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-120px)]">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex gap-3 flex-wrap">
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">WEB DEVELOPER</div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">BUILDER</div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">CONTINUOUS LEARNER</div>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                      Web Developer{" "}
                      <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        Learning by Building
                      </span>
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-light text-muted-foreground">
                      Turning ideas and designs into functional, scalable web experiences.
                    </h2>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    I specialize in React and Next.js, building UI-focused web applications with a strong design-to-code foundation. My approach bridges design and development transforming concepts into responsive, performant solutions. Currently, I&apos;m continuously mastering full-stack fundamentals through real-world projects.
                  </p>

                  <motion.div className="pt-4 flex gap-4 flex-wrap">
                    <a
                      href="https://github.com/dhiaarfa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-background rounded-lg font-medium hover:from-[hsl(var(--zia-green))]/90 hover:to-emerald-600 transition-colors"
                    >
                      View GitHub
                    </a>
                    <motion.button
                      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-foreground/5 transition-colors"
                    >
                      Discuss a Project
                    </motion.button>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex justify-center relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative w-full max-w-sm">
                    <div className="aspect-square rounded-2xl overflow-hidden border-2 border-foreground/10 shadow-lg bg-white dark:bg-slate-900">
                      <Image
                        src="/images/photo-dhia-282-29.png"
                        alt="Mohamed Dhia Arfa - Web Developer"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>


        </section>

        {/* Experience Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Experience</p>
                <h2 className="text-4xl md:text-5xl font-bold">Building & Growing</h2>
                <p className="text-muted-foreground text-lg">Production experience with continuous skill development</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    className="p-8 rounded-3xl border-2 border-border hover:border-foreground/30 transition-all hover:bg-background space-y-4"
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl">{project.icon}</div>
                    <h3 className="text-xl font-bold">{project.role}</h3>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[hsl(var(--zia-green))]">{project.company}</p>
                      <p className="text-xs text-muted-foreground">{project.period}</p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="pt-2">
                        <span className="text-xs font-medium px-3 py-1 bg-[hsl(var(--zia-green))]/10 text-[hsl(var(--zia-green))] rounded-full">
                          {project.tech}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest opacity-70 uppercase">Technical Stack</p>
                <h2 className="text-4xl md:text-5xl font-bold">Languages & Tools</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {techStack.map((group, i) => (
                  <motion.div
                    key={i}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold">{group.category}</h3>
                    <ul className="space-y-2">
                      {group.techs.map((tech, j) => (
                        <li key={j} className="text-sm opacity-90 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-background rounded-full"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Design-to-Development Bridge */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Design-to-Development Bridge</h2>
                <p className="text-lg text-muted-foreground">
                  With a background in graphic design and UI/UX, I translate design concepts directly into clean, maintainable code. This bridges the gap between vision and implementation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-start gap-3">
                    <span className="text-[hsl(var(--zia-green))] text-2xl leading-none">→</span>
                    <span>UI/UX Focused Components</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building responsive interfaces that translate design systems into pixel-perfect React components with intuitive interactions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-start gap-3">
                    <span className="text-[hsl(var(--zia-green))] text-2xl leading-none">→</span>
                    <span>Scalable Architecture</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designing modular, reusable components that maintain consistency and scale across the entire application.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-start gap-3">
                    <span className="text-[hsl(var(--zia-green))] text-2xl leading-none">→</span>
                    <span>Performance Optimized</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating fast, efficient interfaces with attention to performance metrics and user experience quality.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-start gap-3">
                    <span className="text-[hsl(var(--zia-green))] text-2xl leading-none">→</span>
                    <span>Rapid Prototyping</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transforming wireframes and designs into working prototypes quickly, enabling faster iteration and feedback cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Can Build Today Section */}
        <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Capabilities</p>
                <h2 className="text-4xl md:text-5xl font-bold">What I Can Build Today</h2>
                <p className="text-muted-foreground text-lg">Production-ready solutions across the modern web stack</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  {
                    icon: "📐",
                    title: "Responsive Web Interfaces",
                    description: "Modern layouts optimized for desktop and mobile with performance in mind",
                  },
                  {
                    icon: "🧩",
                    title: "React Component Architecture",
                    description: "Reusable, maintainable UI components with clean, modular code structure",
                  },
                  {
                    icon: "🛣️",
                    title: "Next.js Pages & Routing",
                    description: "App Router, nested layouts, and dynamic routes for scalable applications",
                  },
                  {
                    icon: "🔌",
                    title: "API Integration",
                    description: "Consuming REST APIs, handling async data, and state management",
                  },
                  {
                    icon: "✨",
                    title: "Design-to-Code Translation",
                    description: "Converting UI/UX designs into accurate, functional, pixel-perfect code",
                  },
                ].map((capability, i) => (
                  <motion.div
                    key={i}
                    className="p-6 rounded-2xl border border-border bg-background hover:border-[hsl(var(--zia-green))]/50 hover:bg-[hsl(var(--zia-green))]/5 transition-all space-y-4"
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl">{capability.icon}</div>
                    <h3 className="text-lg font-bold leading-tight">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Looking for a developer who ships quality code? Let's discuss your project and how I can contribute.
            </p>

            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <motion.button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-500 text-background font-semibold rounded-lg hover:from-[hsl(var(--zia-green))]/90 hover:to-emerald-600 transition-colors"
              >
                Discuss A Project
              </motion.button>
              <a
                href="https://www.linkedin.com/in/dhia-/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/30 font-semibold rounded-lg hover:bg-foreground/5 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="w-full py-12 md:py-20 px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Let's Talk</p>
                <h2 className="text-4xl md:text-5xl font-bold">Ready for a Web Project?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Share your project details, timeline, and vision. I'll respond within 24 hours with next steps.
                </p>
              </div>

              <ContactForm /> {/* ContactForm component is now declared */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
