"use client"

import { useState, useRef, useEffect } from "react"
import { Sparkles, X, Send, Loader2 } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { WhatsAppIcon } from "@/lib/brand-icon"
import { useLanguage } from "@/components/language-provider"

type Msg = { role: "user" | "assistant"; content: string }

export default function FloatingActions() {
  const { t } = useLanguage()
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: t("chatWelcome") }])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, chatOpen])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setError("")
    setInput("")
    const next: Msg[] = [...messages, { role: "user", content: text }]
    setMessages(next)
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter((m) => m.role === "user" || m.role === "assistant") }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || t("chatError"))
        return
      }
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
    } catch {
      setError(t("chatError"))
    } finally {
      setLoading(false)
    }
  }

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <>
      {chatOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm"
          onClick={() => setChatOpen(false)}
          aria-hidden
        />
      )}

      {chatOpen && (
        <div
          className="fixed bottom-[7.5rem] left-4 md:left-6 z-[70] w-[min(100vw-2rem,380px)] h-[min(62vh,480px)] flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-black/10 dark:border-slate-600 dark:bg-slate-900 dark:ring-white/10"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label={t("chatTitle")}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-slate-900 px-4 py-3 text-white dark:border-slate-700">
            <div>
              <p className="text-sm font-semibold">{t("chatTitle")}</p>
              <p className="text-xs opacity-90">{t("chatSubtitle")}</p>
            </div>
            <button type="button" onClick={() => setChatOpen(false)} className="rounded-lg p-1.5 hover:bg-white/20" aria-label="Close chat">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto bg-slate-100 p-4 text-[15px] dark:bg-slate-950"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "ml-auto bg-accent text-white"
                    : "mr-auto border border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Loader2 className="h-4 w-4 animate-spin" /> {t("chatThinking")}
              </div>
            )}
            {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
          </div>
          <form
            className="flex shrink-0 gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chatPlaceholder")}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[15px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/40 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} className="rounded-xl bg-accent p-2.5 text-white disabled:opacity-50" aria-label="Send">
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}

      <div className="fixed bottom-5 left-4 z-50 flex flex-col gap-3 md:left-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 active:scale-95"
        >
          <WhatsAppIcon size={26} />
        </a>
        <button
          type="button"
          onClick={() => setChatOpen((o) => !o)}
          aria-label={chatOpen ? "Close AI assistant" : "Ask the AI assistant"}
          title="Ask the AI assistant"
          className="grid h-12 w-12 place-items-center rounded-full bg-emerald-700 text-white shadow-lg transition hover:scale-105 active:scale-95"
        >
          {chatOpen ? <X size={22} /> : <Sparkles size={22} />}
        </button>
      </div>
    </>
  )
}
