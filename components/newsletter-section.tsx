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
        body: JSON.stringify({ email: email.trim(), type: "newsletter" }),
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
    <section id="newsletter" className="py-20 bg-[hsl(var(--zia-green))]/5 dark:bg-[hsl(var(--zia-green))]/10">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--zia-green))]/20 mb-4">
            <Mail className="w-6 h-6 text-[hsl(var(--zia-green))]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Get design & training insights
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join my newsletter for tips, project updates, and exclusive content. No spam.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === "loading"}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--zia-green))] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 rounded-lg bg-[hsl(var(--zia-green))] text-white font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
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

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-green-600 dark:text-green-400 flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              {message}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-red-600 dark:text-red-400 flex items-center justify-center gap-2"
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
