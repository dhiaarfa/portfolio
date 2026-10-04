import { escHtml } from "@/lib/html-escape"
import { SITE_URL } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import type { Freebie } from "@/lib/freebies"
import { publishedInsightArticles } from "@/lib/insights"

/**
 * Branded emails (Oct 2026): one layout for everything the site sends to a
 * visitor (contact confirmation, free-resource delivery, newsletter welcome)
 * and to Dhia (new message, new subscriber, new download).
 *
 * Email clients ignore most modern CSS, so this is table-based with inline
 * styles only, a hidden preheader line (the grey preview text in the inbox),
 * a "bulletproof" button that still works when images are off, an absolute
 * image URL for the avatar, and dir="rtl" for Arabic. Every visitor email
 * also gets a plain-text version (sent alongside, better deliverability).
 */

export type EmailLang = Language

const C = {
  ink: "#0A0A0A",
  accent: "#16a34a",
  accentDark: "#15803d",
  soft: "#f0fdf4",
  text: "#1f2937",
  muted: "#6b7280",
  rule: "#e5e7eb",
  page: "#f3f4f6",
}

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
const FONT_AR = "'IBM Plex Sans Arabic',Tahoma,Arial,sans-serif"

type Copy = Record<EmailLang, string>
const pick = (c: Copy, lang: EmailLang) => c[lang] ?? c.en

const SIGN = {
  tagline: { en: "Graphic Designer · Certified Trainer · Web Developer", fr: "Designer graphique · Formateur certifié · Développeur web", ar: "مصمم جرافيك · مدرب معتمد · مطوّر ويب" },
  name: { en: "Mohamed Dhia Arfa", fr: "Mohamed Dhia Arfa", ar: "محمد ضياء عرفة" },
}

function button(href: string, label: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto"><tr><td bgcolor="${C.accent}" style="border-radius:999px">
<a href="${href}" target="_blank" style="display:inline-block;padding:14px 30px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:999px">${label}</a>
</td></tr></table>`
}

function secondaryLink(href: string, label: string) {
  return `<a href="${href}" target="_blank" style="color:${C.accentDark};font-weight:600;text-decoration:none">${label}</a>`
}

/** Shared shell: preheader, dark header with avatar, white card, signature. */
function layout({
  lang,
  preheader,
  heading,
  body,
  showSignature = true,
}: {
  lang: EmailLang
  preheader: string
  heading: string
  body: string
  showSignature?: boolean
}) {
  const rtl = lang === "ar"
  const font = rtl ? FONT_AR : FONT
  const align = rtl ? "right" : "left"
  const avatar = `${SITE_URL}/images/photos/dhia-main.png`
  const social = [
    [siteConfig.linkedin, "LinkedIn"],
    [siteConfig.behance, "Behance"],
    [siteConfig.calendlyUrl, pick({ en: "Book a call", fr: "Réserver un appel", ar: "احجز مكالمة" }, lang)],
  ]
    .map(([href, label]) => `<a href="${href}" target="_blank" style="color:${C.muted};text-decoration:underline">${label}</a>`)
    .join(" &nbsp;·&nbsp; ")

  const signature = showSignature
    ? `<tr><td style="padding:0 32px 28px">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid ${C.rule}"><tr>
    <td width="56" style="padding-top:20px;vertical-align:top"><img src="${avatar}" width="44" height="44" alt="" style="display:block;border-radius:12px;border:2px solid ${C.accent}"></td>
    <td style="padding-top:20px;vertical-align:top;font-size:13px;line-height:1.5;color:${C.muted};text-align:${align}">
      <strong style="color:${C.text};font-size:14px">${pick(SIGN.name, lang)}</strong><br>${pick(SIGN.tagline, lang)}<br>
      <a href="${SITE_URL}" target="_blank" style="color:${C.accentDark};text-decoration:none">dhia-portfolio.com</a>
    </td>
  </tr></table>
</td></tr>`
    : ""

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${rtl ? "rtl" : "ltr"}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${heading}</title></head>
<body style="margin:0;padding:0;background:${C.page};-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.page}">${preheader}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page}" dir="${rtl ? "rtl" : "ltr"}">
<tr><td align="center" style="padding:28px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid ${C.rule};font-family:${font};text-align:${align}">
  <tr><td style="background:${C.ink};padding:22px 32px">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
      <td width="52" style="vertical-align:middle"><img src="${avatar}" width="40" height="40" alt="" style="display:block;border-radius:10px;border:2px solid ${C.accent}"></td>
      <td style="vertical-align:middle;color:#ffffff;font-size:15px;font-weight:700;text-align:${align}">${pick(SIGN.name, lang)}<br><span style="font-size:11px;font-weight:500;color:#a3a3a3;letter-spacing:.04em">${pick(SIGN.tagline, lang)}</span></td>
    </tr></table>
  </td></tr>
  <tr><td style="height:4px;background:${C.accent};line-height:4px;font-size:0">&nbsp;</td></tr>
  <tr><td style="padding:30px 32px 8px">
    <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:${C.ink};font-weight:800">${heading}</h1>
    <div style="font-size:15px;line-height:1.7;color:${C.text}">${body}</div>
  </td></tr>
  ${signature}
</table>
<p style="margin:16px 0 0;font-family:${font};font-size:11px;color:#9ca3af;text-align:center">${social}</p>
</td></tr>
</table>
</body></html>`
}

