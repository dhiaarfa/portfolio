import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Developer - Mohamed Dhia Arfa",
  description:
    "Full-stack web development expertise. React, Next.js, JavaScript. 950+ learners educated in web development. Technical innovation and modern web technologies.",
}

export default function DeveloperLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
