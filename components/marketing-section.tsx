"use client"

import { motion } from "framer-motion"
import { TrendingUp, Share2, Megaphone, Zap, Target, PenTool, Users, BarChart3 } from "lucide-react"

export default function MarketingSection() {
  const experiences = [
    {
      role: "Marketing Manager",
      company: "Speranza Café & Resto",
      year: "2025",
      metrics: ["+40%", "Social Media Engagement"],
      description: "Increased social media engagement by 40%. Managed daily content & promotions.",
      icon: TrendingUp,
    },
    {
      role: "Marketing Manager",
      company: "CRIT Tunisie",
      year: "2025",
      metrics: ["+80%", "User Experience"],
      description: "Managed digital presence and campaigns. Improved user experience and branding.",
      icon: Megaphone,
    },
    {
      role: "Freelance Brand Consultant",
      year: "2020–Present",
      metrics: ["20+", "Clients"],
      description:
        "Worked with clients in travel, tech, and education to develop digital strategies and brand visuals.",
      icon: Share2,
    },
    {
      role: "Marketing Lead",
      company: "AIESEC Tunisia",
      year: "2022–2024",
      metrics: ["National", "Campaigns"],
      description: "Led marketing initiatives, brand storytelling, and national campaign execution.",
      icon: BarChart3,
    },
  ]

  const skills = [
    { name: "Branding", icon: Target },
    { name: "Social Media", icon: Share2 },
    { name: "Content Strategy", icon: PenTool },
    { name: "Adobe Suite", icon: Zap },
    { name: "Meta Business", icon: Megaphone },
    { name: "Copywriting", icon: PenTool },
    { name: "UI/UX Collab", icon: Users },
  ]

  return (
    <section id="marketing" className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Experience</p>
            <h2 className="text-3xl md:text-5xl font-bold">Marketing & Brand Communication</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Practical experience in running marketing campaigns, managing brands, and crafting visual strategies with
              measurable results.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="p-4 border border-border rounded-2xl hover:border-foreground/50 transition-all hover:bg-card group"
                whileHover={{ y: -2 }}
              >
                <skill.icon className="h-6 w-6 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="p-6 md:p-8 border border-border rounded-2xl hover:border-foreground/30 transition-all hover:bg-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="space-y-4">
                  {/* Icon and Header */}
                  <div>
                    <exp.icon className="h-8 w-8 mb-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      {exp.company && <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>}
                    </div>
                  </div>

                  {/* Metrics Badge */}
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 bg-muted rounded-full border border-border">
                      <p className="text-sm font-bold text-foreground">{exp.metrics[0]}</p>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">{exp.metrics[1]}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                  {/* Year */}
                  <p className="text-xs text-muted-foreground font-medium pt-2">{exp.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
