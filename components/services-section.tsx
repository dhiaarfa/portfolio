"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Target, Lightbulb } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Leadership Training",
      description:
        "Comprehensive programs designed to develop leadership skills and confidence in young professionals.",
    },
    {
      icon: Users,
      title: "Civic Engagement",
      description: "Workshops promoting active participation in community and democratic processes.",
    },
    {
      icon: Target,
      title: "Social Justice Advocacy",
      description: "Training on advocacy strategies, human rights, and equitable community development.",
    },
    {
      icon: Lightbulb,
      title: "Professional Development",
      description: "Capacity-building sessions for organizations and community groups.",
    },
  ]

  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Services</p>
            <h2 className="text-3xl md:text-5xl font-bold">What I Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="p-8 border border-border rounded-2xl hover:border-foreground transition-colors group cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
