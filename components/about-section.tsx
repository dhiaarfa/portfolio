"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown, Mail, MapPin, Phone, Calendar, ExternalLink } from "lucide-react"

export default function AboutSection() {
  const downloadCV = () => {
    alert("CV downloaded! (Demo functionality)")
  }

  const contactMe = () => {
    window.location.href = "mailto:mohameddhiaarfa@gmail.com?subject=Collaboration Request"
  }

  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/dhia-", "_blank")
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who I Am</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover my journey and passion for design, training, and continuous learning.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/img/profile-speaking.jpg"
                alt="Mohamed Dhia Arfa - Speaking at Event"
                className="w-full h-auto object-cover object-center"
                style={{ aspectRatio: "4/5" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20"></div>
            </div>
            <div className="absolute -bottom-6 right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">900+</div>
              <div className="text-sm">Participants Trained</div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">Passionate Designer & Trainer</h3>
            <p className="text-gray-500 dark:text-gray-400">
              I'm a graphic designer and trainer with over 7 years of experience in graphic design, contributing to
              numerous campaigns and media projects. As a trainer, I have trained 900+ participants in 300+ hours of
              sessions, supporting better education and youth capacity building in Tunisia.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Versatile and committed to continuous learning, I am always open to exploring new opportunities that
              enrich my professional portfolio. I'm passionate about marketing, project management, and business
              development, actively advocating for education and youth empowerment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <div>
                  <h4 className="font-semibold text-sm">Email</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">mohameddhiaarfa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                <div>
                  <h4 className="font-semibold text-sm">Phone</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">+216 53 580 272</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-500" />
                <div>
                  <h4 className="font-semibold text-sm">Location</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Tunisia</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-sm">Status</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Student Entrepreneur</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="gap-2" onClick={downloadCV}>
                <FileDown className="h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" className="gap-2" onClick={contactMe}>
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="gap-2" onClick={openLinkedIn}>
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
