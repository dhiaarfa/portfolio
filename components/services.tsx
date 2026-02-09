"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, GraduationCap, TrendingUp, Users, Briefcase, PenTool } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Palette className="h-10 w-10 text-white" />,
      title: "Graphic Design",
      description: "Creating visual identities, logos, communication materials, and impactful designs.",
      features: ["Logo & Branding", "Print & Digital", "UI/UX Design", "Motion Graphics"],
      experience: "7+ years experience",
      color: "from-purple-500 to-pink-600",
      iconBg: "bg-gradient-to-r from-purple-500 to-pink-600",
      projects: "50+ designs created",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      title: "Training & Coaching",
      description: "Trainer training, leadership development, civic engagement, and skill building programs.",
      features: ["Trainer Training", "Leadership", "Civic Engagement", "Workshops"],
      experience: "900+ participants",
      color: "from-[hsl(var(--zia-green))] to-indigo-600",
      iconBg: "bg-gradient-to-r from-[hsl(var(--zia-green))] to-indigo-600",
      projects: "300+ hours delivered",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: "Digital Marketing",
      description: "Marketing strategies, digital communication, and online presence development.",
      features: ["Digital Strategy", "Social Media", "Content Marketing", "Analytics"],
      experience: "Marketing Manager",
      color: "from-green-500 to-emerald-600",
      iconBg: "bg-gradient-to-r from-green-500 to-emerald-600",
      projects: "15+ campaigns",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Business Development",
      description: "Commercial development, business strategy, and entrepreneurial support.",
      features: ["Business Strategy", "Development", "Consulting", "Mentoring"],
      experience: "Business Developer",
      color: "from-orange-500 to-red-600",
      iconBg: "bg-gradient-to-r from-orange-500 to-red-600",
      projects: "10+ companies",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Event Animation",
      description: "Workshop facilitation, conferences, and professional training events.",
      features: ["Workshops", "Conferences", "Team Building", "Events"],
      experience: "Expert Facilitator",
      color: "from-teal-500 to-[hsl(var(--zia-green))]",
      iconBg: "bg-gradient-to-r from-teal-500 to-[hsl(var(--zia-green))]",
      projects: "100+ events",
    },
    {
      icon: <PenTool className="h-10 w-10 text-white" />,
      title: "Creative Consulting",
      description: "Creative consulting, innovation guidance, and creative process transformation.",
      features: ["Creative Audit", "Innovation", "Process", "Transformation"],
      experience: "Creative Consultant",
      color: "from-indigo-500 to-purple-600",
      iconBg: "bg-gradient-to-r from-indigo-500 to-purple-600",
      projects: "20+ audits",
    },
  ]

  const handleGetQuote = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[hsl(var(--zia-green))]/10 px-3 py-1 text-sm font-medium text-[hsl(var(--zia-green))] dark:bg-[hsl(var(--zia-green))]/20 dark:text-[hsl(var(--zia-green))]/80">
              My Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expertise & Support</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From graphic creation to training, I support you in all your creative and professional development
              projects.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`rounded-full ${service.iconBg} p-3 text-white shadow-lg`}>{service.icon}</div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {service.projects}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Experience:</span> {service.experience}
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 transition-all`}
                      onClick={handleGetQuote}
                    >
                      Let's Discuss Your Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