function t(lang: EmailLang, key: string): string | undefined {
  const dict = translations[lang] as Record<string, string | undefined>
  return dict[key] ?? (translations.en as Record<string, string | undefined>)[key]
}

function latestArticles(lang: EmailLang, count: number) {
  return [...publishedInsightArticles()]
    .sort((a, b) => (b.date > a.date ? 1 : -1))
    .slice(0, count)
    .map((a) => {
      const path = lang === "en" ? `/insights/${a.slug}` : `/${lang}/insights/${a.slug}`
      return { title: t(lang, a.titleKey as TranslationKey) ?? a.seoTitle, url: `${SITE_URL}${path}` }
    })
}

function articleList(lang: EmailLang, count: number) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:6px 0 18px">${latestArticles(lang, count)
    .map(
      (a) => `<tr><td style="padding:10px 14px;border:1px solid ${C.rule};border-radius:10px;background:#fafafa">
<a href="${a.url}" target="_blank" style="color:${C.ink};font-weight:600;text-decoration:none;font-size:14px">${escHtml(a.title)}</a></td></tr><tr><td style="height:8px;font-size:0;line-height:8px">&nbsp;</td></tr>`,
    )
    .join("")}</table>`
}

const localePath = (lang: EmailLang, path: string) => `${SITE_URL}${lang === "en" ? "" : `/${lang}`}${path}`

/* ─── Visitor: contact confirmation ─── */

const SERVICE_LABEL: Record<string, Copy> = {
  design: { en: "Branding & design", fr: "Identité et design", ar: "الهوية والتصميم" },
  development: { en: "Web development", fr: "Développement web", ar: "تطوير الويب" },
  training: { en: "Training & facilitation", fr: "Formation et facilitation", ar: "التدريب والتيسير" },
  other: { en: "Something else", fr: "Autre", ar: "موضوع آخر" },
}

export function contactConfirmation({
  lang,
  firstName,
  service,
  message,
}: {
  lang: EmailLang
  firstName: string
  service?: string
  message?: string
}) {
  const name = escHtml(firstName)
  const subject = pick({ en: `Got it, ${firstName}. I'll reply within 24 hours`, fr: `Bien reçu, ${firstName}. Je vous réponds sous 24 h`, ar: `وصلتني رسالتك يا ${firstName}، سأرد خلال 24 ساعة` }, lang)
  const serviceLabel = service && SERVICE_LABEL[service] ? pick(SERVICE_LABEL[service], lang) : ""
  const excerpt = message ? escHtml(message.length > 400 ? `${message.slice(0, 400)}…` : message) : ""
  const steps = {
    en: ["I read every message myself, usually the same day.", "You get a reply within 24 hours with questions or a first idea.", "If it fits, we book a free 30-minute call and you get a written quote."],
    fr: ["Je lis chaque message moi-même, en général le jour même.", "Vous recevez une réponse sous 24 h, avec mes questions ou une première idée.", "Si cela correspond, nous fixons un appel gratuit de 30 minutes et vous recevez un devis écrit."],
    ar: ["أقرأ كل رسالة بنفسي، عادة في اليوم نفسه.", "تصلك إجابة خلال 24 ساعة بأسئلتي أو بفكرة أولى.", "إن كان الأمر مناسباً، نحجز مكالمة مجانية مدتها 30 دقيقة وتستلم عرض سعر مكتوباً."],
  }[lang]
  const summary = excerpt
    ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:4px 0 22px"><tr><td style="background:${C.soft};border-radius:12px;padding:16px 18px;font-size:14px;color:${C.text}">
