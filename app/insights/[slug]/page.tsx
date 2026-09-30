import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightArticleClient from "@/components/insight-article-client"
import { insightBySlug, publishedInsightArticles, relatedInsights } from "@/lib/insights"
import { getInsightContent } from "@/lib/insights-content"
import { insightEnExcerpts, insightEnTitles } from "@/lib/insight-en-copy"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"

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
    // Sep 30 SEO addition: per-article keywords built from the real
    // category and slug topic words instead of the site-wide default only.
    keywords: [article.category, ...article.slug.split("-")],
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
  const related = relatedInsights(article)

  // JSON-LD stays in English, matching the convention elsewhere on this site
  // (SEO structured data isn't localized) -- only the visible article body
  // and page chrome react to the language toggle, via InsightArticleClient.
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
      <main id="main-content" className="pt-[5.5rem] pb-14 px-6">
        <InsightArticleClient article={article} content={content} related={related} />
      </main>
      <Footer />
    </div>
  )
}
