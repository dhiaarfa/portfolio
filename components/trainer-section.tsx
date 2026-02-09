"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Lightbulb, Award, Zap, Target, Layers, Briefcase } from "lucide-react"

export default function TrainerSection() {
  const roles = [
    {
      title: "National Certified Trainer",
      organization: "CNFCPP Tunisia",
      year: "2024",
      description: "Officially accredited to deliver training sessions in Tunisia",
      icon: Award,
    },
    {
      title: "Graphic Design Trainer",
      organization: "GOMYCODE & NGOs",
      description: "Delivered 180+ hours of hands-on graphic design training for youth and professionals",
      icon: BookOpen,
    },
    {
      title: "Soft Skills Facilitator",
      organization: "1000 Challenges School",
      year: "2024–Present",
      description: "Led workshops on teamwork, communication, and design thinking",
      icon: Zap,
    },
    {
      title: "Workshop Organizer & Facilitator",
      organization: "YOUTH CLUBs Association",
      year: "2019–Present",
      description: "Organized & facilitated workshops, general assemblies, and civic education sessions",
      icon: Users,
    },
  ]

  const skills = [
    { name: "Training", icon: BookOpen },
    { name: "Facilitation", icon: Users },
    { name: "Design Thinking", icon: Lightbulb },
    { name: "Curriculum Design", icon: Layers },
    { name: "Canva", icon: Target },
    { name: "Adobe Suite", icon: Briefcase },
    { name: "Teamwork", icon: Users },
  ]

  return (
    <section id="trainer" className="w-full py-20 md:py-32 bg-card">
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
            <h2 className="text-3xl md:text-5xl font-bold">Trainer & Educator</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Sharing knowledge with passion — 450+ hours of delivered training in digital skills, design, and soft
              skills.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="p-4 border border-border rounded-2xl hover:border-foreground/50 transition-all hover:bg-background group"
                whileHover={{ y: -2 }}
              >
                <skill.icon className="h-6 w-6 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                className="p-6 md:p-8 border border-border rounded-2xl hover:border-foreground/30 transition-all hover:bg-background group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="flex gap-4">
                  <div className="hidden md:flex">
                    <role.icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold">{role.title}</h3>
                      {role.year && <span className="text-xs font-medium text-muted-foreground">{role.year}</span>}
                    </div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">{role.organization}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
