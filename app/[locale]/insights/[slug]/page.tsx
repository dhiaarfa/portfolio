import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightArticleClient from "@/components/insight-article-client"
import { insightBySlug, publishedInsightArticles, relatedInsights } from "@/lib/insights"
import { getInsightContent } from "@/lib/insights-content"
import { getTranslation, type Language } from "@/lib/translations"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  return publishedInsightArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  if (locale !== "fr" && locale !== "ar") return {}
  const article = insightBySlug(slug)
  if (!article) return {}

  const title = getTranslation(locale, article.titleKey)
  const description = getTranslation(locale, article.excerptKey)
  const suffix = locale === "fr" ? "Insights" : "رؤى"

  return pageMetadata({
    path: `/${locale}/insights/${slug}`,
    title: `${title} | ${suffix} · Mohamed Dhia`,
    description,
    locale: locale as Language,
    hreflangPath: `/insights/${slug}`,
    openGraph: { type: "article" },
  })
}

export default async function LocaleInsightArticlePage({ params }: Props) {
  const { locale, slug } = await params
  if (locale !== "fr" && locale !== "ar") notFound()

  const article = insightBySlug(slug)
  const content = getInsightContent(slug)
  if (!article || !content) notFound()

  const title = getTranslation(locale, article.titleKey)
  const url = `${SITE_URL}/${locale}/insights/${slug}`
  const related = relatedInsights(article)

  // JSON-LD stays in English, matching the convention on the unprefixed
  // /insights/[slug] route and on /[locale]/work/[slug] (SEO structured
  // data isn't localized elsewhere on this site) -- only the url field
  // points at this locale's page.
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
