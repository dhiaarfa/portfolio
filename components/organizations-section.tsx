"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

export default function OrganizationsSection() {
  const organizations = [
    {
      name: "Youth Clubs Association",
      type: "Training Provider & Collaborator",
      description: "Primary training partner for youth development programs",
    },
    {
      name: "UNESCO",
      type: "International Organization",
      description: "Educational and capacity-building initiatives",
    },
    {
      name: "Deakin University",
      type: "Academic Partner",
      description: "Training of Trainers program support",
    },
    {
      name: "International Federation of Medical Students (IFMSA)",
      type: "Professional Network",
      description: "Leadership and social responsibility training",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Organizations</p>
            <h2 className="text-3xl md:text-5xl font-bold">Collaborative Partnerships</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org, i) => (
              <motion.div
                key={i}
                className="p-6 border border-border rounded-2xl hover:border-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <Building2 className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{org.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{org.type}</p>
                    <p className="text-sm text-muted-foreground mt-2">{org.description}</p>
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
