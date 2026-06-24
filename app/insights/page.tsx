import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = pageMetadata({
  path: "/insights",
  title: "Insights — Design, Training & Development | Mohamed Dhia",
  description:
    "Tips on graphic design, youth training facilitation, and web development from Mohamed Dhia Arfa, based in Tunisia.",
})

const articles = [
  {
    slug: "brand-colors-psychology",
    category: "Design",
    categoryColor: "text-pink-600 bg-pink-50 dark:bg-pink-950",
    title: "5 Color Mistakes That Kill Your Brand",
    excerpt:
      "Most brands pick colors based on personal taste. Here is why that is wrong, and what to do instead.",
    readTime: "4 min read",
  },
  {
    slug: "youth-workshop-facilitation",
    category: "Training",
    categoryColor: "text-amber-600 bg-amber-50 dark:bg-amber-950",
    title: "How to Keep 50 Youth Participants Engaged for 3 Hours",
    excerpt:
      "Energy management is the hardest skill in facilitation. These 7 techniques changed how I run workshops.",
    readTime: "6 min read",
  },
  {
    slug: "nextjs-freelance-portfolio",
    category: "Development",
    categoryColor: "text-blue-600 bg-blue-50 dark:bg-blue-950",
    title: "Why I Built My Portfolio in Next.js (and Not Webflow)",
    excerpt:
      "Control, performance, and the ability to ship API routes. Here is what I learned building dhia-portfolio.me.",
    readTime: "5 min read",
  },
] as const

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">Insights</p>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            Thoughts on design,<br />training &amp; the web.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Practical tips from real project experience — no fluff.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-12">
            Articles in progress — subscribe on the homepage newsletter to get the first post when it drops.
          </p>

          <div className="flex flex-col gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="border-b border-slate-100 dark:border-slate-800 pb-8 last:border-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${article.categoryColor}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">· {article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {article.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <p className="mt-3 text-sm text-slate-400">Coming soon</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
