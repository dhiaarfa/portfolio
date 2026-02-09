"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import TrainerCapabilities from "@/components/trainer-capabilities"
import CertificationsSection from "@/components/certifications-section"
import { useState, useEffect } from "react"

export default function TrainerClientPage() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Empowering the next generation",
      color: "bg-[hsl(var(--zia-green))]",
      textColor: "text-background",
      x: 70,
      y: 130,
      rotation: 2,
    },
    {
      id: 2,
      text: "Impact through education",
      color: "bg-emerald-100",
      textColor: "text-foreground",
      x: 1020,
      y: 180,
      rotation: -2,
    },
  ])

  const journeyMilestones = [
    {
      year: "2022",
      title: "National Certified Trainer from CNFCPP",
      description:
        "Achieved official certification from National Center for Continuing Training and Professional Promotion",
      stats: "Professional Credentials",
    },
    {
      year: "2022",
      title: "Training Pioneer",
      description: "Began delivering comprehensive training through ONGs, social programs, and youth events",
      stats: "Training Launch",
    },
    {
      year: "2019",
      title: "Youth Development Leader & Activist",
      description: "Started youth development and civic engagement initiatives, driving social impact",
      stats: "Advocacy Start",
    },
    {
      year: "2025",
      title: "Certified Trainer & Impact Leader",
      description: "Currently delivering 435+ training hours for 1000+ participants across 15+ organizations",
      stats: "1000+ Trainees",
    },
  ]

  const impactStats = [
    { number: "1000+", label: "Participants Trained", color: "from-[hsl(var(--zia-green))] to-emerald-400" },
    { number: "435+", label: "Training Hours", color: "from-emerald-400 to-teal-400" },
    { number: "15+", label: "Organizations", color: "from-[hsl(var(--zia-green))] to-emerald-400" },
    { number: "7+", label: "Years Experience", color: "from-emerald-400 to-teal-400" },
  ]

  const handleMouseDown = (e, noteId) => {
    // Placeholder function for handleMouseDown
  }

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />

      <main className="w-full pt-20">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center pt-16 md:pt-0 bg-gradient-to-br from-[hsl(var(--zia-green))]/5 via-background to-emerald-50">
          <div className="w-full px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-80px)]">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex gap-3 flex-wrap">
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">1000+ TRAINEES</div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">435+ HOURS</div>
                    <div className="text-xs font-medium tracking-wide text-muted-foreground">CNFCPP CERTIFIED</div>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">Trainer & Educator</h1>
                    <h2 className="text-3xl md:text-4xl font-light text-muted-foreground">
                      Youth Development & Leadership
                    </h2>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground max-w-md">
                    Passionate about empowering the next generation through comprehensive training, social justice
                    advocacy, and practical skill development.
                  </p>

                  <motion.div className="pt-4" whileHover={{ x: 4 }}>
                    <Link
                      href="#journey"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                    >
                      Explore My Journey
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="hidden md:flex h-full min-h-[600px] items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tttt-qeeImhjCNcLxmCrXmbU7ImH2qg0wRJ.png"
                    alt="Mohamed Dhia Arfa - Trainer"
                    className="w-full max-w-md h-auto object-contain border-solid rounded-4xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Sticky Notes - Top Right Corner */}
          <div className="absolute top-4 right-4 space-y-2">
            {notes.map((note) => (
              <motion.div
                key={note.id}
                className={`${note.color} w-40 p-4 rounded-lg shadow-lg text-sm font-medium text-foreground/80 select-none`}
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: note.rotation }}
                transition={{ duration: 0.6, delay: note.id * 0.1 }}
              >
                {note.text}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Metrics Grid - Moved earlier for emphasis */}
        <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Impact Metrics</p>
                <h2 className="text-4xl md:text-5xl font-bold">Measurable Results</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {impactStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className={`p-8 rounded-3xl bg-gradient-to-br ${stat.color} text-white text-center space-y-2 border border-white/20`}
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-4xl md:text-5xl font-bold">{stat.number}</p>
                    <p className="text-sm font-medium opacity-90">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Evolution As An Educator Timeline - After impact metrics */}
        <section id="journey" className="w-full py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  My Training Journey
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">Evolution As An Educator</h2>
                <p className="text-muted-foreground text-lg max-w-3xl">
                  From my first certification to leading a movement of 934+ trainees, my journey has been defined by
                  continuous learning, passion for empowerment, and commitment to social change.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-8">
                {journeyMilestones.map((milestone, i) => (
                  <motion.div
                    key={i}
                    className="group relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid md:grid-cols-3 gap-8 items-start p-8 border border-border rounded-3xl hover:border-foreground/30 transition-all hover:bg-card">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">YEAR</p>
                        <h3 className="text-4xl font-bold">{milestone.year}</h3>
                      </div>
                      <div className="space-y-4 md:col-span-2">
                        <h4 className="text-2xl font-bold">{milestone.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                          {milestone.stats}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trainer Capabilities */}
        <TrainerCapabilities />

        {/* Certifications Section - Imported component */}
        <CertificationsSection />

        {/* Contact Form Section */}
        <section id="contact-form" className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Request Training</p>
                <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Through Learning?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Tell me about your training needs, goals, and team size. Let's create an impactful learning experience.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
