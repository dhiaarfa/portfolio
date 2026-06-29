export type LearningResource = {
  id: string
  title: string
  description: string
  type: "youtube" | "article" | "course" | "tool"
  url: string
  category: "design" | "training" | "development" | "marketing"
  /** YouTube video ID for embeds */
  youtubeId?: string
}

export const learningResources: LearningResource[] = [
  {
    id: "figma-basics",
    title: "Figma UI Design Tutorial",
    description: "Solid foundation for layout, components, and auto-layout — essential for brand systems.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
    youtubeId: "FTFaQWZBqQ8",
    category: "design",
  },
  {
    id: "color-theory",
    title: "Color Theory for Designers",
    description: "How hue, contrast, and psychology drive brand recognition and accessibility.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=_2LLXnPdAIo",
    youtubeId: "_2LLXnPdAIo",
    category: "design",
  },
  {
    id: "nextjs-crash",
    title: "Next.js App Router Crash Course",
    description: "Modern React patterns — Server Components, routing, and deployment on Vercel.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ZVnjOPwW4ZA",
    youtubeId: "ZVnjOPwW4ZA",
    category: "development",
  },
  {
    id: "tailwind-master",
    title: "Tailwind CSS From Scratch",
    description: "Utility-first styling that keeps portfolios and product UIs consistent and fast to ship.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    youtubeId: "UB1O30fR-EE",
    category: "development",
  },
  {
    id: "facilitation-skills",
    title: "Facilitation Skills for Trainers",
    description: "Engage groups, manage energy, and debrief sessions that stick.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=7RyZl2qWn0Y",
    youtubeId: "7RyZl2qWn0Y",
    category: "training",
  },
  {
    id: "digital-marketing-hubspot",
    title: "Digital Marketing Fundamentals",
    description: "Inbound strategy, content pillars, and measurable campaigns for SMEs.",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=9noHgE1A1A8",
    youtubeId: "9noHgE1A1A8",
    category: "marketing",
  },
  {
    id: "mdn-html",
    title: "MDN Web Docs — HTML & CSS",
    description: "The reference every developer should bookmark for semantic markup and responsive CSS.",
    type: "article",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
    category: "development",
  },
  {
    id: "canva-design-school",
    title: "Canva Design School",
    description: "Free lessons on typography, branding, and social content for non-designers and freelancers.",
    type: "course",
    url: "https://www.canva.com/designschool/",
    category: "design",
  },
  {
    id: "salience-learning",
    title: "Salience Learning — Non-formal Education",
    description: "Resources on experiential learning and youth work methodology.",
    type: "article",
    url: "https://www.salto-youth.net/",
    category: "training",
  },
  {
    id: "google-analytics",
    title: "Google Analytics for Beginners",
    description: "Track what works in your campaigns and landing pages with clear KPIs.",
    type: "course",
    url: "https://skillshop.withgoogle.com/",
    category: "marketing",
  },
  {
    id: "supabase-docs",
    title: "Supabase Documentation",
    description: "Auth, PostgreSQL, Row Level Security — the stack behind modern full-stack apps.",
    type: "tool",
    url: "https://supabase.com/docs",
    category: "development",
  },
  {
    id: "behance-inspiration",
    title: "Behance — Brand Identity Gallery",
    description: "Curated case studies from global studios to sharpen your visual references.",
    type: "tool",
    url: "https://www.behance.net/search/projects?field=102",
    category: "design",
  },
]

export const resourceTypeIcons = {
  youtube: "▶",
  article: "📄",
  course: "🎓",
  tool: "🔗",
} as const
