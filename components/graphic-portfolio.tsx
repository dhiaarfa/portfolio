"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

type PortfolioItem = {
  id: string
  category: "branding" | "digital" | "print" | "web"
  title: string
  description: string
  image: string
  alt: string
  behanceUrl: string
}

export default function GraphicPortfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioItem["category"] | "all">("all")

  // Use real portfolio visuals from the existing Designer gallery
  const portfolioItems: PortfolioItem[] = [
    {
      id: "tafoni",
      category: "branding",
      title: "Tafoni Travel",
      description: "Travel agency brand identity and visual system.",
      image: "/images/tafani-white-png.png",
      alt: "Tafoni Travel brand identity and logo design",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "walmart-branding",
      category: "branding",
      title: "Walmart Branding System",
      description: "Editorial-style rebrand exploration for Walmart.",
      image: "/images/walmart-branding.png",
      alt: "Walmart branding system exploration",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "speranza-cafe",
      category: "print",
      title: "Speranza Café",
      description: "Coffee shop visual identity and campaign visuals.",
      image: "/images/445771850-916829483581375-1053755579034856379-n.png",
      alt: "Speranza Café visual identity and campaign design",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "lone-space-gold",
      category: "branding",
      title: "Lone Space Gold",
      description: "Premium fashion brand identity and packaging.",
      image: "/images/lone-space-gold.png",
      alt: "Lone Space Gold premium fashion brand identity",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "meetup-pro",
      category: "digital",
      title: "MeetUp Pro",
      description: "Event branding and digital campaign visuals.",
      image: "/images/meetuppro-thumbnail.png",
      alt: "MeetUp Pro event branding and marketing visuals",
      behanceUrl: "https://behance.net/dhiaa",
    },
    {
      id: "food-campaign",
      category: "digital",
      title: "Food Campaign",
      description: "Social media visuals for food and restaurant brand.",
      image: "/images/sportif-yekl-f-noodles.jpg",
      alt: "Food campaign social media visuals for noodles brand",
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
    <section id="graphic-portfolio" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Creative Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Graphic Design Portfolio</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Explore my creative design work spanning branding, digital campaigns, and visual communications.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
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
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div
                    className="group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                      opacity: 0,
                    }}
                  >
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
