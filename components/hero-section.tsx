"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPortfolio = () => {
    const element = document.getElementById("graphic-portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openBehance = () => {
    window.open("https://behance.net/dhiaa", "_blank")
  }

  const downloadCV = () => {
    // Simulate CV download
    alert("CV downloaded! (Demo functionality)")
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32 particle-bg">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-blue-950 dark:via-purple-950 dark:to-indigo-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/10 to-pink-500/15 dark:from-blue-900/25 dark:via-purple-900/20 dark:to-pink-900/25"></div>
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse-glow"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-gradient-to-r dark:from-blue-900/40 dark:via-purple-900/40 dark:to-pink-900/40 dark:text-blue-300 glass glow-border animate-bounce-gentle">
                👋 Hello, I'm Mohamed Dhia
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="gradient-text-animated neon-text-blue text-reveal">Graphic Designer</span>
                <br />
                <span className="text-gray-900 dark:text-white neon-text-purple">& Trainer</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl leading-relaxed">
                Passionate about <strong className="neon-text-cyan">marketing</strong>, <strong className="neon-text-green">project management</strong>, and{" "}
                <strong className="neon-text-orange">business development</strong>. With over 7 years of experience in graphic design and 900+
                participants trained, I'm committed to continuous learning and professional growth.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-800 dark:text-blue-300 rounded-full glass hover-lift glow-border">
                  Graphic Design
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 text-purple-800 dark:text-purple-300 rounded-full glass hover-lift glow-border">
                  Training & Education
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40 text-green-800 dark:text-green-300 rounded-full glass hover-lift glow-border">
                  Marketing
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 text-orange-800 dark:text-orange-300 rounded-full glass hover-lift glow-border">
                  Business Development
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/40 dark:to-red-800/40 text-red-800 dark:text-red-300 rounded-full glass hover-lift glow-border animate-pulse-glow">
                  CNFCPP Certified
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl btn-morph glow-border text-white font-semibold animate-pulse-glow"
                onClick={scrollToContact}
              >
                Let's Collaborate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/20 transition-all duration-300 glass card-interactive glow-border"
                onClick={openBehance}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900/20 transition-all duration-300 glass card-interactive glow-border"
                onClick={downloadCV}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center card-interactive">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent neon-text">7+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center card-interactive">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent neon-text">900+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">People Trained</div>
              </div>
              <div className="text-center card-interactive">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent neon-text">300+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Training Hours</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/img/profile-photo.png"
                alt="Mohamed Dhia Arfa"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">IT Student</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Web Development & Multimedia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
