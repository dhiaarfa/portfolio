import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const gmailUser = process.env.GMAIL_USER?.trim()
    const gmailPass = (process.env.GMAIL_APP_PASSWORD ?? "").replace(/\s/g, "").trim()
    if (!gmailUser || !gmailPass) {
      return NextResponse.json(
        {
          error: "Email service not configured.",
          hint: "Add GMAIL_USER and GMAIL_APP_PASSWORD to .env.local (see EMAIL_SETUP.md). Use a Gmail App Password, not your normal password.",
        },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { name, email, phone, company, service, budget, message, type } = body

    // Handle newsletter subscription
    if (type === "newsletter") {
      if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 })
      }

      const transporter = nodemailer.createTransporter({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      })

      await transporter.verify()

      // Newsletter subscription notification
      const newsletterNotification = {
        from: gmailUser,
        to: "benarfa367@gmail.com",
        subject: `New Newsletter Subscription`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Newsletter Subscription</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      }

      // Welcome email to subscriber
      const welcomeEmail = {
        from: gmailUser,
        to: email,
        subject: "Welcome to Mohamed Dhia's Newsletter!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Welcome to my Newsletter!</h2>
            <p>Thank you for subscribing to my newsletter. You'll receive updates about:</p>
            <ul>
              <li>Latest design projects and insights</li>
              <li>Training opportunities and workshops</li>
              <li>Industry trends and tips</li>
              <li>Exclusive content and resources</li>
            </ul>
            <p>Best regards,<br>Mohamed Dhia Arfa</p>
          </div>
        `,
      }

      await Promise.all([transporter.sendMail(newsletterNotification), transporter.sendMail(welcomeEmail)])

      return NextResponse.json({ success: true, message: "Newsletter subscription successful" })
    }

    // Handle contact form submission
    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    })

    await transporter.verify()

    // Contact form notification
    const notificationEmail = {
      from: gmailUser,
      to: "benarfa367@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
          </div>
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Project Details</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          </div>
          <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #a16207; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    }

    // Auto-reply to sender
    const autoReply = {
      from: gmailUser,
      to: email,
      subject: "Thank you for your message - Mohamed Dhia Arfa",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your interest in my services. I have received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${budget || "To be discussed"}</p>
            <p><strong>Message:</strong> ${message.substring(0, 200)}${message.length > 200 ? "..." : ""}</p>
          </div>
          
          <p>In the meantime, feel free to connect with me:</p>
          <ul>
            <li>Email: <a href="mailto:mohameddhiaarfa@gmail.com">mohameddhiaarfa@gmail.com</a></li>
            <li>Phone: +216 53 580 272</li>
          </ul>
          
          <p>Best regards,<br>Mohamed Dhia Arfa</p>
        </div>
      `,
    }

    await Promise.all([transporter.sendMail(notificationEmail), transporter.sendMail(autoReply)])

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
