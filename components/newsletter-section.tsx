"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle2, AlertCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function NewsletterSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "", email: email.trim(), message: "Newsletter signup", type: "newsletter" }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setEmail("")
        setMessage("You're in! Check your inbox for a welcome message.")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <section id="newsletter" className="py-20 bg-slate-950">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-muted mb-4">
            <Mail className="w-6 h-6 text-green-400" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {t("getDesignInsights")}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            {t("newsletterTagline")}
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-4 mb-2 mt-4">
            {[t("newsletterBenefit1"), t("newsletterBenefit2"), t("newsletterBenefit3")].map((item) => (
              <span key={item} className="text-xs text-slate-500">
                {item}
              </span>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              disabled={status === "loading"}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:border-accent text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 rounded-xl bg-accent hover:opacity-90 text-white font-semibold text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {status === "loading" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t("subscribing")}
                </>
              ) : (
                t("subscribe")
              )}
            </button>
          </form>
          <p className="text-[11px] text-slate-500 mt-2">{t("newsletterNoSpam")}</p>

          {/* Status */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-green-400 flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              {message}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-red-500 flex items-center justify-center gap-2"
            >
              <AlertCircle className="w-4 h-4" />
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
