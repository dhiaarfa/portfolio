import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import PrivacyContent from "@/components/privacy-content"
import { pageMetadata } from "@/lib/page-metadata"
import type { Language } from "@/lib/translations"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string }> = {
  fr: {
    title: "Mentions légales & confidentialité | Dhia Arfa",
    description:
      "Éditeur et hébergeur de dhia-portfolio.com, données collectées par le formulaire, la newsletter et le chat, et comment y accéder ou les supprimer.",
  },
  ar: {
    title: "الإشعار القانوني والخصوصية | محمد ضياء عرفة",
    description: "من يدير الموقع وأين يُستضاف، وما البيانات التي يجمعها نموذج التواصل والنشرة والمحادثة، وكيف تطّلع عليها أو تحذفها.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) return {}
  return pageMetadata({
    path: `/${locale}/privacy`,
    title: m.title,
    description: m.description,
    locale: locale as Language,
    hreflangPath: "/privacy",
  })
}

export default async function LocalePrivacyPage({ params }: Props) {
  const { locale } = await params
  if (!META[locale as "fr" | "ar"]) notFound()
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  )
}
