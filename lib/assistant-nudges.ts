export type AssistantNudge = {
  id: string
  messageKey: string
  actionKey?: string
  href?: string
  /** Empty = all pages; otherwise only these path prefixes */
  paths?: string[]
  /** Delay before this nudge can show (ms from mount or previous dismiss) */
  delayMs: number
}

/** Rotating proactive prompts — shown as bubbles above the AI button */
export const assistantNudges: AssistantNudge[] = [
  { id: "welcome", messageKey: "chatNudgeWelcome", actionKey: "chatNudgeActionChat", delayMs: 4000 },
  {
    id: "looking-for",
    messageKey: "chatNudgeLookingFor",
    actionKey: "chatNudgeActionChat",
    delayMs: 18000,
  },
  {
    id: "fact-youth",
    messageKey: "chatNudgeFactYouth",
    href: "/trainer",
    actionKey: "chatNudgeActionTrainer",
    delayMs: 36000,
  },
  {
    id: "fact-design",
    messageKey: "chatNudgeFactDesign",
    href: "/designer",
    actionKey: "chatNudgeActionDesign",
    paths: ["/", "/about"],
    delayMs: 42000,
  },
  {
    id: "freebies",
    messageKey: "chatNudgeFreebies",
    href: "/freebies",
    actionKey: "chatNudgeActionFreebies",
    delayMs: 54000,
  },
  {
    id: "insights",
    messageKey: "chatNudgeInsights",
    href: "/insights",
    actionKey: "chatNudgeActionInsights",
    delayMs: 66000,
  },
  {
    id: "about",
    messageKey: "chatNudgeAbout",
    href: "/about",
    actionKey: "chatNudgeActionAbout",
    paths: ["/", "/designer", "/trainer", "/developer"],
    delayMs: 78000,
  },
  {
    id: "brand",
    messageKey: "chatNudgeBrand",
    href: "/designer",
    actionKey: "chatNudgeActionBrand",
    paths: ["/", "/about", "/freebies"],
    delayMs: 90000,
  },
  {
    id: "workshop",
    messageKey: "chatNudgeWorkshop",
    href: "/trainer",
    actionKey: "chatNudgeActionWorkshop",
    paths: ["/", "/about", "/insights"],
    delayMs: 102000,
  },
  {
    id: "developer",
    messageKey: "chatNudgeDeveloper",
    href: "/developer",
    actionKey: "chatNudgeActionDev",
    paths: ["/", "/designer", "/about"],
    delayMs: 114000,
  },
  {
    id: "digimytech",
    messageKey: "chatNudgeDigiMyTech",
    href: "/work/digimytch",
    actionKey: "chatNudgeActionProject",
    paths: ["/developer", "/"],
    delayMs: 126000,
  },
  {
    id: "behance",
    messageKey: "chatNudgeBehance",
    href: "https://www.behance.net/dhiaarfa",
    actionKey: "chatNudgeActionBehance",
    paths: ["/designer", "/about", "/"],
    delayMs: 138000,
  },
  {
    id: "contact",
    messageKey: "chatNudgeContact",
    href: "/#contact-form",
    actionKey: "chatNudgeActionContact",
    delayMs: 150000,
  },
  {
    id: "whatsapp",
    messageKey: "chatNudgeWhatsApp",
    actionKey: "chatNudgeActionWhatsApp",
    delayMs: 162000,
  },
  {
    id: "testimonials",
    messageKey: "chatNudgeTestimonials",
    href: "/about#testimonials",
    actionKey: "chatNudgeActionTestimonials",
    paths: ["/", "/designer", "/trainer"],
    delayMs: 174000,
  },
  {
    id: "portfolio-site",
    messageKey: "chatNudgePortfolioSite",
    href: "/developer",
    actionKey: "chatNudgeActionPortfolio",
    paths: ["/", "/about"],
    delayMs: 186000,
  },
  {
    id: "newsletter",
    messageKey: "chatNudgeNewsletter",
    href: "/#newsletter",
    actionKey: "chatNudgeActionNewsletter",
    paths: ["/"],
    delayMs: 198000,
  },
  {
    id: "rate",
    messageKey: "chatNudgeRate",
    href: "https://calendly.com/benarfa367/30min",
    actionKey: "chatNudgeActionBook",
    delayMs: 210000,
  },
]

export function nudgesForPath(pathname: string): AssistantNudge[] {
  return assistantNudges.filter((n) => {
    if (!n.paths?.length) return true
    return n.paths.some((p) => pathname === p || pathname.startsWith(`${p}/`))
  })
}
