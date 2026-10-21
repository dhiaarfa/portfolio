import { NextRequest, NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { CHAT_MODEL, CHAT_SYSTEM_PROMPT } from "@/lib/chat-config"
import { checkRateLimit } from "@/lib/rate-limit"

type ChatMessage = { role: "user" | "assistant"; content: string }

// Server-side refusal fallback ("default" routes by refusal category) is
// only accepted for these models on the Claude API.
const FALLBACK_MODELS = new Set(["claude-fable-5-1", "claude-opus-5-5", "claude-opus-5", "claude-sonnet-5-5"])

let client: Anthropic | null = null
function getClient() {
  client ??= new Anthropic()
  return client
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown"

    if (!checkRateLimit(`chat:${ip}`, 20)) {
      return NextResponse.json({ error: "Too many messages. Please wait a moment." }, { status: 429 })
    }

    if (!process.env.ANTHROPIC_API_KEY && !process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "Chat is not configured yet. Email mohameddhiaarfa@gmail.com instead." },
        { status: 503 },
      )
    }

    let body: { messages?: unknown }
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 })
    }
    const messages = body?.messages as (ChatMessage | null)[] | undefined

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
      .filter((m): m is ChatMessage => !!m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }))
    if (trimmed.length === 0 || trimmed[trimmed.length - 1]?.role !== "user") {
      return NextResponse.json({ error: "Invalid message." }, { status: 400 })
    }

    // Transition: until ANTHROPIC_API_KEY is set on Vercel, keep answering
    // through the old OpenRouter key so the live chat never goes dark.
    if (!process.env.ANTHROPIC_API_KEY) {
      return openRouterReply(trimmed)
    }

    // The system prompt is identical on every request (no dates or per-user
    // data in it), so it is cached: after the first message, the long fact
    // sheet is billed at the cache-read rate instead of full input price.
    const useFallback = FALLBACK_MODELS.has(CHAT_MODEL)
    const response = await getClient().beta.messages.create({
      model: CHAT_MODEL,
      // Thinking can't be turned off on current models and counts toward
      // max_tokens; low effort keeps it short, the prompt keeps replies short.
      max_tokens: 2000,
      output_config: { effort: "low" },
      system: [{ type: "text", text: CHAT_SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages: trimmed,
      ...(useFallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
    })

    if (response.stop_reason === "refusal") {
      return NextResponse.json({
        reply: "I can only help with questions about Mohamed and his services. You can also email mohameddhiaarfa@gmail.com.",
      })
    }

    const reply = response.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim()
    if (!reply) {
      return NextResponse.json({ error: "Empty response." }, { status: 502 })
    }

    return NextResponse.json({ reply })
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "The assistant is busy. Try again in a minute." }, { status: 429 })
    }
    if (err instanceof Anthropic.APIError) {
      console.error("[CHAT] Claude API error", err.status, err.message)
      return NextResponse.json({ error: "Could not get a reply. Try again." }, { status: 502 })
    }
    console.error("[CHAT]", err)
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 })
  }
}

/** Previous provider, used only while ANTHROPIC_API_KEY is missing. Remove
 *  once the Claude key is set in Vercel. */
async function openRouterReply(messages: ChatMessage[]) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL ?? "openai/gpt-4o-mini",
      messages: [{ role: "system", content: CHAT_SYSTEM_PROMPT }, ...messages],
      max_tokens: 400,
      temperature: 0.3,
    }),
  })
  const data = await res.json()
  const reply = data.choices?.[0]?.message?.content?.trim()
  if (!res.ok || !reply) {
    console.error("[CHAT] OpenRouter error:", data)
    return NextResponse.json({ error: "Could not get a reply. Try again." }, { status: 502 })
  }
  return NextResponse.json({ reply })
}
