"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, AlertCircle, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "design",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [errorHint, setErrorHint] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Failed to send message. Please try again.")
        setErrorHint(data.hint || "")
        return
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        message: "",
        service: "design",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("An error occurred. Please try again later.")
      setErrorHint("")
      console.error("Form error:", error)
    }
  }

  const serviceLabels = {
    design: "Design Project",
    development: "Web Development",
    training: "Training Program",
    other: "Other",
  }

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold">
            Your Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            disabled={status === "loading"}
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            disabled={status === "loading"}
          />
        </div>

        {/* Service Type Dropdown */}
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-semibold">
            What can I help with? <span className="text-orange-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            disabled={status === "loading"}
          >
            <option value="design">Design Project</option>
            <option value="development">Web Development</option>
            <option value="training">Training Program</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold">
            Your Message <span className="text-orange-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me about your project, timeline, and any specific requirements..."
            rows={5}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
            disabled={status === "loading"}
          />
        </div>

        {/* Error Message */}
        {status === "error" && (
          <motion.div
            className="flex gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
              {errorHint && <p className="text-xs text-red-600 dark:text-red-400 mt-2">{errorHint}</p>}
            </div>
          </motion.div>
        )}

        {/* Success Message */}
        {status === "success" && (
          <motion.div
            className="flex gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-green-700 dark:text-green-300">Message sent successfully!</p>
              <p className="text-sm text-green-600 dark:text-green-400">I'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === "loading" || status === "success"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 bg-[rgba(37,195,20,1)]"
        >
          {status === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Message Sent
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>

        <p className="text-xs text-muted-foreground text-center">
          I'll respond to your message within 24 hours. You can also reach me directly at{" "}
          <a href="mailto:mohameddhiaarfa@gmail.com" className="text-orange-500 hover:underline font-medium">
            mohameddhiaarfa@gmail.com
          </a>
        </p>
      </form>
    </motion.div>
  )
}
