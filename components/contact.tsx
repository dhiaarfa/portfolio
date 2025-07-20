"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { getTranslation, type Language } from "@/lib/translations"

interface ContactProps {
  language: Language
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const t = (key: keyof typeof import("@/lib/translations").translations.en) => getTranslation(language, key)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            budget: "",
            message: "",
          })
        }, 3000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert(
        language === "fr"
          ? "Erreur lors de l'envoi du message. Veuillez réessayer."
          : "Error sending message. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: t("email"),
      content: "mohameddhiaarfa@gmail.com",
      action: () => (window.location.href = "mailto:mohameddhiaarfa@gmail.com"),
    },
    {
      icon: <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />,
      title: t("phone"),
      content: "+216 53 580 272",
      action: () => (window.location.href = "tel:+21653580272"),
    },
    {
      icon: <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
      title: t("location"),
      content: language === "fr" ? "Tunisie" : "Tunisia",
      action: () => {},
    },
    {
      icon: <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
      title: t("availability"),
      content: t("monFri"),
      action: () => {},
    },
  ]

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-green-200 bg-white/80 backdrop-blur-sm glass">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-2">{t("messageSuccess")}</h2>
                <p className="text-green-600 mb-4">{t("messageSuccessDesc")}</p>
                <div className="text-sm text-gray-500">{t("autoRedirect")}</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t("collaborateTogether")}
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t("contactTitle")}
            </motion.h2>
            <motion.p
              className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("contactDesc")}
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">{t("contactInfo")}</h3>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="cursor-pointer hover:shadow-md transition-all duration-300 glass group"
                      onClick={info.action}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <motion.div
                          className="rounded-full bg-gray-100 dark:bg-gray-800 p-3 group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {info.icon}
                        </motion.div>
                        <div>
                          <h4 className="font-medium group-hover:text-blue-600 transition-colors">{info.title}</h4>
                          <p className="text-gray-500 dark:text-gray-400">{info.content}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-2">{t("whyWorkWith")}</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <motion.li
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>{t("whyWork1")}</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>{t("whyWork2")}</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>{t("whyWork3")}</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span>{t("whyWork4")}</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">{t("collaborationRequest")}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        {t("fullName")} *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder={t("yourName")}
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        {t("email")} *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder={t("yourEmail")}
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                        {t("telephone")}
                      </label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+216 XX XXX XXX"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block mb-2 text-sm font-medium">
                        {t("company")}
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder={t("companyName")}
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block mb-2 text-sm font-medium">
                        {t("desiredService")} *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="transition-all duration-300 focus:scale-105">
                          <SelectValue placeholder={t("chooseService")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="design">{t("graphicDesignService")}</SelectItem>
                          <SelectItem value="formation">{t("formationService")}</SelectItem>
                          <SelectItem value="marketing">{t("marketingDigital")}</SelectItem>
                          <SelectItem value="business">{t("businessDev")}</SelectItem>
                          <SelectItem value="animation">{t("animationEvents")}</SelectItem>
                          <SelectItem value="consulting">{t("consultingCreative")}</SelectItem>
                          <SelectItem value="autre">{t("other")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block mb-2 text-sm font-medium">
                        {t("estimatedBudget")}
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger className="transition-all duration-300 focus:scale-105">
                          <SelectValue placeholder={t("yourBudget")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500-1000">{t("budget500")}</SelectItem>
                          <SelectItem value="1000-3000">{t("budget1000")}</SelectItem>
                          <SelectItem value="3000-5000">{t("budget3000")}</SelectItem>
                          <SelectItem value="5000+">{t("budget5000")}</SelectItem>
                          <SelectItem value="a-discuter">{t("budgetDiscuss")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      {t("projectDescription")} *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder={t("projectDescPlaceholder")}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t("sending")}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {t("sendRequest")}
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
