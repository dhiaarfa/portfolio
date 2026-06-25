export type ToolDef = {
  name: string
  slug: string
}

export type ToolGroup = {
  id: string
  label: string
  tools: ToolDef[]
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
      { name: "Slack", slug: "slack" },
      { name: "Miro", slug: "miro" },
      { name: "Loom", slug: "loom" },
      { name: "Behance", slug: "behance" },
      { name: "Kahoot", slug: "kahoot" },
      { name: "Google Slides", slug: "googleslides" },
    ],
  },
]
