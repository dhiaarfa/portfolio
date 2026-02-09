"use client"

import PremiumHeroSection from "@/components/premium-hero-section"
import PremiumGlassCard from "@/components/premium-glass-card"
import PremiumSkillsCard from "@/components/premium-skills-card"
import PremiumExperienceTimeline from "@/components/premium-experience-timeline"
import Footer from "@/components/footer"
import { Palette, Code2, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import ContactForm from "@/components/contact-form"

export default function PremiumRedesignPage() {
  const [contactOpen, setContactOpen] = useState(false)

  const designSkills = {
    title: "Design Mastery",
    subtitle: "Comprehensive creative toolkit",
    categories: [
      {
        title: "Visual Design",
        items: ["UI/UX Design", "Branding", "Visual Identity", "Typography", "Color Theory", "Motion Design"],
      },
      {
        title: "Tools & Software",
        items: ["Figma", "Photoshop", "Illustrator", "InDesign", "Adobe XD", "Prototyping"],
      },
      {
        title: "Specializations",
        items: ["Social Media", "Pitch Decks", "Packaging", "Marketing", "Digital Art", "AI-Powered Design"],
      },
    ],
  }

  const devSkills = {
    title: "Development Arsenal",
    subtitle: "Modern web technologies",
    categories: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      },
      {
        title: "Backend",
        items: ["Node.js", "PHP", "SQL", "Python", "APIs", "Authentication"],
      },
      {
        title: "Tools & Practices",
        items: ["Git", "GitHub", "VS Code", "Vercel", "Performance Optimization", "Accessibility"],
      },
    ],
  }

  const designExperience = [
    {
      role: "Freelance Graphic Designer",
      company: "Remote & On-site",
      period: "2020 – Present",
      type: "Self-Employed",
      description: "Crafting brand identities, digital campaigns, and visual solutions for startups and enterprises.",
      highlights: ["450+ hours", "50+ projects", "Behance portfolio", "Award-winning designs"],
    },
    {
      role: "Graphic Design Intern",
      company: "Icom Agency",
      period: "Jan – Feb 2025",
      description: "Developing brand assets and digital marketing materials.",
    },
    {
      role: "Graphic Design Intern",
      company: "Phenyx Company",
      period: "Oct – Nov 2024",
      description: "UI/UX design and frontend implementation for web platforms.",
    },
  ]

  const devExperience = [
    {
      role: "Web Developer",
      company: "CRIT Tunisie",
      period: "Sep 2025 – Dec 2025",
      type: "Full-time",
      description: "Developing responsive web interfaces and optimizing user experiences with React & Next.js.",
      highlights: ["React/Next.js", "UI Optimization", "Feature Shipping", "Team Collaboration"],
    },
    {
      role: "Marketing & Web Strategy",
      company: "Speranza Cafe & Resto",
      period: "Jan 2025 – Jun 2025",
      type: "Hybrid",
      description: "Digital presence management and marketing campaign execution.",
    },
    {
      role: "Full-Stack Developer (Self-Directed)",
      company: "Personal Projects & Open Source",
      period: "2023 – Present",
      type: "Continuous",
      description: "Building real applications, mastering fundamentals, and contributing to the web community.",
      highlights: ["Personal projects", "Portfolio building", "Learning in public", "950+ learners reached"],
    },
  ]

  const trainerExperience = [
    {
      role: "National Certified Trainer",
      company: "CNFCPP",
      period: "2017 – Present",
      type: "Certification",
      description: "Leading transformative training programs for youth development and professional growth.",
    },
    {
      role: "Training Facilitator",
      company: "GoMyCode Academy",
      period: "2019 – 2023",
      type: "Part-time",
      description: "Teaching design fundamentals to 450+ students worldwide.",
      highlights: ["450+ hours of training", "100+ workshops", "High satisfaction rates"],
    },
    {
      role: "Youth Development Lead",
      company: "Multiple Organizations",
      period: "2017 – Present",
      type: "Ongoing",
      description: "Empowering 934+ trainees across 61 events with leadership and social justice advocacy.",
      highlights: ["934+ trainees", "381+ training hours", "61 events facilitated"],
    },
  ]

  const roles = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Designer",
      description: "7+ years of creative experience in branding, UI/UX, and digital marketing.",
      stats: "450+ Hours • 50+ Projects",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Developer",
      description: "Modern web development with React, Next.js, and design-informed code.",
      stats: "React/Next.js • Design-to-Code",
      color: "from-[hsl(var(--zia-green))] to-emerald-500",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Trainer & Educator",
      description: "Empowering 934+ trainees through transformative learning experiences.",
      stats: "934+ Trainees • 381+ Hours",
      color: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <main className="w-full bg-background text-foreground">
      {/* Hero Section */}
      <PremiumHeroSection
        firstName="Mohamed"
        lastName="Dhia"
        role="Creative Problem Solver"
        tagline="Designer • Developer • Trainer"
        description="Crafting digital experiences at the intersection of design and code. 7+ years of creative excellence, 934+ lives impacted through training, and countless projects shipped."
        portraitSrc="/images/mohamed-20dhia-20arfa-20-20photo.png"
        portraitAlt="Mohamed Dhia Arfa Professional Portrait"
        stats={[
          { label: "Years", value: "7+" },
          { label: "Trainees", value: "934+" },
          { label: "Projects", value: "50+" },
          { label: "Events", value: "61" },
        ]}
        email="mohameddhiaarfa@gmail.com"
        linkedin="https://www.linkedin.com/in/dhia-/"
        location="Tunisia"
        availableForWork={true}
        onContactClick={() => setContactOpen(true)}
      />

      {/* Roles Overview */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Three Creative Disciplines</h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              I bring a unique perspective as a designer, developer, and educator—seamlessly integrating
              visual excellence, technical expertise, and transformative impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <PremiumGlassCard glowColor="amber" hoverLift>
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center text-white`}>
                      {role.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{role.title}</h3>
                    <p className="text-sm text-foreground/70">{role.description}</p>
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{role.stats}</p>
                  </div>
                </PremiumGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PremiumSkillsCard
              title="Design Mastery"
              subtitle="Comprehensive creative toolkit"
              icon={<Palette className="w-6 h-6" />}
              categories={designSkills.categories}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PremiumExperienceTimeline title="Design Journey" experiences={designExperience} />
          </motion.div>
        </div>
      </section>

      {/* Development Section */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PremiumExperienceTimeline title="Development Path" experiences={devExperience} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PremiumSkillsCard
              title="Development Arsenal"
              subtitle="Modern web technologies"
              icon={<Code2 className="w-6 h-6" />}
              categories={devSkills.categories}
            />
          </motion.div>
        </div>
      </section>

      {/* Training Section */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Training & Impact</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mt-4">
              Empowering the next generation through transformative training and youth development initiatives.
            </p>
          </motion.div>

          <PremiumExperienceTimeline title="Training Evolution" experiences={trainerExperience} />

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { value: "934+", label: "Trainees Impacted" },
              { value: "381+", label: "Training Hours" },
              { value: "61", label: "Events Facilitated" },
              { value: "7+", label: "Years Experience" },
            ].map((stat, idx) => (
              <PremiumGlassCard key={idx} className="text-center">
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-amber-400">{stat.value}</p>
                  <p className="text-xs md:text-sm text-foreground/60 font-medium">{stat.label}</p>
                </div>
              </PremiumGlassCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Create Together</h2>
            <p className="text-lg text-foreground/60 mb-8">
              Whether you need a designer, developer, or trainer—let's build something extraordinary.
            </p>

            <motion.button
              onClick={() => setContactOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold glow-amber-hover hover:shadow-lg transition-all"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-card rounded-2xl p-8 max-w-lg w-full max-h-96 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
              <button
                onClick={() => setContactOpen(false)}
                className="text-foreground/60 hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  )
}
