import { formatStat } from "@/lib/profile"

// Shared FAQ data. Previously lived only inside components/faq-section.tsx
// as a full accordion section rendered at the bottom of the homepage. Per
// Dhia's feedback, that dedicated section was removed, the same questions
// now surface instead as one-at-a-time suggestions inside the floating AI
// assistant (components/floating-actions.tsx), so both places read from
// this single list instead of duplicating the copy.
export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "What services do you offer?",
    answer:
      "Graphic design (brand identity, visual systems, UI/UX), Training & coaching (workshops, leadership, youth programs), and Web development (sites, apps). I also facilitate events and consult on creative strategy.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Brand identity: 2–4 weeks. Training or workshops: tailored to your agenda. Web projects: 2–8 weeks depending on scope. We agree on a clear timeline in our first consultation.",
  },
  {
    question: "Do you work remotely or internationally?",
    answer:
      "Yes. I work with clients worldwide via video calls and async collaboration. I'm based in Tunisia and work in English, French, and Arabic.",
  },
  {
    question: "How do you charge?",
    answer:
      "Pricing depends on the type and size of the project. I give transparent quotes after we define the scope. Book a free 30-minute call to discuss your needs and get an estimate.",
  },
  {
    question: "Can you run in-person workshops or events?",
    answer:
      // Was a stale "450+ hours ... 1000+ participants" (lib/profile.ts
      // notes those as outdated); now reads the verified figures.
      `Yes. I run in-person workshops in Tunisia and can travel for events. I've delivered ${formatStat("trainingHours")} training hours and ${formatStat("facilitationHours")} facilitation hours to ${formatStat("participantsTrained")} participants. Get in touch to discuss dates and logistics.`,
  },
  {
    question: "What is Zia Studio?",
    answer:
      "Zia Studio is my creative agency focused on branding and visual design. For design-led projects (identity, campaigns, creative direction), we can work under the Zia Studio brand or as a solo designer.",
  },
]
