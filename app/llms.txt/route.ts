import { SITE_URL, formatStat } from "@/lib/profile"
import { publishedWorkProjects } from "@/lib/work"
import { publishedInsightArticles } from "@/lib/insights"
import { publishedFreebies } from "@/lib/freebies"
import { publishedTrainingOffers } from "@/lib/trainer"
import { siteConfig } from "@/lib/site-config"
import { startingPricesText } from "@/lib/pricing"

// /llms.txt (llmstxt.org): a plain-Markdown map of the site for AI
// assistants. Built from the same data files as the pages, so it cannot
// drift; generated once at build time.
export const dynamic = "force-static"

export function GET() {
  const work = publishedWorkProjects()
    .map((p) => `- [${p.title}](${SITE_URL}/work/${p.slug}): ${p.excerpt}`)
    .join("\n")
  const offers = publishedTrainingOffers()
    .map((o) => `- ${o.nameEn}: ${o.formatEn}. Who it is for: ${o.forEn}. ${o.pricingEn}.`)
    .join("\n")
  const articles = publishedInsightArticles()
    .map((a) => `- [${a.seoTitle}](${SITE_URL}/insights/${a.slug})`)
    .join("\n")
  const freebies = publishedFreebies()
    .map((f) => `- ${f.title}: ${f.description}`)
    .join("\n")

  const body = `# Mohamed Dhia Arfa

> Graphic designer, CNFCPP-certified trainer and web developer based in Tunisia. Brand identities (Zia Studio), training for NGOs, schools and youth programmes (${formatStat("participantsTrained")} participants, ${formatStat("trainingHours")} training hours), and fast multilingual websites in Arabic, French and English.

Contact: ${siteConfig.email}. Free 30-minute call: ${siteConfig.calendlyUrl}. Pages exist in English, French (/fr) and Arabic (/ar).

## Services

- [Branding & design](${SITE_URL}/designer): brand identity, social and campaign design, logos, Arabic + Latin identities.
- [Training & facilitation](${SITE_URL}/trainer): needs analysis, workshops, multi-session programmes, train-the-trainer, keynotes, reporting. Method: Listen. Shape. Deliver.
- [Web development](${SITE_URL}/developer): React and Next.js sites and web apps, multilingual with right-to-left Arabic.

## Starting prices

TND for clients in Tunisia, EUR for clients abroad. Every project gets a written quote after a free call.

${startingPricesText()}

## Training offers

${offers}

## Case studies

${work}

## Articles

${articles}

## Free resources

${freebies}

## Optional

- [Trainer one-sheet (PDF)](${SITE_URL}/freebies/trainer-one-sheet.pdf)
- [Privacy and legal notice](${SITE_URL}/privacy)
- [Sitemap](${SITE_URL}/sitemap.xml)
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
