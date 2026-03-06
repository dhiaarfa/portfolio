import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, type } = await req.json()
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 })

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      return NextResponse.json(
        {
          error: "Email service is not configured.",
          hint: "Please try again later or contact me directly at mohameddhiaarfa@gmail.com.",
        },
        { status: 500 },
      )
    }

    const to = process.env.CONTACT_RECEIVER || process.env.GMAIL_USER

    await transporter.sendMail({
      from: `"dhia-portfolio.me" <${process.env.GMAIL_USER}>`,
      to,
      replyTo: email,
      subject:
        type === "newsletter"
          ? `📧 Newsletter signup: ${email}`
          : `📩 ${name || "Contact"} via dhia-portfolio.me — ${subject || "Contact"}`,
      html: `<div style="font-family:system-ui;max-width:520px;margin:0 auto">
        <div style="background:#16a34a;padding:20px 28px;border-radius:12px 12px 0 0">
          <h2 style="color:#fff;margin:0;font-size:17px">${type === "newsletter" ? "📧 Newsletter Signup" : "📩 New Message"}</h2>
        </div>
        <div style="background:#f8fafc;padding:24px 28px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px">
          <p><b>From:</b> ${name || "—"}</p>
          <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
          ${subject ? `<p><b>Subject:</b> ${subject}</p>` : ""}
          ${message ? `<div style="background:#fff;border-left:3px solid #16a34a;padding:12px 16px;border-radius:0 8px 8px 0;margin-top:12px;white-space:pre-wrap">${message}</div>` : ""}
        </div>
      </div>`,
    })

    if (type !== "newsletter" && name) {
      await transporter.sendMail({
        from: `"Mohamed Dhia Arfa" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Got it, ${name.split(" ")[0]}! I'll reply within 24h ✅`,
        html: `<div style="font-family:system-ui;max-width:480px;margin:0 auto;padding:32px">
          <p style="font-size:18px;font-weight:700;color:#0f172a">Hi ${name.split(" ")[0]}, thanks for reaching out!</p>
          <p style="color:#475569;line-height:1.7">I've received your message and will reply within 24 hours.</p>
          <p style="color:#475569">Need faster? <a href="https://calendly.com/benarfa367/30min" style="color:#16a34a">Book a call directly</a>.</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0">
          <p style="color:#94a3b8;font-size:12px">Mohamed Dhia · <a href="https://dhia-portfolio.me" style="color:#16a34a">dhia-portfolio.me</a></p>
        </div>`,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown"
    console.error("[EMAIL ERROR]", msg)
    return NextResponse.json(
      {
        error: "Unable to send message right now.",
        hint: "Please try again later or reach out directly at mohameddhiaarfa@gmail.com.",
        details: process.env.NODE_ENV === "development" ? msg : undefined,
      },
      { status: 500 },
    )
  }
}
