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
    delayMs: 22000,
  },
  {
    id: "fact-youth",
    messageKey: "chatNudgeFactYouth",
    href: "/trainer",
    actionKey: "chatNudgeActionTrainer",
    delayMs: 45000,
  },
  {
    id: "fact-design",
    messageKey: "chatNudgeFactDesign",
    href: "/designer",
    actionKey: "chatNudgeActionDesign",
    paths: ["/", "/about"],
    delayMs: 50000,
  },
  {
    id: "freebies",
    messageKey: "chatNudgeFreebies",
    href: "/freebies",
    actionKey: "chatNudgeActionFreebies",
    delayMs: 70000,
  },
  {
    id: "contact",
    messageKey: "chatNudgeContact",
    href: "/#contact-form",
    actionKey: "chatNudgeActionContact",
    delayMs: 90000,
  },
  {
    id: "whatsapp",
    messageKey: "chatNudgeWhatsApp",
    actionKey: "chatNudgeActionWhatsApp",
    delayMs: 110000,
  },
  {
    id: "insights",
    messageKey: "chatNudgeInsights",
    href: "/insights",
    actionKey: "chatNudgeActionInsights",
    delayMs: 130000,
  },
  {
    id: "developer",
    messageKey: "chatNudgeDeveloper",
    href: "/developer",
    actionKey: "chatNudgeActionDev",
    paths: ["/", "/designer", "/about"],
    delayMs: 150000,
  },
  {
    id: "rate",
    messageKey: "chatNudgeRate",
    href: "https://calendly.com/benarfa367/30min",
    actionKey: "chatNudgeActionBook",
    delayMs: 170000,
  },
]

export function nudgesForPath(pathname: string): AssistantNudge[] {
  return assistantNudges.filter((n) => {
    if (!n.paths?.length) return true
    return n.paths.some((p) => pathname === p || pathname.startsWith(`${p}/`))
  })
}