<div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.accentDark};margin-bottom:6px">${pick({ en: "Your message", fr: "Votre message", ar: "رسالتك" }, lang)}${serviceLabel ? ` · ${serviceLabel}` : ""}</div>
<div style="white-space:pre-wrap;line-height:1.6">${excerpt}</div></td></tr></table>`
    : ""
  const body = `<p style="margin:0 0 16px">${pick({ en: `Thanks for writing, ${name}. Your message reached me, and here is what happens next:`, fr: `Merci pour votre message, ${name}. Il m'est bien parvenu, voici la suite :`, ar: `شكراً على رسالتك يا ${name}. وصلتني، وهذا ما سيحدث الآن:` }, lang)}</p>
<ol style="margin:0 0 20px;padding-${lang === "ar" ? "right" : "left"}:20px">${steps.map((s) => `<li style="margin:0 0 8px">${s}</li>`).join("")}</ol>
${summary}
<p style="margin:0 0 22px">${pick({ en: "In a hurry? Pick a time that suits you:", fr: "Vous êtes pressé(e) ? Choisissez un créneau :", ar: "مستعجل؟ اختر الموعد الذي يناسبك:" }, lang)}</p>
${button(siteConfig.calendlyUrl, pick({ en: "Book a free 30-min call", fr: "Réserver un appel gratuit de 30 min", ar: "احجز مكالمة مجانية لـ30 دقيقة" }, lang))}
<p style="margin:22px 0 0;font-size:14px;color:${C.muted}">${pick({ en: "Meanwhile, you can browse", fr: "En attendant, vous pouvez parcourir", ar: "في الأثناء، يمكنك تصفّح" }, lang)} ${secondaryLink(localePath(lang, "/designer"), pick({ en: "design work", fr: "les créations", ar: "أعمال التصميم" }, lang))}${lang === "ar" ? "،" : ","} ${secondaryLink(localePath(lang, "/trainer"), pick({ en: "training", fr: "les formations", ar: "التدريب" }, lang))} ${pick({ en: "or", fr: "ou", ar: "أو" }, lang)} ${secondaryLink(localePath(lang, "/developer"), pick({ en: "websites", fr: "les sites web", ar: "المواقع" }, lang))}.</p>`
  const html = layout({
    lang,
    preheader: pick({ en: "Your message arrived. Here's what happens next.", fr: "Votre message est arrivé. Voici la suite.", ar: "وصلت رسالتك. هذا ما سيحدث الآن." }, lang),
    heading: pick({ en: "Message received ✓", fr: "Message bien reçu ✓", ar: "تم استلام رسالتك ✓" }, lang),
    body,
  })
  const text = [
    pick({ en: `Thanks for writing, ${firstName}. Your message reached me.`, fr: `Merci pour votre message, ${firstName}. Il m'est bien parvenu.`, ar: `شكراً على رسالتك يا ${firstName}. وصلتني.` }, lang),
    "",
    ...steps.map((s, i) => `${i + 1}. ${s}`),
    "",
    `${pick({ en: "Book a free call", fr: "Réserver un appel gratuit", ar: "احجز مكالمة مجانية" }, lang)}: ${siteConfig.calendlyUrl}`,
    "",
    `${pick(SIGN.name, lang)} · dhia-portfolio.com`,
  ].join("\n")
  return { subject, html, text }
}

/* ─── Visitor: free resource delivery ─── */

