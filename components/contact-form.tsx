"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, AlertCircle, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { Link } from "next-view-transitions"
import { useLanguage } from "@/components/language-provider"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Service = "design" | "development" | "training" | "other"
type Field = "name" | "email" | "message"

const inputClass = (invalid: boolean) =>
  `w-full px-4 py-3 border rounded-xl bg-background focus:outline-none focus:ring-2 transition-all touch-manipulation text-base disabled:opacity-60 ${
    invalid
      ? "border-red-500 focus:ring-red-500/40 focus:border-red-500"
      : "border-border focus:ring-accent focus:border-accent"
  }`

/** `defaultService` preselects the dropdown for the page the form sits on
 *  (it used to say "Design" even on /trainer and /developer). */
export default function ContactForm({ defaultService = "design" }: { defaultService?: Service }) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: defaultService as string,
    website: "",
  })
  // Inline, per-field errors (roadmap: "validation states look intentional"):
  // toasts alone vanish and never say which field is wrong.
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<Field, string>>>({})
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [errorHint, setErrorHint] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name in fieldErrors) setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const errors: Partial<Record<Field, string>> = {}
    if (!formData.name?.trim()) errors.name = t("toastEnterName")
    if (!formData.email?.trim()) errors.email = t("toastEnterEmail")
    else if (!EMAIL_REGEX.test(formData.email.trim())) errors.email = t("toastInvalidEmail")
    if (!formData.message?.trim()) errors.message = t("toastEnterMessage")
    setFieldErrors(errors)
    const first = (["name", "email", "message"] as const).find((f) => errors[f])
    if (first) {
      const firstRef = { name: nameRef, email: emailRef, message: messageRef }[first]
      firstRef.current?.focus()
      return false
    }
    return true
  }

  const fieldProps = (field: Field) => ({
    "aria-invalid": !!fieldErrors[field],
    "aria-describedby": fieldErrors[field] ? `${field}-error` : undefined,
  })
  const fieldError = (field: Field) =>
    fieldErrors[field] ? (
      <p id={`${field}-error`} className="flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
        <AlertCircle className="h-4 w-4 shrink-0" />
        {fieldErrors[field]}
      </p>
    ) : null

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
      setFormData({ name: "", email: "", message: "", service: defaultService, website: "" })
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
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
            ref={nameRef}
            autoComplete="name"
            {...fieldProps("name")}
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t("contactFormNamePlaceholder")}
            className={`${inputClass(!!fieldErrors.name)} min-h-[44px]`}
            disabled={status === "loading"}
          />
          {fieldError("name")}
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
            ref={emailRef}
            autoComplete="email"
            {...fieldProps("email")}
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t("contactFormEmailPlaceholder")}
            className={`${inputClass(!!fieldErrors.email)} min-h-[44px]`}
            disabled={status === "loading"}
          />
          {fieldError("email")}
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
            className={`${inputClass(false)} min-h-[44px]`}
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
            ref={messageRef}
            {...fieldProps("message")}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t("contactFormMessagePlaceholder")}
            rows={5}
            className={`${inputClass(!!fieldErrors.message)} min-h-[120px] resize-y`}
            disabled={status === "loading"}
          />
          {fieldError("message")}
        </div>

        {/* Error Message */}
        {status === "error" && (
          <motion.div
            role="alert"
            className="flex gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900"
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
            role="status"
            className="flex gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900"
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
          aria-busy={status === "loading"}
          disabled={status === "loading" || status === "success"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 min-h-[48px] btn-green disabled:opacity-60 disabled:cursor-not-allowed font-semibold rounded-xl transition-all flex items-center justify-center gap-2 touch-manipulation text-base"
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
          {t("contactFormPrivacyNote")}{" "}
          <Link href="/privacy" className="underline hover:text-accent">{t("footerPrivacyLink")}</Link>
        </p>
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
