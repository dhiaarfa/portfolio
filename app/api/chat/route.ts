import { NextRequest, NextResponse } from "next/server"
import { CHAT_MODEL, CHAT_SYSTEM_PROMPT } from "@/lib/chat-config"
import { checkRateLimit } from "@/lib/rate-limit"

type ChatMessage = { role: "user" | "assistant"; content: string }

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown"

    if (!checkRateLimit(`chat:${ip}`, 20)) {
      return NextResponse.json({ error: "Too many messages. Please wait a moment." }, { status: 429 })
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "Chat is not configured yet. Email mohameddhiaarfa@gmail.com instead." },
        { status: 503 },
      )
    }

    const body = await req.json()
    const messages = body.messages as ChatMessage[] | undefined

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Message required." }, { status: 400 })
    }

    // Only well-formed text turns, each capped: the assistant is scoped to
    // questions about Dhia (see CHAT_SYSTEM_PROMPT), so long pasted content
    // is never needed -- and uncapped input was both a cost risk and an easy
    // way to bury the scope rules under a wall of injected text.
    const MAX_CHARS = 800
    const trimmed = messages
      .slice(-12)
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }))
    if (trimmed.length === 0 || trimmed[trimmed.length - 1]?.role !== "user") {
      return NextResponse.json({ error: "Invalid message." }, { status: 400 })
    }

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dhia-portfolio.com",
        "X-Title": "Mohamed Dhia Portfolio",
      },
      body: JSON.stringify({
        model: CHAT_MODEL,
        messages: [{ role: "system", content: CHAT_SYSTEM_PROMPT }, ...trimmed],
        max_tokens: 400,
        // Lower than the old 0.6: a scoped site assistant should stay on
        // script, not improvise.
        temperature: 0.3,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error("[CHAT] OpenRouter error:", data)
      return NextResponse.json({ error: "Could not get a reply. Try again." }, { status: 502 })
    }

    const reply = data.choices?.[0]?.message?.content?.trim()
    if (!reply) {
      return NextResponse.json({ error: "Empty response." }, { status: 502 })
    }

    return NextResponse.json({ reply })
  } catch (err) {
    console.error("[CHAT]", err)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}
