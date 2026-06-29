export type LearningResource = {
  id: string
  titleKey: string
  descriptionKey: string
  type: "youtube" | "article" | "course" | "tool"
  url: string
  category: "design" | "training" | "development" | "marketing"
  /** YouTube video ID for embeds */
  youtubeId?: string
}

export const learningResources: LearningResource[] = [
  {
    id: "figma-basics",
    titleKey: "learning.figma-basics.title",
    descriptionKey: "learning.figma-basics.desc",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
    youtubeId: "FTFaQWZBqQ8",
    category: "design",
  },
  {
    id: "color-theory",
    titleKey: "learning.color-theory.title",
    descriptionKey: "learning.color-theory.desc",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=GyVMoejbGFg",
    youtubeId: "GyVMoejbGFg",
    category: "design",
  },
  {
    id: "nextjs-crash",
    titleKey: "learning.nextjs-crash.title",
    descriptionKey: "learning.nextjs-crash.desc",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=ZVnjOPwW4ZA",
    youtubeId: "ZVnjOPwW4ZA",
    category: "development",
  },
  {
    id: "tailwind-master",
    titleKey: "learning.tailwind-master.title",
    descriptionKey: "learning.tailwind-master.desc",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=H_kSd4kn0E8",
    youtubeId: "H_kSd4kn0E8",
    category: "development",
  },
  {
    id: "facilitation-skills",
    titleKey: "learning.facilitation-skills.title",
    descriptionKey: "learning.facilitation-skills.desc",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=PwEp0kUNW5o",
    youtubeId: "PwEp0kUNW5o",
    category: "training",
  },
  {
    id: "digital-marketing-hubspot",
    titleKey: "learning.digital-marketing.title",
    descriptionKey: "learning.digital-marketing.desc",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=bixR-KIJKYM",
    youtubeId: "bixR-KIJKYM",
    category: "marketing",
  },
  {
    id: "mdn-html",
    titleKey: "learning.mdn-html.title",
    descriptionKey: "learning.mdn-html.desc",
    type: "article",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
    category: "development",
  },
  {
    id: "canva-design-school",
    titleKey: "learning.canva-design-school.title",
    descriptionKey: "learning.canva-design-school.desc",
    type: "course",
    url: "https://www.canva.com/designschool/",
    category: "design",
  },
  {
    id: "salience-learning",
    titleKey: "learning.salience-learning.title",
    descriptionKey: "learning.salience-learning.desc",
    type: "article",
    url: "https://www.salto-youth.net/",
    category: "training",
  },
  {
    id: "google-analytics",
    titleKey: "learning.google-analytics.title",
    descriptionKey: "learning.google-analytics.desc",
    type: "course",
    url: "https://skillshop.withgoogle.com/",
    category: "marketing",
  },
  {
    id: "supabase-docs",
    titleKey: "learning.supabase-docs.title",
    descriptionKey: "learning.supabase-docs.desc",
    type: "tool",
    url: "https://supabase.com/docs",
    category: "development",
  },
  {
    id: "behance-inspiration",
    titleKey: "learning.behance-inspiration.title",
    descriptionKey: "learning.behance-inspiration.desc",
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
