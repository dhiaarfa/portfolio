import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { freebieById, freebieDownloadUrl } from "@/lib/freebies"
import { escHtml } from "@/lib/html-escape"
import { checkRateLimit } from "@/lib/rate-limit"

function getSender() {
  return (
    process.env.DELIVERY_FROM ||
    process.env.NOTIFY_FROM ||
    "Mohamed Dhia Portfolio <onboarding@resend.dev>"
  )
}

function buildEmailHTML({
  type,
  name,
  email,
  subject,
  message,
}: {
  type: string
  name?: string
  email: string
  subject?: string
  message?: string
}) {
  const isNewsletter = type === "newsletter"
  const title = isNewsletter ? "Newsletter Signup" : "New Contact Message"
  const safeName = name ? escHtml(name) : ""
  const safeEmail = escHtml(email)
  const safeSubject = subject ? escHtml(subject) : ""
  const safeMessage = message ? escHtml(message) : ""
  const date = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:20px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:520px;margin:0 auto">
    <div style="background:#16a34a;padding:24px 32px;border-radius:16px 16px 0 0">
      <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:700">${title}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:12px">dhia-portfolio.me · ${date}</p>
    </div>
    <div style="background:#ffffff;padding:28px 32px;border:1px solid #e2e8f0;border-top:none">
      ${
        safeName
          ? `<div style="margin-bottom:16px"><p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8">From</p><p style="margin:0;font-size:15px;color:#0f172a;font-weight:500">${safeName}</p></div>`
          : ""
      }
      <div style="margin-bottom:16px">
        <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8">Email</p>
        <p style="margin:0"><a href="mailto:${safeEmail}" style="color:#16a34a;font-size:15px;text-decoration:none">${safeEmail}</a></p>
      </div>
      ${
        safeSubject
          ? `<div style="margin-bottom:16px"><p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8">Subject</p><p style="margin:0;font-size:15px;color:#0f172a">${safeSubject}</p></div>`
          : ""
      }
      ${
        safeMessage
          ? `<div style="margin-top:20px"><p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8">Message</p><div style="background:#f8fafc;border-left:3px solid #16a34a;padding:14px 16px;border-radius:0 8px 8px 0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap">${safeMessage}</div></div>`
          : ""
      }
    </div>
    <div style="background:#f8fafc;padding:14px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 16px 16px">
      <p style="margin:0;font-size:12px;color:#94a3b8">${
        isNewsletter
          ? "Newsletter signup notification — dhia-portfolio.me"
          : `Reply directly to this email to respond to ${safeName || safeEmail}.`
      }</p>
    </div>
  </div>
</body>
</html>`
}

function buildAutoReplyHTML(firstName: string) {
  const safe = escHtml(firstName)
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:32px 20px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
    <div style="background:#16a34a;padding:24px 32px"><p style="margin:0;font-size:20px;color:#fff">✓</p></div>
    <div style="padding:32px">
      <h2 style="margin:0 0 12px;font-size:20px;color:#0f172a;font-weight:700">Got it, ${safe}!</h2>
      <p style="margin:0 0 16px;color:#475569;line-height:1.7;font-size:15px">Thanks for reaching out. I've received your message and will get back to you within 24 hours.</p>
      <p style="margin:0 0 24px;color:#475569;line-height:1.7;font-size:15px">Need a faster response? <a href="https://calendly.com/benarfa367/30min" style="color:#16a34a;font-weight:600;text-decoration:none">Book a free 30-min call</a> directly.</p>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 20px">
      <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.6"><strong style="color:#475569">Mohamed Dhia Arfa</strong><br>Graphic Designer · Trainer · Web Developer<br><a href="https://dhia-portfolio.me" style="color:#16a34a;text-decoration:none">dhia-portfolio.me</a></p>
    </div>
  </div>
</body></html>`
}

function visitorFreebieEmailHtml({
  name,
  title,
  url,
  isCanva,
}: {
  name: string
  title: string
  url: string
  isCanva: boolean
}) {
  const cta = isCanva ? "Open the template" : "Download your file"
  return `
  <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;max-width:560px;margin:auto">
    <div style="background:#16a34a;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">
      <h2 style="margin:0">Here's your free resource</h2>
    </div>
    <div style="border:1px solid #e5e7eb;border-top:0;padding:24px;border-radius:0 0 12px 12px;background:#ffffff">
      <p>Hi ${name},</p>
      <p>Thanks for grabbing <b>${title}</b>. Here it is:</p>
      <p style="text-align:center;margin:28px 0">
        <a href="${url}" style="background:#16a34a;color:#fff;text-decoration:none;padding:14px 28px;border-radius:9999px;font-weight:600;display:inline-block">${cta}</a>
      </p>
      <p style="font-size:13px;color:#6b7280">If the button doesn't work, copy this link:<br><a href="${url}">${url}</a></p>
      <hr style="border:0;border-top:1px solid #eee;margin:24px 0">
      <p style="font-size:13px;color:#6b7280">— Mohamed Dhia · <a href="https://dhia-portfolio.me">dhia-portfolio.me</a></p>
    </div>
  </div>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message, type, freebieId, website } = body

    if (website) {
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
    const safeName = escHtml(name) || "there"

    if (type === "freebie") {
      const freebie = freebieById(freebieId)
      if (!freebie) {
        return NextResponse.json({ error: "Resource not available." }, { status: 404 })
      }

      const downloadUrl = freebieDownloadUrl(freebie)
      const isCanva = freebie.delivery.kind === "canva"

      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const receiver = process.env.CONTACT_RECEIVER || "mohameddhiaarfa@gmail.com"
        const sender = getSender()

        resend.emails
          .send({
            from: sender,
            to: [receiver],
            replyTo: trimmedEmail,
            subject: `Freebie download: ${escHtml(freebie.title)}`,
            html: `<p><b>${safeName}</b> (${escHtml(trimmedEmail)}) downloaded "${escHtml(freebie.title)}".</p>`,
          })
          .catch((err) => console.error("[EMAIL] owner notify failed", err))

        try {
          await resend.emails.send({
            from: sender,
            to: [trimmedEmail],
            subject: `Your free download: ${freebie.title}`,
            html: visitorFreebieEmailHtml({
              name: safeName,
              title: escHtml(freebie.title),
              url: downloadUrl,
              isCanva,
            }),
          })
        } catch (err) {
          console.error("[EMAIL] visitor delivery email failed", err)
        }
      } else {
        console.warn("[EMAIL] RESEND_API_KEY not set — freebie delivered on-page only")
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
        : `${name || "Contact"} via dhia-portfolio.me — ${subject || "New message"}`,
      html: buildEmailHTML({
        type: type || "contact",
        name: name || undefined,
        email: trimmedEmail,
        subject: subject || undefined,
        message: message || undefined,
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

    if (!isNewsletter && name && email) {
      const firstName = name.trim().split(" ")[0]
      resend.emails
        .send({
          from: sender,
          to: [trimmedEmail],
          subject: `Got it, ${firstName}! I'll reply within 24h`,
          html: buildAutoReplyHTML(firstName),
        })
        .catch((err: unknown) => console.error("[EMAIL] Auto-reply error:", err))
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
