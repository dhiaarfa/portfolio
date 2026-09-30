import type { Project } from "@/components/sections/ProjectStack"

/**
 * Content for the two Home "Cards Almanac"-style project stacks. Facts
 * only -- nothing here is invented; every TODO marks something Dhia still
 * needs to supply (see the list at the bottom of the PR/commit message
 * that introduced this file).
 */

export const webProjects: Project[] = [
  {
    name: "Digimytch Talent Hub",
    meta: "2026 · Graduation project (PFE) · Solo build",
    description:
      "AI-powered job platform built solo across 5 Scrum sprints — multi-LLM routing via OpenRouter, 109 automated tests across 24 files, deployed on Vercel.",
    tags: ["Next.js 15", "Supabase", "AI SDK"],
    image: "/projects/digimytch-talent-hub.webp",
  },
  {
    name: "dhia-portfolio.com",
    meta: "2026 · Personal site",
    description: "My portfolio, built with Next.js 15, Tailwind v4 and Framer Motion, deployed on Vercel.",
    tags: ["Next.js", "Tailwind v4", "Framer Motion"],
    image: "/projects/dhia-portfolio.webp",
    href: "https://dhia-portfolio.com",
  },
  {
    name: "CRIT Tunisie",
    meta: "Client project · Web",
    description: "TODO: 1-2 sentence description of the CRIT Tunisie web project (what it does, your role).",
    tags: ["TODO"],
    image: "/projects/crit-tunisie-web.webp",
    href: "https://crit-tunisie.net",
  },
  {
    name: "Best Dates & Fruits",
    meta: "Client project · Web",
    description: "TODO: 1-2 sentence description of the Best Dates & Fruits web project (what it does, your role).",
    tags: ["TODO"],
    image: "/projects/best-dates-and-fruits.webp",
    href: "https://bestdatesandfruits.com",
  },
]

export const designProjects: Project[] = [
  {
    name: "MeetUp Pro",
    meta: "Event · Branding & campaign",
    description: "Branded and ran the campaign for the event: 200+ attendees and 800+ leads.",
    tags: ["Branding", "Campaign"],
    image: "/projects/meetup-pro.webp",
  },
  {
    name: "Tafeni",
    meta: "Client project · Branding",
    description: "TODO: 1-2 sentence description of the Tafeni branding project (what it is, what you delivered).",
    tags: ["TODO"],
    image: "/projects/tafeni.webp",
  },
  {
    name: "Nakkla",
    meta: "Client project · Branding",
    description: "TODO: 1-2 sentence description of the Nakkla branding project (what it is, what you delivered).",
    tags: ["TODO"],
    image: "/projects/nakkla.webp",
  },
  {
    name: "One Space",
    meta: "Client project · Branding",
    description: "TODO: 1-2 sentence description of the One Space branding project (what it is, what you delivered).",
    tags: ["TODO"],
    image: "/projects/one-space.webp",
  },
  {
    name: "CRIT Tunisie",
    meta: "Client project · Brand identity",
    description: "TODO: 1-2 sentence description of the CRIT Tunisie brand identity project (what you delivered).",
    tags: ["TODO"],
    image: "/projects/crit-tunisie-brand.webp",
  },
]
