export type ToolDef = {
  name: string
  slug: string
}

export type ToolGroup = {
  id: string
  /** English fallback label (used as a React key and for any consumer that
   *  doesn't localize). Components should prefer TOOL_GROUP_LABEL_KEYS[id]
   *  through t() -- see components/tools-stack-section.tsx. */
  label: string
  tools: ToolDef[]
}

/** Maps each group id to its translations.ts key. Added because these
 *  group labels were hardcoded English and never went through t(), so they
 *  stayed in English even in French/Arabic mode. */
export const TOOL_GROUP_LABEL_KEYS: Record<string, string> = {
  design: "toolsGroupDesign",
  ai: "toolsGroupAi",
  frontend: "toolsGroupFrontend",
  backend: "toolsGroupBackend",
  productivity: "toolsGroupProductivity",
}

export const toolsStackGroups: ToolGroup[] = [
  {
    id: "design",
    label: "Design & Creative",
    tools: [
      { name: "Figma", slug: "figma" },
      { name: "Illustrator", slug: "adobeillustrator" },
      { name: "Photoshop", slug: "adobephotoshop" },
      { name: "InDesign", slug: "adobeindesign" },
      { name: "After Effects", slug: "adobeaftereffects" },
      { name: "Lightroom", slug: "adobelightroomclassic" },
      { name: "Canva", slug: "canva" },
      { name: "Blender", slug: "blender" },
      { name: "Premiere Pro", slug: "adobepremierepro" },
    ],
  },
  {
    id: "ai",
    label: "AI Tools",
    tools: [
      { name: "ChatGPT", slug: "openai" },
      { name: "Midjourney", slug: "midjourney" },
      { name: "Claude", slug: "claude" },
      { name: "OpenRouter", slug: "openrouter" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    tools: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Angular", slug: "angular" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Framer Motion", slug: "framer" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Infra",
    tools: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "PHP", slug: "php" },
      { name: "Symfony", slug: "symfony" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Supabase", slug: "supabase" },
      { name: "Vercel", slug: "vercel" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    id: "productivity",
    label: "Productivity & Facilitation",
    tools: [
      { name: "Notion", slug: "notion" },
      { name: "Trello", slug: "trello" },
      { name: "Jira", slug: "jira" },
      { name: "Slack", slug: "slack" },
      { name: "Miro", slug: "miro" },
      { name: "Loom", slug: "loom" },
      { name: "Behance", slug: "behance" },
      { name: "Kahoot", slug: "kahoot" },
      { name: "Google Slides", slug: "googleslides" },
    ],
  },
]