export function freebieDelivery({
  lang,
  firstName,
  freebie,
  url,
}: {
  lang: EmailLang
  firstName?: string
  freebie: Freebie
  url: string
}) {
  const title = t(lang, `freebie.${freebie.id}.title`) ?? freebie.title
  const description = t(lang, `freebie.${freebie.id}.description`) ?? freebie.description
  const format = t(lang, `freebie.${freebie.id}.format`) ?? freebie.format
  const isCanva = freebie.delivery.kind === "canva"
  const hi = firstName
    ? pick({ en: `Hi ${escHtml(firstName)},`, fr: `Bonjour ${escHtml(firstName)},`, ar: `مرحباً ${escHtml(firstName)}،` }, lang)
    : pick({ en: "Hi,", fr: "Bonjour,", ar: "مرحباً،" }, lang)
  const cover = freebie.bgImage
    ? `<tr><td><img src="${SITE_URL}${freebie.bgImage}" width="494" alt="" style="display:block;width:100%;height:auto;border-radius:12px 12px 0 0"></td></tr>`
    : ""
  const card = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:4px 0 24px;border:1px solid ${C.rule};border-radius:12px">${cover}
<tr><td style="padding:18px 20px">
<div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.accentDark}">${escHtml(format)}</div>
<div style="font-size:18px;font-weight:800;color:${C.ink};margin:4px 0 8px">${escHtml(title)}</div>
<div style="font-size:14px;color:${C.muted};line-height:1.6">${escHtml(description)}</div>
</td></tr></table>`
  const cta = isCanva
    ? pick({ en: "Open the template", fr: "Ouvrir le modèle", ar: "افتح القالب" }, lang)
    : pick({ en: "Download the PDF", fr: "Télécharger le PDF", ar: "حمّل ملف PDF" }, lang)
  const body = `<p style="margin:0 0 16px">${hi} ${pick({ en: "here is the resource you asked for. It's yours to keep and share with your team.", fr: "voici la ressource demandée. Elle est à vous, partagez-la avec votre équipe.", ar: "إليك المورد الذي طلبته. هو لك، ويمكنك مشاركته مع فريقك." }, lang)}</p>
${card}
${button(url, cta)}
<p style="margin:18px 0 26px;font-size:12px;color:${C.muted};text-align:center">${pick({ en: "Button not working? Copy this link:", fr: "Le bouton ne marche pas ? Copiez ce lien :", ar: "الزر لا يعمل؟ انسخ هذا الرابط:" }, lang)}<br><a href="${url}" style="color:${C.muted};word-break:break-all">${url}</a></p>
<p style="margin:0 0 10px;font-weight:700;color:${C.ink}">${pick({ en: "Worth reading next", fr: "À lire ensuite", ar: "للقراءة بعد ذلك" }, lang)}</p>
${articleList(lang, 3)}
<p style="margin:0 0 6px">${pick({ en: "Want help putting it into practice? Reply to this email or", fr: "Besoin d'aide pour l'appliquer ? Répondez à cet email ou", ar: "تحتاج مساعدة في تطبيقه؟ ردّ على هذه الرسالة أو" }, lang)} ${secondaryLink(siteConfig.calendlyUrl, pick({ en: "book a free call", fr: "réservez un appel gratuit", ar: "احجز مكالمة مجانية" }, lang))}.</p>`
  const subject = pick({ en: `Your free download: ${title}`, fr: `Votre ressource gratuite : ${title}`, ar: `موردك المجاني: ${title}` }, lang)
  const html = layout({
    lang,
    preheader: pick({ en: `${title} is ready. One click to download.`, fr: `${title} est prêt. Un clic pour le télécharger.`, ar: `${title} جاهز. نقرة واحدة للتحميل.` }, lang),
    heading: pick({ en: "Your free resource is ready", fr: "Votre ressource gratuite est prête", ar: "موردك المجاني جاهز" }, lang),
    body,
  })
  const text = [hi, "", `${title}: ${url}`, "", `${pick({ en: "Book a free call", fr: "Réserver un appel gratuit", ar: "احجز مكالمة مجانية" }, lang)}: ${siteConfig.calendlyUrl}`, "", `${pick(SIGN.name, lang)} · dhia-portfolio.com`].join("\n")
  return { subject, html, text }
}

/* ─── Visitor: newsletter welcome ─── */

export function newsletterWelcome({ lang, firstName }: { lang: EmailLang; firstName?: string }) {
  const hi = firstName
    ? pick({ en: `Welcome, ${escHtml(firstName)}!`, fr: `Bienvenue, ${escHtml(firstName)} !`, ar: `أهلاً بك يا ${escHtml(firstName)}!` }, lang)
    : pick({ en: "Welcome!", fr: "Bienvenue !", ar: "أهلاً بك!" }, lang)
  const expect = {
    en: ["Practical notes on branding, training and websites, from real projects in Tunisia and abroad.", "Free templates and checklists before anyone else.", "One email a month at most. No spam, ever."],
    fr: ["Des notes pratiques sur l'identité de marque, la formation et les sites web, tirées de vrais projets en Tunisie et ailleurs.", "Les modèles et checklists gratuits en avant-première.", "Un email par mois au maximum. Jamais de spam."],
    ar: ["ملاحظات عملية حول الهوية البصرية والتدريب والمواقع، من مشاريع حقيقية في تونس وخارجها.", "القوالب وقوائم التحقق المجانية قبل الجميع.", "رسالة واحدة في الشهر على الأكثر. دون أي إزعاج."],
  }[lang]
  const body = `<p style="margin:0 0 16px">${pick({ en: "Thanks for subscribing. Here's what you'll get:", fr: "Merci pour votre inscription. Voici ce que vous recevrez :", ar: "شكراً على اشتراكك. هذا ما ستحصل عليه:" }, lang)}</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 22px">${expect
    .map((e) => `<tr><td width="28" style="vertical-align:top;padding:2px 0 10px;color:${C.accent};font-weight:800">✓</td><td style="vertical-align:top;padding:2px 0 10px">${e}</td></tr>`)
    .join("")}</table>
