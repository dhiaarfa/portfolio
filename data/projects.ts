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
      "Built solo, end to end, across 5 Scrum sprints -- multi-LLM routing through OpenRouter, 109 automated tests spanning 24 files, deployed on Vercel. My graduation project, built the way I'd build for a real client.",
    tags: ["Next.js 15", "Supabase", "AI SDK"],
    image: "/images/projects/digimytch/landing.png",
  },
  {
    name: "dhia-portfolio.com",
    meta: "2026 · Personal site",
    description:
      "The site you're on right now -- Next.js 15, Tailwind v4, and Framer Motion, shipped on Vercel. Click through for a closer look at the code and the motion details.",
    tags: ["Next.js", "Tailwind v4", "Framer Motion"],
    image: "/projects/dhia-portfolio.webp",
    href: "https://www.dhia-portfolio.com",
  },
  {
    name: "CRIT Tunisie",
    meta: "Client project · Web developer",
    description:
      "A production Next.js site I shipped as CRIT's developer (Sep-Dec 2025), built to make it simple for talents and companies to find the right service and reach out. Have a look.",
    tags: ["Next.js", "React", "Tailwind"],
    image: "/images/crit-screenshots/homepage.png",
    href: "https://crit-tunisie.net",
  },
  {
    name: "Best Dates & Fruits",
    meta: "Client project · Web",
    description:
      "A marketing site for a premium Tunisian dates brand -- product storytelling, seasonal sections, and a clean path from browsing to contact. See it live.",
    tags: ["Next.js", "Tailwind"],
    image: "/images/bdaf-thumbnail.png",
    href: "https://bestdatesandfruits.com",
  },
]

export const designProjects: Project[] = [
  {
    name: "MeetUp Pro",
    meta: "Event · Branding & campaign",
    description:
      "Owned the branding and campaign end to end for this event -- and it worked: 200+ people through the door and 800+ leads captured.",
    tags: ["Branding", "Campaign"],
    image: "/images/meetuppro-thumbnail.png",
  },
  {
    name: "Tafani Travel",
    meta: "Client project · Branding",
    description:
      "A logo and full brand system for a travel agency, designed to stay sharp and consistent everywhere it shows up -- web, social, and printed travel collateral.",
    tags: ["Illustrator", "Figma", "Photoshop"],
    image: "/images/tafani-white-png.png",
  },
  {
    name: "Nakkla",
    meta: "Client project · Packaging",
    description:
      "Packaging design for Delice Nakkla, a Best Dates & Fruits product line -- box system and illustration work that makes dried-fruit treats feel like a gift, not just a snack.",
    tags: ["Packaging", "Illustrator"],
    image: "/projects/nakkla.jpg",
  },
  {
    name: "Lone Space",
    meta: "Client project · Branding",
    description:
      "A full visual identity for this creative studio -- logotype, gold-foil system, business cards, and brand collateral, built to feel as premium as the work it represents.",
    tags: ["Illustrator", "Photoshop", "InDesign"],
    image: "/images/lone-space-gold.png",
  },
  {
    name: "CRIT Tunisie",
    meta: "Client project · Brand identity",
    description:
      "Designed the logo mark and brand identity for CRIT Tunisie, a corporate recruitment firm -- now the face of their site, stand designs, and everything client-facing.",
    tags: ["Illustrator", "Brand Identity"],
    image: "/projects/crit-tunisie-brand.png",
  },
]
