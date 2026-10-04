import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import { freebieById, freebieDownloadUrl } from "@/lib/freebies"
import { checkRateLimit } from "@/lib/rate-limit"
import { contactConfirmation, freebieDelivery, newsletterWelcome, ownerNotification } from "@/lib/email-templates"

// Request shape validation (audit hardening pass, Sep 2026). Bounds are
// generous on purpose -- e.g. no message *minimum* length, since the client
// form (contact-form.tsx) only requires non-empty, and a strict minimum here
// would silently reject real short messages that already passed client-side
// validation. `subject` mirrors contact-form.tsx's <select> values exactly
// (design/development/training/other) but stays optional/untyped for the
// newsletter and freebie flows, which never send it.
const MAX_BODY_BYTES = 15_000

const ContactRequestSchema = z.object({
  type: z.enum(["contact", "newsletter", "freebie"]).optional(),
  name: z.string().trim().max(150).optional(),
  email: z.string().trim().max(200).email("Please enter a valid email address."),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().max(5000).optional(),
  freebieId: z.string().trim().max(200).optional(),
  // Honeypot -- a real visitor never fills this (it's visually hidden), so
  // any non-empty value marks the submission as a bot.
  website: z.string().max(500).optional(),
  /** Page language, so the visitor's emails come back in it. */
  lang: z.enum(["en", "fr", "ar"]).optional(),
})

function getSender() {
  return (
    process.env.DELIVERY_FROM ||
    process.env.NOTIFY_FROM ||
    "Mohamed Dhia Portfolio <onboarding@resend.dev>"
  )
}

export async function POST(req: NextRequest) {
  try {
    const contentLength = Number(req.headers.get("content-length") || 0)
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 })
    }

    // Measure the real body too: content-length is optional (chunked
    // requests omit it), so the header check alone could be skipped.
    const text = await req.text()
    if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 })
    }
    let rawBody: unknown
    try {
      rawBody = JSON.parse(text)
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 })
    }
    const parsed = ContactRequestSchema.safeParse(rawBody)
    if (!parsed.success) {
      // Visitor-facing wording only: zod's own messages ("Required",
      // "Invalid enum value...") used to reach the form as-is.
      const issue = parsed.error.issues[0]
      const error =
        issue?.path[0] === "email"
          ? "Please enter a valid email address."
          : issue?.code === "too_big"
            ? "Your message is too long."
            : "Invalid request."
      return NextResponse.json({ error }, { status: 400 })
    }
    const { name, email, subject, message, type, freebieId, website } = parsed.data
    const lang = parsed.data.lang ?? "en"
    const firstName = name?.trim().split(/\s+/)[0] || undefined

    if (website) {
      // Honeypot tripped -- respond as if it succeeded so a bot doesn't
      // learn its submission was rejected, but do nothing further.
      return NextResponse.json({ success: true })
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown"

    if (type !== "freebie" && !checkRateLimit(`contact:${ip}`)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      )
    }

    if (type === "freebie" && !checkRateLimit(`freebie:${ip}`, 30)) {
      return NextResponse.json(
        { error: "Too many download attempts. Please try again later." },
        { status: 429 },
      )
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    const trimmedEmail = email.trim()

    if (type === "freebie") {
      if (!freebieId) {
        return NextResponse.json({ error: "Resource not available." }, { status: 404 })
      }
      const freebie = freebieById(freebieId)
      if (!freebie) {
        return NextResponse.json({ error: "Resource not available." }, { status: 404 })
      }

      const downloadUrl = freebieDownloadUrl(freebie)

      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const receiver = process.env.CONTACT_RECEIVER || "mohameddhiaarfa@gmail.com"
        const sender = getSender()

        resend.emails
          .send({
            from: sender,
            to: [receiver],
            replyTo: trimmedEmail,
            subject: `Resource download: ${freebie.title}`,
            html: ownerNotification({ kind: "freebie", name, email: trimmedEmail, freebieTitle: freebie.title, lang }),
          })
          .catch((err) => console.error("[EMAIL] owner notify failed", err))

        try {
          const mail = freebieDelivery({ lang, firstName, freebie, url: downloadUrl })
          await resend.emails.send({ from: sender, to: [trimmedEmail], replyTo: receiver, ...mail })
        } catch (err) {
          console.error("[EMAIL] visitor delivery email failed", err)
        }
      } else {
        console.warn("[EMAIL] RESEND_API_KEY not set, freebie delivered on-page only")
      }

      return NextResponse.json({
        ok: true,
        downloadUrl,
        title: freebie.title,
        kind: freebie.delivery.kind,
      })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[EMAIL] RESEND_API_KEY is not configured")
      return NextResponse.json(
        {
          error: "Email service is not configured.",
          hint: "Please contact me directly at mohameddhiaarfa@gmail.com",
        },
        { status: 500 },
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const receiver = process.env.CONTACT_RECEIVER || "mohameddhiaarfa@gmail.com"
    const sender = getSender()
    const isNewsletter = type === "newsletter"

    const { error: sendError } = await resend.emails.send({
      from: sender,
      to: [receiver],
      replyTo: trimmedEmail,
      subject: isNewsletter
        ? `Newsletter signup: ${trimmedEmail}`
        : `${name || "Contact"} via dhia-portfolio.com, ${subject || "New message"}`,
      html: ownerNotification({
        kind: isNewsletter ? "newsletter" : "contact",
        name: name || undefined,
        email: trimmedEmail,
        service: subject || undefined,
        message: message || undefined,
        lang,
      }),
    })

    if (sendError) {
      console.error("[EMAIL] Resend notification error:", sendError)
      return NextResponse.json(
        {
          error: "Unable to send message right now.",
          hint: "Please try again or contact me at mohameddhiaarfa@gmail.com",
        },
        { status: 500 },
      )
    }

    // The visitor's copy: a confirmation for messages, a welcome for new
    // subscribers (there was none before), in the page's language.
    const visitorMail = isNewsletter
      ? newsletterWelcome({ lang, firstName })
      : firstName
        ? contactConfirmation({ lang, firstName, service: subject || undefined, message: message || undefined })
        : null
    if (visitorMail) {
      // Awaited: on serverless, a promise left running after the response
      // can be cut off before the email goes out.
      try {
        await resend.emails.send({ from: sender, to: [trimmedEmail], replyTo: receiver, ...visitorMail })
      } catch (err: unknown) {
        console.error("[EMAIL] Visitor email error:", err)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error"
    console.error("[EMAIL] Unexpected error:", msg)
    return NextResponse.json(
      {
        error: "Something went wrong.",
        hint: "Please try again or contact me at mohameddhiaarfa@gmail.com",
        ...(process.env.NODE_ENV === "development" && { details: msg }),
      },
      { status: 500 },
    )
  }
}
