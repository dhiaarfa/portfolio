"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { X, Send, Loader2 } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"
import { type AssistantNudge, nudgesForPath } from "@/lib/assistant-nudges"
import { faqs } from "@/lib/faqs"

type Msg = { role: "user" | "assistant"; content: string }

const NUDGE_SHOWN_KEY = "dhia-nudges-shown"
const NUDGE_VISIBLE_MS = 14000
const NUDGE_GAP_MS = 28000
const FIRST_NUDGE_MS = 5000

function readShownIds(): Set<string> {
  if (typeof window === "undefined") return new Set()
  try {
    return new Set(JSON.parse(sessionStorage.getItem(NUDGE_SHOWN_KEY) || "[]") as string[])
  } catch {
    return new Set()
  }
}

function markShown(id: string) {
  const shown = readShownIds()
  shown.add(id)
  sessionStorage.setItem(NUDGE_SHOWN_KEY, JSON.stringify([...shown]))
}

export default function FloatingActions() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: t("chatWelcome") }])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [activeNudge, setActiveNudge] = useState<AssistantNudge | null>(null)
  const [nudgeVisible, setNudgeVisible] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const nudgeIndexRef = useRef(0)
  const nudgeTimersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  // The FAQ list used to render in full as its own accordion section at the
  // bottom of the homepage. Per Dhia's feedback there were too many
  // questions to show at once there, so they now live here instead — inside
  // the assistant, one question visible at a time, sliding to the next
  // every few seconds (same fade/translate pattern as the hero's
  // AnimatedRole) rather than a wall of chips.
  const [faqIndex, setFaqIndex] = useState(0)
  const [faqShow, setFaqShow] = useState(true)

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].role === "assistant") {
        return [{ role: "assistant", content: t("chatWelcome") }]
      }
      return prev
    })
  }, [t])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, chatOpen])

  useEffect(() => {
    if (!chatOpen || faqs.length <= 1) return
    const timer = setInterval(() => {
      setFaqShow(false)
      setTimeout(() => {
        setFaqIndex((i) => (i + 1) % faqs.length)
        setFaqShow(true)
      }, 250)
    }, 4500)
    return () => clearInterval(timer)
  }, [chatOpen])

  const clearNudgeTimers = useCallback(() => {
    nudgeTimersRef.current.forEach(clearTimeout)
    nudgeTimersRef.current = []
  }, [])

  const dismissNudge = useCallback(
    (id?: string, scheduleNext = false) => {
      if (id) markShown(id)
      setNudgeVisible(false)
      setActiveNudge(null)
      if (scheduleNext) {
        const timer = setTimeout(() => showNextNudgeRef.current(), NUDGE_GAP_MS)
        nudgeTimersRef.current.push(timer)
      }
    },
    []
  )

  const showNextNudgeRef = useRef<() => void>(() => {})

  showNextNudgeRef.current = () => {
    if (chatOpen) return

    const queue = nudgesForPath(pathname)
    const shown = readShownIds()
    let attempts = 0

    while (attempts < queue.length) {
      const idx = nudgeIndexRef.current % queue.length
      nudgeIndexRef.current = idx + 1
      const nudge = queue[idx]
      attempts++

      if (!shown.has(nudge.id)) {
        setActiveNudge(nudge)
        setNudgeVisible(true)
        const autoDismiss = setTimeout(() => dismissNudge(nudge.id, true), NUDGE_VISIBLE_MS)
        nudgeTimersRef.current.push(autoDismiss)
        return
      }
    }
  }

  useEffect(() => {
    clearNudgeTimers()
    nudgeIndexRef.current = 0
    setNudgeVisible(false)
    setActiveNudge(null)

    const first = setTimeout(() => showNextNudgeRef.current(), FIRST_NUDGE_MS)
    nudgeTimersRef.current.push(first)

    return clearNudgeTimers
  }, [pathname, clearNudgeTimers])

  useEffect(() => {
    if (chatOpen && nudgeVisible) {
      dismissNudge(activeNudge?.id)
    }
  }, [chatOpen, nudgeVisible, activeNudge?.id, dismissNudge])

  const openChatWithPrompt = (prompt?: string) => {
    setChatOpen(true)
    if (prompt) {
      setMessages((prev) => [...prev, { role: "assistant", content: prompt }])
    }
  }

  const handleNudgeAction = (nudge: AssistantNudge) => {
    dismissNudge(nudge.id, true)

    if (nudge.id === "whatsapp") {
      window.open(
        `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
        "_blank",
        "noopener,noreferrer"
      )
      return
    }

    if (nudge.actionKey === "chatNudgeActionChat" || !nudge.href) {
      openChatWithPrompt(t(nudge.messageKey))
      return
    }

    if (nudge.href.startsWith("http")) {
      window.open(nudge.href, "_blank", "noopener,noreferrer")
      return
    }

    router.push(nudge.href)
  }

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    setError("")
    setInput("")
    const next: Msg[] = [...messages, { role: "user", content: trimmed }]
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

  const send = () => sendMessage(input)

  // Kept current via a ref (same pattern as showNextNudgeRef below) so the
  // mount-once "dhia:ask-ai" listener always calls the latest closure
  // instead of the one captured when the effect first ran.
  const sendMessageRef = useRef<(text: string) => void>(() => {})
  sendMessageRef.current = sendMessage

  // Lets the homepage hero's suggestion pills / "ask me anything" bar open
  // this same floating chat and optionally send a prompt straight away,
  // without lifting this component's state up into a shared context.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ prompt?: string }>).detail ?? {}
      setChatOpen(true)
      if (detail.prompt) sendMessageRef.current(detail.prompt)
    }
    window.addEventListener("dhia:ask-ai", handler)
    return () => window.removeEventListener("dhia:ask-ai", handler)
  }, [])

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
          className="fixed bottom-[7.5rem] left-4 md:left-6 z-[70] w-[min(100vw-2rem,380px)] h-[min(62vh,480px)] flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-black/10 dark:border-border dark:bg-card dark:ring-white/10"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label={t("chatTitle")}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-slate-900 px-4 py-3 text-white dark:border-border">
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
            className="flex-1 space-y-3 overflow-y-auto bg-slate-100 p-4 text-[15px] dark:bg-background"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "ml-auto bg-accent text-white"
                    : "mr-auto border border-slate-200 bg-white text-slate-900 dark:border-border dark:bg-muted dark:text-slate-100"
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
          {/* One FAQ question at a time instead of a full list — see the
              faqIndex effect above. Tapping it sends that question straight
              into the conversation. */}
          <div className="flex shrink-0 items-center gap-2 border-t border-slate-200 bg-slate-50 px-3 py-2 dark:border-border dark:bg-card/60">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {t("chatSuggestedLabel")}
            </span>
            <button
              type="button"
              onClick={() => sendMessage(faqs[faqIndex].question)}
              disabled={loading}
              className={`min-w-0 flex-1 truncate rounded-full border border-accent/25 bg-accent-subtle px-3 py-1.5 text-left text-xs font-medium text-accent transition-all duration-300 hover:border-accent/50 disabled:opacity-50 ${
                faqShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
            >
              {faqs[faqIndex].question}
            </button>
          </div>
          <form
            className="flex shrink-0 gap-2 border-t border-slate-200 bg-white p-3 dark:border-border dark:bg-card"
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
              className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[15px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/40 dark:border-border dark:bg-muted dark:text-white"
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} className="rounded-xl bg-accent p-2.5 text-white disabled:opacity-50" aria-label="Send">
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}

      {/* The WhatsApp + AI-assistant trigger buttons that used to live here
          now live in the navbar (see navbar-new.tsx), restyled to match its
          neutral control theme instead of their old brand-green fills. This
          component still owns the chat panel above and the nudge bubble
          below — the navbar's AI button just dispatches the same
          "dhia:ask-ai" event the hero's ask bar already used to open it. */}
      {nudgeVisible && activeNudge && !chatOpen && (
        <div
          className="fixed bottom-5 left-4 z-50 w-[min(100vw-2.5rem,280px)] animate-in fade-in slide-in-from-bottom-2 duration-300 md:left-6"
          role="status"
          aria-live="polite"
        >
          <div className="rounded-2xl border border-slate-200 bg-white px-3.5 py-3 shadow-xl dark:border-border dark:bg-card">
            <button
              type="button"
              onClick={() => dismissNudge(activeNudge.id, true)}
              className="absolute right-2 top-2 rounded-md p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="text-[13px] leading-snug text-slate-800 dark:text-slate-100 pr-5">{t(activeNudge.messageKey)}</p>
            {activeNudge.actionKey && (
              <button
                type="button"
                onClick={() => handleNudgeAction(activeNudge)}
                className="mt-2.5 text-[12px] font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                {t(activeNudge.actionKey)} →
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
