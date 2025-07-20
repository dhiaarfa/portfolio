"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          type: "newsletter",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        throw new Error(data.error || "Failed to subscribe")
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setError("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-blue-800 dark:text-blue-400">Mohamed Dhia</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Designer graphique et formateur passionné avec plus de 7 ans d'expérience. Spécialisé en création
              visuelle, formation et accompagnement professionnel.
            </p>
            <div className="flex space-x-3">
              <Link
                href="mailto:mohameddhiaarfa@gmail.com"
                className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="tel:+21653580272"
                className="text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Téléphone</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Design Graphique
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Formation & Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Marketing Digital
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Business Development
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Portfolio</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Projets créatifs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Expérience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("formations")}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Formations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Restez informé de mes derniers projets et actualités.
            </p>

            {isSubmitted ? (
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Inscription réussie!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
                <Input
                  placeholder="Votre email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white dark:bg-gray-800"
                  required
                  disabled={isSubmitting}
                />
                {error && <p className="text-red-500 text-xs">{error}</p>}
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Inscription..." : "S'inscrire"}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2025 Mohamed Dhia Arfa. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Tunisie</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
