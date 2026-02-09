"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, ExternalLink, CheckCircle, Star } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Counter animation component
function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const totalMilSecDur = duration * 1000
      const incrementTime = totalMilSecDur / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) clearInterval(timer)
      }, incrementTime)

      return () => {
        clearInterval(timer)
      }
    }
  }, [isInView, value, duration])

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  )
}

export default function TrainerPortfolio() {
  const openTrainerPortfolio = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/1Lt3Rr7O-0pj67lMCFB0nM7l28LdR6UMyIVIYLxxmOew/edit?usp=drive_web&ouid=100284283298477488031",
      "_blank",
    )
  }

  const trainingCenters = [
    {
      name: "Z-Training Center",
      role: "Freelance Trainer",
      period: "2022 - Present",
      specialization: "Leadership & Civic Engagement",
    },
    {
      name: "Gate Training Center - Sousse",
      role: "Freelance Trainer",
      period: "2022 - Present",
      specialization: "Professional Development & Skills Training",
    },
    {
      name: "Étoile Formation - Sousse",
      role: "Freelance Trainer",
      period: "2022 - Present",
      specialization: "Trainer Training Programs",
    },
    {
      name: "Epsylone Training Center",
      role: "Freelance Trainer",
      period: "2022 - Present",
      specialization: "Professional Development",
    },
    {
      name: "FBL Company: Consulting & Academy",
      role: "Freelance Trainer",
      period: "2022 - Present",
      specialization: "Business & Leadership",
    },
    {
      name: "Ma3an Tunisia",
      role: "Freelance Trainer",
      period: "2022 - Present",
      specialization: "Youth Development",
    },
  ]

  const recognitions = [
    {
      organization: "Association YOUTH CLUBs",
      logo: "/img/organizations/youth-clubs.png",
      certification: "Certified Trainer",
      description: "Recognized trainer for youth development and civic engagement programs",
    },
    {
      organization: "IFMSA",
      logo: "/img/organizations/ifmsa.png",
      certification: "External Trainer",
      description: "International Federation of Medical Students' Associations certified trainer",
    },
    {
      organization: "CNFCPP",
      logo: "/img/organizations/cnfcpp.png",
      certification: "Badge Holder",
      description: "Certified by the National Center for Training and Professional Development",
    },
  ]

  const trainingStats = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      count: 900,
      suffix: "+",
      label: "Participants Trained",
      color: "from-[hsl(var(--zia-green))] to-indigo-600",
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      count: 300,
      suffix: "+",
      label: "Training Hours",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      count: 15,
      suffix: "+",
      label: "Training Programs",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      count: 6,
      suffix: "",
      label: "Training Centers",
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section id="training-capacity-building" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[hsl(var(--zia-green))]/10 px-3 py-1 text-sm font-medium text-[hsl(var(--zia-green))] dark:bg-[hsl(var(--zia-green))]/20 dark:text-[hsl(var(--zia-green))]/80">
              Training Excellence
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Training & Capacity Building
            </h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Comprehensive training experience across multiple organizations and specialized programs.
            </p>
          </div>
        </div>

        {/* Training Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trainingStats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-6 rounded-xl bg-gradient-to-br ${stat.color} shadow-xl border-0 overflow-hidden relative group hover:shadow-2xl transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 text-white">
                <AnimatedCounter value={stat.count} suffix={stat.suffix} />
              </div>
              <div className="text-white text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Training Centers */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Training Centers & Organizations</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingCenters.map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2">{center.name}</h4>
                    <p className="text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 font-medium mb-1">{center.role}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{center.period}</p>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{center.specialization}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognitions & Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Recognitions</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="h-20 w-20 mx-auto mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm">
                      <img src={recognition.logo || "/placeholder.svg"} alt={recognition.organization} className="w-16 h-16 object-contain p-2" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{recognition.organization}</h4>
                    <div className="inline-block bg-[hsl(var(--zia-green))]/10 dark:bg-[hsl(var(--zia-green))]/20 text-[hsl(var(--zia-green))] dark:text-[hsl(var(--zia-green))]/80 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {recognition.certification}
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{recognition.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-indigo-600 hover:from-[hsl(var(--zia-green))]/90 hover:to-indigo-700 transition-all gap-2"
            onClick={openTrainerPortfolio}
          >
            <ExternalLink className="h-4 w-4" />
            View Complete Training Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
