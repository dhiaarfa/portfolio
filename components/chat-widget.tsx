"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type Msg = { role: "user" | "assistant"; content: string }

export default function ChatWidget() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: t("chatWelcome") },
  ])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, open])

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
        body: JSON.stringify({
          messages: next.filter((m) => m.role === "user" || m.role === "assistant"),
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || t("chatError"))
        setLoading(false)
        return
      }
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
    } catch {
      setError(t("chatError"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 md:bg-transparent md:pointer-events-none"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      <div className="fixed bottom-24 right-4 md:right-8 z-[70] flex flex-col items-end gap-3">
        {open && (
          <div
            className="w-[min(100vw-2rem,380px)] h-[min(70vh,520px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-accent text-white">
              <div>
                <p className="font-semibold text-sm">{t("chatTitle")}</p>
                <p className="text-xs opacity-90">{t("chatSubtitle")}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/20"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-[15px] lg:text-base">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto bg-accent text-white"
                      : "mr-auto bg-muted text-foreground"
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
              {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
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
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-2.5 rounded-xl bg-accent text-white disabled:opacity-50"
                aria-label="Send"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-full bg-accent text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center pointer-events-auto"
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </>
  )
}
