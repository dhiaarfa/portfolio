"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, AlertCircle, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/components/language-provider"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "design",
    website: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [errorHint, setErrorHint] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name?.trim()) {
      toast.error(t("toastEnterName"))
      return false
    }
    if (!formData.email?.trim()) {
      toast.error(t("toastEnterEmail"))
      return false
    }
    if (!EMAIL_REGEX.test(formData.email.trim())) {
      toast.error(t("toastInvalidEmail"))
      return false
    }
    if (!formData.message?.trim()) {
      toast.error(t("toastEnterMessage"))
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.service,
          message: formData.message.trim(),
          type: "contact",
          website: formData.website,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus("error")
        setErrorMessage(data.error || t("errorFailedSend"))
        setErrorHint(data.hint || "")
        toast.error(t("toastGenericError"))
        return
      }

      setStatus("success")
      setFormData({ name: "", email: "", message: "", service: "design", website: "" })
      toast.success(t("toastMessageSent"))
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setErrorMessage(t("errorNetwork"))
      setErrorHint("")
      toast.error(t("toastGenericError"))
    }
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
        <input type="text" name="website" value={formData.website} readOnly tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold">
            {t("contactFormNameLabel")} <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t("contactFormNamePlaceholder")}
            className="w-full px-4 py-3 min-h-[44px] border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all touch-manipulation text-base"
            disabled={status === "loading"}
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold">
            {t("contactFormEmailLabel")} <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t("contactFormEmailPlaceholder")}
            className="w-full px-4 py-3 min-h-[44px] border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all touch-manipulation text-base"
            disabled={status === "loading"}
          />
        </div>

        {/* Service Type Dropdown */}
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-semibold">
            {t("contactFormServiceLabel")} <span className="text-accent">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 min-h-[44px] border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all touch-manipulation text-base"
            disabled={status === "loading"}
          >
            <option value="design">{t("contactFormServiceDesign")}</option>
            <option value="development">{t("contactFormServiceDevelopment")}</option>
            <option value="training">{t("contactFormServiceTraining")}</option>
            <option value="other">{t("contactFormServiceOther")}</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold">
            {t("contactFormMessageLabel")} <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t("contactFormMessagePlaceholder")}
            rows={5}
            className="w-full px-4 py-3 min-h-[120px] border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none touch-manipulation text-base"
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
              <p className="text-sm font-semibold text-green-700 dark:text-green-300">{t("contactFormSuccessTitle")}</p>
              <p className="text-sm text-green-600 dark:text-green-400">{t("contactFormSuccessDesc")}</p>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === "loading" || status === "success"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 min-h-[48px] btn-green disabled:opacity-50 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 touch-manipulation text-base"
        >
          {status === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {t("contactFormSending")}
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              {t("contactFormSent")}
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              {t("contactFormSendMessage")}
            </>
          )}
        </motion.button>

        <p className="text-xs text-muted-foreground text-center">
          {t("contactFormFooterNote")}{" "}
          <a href="mailto:mohameddhiaarfa@gmail.com" className="text-accent hover:underline font-medium">
            mohameddhiaarfa@gmail.com
          </a>
        </p>
      </form>
    </motion.div>
  )
}
