import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightArticleBody from "@/components/insight-article-body"
import { insightBySlug, publishedInsightArticles } from "@/lib/insights"
import { getInsightContent } from "@/lib/insights-content"
import { insightEnExcerpts, insightEnTitles } from "@/lib/insight-en-copy"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"

const categoryColors: Record<string, string> = {
  Design: "text-pink-700 bg-pink-100 dark:bg-pink-950/50 dark:text-pink-300",
  Training: "text-amber-700 bg-amber-100 dark:bg-amber-950/50 dark:text-amber-300",
  Development: "text-blue-700 bg-blue-100 dark:bg-blue-950/50 dark:text-blue-300",
}

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return publishedInsightArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = insightBySlug(slug)
  if (!article) return {}

  const title = insightEnTitles[article.titleKey] ?? article.slug
  const description = insightEnExcerpts[article.excerptKey] ?? ""

  return pageMetadata({
    path: `/insights/${slug}`,
    title: `${title} | Insights · Mohamed Dhia`,
    description,
    openGraph: { type: "article" },
  })
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params
  const article = insightBySlug(slug)
  const content = getInsightContent(slug)
  if (!article || !content) notFound()

  const title = insightEnTitles[article.titleKey] ?? article.slug
  const url = `${SITE_URL}/insights/${slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: article.date,
    author: { "@type": "Person", name: "Mohamed Dhia Arfa" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="pt-[5.5rem] pb-14 px-6">
        <article className="max-w-3xl mx-auto">
          <Link href="/insights" className="text-sm text-accent hover:underline mb-6 inline-block">
            ← Back to Insights
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category]}`}>
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground">· {article.readMin} min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-8 leading-[1.08]">{title}</h1>
          <InsightArticleBody content={content} />
        </article>
      </main>
      <Footer />
    </div>
  )
}
