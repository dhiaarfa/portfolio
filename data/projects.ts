import type { Project } from "@/components/sections/ProjectStack"

/**
 * Content for the two Home "Cards Almanac"-style project stacks. Facts
 * only -- nothing here is invented; every TODO marks something Dhia still
 * needs to supply (see the list at the bottom of the PR/commit message
 * that introduced this file).
 */

export const webProjects: Project[] = [
  {
    name: "DigiMyTech Talent Hub",
    meta: "2026 · Graduation project (PFE) · Solo build",
    description:
      "AI-powered job platform built solo across 5 Scrum sprints — multi-LLM routing via OpenRouter, 109 automated tests across 24 files, deployed on Vercel.",
    tags: ["Next.js 15", "Supabase", "AI SDK"],
    image: "/images/projects/digimytch/landing.png",
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
    meta: "Client project · Web developer",
    description:
      "Production Next.js site clarifying services, job offers, and contact paths for talents and companies -- shipped during my developer role at CRIT (Sep-Dec 2025).",
    tags: ["Next.js", "React", "Tailwind"],
    image: "/images/crit-screenshots/homepage.png",
    href: "https://crit-tunisie.net",
  },
  {
    name: "Best Dates & Fruits",
    meta: "Client project · Web",
    description:
      "Marketing site for a premium Tunisian dates brand -- product sections, seasonal storytelling, and a clear contact-to-conversion path.",
    tags: ["Next.js", "Tailwind"],
    image: "/images/bdaf-thumbnail.png",
    href: "https://bestdatesandfruits.com",
  },
]

export const designProjects: Project[] = [
  {
    name: "MeetUp Pro",
    meta: "Event · Branding & campaign",
    description: "Branded and ran the campaign for the event: 200+ attendees and 800+ leads.",
    tags: ["Branding", "Campaign"],
    image: "/images/meetuppro-thumbnail.png",
  },
  {
    name: "Tafani Travel",
    meta: "Client project · Branding",
    description:
      "Logo and brand system for a travel agency -- built for clarity across web, social, and travel collateral.",
    tags: ["Illustrator", "Figma", "Photoshop"],
    image: "/images/tafani-white-png.png",
  },
  {
    name: "Nakkla",
    meta: "Client project · Packaging",
    description:
      "Packaging design for Delice Nakkla, a product line under Best Dates & Fruits -- box system and illustration work for their dried-fruit and date treats.",
    tags: ["Packaging", "Illustrator"],
    image: "/projects/nakkla.jpg",
  },
  {
    name: "Lone Space",
    meta: "Client project · Branding",
    description:
      "Full visual identity for a creative studio -- logotype, gold-foil system, business cards, and brand collateral.",
    tags: ["Illustrator", "Photoshop", "InDesign"],
    image: "/images/lone-space-gold.png",
  },
  {
    name: "CRIT Tunisie",
    meta: "Client project · Brand identity",
    description:
      "Logo mark and brand identity for CRIT Tunisie, a corporate recruitment firm -- the mark used across their site, stand designs, and client-facing materials.",
    tags: ["Illustrator", "Brand Identity"],
    image: "/projects/crit-tunisie-brand.png",
  },
]
