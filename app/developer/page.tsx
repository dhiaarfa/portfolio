import DeveloperPageClient from "./DeveloperPageClient"

export const metadata = {
  title: "Web Developer - Mohamed Dhia Arfa",
  description:
    "Web developer specializing in React and Next.js. Building modern, responsive web applications with a design-first approach. Experience with CRIT Tunisie, Best Dates & Fruits, and other production projects.",
  keywords: ["web developer", "React", "Next.js", "frontend developer", "Tunisia", "full-stack", "UI/UX"],
  openGraph: {
    title: "Web Developer - Mohamed Dhia Arfa",
    description: "Web developer specializing in React and Next.js. Building modern, responsive web applications.",
    type: "website",
  },
}

export default function DeveloperPage() {
  return <DeveloperPageClient />
}
