"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Palette, TrendingUp, Users, Award } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState as useStateHook } from "react"

// Counter animation component
function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useStateHook(0)
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

export default function GraphicDesignMarketing() {
  const [activeFilter, setActiveFilter] = useState("all")

  const portfolioItems = [
    {
      id: "branding1",
      category: "branding",
      title: "Brand Identity Design",
      description: "Complete brand identity package",
      image: "/img/portfolio/project1.jpg",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "digital1",
      category: "digital",
      title: "Digital Marketing Campaign",
      description: "Social media marketing campaign",
      image: "/img/portfolio/project2.jpg",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "print1",
      category: "print",
      title: "Print Design",
      description: "Brochure and poster design",
      image: "/img/portfolio/project3.jpg",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "web1",
      category: "web",
      title: "Web Design",
      description: "UI/UX design for web application",
      image: "/img/portfolio/project4.jpg",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "branding2",
      category: "branding",
      title: "Logo Design",
      description: "Modern logo design concept",
      image: "/img/portfolio/project5.jpg",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "marketing1",
      category: "marketing",
      title: "Marketing Strategy",
      description: "Digital marketing strategy and implementation",
      image: "/img/portfolio/project6.jpg",
      behanceUrl: "https://behance.net/dhiaa",
    },
  ]

  const designStats = [
    {
      icon: <Palette className="h-8 w-8 text-white" />,
      count: 50,
      suffix: "+",
      label: "Design Projects",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      count: 15,
      suffix: "+",
      label: "Marketing Campaigns",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      count: 25,
      suffix: "+",
      label: "Happy Clients",
      color: "from-[hsl(var(--zia-green))] to-indigo-600",
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      count: 7,
      suffix: "+",
      label: "Years Experience",
      color: "from-orange-500 to-red-600",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const openBehanceProject = (url: string) => {
    window.open(url, "_blank")
  }

  const openFullPortfolio = () => {
    window.open("https://www.behance.net/dhiaarfa", "_blank")
  }

  return (
    <section id="graphic-design-marketing" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Creative Excellence
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Graphic Design & Marketing</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Creative design solutions and strategic marketing campaigns that drive results and build brands.
            </p>
          </div>
        </div>

        {/* Design & Marketing Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {designStats.map((stat, index) => (
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

        <div className="mt-16 flex flex-wrap justify-center gap-2">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className={activeFilter === "all" ? "bg-gradient-to-r from-purple-500 to-pink-600" : ""}
          >
            All
          </Button>
          <Button
            variant={activeFilter === "branding" ? "default" : "outline"}
            onClick={() => setActiveFilter("branding")}
            className={activeFilter === "branding" ? "bg-gradient-to-r from-pink-500 to-purple-600" : ""}
          >
            Branding
          </Button>
          <Button
            variant={activeFilter === "digital" ? "default" : "outline"}
            onClick={() => setActiveFilter("digital")}
            className={activeFilter === "digital" ? "bg-gradient-to-r from-green-500 to-emerald-600" : ""}
          >
            Digital Design
          </Button>
          <Button
            variant={activeFilter === "marketing" ? "default" : "outline"}
            onClick={() => setActiveFilter("marketing")}
            className={activeFilter === "marketing" ? "bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-600" : ""}
          >
            Marketing
          </Button>
          <Button
            variant={activeFilter === "print" ? "default" : "outline"}
            onClick={() => setActiveFilter("print")}
            className={activeFilter === "print" ? "bg-gradient-to-r from-orange-500 to-red-600" : ""}
          >
            Print Design
          </Button>
          <Button
            variant={activeFilter === "web" ? "default" : "outline"}
            onClick={() => setActiveFilter("web")}
            className={activeFilter === "web" ? "bg-gradient-to-r from-indigo-500 to-purple-600" : ""}
          >
            Web Design
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-3d"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[hsl(var(--zia-green))] to-purple-600 flex items-center justify-center">
                  <img src="/img/tools/behance.png" alt="Behance Project" className="w-20 h-12 object-contain opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                      onClick={() => openBehanceProject(item.behanceUrl)}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View on Behance
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold font-playfair">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-montserrat">{item.description}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 p-0 h-auto text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                    onClick={() => openBehanceProject(item.behanceUrl)}
                  >
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all gap-2"
            onClick={openFullPortfolio}
          >
            <ExternalLink className="h-4 w-4" />
            View Full Portfolio on Behance
          </Button>
        </div>
      </div>
    </section>
  )
}
