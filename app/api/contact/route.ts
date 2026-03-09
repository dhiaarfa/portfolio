import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// ─── HTML email template ───────────────────────────────────────────────────
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
  const title = isNewsletter ? "📧 Newsletter Signup" : "📩 New Contact Message"
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
    
    <!-- Header -->
    <div style="background:#16a34a;padding:24px 32px;border-radius:16px 16px 0 0">
      <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:700">${title}</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:12px">
        dhia-portfolio.me · ${date}
      </p>
    </div>

    <!-- Body -->
    <div style="background:#ffffff;padding:28px 32px;border:1px solid #e2e8f0;border-top:none">
      
      ${
        name
          ? `<div style="margin-bottom:16px">
        <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8">From</p>
        <p style="margin:0;font-size:15px;color:#0f172a;font-weight:500">${name}</p>
      </div>`
          : ""
      }

      <div style="margin-bottom:16px">
        <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8">Email</p>
        <p style="margin:0"><a href="mailto:${email}" style="color:#16a34a;font-size:15px;text-decoration:none">${email}</a></p>
      </div>

      ${
        subject
          ? `<div style="margin-bottom:16px">
        <p style="margin:0 0 2px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8">Subject</p>
        <p style="margin:0;font-size:15px;color:#0f172a">${subject}</p>
      </div>`
          : ""
      }

      ${
        message
          ? `<div style="margin-top:20px">
        <p style="margin:0 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8">Message</p>
        <div style="background:#f8fafc;border-left:3px solid #16a34a;padding:14px 16px;border-radius:0 8px 8px 0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap">${message}</div>
      </div>`
          : ""
      }
    </div>

    <!-- Footer -->
    <div style="background:#f8fafc;padding:14px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 16px 16px">
      <p style="margin:0;font-size:12px;color:#94a3b8">
        ${
          isNewsletter
            ? "Newsletter signup notification — dhia-portfolio.me"
            : `Reply directly to this email to respond to ${name || email}.`
        }
      </p>
    </div>
  </div>
</body>
</html>`
}

// ─── Auto-reply template for contact form ─────────────────────────────────
function buildAutoReplyHTML(firstName: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:32px 20px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
    <div style="background:#16a34a;padding:24px 32px">
      <p style="margin:0;font-size:20px">✅</p>
    </div>
    <div style="padding:32px">
      <h2 style="margin:0 0 12px;font-size:20px;color:#0f172a;font-weight:700">
        Got it, ${firstName}!
      </h2>
      <p style="margin:0 0 16px;color:#475569;line-height:1.7;font-size:15px">
        Thanks for reaching out. I've received your message and will get back to you within 24 hours.
      </p>
      <p style="margin:0 0 24px;color:#475569;line-height:1.7;font-size:15px">
        Need a faster response? 
        <a href="https://calendly.com/benarfa367/30min" style="color:#16a34a;font-weight:600;text-decoration:none">
          Book a free 30-min call
        </a> directly.
      </p>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 20px">
      <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.6">
        <strong style="color:#475569">Mohamed Dhia Arfa</strong><br>
        Graphic Designer · Trainer · Web Developer<br>
        <a href="https://dhia-portfolio.me" style="color:#16a34a;text-decoration:none">dhia-portfolio.me</a>
      </p>
    </div>
  </div>
</body>
</html>`
}

// ─── POST handler ──────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // ── 1. Parse body ────────────────────────────────────────────────────
    const body = await req.json()
    const { name, email, subject, message, type } = body

    // ── 2. Validate ──────────────────────────────────────────────────────
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    // ── 3. Check API key ─────────────────────────────────────────────────
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

    // Initialize client lazily so build does not crash when key is missing
    const resend = new Resend(process.env.RESEND_API_KEY)
    const receiver = process.env.CONTACT_RECEIVER || "mohameddhiaarfa@gmail.com"
    const isNewsletter = type === "newsletter"

    // ── 4. Handle freebie downloads (notification only) ──────────────────
    if (type === "freebie") {
      const { error: freebieError } = await resend.emails.send({
        from: "Mohamed Dhia Portfolio <onboarding@resend.dev>",
        to: [receiver],
        subject: `📥 Freebie download: ${subject || "Unknown resource"}`,
        html: buildEmailHTML({
          type: "freebie",
          name: name || undefined,
          email: email.trim(),
          subject: subject || "Freebie download",
          message: message || "",
        }),
      })

      if (freebieError) {
        console.error("[EMAIL] Resend freebie error:", freebieError)
        return NextResponse.json(
          {
            error: "Unable to send message right now.",
            hint: "Please try again or contact me at mohameddhiaarfa@gmail.com",
          },
          { status: 500 },
        )
      }

      return NextResponse.json({ success: true })
    }

    // ── 5. Send notification email to Dhia ───────────────────────────────
    const { error: sendError } = await resend.emails.send({
      // Free tier: must use onboarding@resend.dev OR your verified domain
      from: "Mohamed Dhia Portfolio <onboarding@resend.dev>",
      to: [receiver],
      reply_to: email.trim(),
      subject: isNewsletter
        ? `📧 Newsletter signup: ${email.trim()}`
        : `📩 ${name || "Contact"} via dhia-portfolio.me — ${subject || "New message"}`,
      html: buildEmailHTML({
        type: type || "contact",
        name: name || undefined,
        email: email.trim(),
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

    // ── 6. Send auto-reply to sender (contact only, not newsletter) ───────
    if (!isNewsletter && name && email) {
      const firstName = name.trim().split(" ")[0]

      // Don't await — send in background, don't block the response
      resend.emails
        .send({
          from: "Mohamed Dhia Arfa <onboarding@resend.dev>",
          to: [email.trim()],
          subject: `Got it, ${firstName}! I'll reply within 24h ✅`,
          html: buildAutoReplyHTML(firstName),
        })
        .catch((err: unknown) => {
          // Log but don't fail the whole request if auto-reply fails
          console.error("[EMAIL] Auto-reply error:", err)
        })
    }

    // ── 7. Success ────────────────────────────────────────────────────────
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
