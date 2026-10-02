import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightArticleClient from "@/components/insight-article-client"
import { insightBySlug, publishedInsightArticles, relatedInsights } from "@/lib/insights"
import { getInsightContent } from "@/lib/insights-content"
import { insightJsonLd, insightMetadata } from "@/lib/insight-seo"

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  return publishedInsightArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (locale !== "fr" && locale !== "ar") return {}
  const article = insightBySlug(slug)
  if (!article) return {}
  return insightMetadata(article, locale)
}

export default async function LocaleInsightArticlePage({ params }: Props) {
  const { locale, slug } = await params
  if (locale !== "fr" && locale !== "ar") notFound()

  const article = insightBySlug(slug)
  const content = getInsightContent(slug)
  if (!article || !content) notFound()

  const related = relatedInsights(article)

  // Localized BlogPosting (headline, description, inLanguage, URLs) --
  // used to be English-only data pointing at this page's URL.
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insightJsonLd(article, locale)) }} />
      <Navbar />
      <main id="main-content" className="pt-[5.5rem] pb-14 px-6">
        <InsightArticleClient article={article} content={content} related={related} />
      </main>
      <Footer />
    </div>
  )
}
