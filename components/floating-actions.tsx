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
        <div className="fixed inset-0 z-[60] bg-black/40 md:bg-transparent md:pointer-events-none" onClick={() => setChatOpen(false)} aria-hidden />
      )}

      {chatOpen && (
        <div
          className="fixed bottom-[7.5rem] left-4 md:left-6 z-[70] w-[min(100vw-2rem,380px)] h-[min(62vh,480px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-slate-900 text-white">
            <div>
              <p className="font-semibold text-sm">{t("chatTitle")}</p>
              <p className="text-xs opacity-90">{t("chatSubtitle")}</p>
            </div>
            <button type="button" onClick={() => setChatOpen(false)} className="p-1.5 rounded-lg hover:bg-white/20" aria-label="Close chat">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-[15px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                  m.role === "user" ? "ml-auto bg-accent text-white" : "mr-auto bg-muted text-foreground"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Loader2 className="w-4 h-4 animate-spin" /> {t("chatThinking")}
              </div>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <form
            className="p-3 border-t border-border flex gap-2"
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
              className="flex-1 px-3 py-2.5 rounded-xl border border-border bg-background text-foreground text-[15px] focus:outline-none focus:ring-2 focus:ring-accent/40"
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} className="p-2.5 rounded-xl bg-accent text-white disabled:opacity-50" aria-label="Send">
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      <div className="fixed bottom-5 left-4 md:left-6 z-50 flex flex-col gap-3 safe-area-pb">
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
