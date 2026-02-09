"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface PortfolioItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  behanceUrl: string
}

const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "branding1",
    category: "branding",
    title: "Brand Identity Design",
    description: "Complete brand identity package",
    image: "https://via.placeholder.com/600x400?text=Branding+Design",
    behanceUrl: "https://behance.net/dhiaa",
  },
  {
    id: "digital1",
    category: "digital",
    title: "Digital Campaign",
    description: "Social media marketing campaign",
    image: "https://via.placeholder.com/600x400?text=Digital+Campaign",
    behanceUrl: "https://behance.net/dhiaa",
  },
  {
    id: "print1",
    category: "print",
    title: "Print Design",
    description: "Brochure and poster design",
    image: "https://via.placeholder.com/600x400?text=Print+Design",
    behanceUrl: "https://behance.net/dhiaa",
  },
  {
    id: "web1",
    category: "web",
    title: "Web Design",
    description: "UI/UX design for web application",
    image: "https://via.placeholder.com/600x400?text=Web+Design",
    behanceUrl: "https://behance.net/dhiaa",
  },
  {
    id: "branding2",
    category: "branding",
    title: "Logo Design",
    description: "Modern logo design concept",
    image: "https://via.placeholder.com/600x400?text=Logo+Design",
    behanceUrl: "https://behance.net/dhiaa",
  },
  {
    id: "digital2",
    category: "digital",
    title: "Social Media Graphics",
    description: "Instagram and Facebook content",
    image: "https://via.placeholder.com/600x400?text=Social+Graphics",
    behanceUrl: "https://behance.net/dhiaa",
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")
  const portfolioItems = PORTFOLIO_DATA

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
            <div className="inline-block rounded-full bg-[hsl(var(--zia-green))]/10 px-3 py-1 text-sm font-medium text-[hsl(var(--zia-green))] dark:bg-[hsl(var(--zia-green))]/20 dark:text-[hsl(var(--zia-green))]/80 font-montserrat">
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
            className={activeFilter === "all" ? "bg-gradient-to-r from-[hsl(var(--zia-green))] to-purple-600" : ""}
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
            className={activeFilter === "web" ? "bg-gradient-to-r from-[hsl(var(--zia-green))] to-emerald-600" : ""}
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
                <div style={{position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden"}}>
                  <img loading="lazy" src={item.image || "/placeholder.svg"} alt={item.title} style={{width: "100%", height: "100%", display: "block", objectFit: "cover"}} />
                  <div style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)", opacity: 0}} className="group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                    className="mt-2 p-0 h-auto text-[hsl(var(--zia-green))] hover:text-[hsl(var(--zia-green))]/80 dark:text-[hsl(var(--zia-green))]/80 dark:hover:text-[hsl(var(--zia-green))] transition-colors"
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
            className="bg-gradient-to-r from-[hsl(var(--zia-green))] to-purple-600 hover:from-[hsl(var(--zia-green))]/90 hover:to-purple-700 transition-all neon-border gap-2"
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