<p style="margin:0 0 10px;font-weight:700;color:${C.ink}">${pick({ en: "Start with the latest articles", fr: "Commencez par les derniers articles", ar: "ابدأ بآخر المقالات" }, lang)}</p>
${articleList(lang, 3)}
${button(localePath(lang, "/freebies"), pick({ en: "Get the free resources", fr: "Voir les ressources gratuites", ar: "تصفّح الموارد المجانية" }, lang))}
<p style="margin:24px 0 0;font-size:12px;color:${C.muted}">${pick({ en: "To unsubscribe at any time, just reply with “unsubscribe”.", fr: "Pour vous désinscrire à tout moment, répondez simplement « désinscription ».", ar: "لإلغاء الاشتراك في أي وقت، يكفي أن تردّ بكلمة «إلغاء»." }, lang)} ${secondaryLink(localePath(lang, "/privacy"), pick({ en: "Privacy", fr: "Confidentialité", ar: "الخصوصية" }, lang))}</p>`
  const subject = pick({ en: "Welcome to the newsletter", fr: "Bienvenue dans la newsletter", ar: "مرحباً بك في النشرة البريدية" }, lang)
  const html = layout({
    lang,
    preheader: pick({ en: "What to expect, and three articles to start with.", fr: "Ce qui vous attend, et trois articles pour commencer.", ar: "ما الذي ينتظرك، وثلاث مقالات للبداية." }, lang),
    heading: hi,
    body,
  })
  const text = [hi, "", ...expect.map((e) => `- ${e}`), "", ...latestArticles(lang, 3).map((a) => `${a.title}: ${a.url}`), "", `${pick(SIGN.name, lang)} · dhia-portfolio.com`].join("\n")
  return { subject, html, text }
}

/* ─── Owner notifications (always English, Dhia's inbox) ─── */

export function ownerNotification({
  kind,
  name,
  email,
  service,
  message,
  freebieTitle,
  lang,
}: {
  kind: "contact" | "newsletter" | "freebie"
  name?: string
  email: string
  service?: string
  message?: string
  freebieTitle?: string
  lang: EmailLang
}) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 0;width:90px;vertical-align:top;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${C.muted}">${label}</td><td style="padding:6px 0;font-size:15px;color:${C.text}">${value}</td></tr>`
  const safeEmail = escHtml(email)
  const rows = [
    name ? row("From", escHtml(name)) : "",
    row("Email", `<a href="mailto:${safeEmail}" style="color:${C.accentDark};text-decoration:none">${safeEmail}</a>`),
    service ? row("Service", escHtml(service)) : "",
    freebieTitle ? row("Resource", escHtml(freebieTitle)) : "",
    row("Language", lang.toUpperCase()),
  ].join("")
  const msg = message
    ? `<div style="margin-top:16px;background:${C.soft};border-left:3px solid ${C.accent};padding:14px 16px;border-radius:0 10px 10px 0;white-space:pre-wrap;font-size:14px;line-height:1.7">${escHtml(message)}</div>`
    : ""
  const heading = kind === "newsletter" ? "New newsletter subscriber" : kind === "freebie" ? "New resource download" : "New message from the site"
  const body = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${rows}</table>${msg}
<p style="margin:20px 0 0;font-size:13px;color:${C.muted}">${kind === "contact" ? "Reply to this email to answer them directly." : "Reply to this email to reach them."}</p>`
  return layout({ lang: "en", preheader: `${heading}: ${name || email}`, heading, body, showSignature: false })
}
