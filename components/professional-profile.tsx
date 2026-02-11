"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Award } from "lucide-react"

export default function ProfessionalProfile() {
  const dualRoles = [
    {
      role: "Graphic Designer & UI/UX Specialist",
      icon: Palette,
      highlights: [
        "7 years of professional experience in branding & design",
        "450+ hours of training delivered",
        "Specialized in branding, visual identity, UI/UX, and digital marketing",
        "Key Projects: MeetUp Pro (200+ attendees, 800+ leads), Tafeni, One Space, CRIT Tunisie, Nakkla",
        "Portfolio: behance.net/dhiaa",
      ],
      tools: [
        "Adobe Photoshop",
        "Illustrator",
        "Premiere Pro",
        "InDesign",
        "Figma",
        "Adobe XD",
        "Canva",
        "2D Animation",
      ],
      gradient: "from-pink-500 to-purple-600",
    },
    {
      role: "Web Developer & Full-Stack Engineer",
      icon: Code2,
      highlights: [
        "BSc in Web Development & Multimedia (2023-2026, ISET Sousse)",
        "420+ hours of training delivered to 950+ learners",
        "Web Developer at CRIT Tunisie (React + Next.js, responsive UI/UX)",
        "Marketing Manager at Speranza Café & Resto (40% engagement increase)",
        "Full-stack expertise in modern web technologies",
      ],
      tools: ["HTML/CSS", "JavaScript", "PHP", "Symfony", "SQL", "Python", "Angular", "React", "Next.js"],
      gradient: "from-[hsl(var(--zia-green))] to-emerald-600",
    },
  ]

  const certifications = [
    { name: "CNFCPP", issuer: "National Center for Continuing Training", year: "2024" },
    { name: "National Certified Trainer", issuer: "CNFCPP, Tunisia", year: "2024" },
    { name: "Social Media Marketing", issuer: "HubSpot Academy", year: "2024" },
    { name: "Green Digital Skills", issuer: "INCO Academy", year: "2024" },
    { name: "Graphic Design", issuer: "GOMYCODE", year: "2023" },
  ]

  const keyProjects = [
    { name: "MeetUp Pro 2023", description: "200+ attendees, 800+ leads generated, radio & TV appearances" },
    { name: "Tafeni", description: "Travel agency branding & complete visual identity system" },
    { name: "One Space", description: "Interior brand identity from concept to delivery" },
    { name: "CRIT Tunisie", description: "HR platform UI/UX design & frontend development" },
    { name: "Nakkla", description: "Delivery service app visual design & branding" },
    { name: "Speranza Café", description: "Marketing strategy & 40% engagement increase" },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-background">
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
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Professional Profile</p>
            <h2 className="text-3xl md:text-5xl font-bold">Designer & Developer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Combining 7 years of creative design expertise with modern full-stack web development skills
            </p>
          </div>

          {/* Dual Roles */}
          <div className="grid md:grid-cols-2 gap-8">
            {dualRoles.map((role, idx) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={idx}
                  className={`p-8 border border-border rounded-2xl bg-gradient-to-br ${role.gradient} bg-opacity-5 hover:border-foreground transition-all group`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-8 w-8 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold">{role.role}</h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    {role.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <span className="text-foreground/60 mt-1">•</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-3">Key Tools & Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {role.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium hover:border-foreground/30 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Key Projects */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">Featured Work</p>
              <h3 className="text-2xl font-bold">Notable Projects & Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyProjects.map((project, i) => (
                <motion.div
                  key={i}
                  className="p-6 border border-border rounded-2xl hover:border-foreground hover:bg-card transition-all group cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  <h4 className="font-bold mb-2 group-hover:text-foreground/80 transition-colors">{project.name}</h4>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </motion.div>
              ))}
            </div>
            <a
              href="https://behance.net/dhiaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-foreground text-background rounded-2xl font-semibold hover:opacity-90 transition-opacity"
            >
              View Full Portfolio on Behance
            </a>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">Credentials</p>
              <h3 className="text-2xl font-bold">Certifications & Accreditations</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className="p-6 border border-border rounded-2xl hover:border-foreground transition-all group"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-foreground/70 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold group-hover:text-foreground/80 transition-colors">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                      <p className="text-xs text-foreground/50 mt-2">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
