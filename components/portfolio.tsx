"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
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
      title: "Digital Campaign",
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
      id: "digital2",
      category: "digital",
      title: "Social Media Graphics",
      description: "Instagram and Facebook content",
      image: "/img/portfolio/project6.jpg",
      behanceUrl: "https://behance.net/dhiaa",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const openBehanceProject = (url: string) => {
    window.open(url, "_blank")
  }

  const openFullPortfolio = () => {
    window.open("https://behance.net/dhiaa", "_blank")
  }

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 font-montserrat">
              My Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl neon-text">Portfolio</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl font-montserrat">
              Explore a selection of my design work, training projects, and creative solutions.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className={activeFilter === "all" ? "bg-gradient-to-r from-blue-500 to-purple-600" : ""}
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
            variant={activeFilter === "print" ? "default" : "outline"}
            onClick={() => setActiveFilter("print")}
            className={activeFilter === "print" ? "bg-gradient-to-r from-orange-500 to-red-600" : ""}
          >
            Print Design
          </Button>
          <Button
            variant={activeFilter === "web" ? "default" : "outline"}
            onClick={() => setActiveFilter("web")}
            className={activeFilter === "web" ? "bg-gradient-to-r from-blue-500 to-cyan-600" : ""}
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
                <div className="aspect-video relative overflow-hidden">
                  {item.category === "branding" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 56.25"
                      width="100%"
                      height="100%"
                      className="bg-gray-200 dark:bg-gray-700"
                    >
                      <rect width="100" height="56.25" fill="#f0f0f0" className="dark:fill-gray-800" />
                      <circle cx="50" cy="28" r="15" fill="#e91e63" fillOpacity="0.8" />
                      <path d="M35,28 L65,28 M50,13 L50,43" stroke="#2196f3" strokeWidth="3" />
                    </svg>
                  )}
                  {item.category === "digital" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 56.25"
                      width="100%"
                      height="100%"
                      className="bg-gray-200 dark:bg-gray-700"
                    >
                      <rect width="100" height="56.25" fill="#f0f0f0" className="dark:fill-gray-800" />
                      <rect x="20" y="15" width="60" height="30" rx="5" fill="#4caf50" fillOpacity="0.8" />
                      <circle cx="30" cy="25" r="3" fill="white" />
                      <rect x="35" y="22" width="20" height="2" fill="white" />
                      <rect x="35" y="26" width="15" height="2" fill="white" />
                    </svg>
                  )}
                  {item.category === "print" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 56.25"
                      width="100%"
                      height="100%"
                      className="bg-gray-200 dark:bg-gray-700"
                    >
                      <rect width="100" height="56.25" fill="#f0f0f0" className="dark:fill-gray-800" />
                      <rect x="25" y="10" width="50" height="35" fill="#ff9800" fillOpacity="0.8" />
                      <rect x="30" y="15" width="40" height="3" fill="white" />
                      <rect x="30" y="20" width="30" height="2" fill="white" />
                      <rect x="30" y="25" width="35" height="2" fill="white" />
                    </svg>
                  )}
                  {item.category === "web" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 56.25"
                      width="100%"
                      height="100%"
                      className="bg-gray-200 dark:bg-gray-700"
                    >
                      <rect width="100" height="56.25" fill="#f0f0f0" className="dark:fill-gray-800" />
                      <rect x="15" y="10" width="70" height="40" rx="3" fill="#3f51b5" fillOpacity="0.8" />
                      <rect x="20" y="15" width="60" height="3" fill="white" />
                      <rect x="20" y="20" width="25" height="20" fill="white" fillOpacity="0.7" />
                      <rect x="50" y="20" width="25" height="8" fill="white" fillOpacity="0.7" />
                    </svg>
                  )}
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
                    className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
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
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all neon-border gap-2"
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
