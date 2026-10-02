import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightArticleClient from "@/components/insight-article-client"
import { insightBySlug, publishedInsightArticles, relatedInsights } from "@/lib/insights"
import { getInsightContent } from "@/lib/insights-content"
import { insightJsonLd, insightMetadata } from "@/lib/insight-seo"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return publishedInsightArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = insightBySlug(slug)
  if (!article) return {}
  // Search title/description, article OG card, hreflang: lib/insight-seo.ts.
  return insightMetadata(article, "en")
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params
  const article = insightBySlug(slug)
  const content = getInsightContent(slug)
  if (!article || !content) notFound()

  const related = relatedInsights(article)

  // JSON-LD stays in English on this route; the /fr and /ar twins emit
  // their own localized BlogPosting (same helper).
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insightJsonLd(article, "en")) }} />
      <Navbar />
      <main id="main-content" className="pt-[5.5rem] pb-14 px-6">
        <InsightArticleClient article={article} content={content} related={related} />
      </main>
      <Footer />
    </div>
  )
}
