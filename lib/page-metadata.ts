import type { Metadata } from "next"
import { SITE_URL, formatStat, profileStats } from "@/lib/profile"
import arCards from "@/data/og-ar.json"

/** Shape of an OG/Twitter preview image, kept as a general type (not `typeof DEFAULT_OG_IMAGE`)
 *  so every route can have its own url/alt text without TypeScript narrowing them all to
 *  DEFAULT_OG_IMAGE's exact literal values (this was a real, previously-suppressed type
 *  error, see checklist §5.4/§7 for how it was found). */
type OgImage = {
  url: string
  width: number
  height: number
  alt: string
}

type CardCopy = { kicker: string; title: string; subhead: string; alt: string }
type CardDef = { image: string; pos?: "left" | "right"; top?: boolean; en: CardCopy; fr: CardCopy }

/**
 * Link-preview cards (WhatsApp, LinkedIn, Facebook, X...), one per main
 * route, rendered live by app/api/og (1200x630, site palette). Oct 2026:
 * Home and /freebies, /insights used to share one static PNG in the old
 * navy/lime palette, and /fr, /ar pages always fell back to it because the
 * lookup keyed on the exact path. Copy mirrors each page's positioning.
 * Arabic pages use static Arabic cards (see AR_CARDS below).
 */
const PAGE_CARDS: Record<string, CardDef> = {
  "/": {
    image: "/images/photos/dhia-hero-green.jpg",
    pos: "right",
    en: {
      kicker: "Designer · Trainer · Web developer",
      title: "Mohamed Dhia Arfa",
      subhead: "Brand identity, trainings that change behaviour, and fast trilingual websites. Tunisia & abroad.",
      alt: "Mohamed Dhia Arfa, graphic designer, certified trainer and web developer in Tunisia",
    },
    fr: {
      kicker: "Designer · Formateur · Développeur web",
      title: "Mohamed Dhia Arfa",
      subhead: "Identité de marque, formations qui changent les comportements et sites rapides en 3 langues.",
      alt: "Mohamed Dhia Arfa, designer graphique, formateur certifié et développeur web en Tunisie",
    },
  },
  "/designer": {
    image: "/images/one-space-gold.png",
    en: {
      kicker: "Brand & design · Zia Studio",
      title: "Brand identity that stays consistent everywhere",
      subhead: "Logo, social templates, packaging and campaigns for cafés, travel and product brands.",
      alt: "Brand identity work by Mohamed Dhia Arfa and Zia Studio",
    },
    fr: {
      kicker: "Marque & design · Zia Studio",
      title: "Une identité de marque cohérente partout",
      subhead: "Logo, templates réseaux sociaux, emballages et campagnes pour cafés, voyages et produits.",
      alt: "Identités de marque par Mohamed Dhia Arfa et Zia Studio",
    },
  },
  "/trainer": {
    // Dhia in the Association Youth Clubs trainer polo ("Formateur"): reads
    // instantly as "trainer", face clearly visible at card size.
    image: "/images/photos/dhia-red-polo.jpg",
    en: {
      kicker: "CNFCPP-certified trainer",
      title: "Trainings that change behaviour",
      subhead: `NGOs, schools and youth programmes. ${formatStat("participantsTrained")} participants in Tunisia, Morocco and Qatar.`,
      alt: "Mohamed Dhia Arfa facilitating a youth training workshop",
    },
    fr: {
      kicker: "Formateur certifié CNFCPP",
      title: "Des formations qui changent les comportements",
      subhead: `ONG, écoles et programmes jeunesse. ${profileStats.participantsTrained.value}+ participants en Tunisie, au Maroc et au Qatar.`,
      alt: "Mohamed Dhia Arfa animant un atelier de formation jeunesse",
    },
  },
  "/developer": {
    image: "/images/projects/digimytch/landing.png",
    top: true,
    en: {
      kicker: "Web developer · Design-led",
      title: "Your business has outgrown its Facebook page",
      subhead: "Fast, mobile-first websites in Arabic, French and English.",
      alt: "Web development work by Mohamed Dhia Arfa",
    },
    fr: {
      kicker: "Développeur web · Pensé design",
      title: "Votre activité a dépassé sa page Facebook",
      subhead: "Des sites rapides, pensés mobile, en arabe, français et anglais.",
      alt: "Projets web de Mohamed Dhia Arfa",
    },
  },
  "/freebies": {
    image: "/images/freebies/brand-brief.jpg",
    en: {
      kicker: "Free resources",
      title: "Free templates, guides & checklists",
      subhead: "For brand design, training and web projects. Free to download.",
      alt: "Free design and training resources by Mohamed Dhia Arfa",
    },
    fr: {
      kicker: "Ressources gratuites",
      title: "Templates, guides et checklists gratuits",
      subhead: "Pour le design de marque, la formation et le web. Téléchargement gratuit.",
      alt: "Ressources gratuites de design et de formation par Mohamed Dhia Arfa",
    },
  },
  "/insights": {
    image: "/images/insights/social-media-visual-consistency.jpg",
    en: {
      kicker: "Insights",
      title: "Practical notes on design, training & web",
      subhead: "Written from real projects in Tunisia. In English, French and Arabic.",
      alt: "Insights articles by Mohamed Dhia Arfa",
    },
    fr: {
      kicker: "Articles",
      title: "Design, formation et web, en pratique",
      subhead: "Écrits à partir de vrais projets en Tunisie. En français, anglais et arabe.",
      alt: "Articles de Mohamed Dhia Arfa",
    },
  },
}

/** Arabic cards are static images (public/og/ar/*.jpg) built by
 *  scripts/build-og-ar.mjs from data/og-ar.json: Satori, behind /api/og,
 *  mis-spaces joined Arabic text, so these are rendered by a real browser. */
const AR_CARDS = arCards as Record<string, { slug: string; alt: string }>

function cardImage(def: CardDef, locale: SiteLocale, basePath?: string): OgImage {
  const ar = locale === "ar" && basePath ? AR_CARDS[basePath] : undefined
  if (ar) return { url: `/og/ar/${ar.slug}.jpg`, width: 1200, height: 630, alt: ar.alt }
  const copy = locale === "fr" ? def.fr : def.en
  const params = new URLSearchParams({ kicker: copy.kicker, title: copy.title, subhead: copy.subhead, image: def.image })
  if (def.top) params.set("top", "1")
  if (def.pos) params.set("pos", def.pos)
  return { url: `/api/og?${params}`, width: 1200, height: 630, alt: copy.alt }
}

/** The card for an unprefixed base path ("/designer") in a given locale. */
export function pageOgImage(basePath: string, locale: SiteLocale = "en"): OgImage | undefined {
  const def = PAGE_CARDS[basePath]
  return def ? cardImage(def, locale, basePath) : undefined
}

export const DEFAULT_OG_IMAGE: OgImage = cardImage(PAGE_CARDS["/"], "en")

/** Simple two-level BreadcrumbList JSON-LD: Home > current page. */
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  }
}

type SiteLocale = "en" | "fr" | "ar"

const OG_LOCALE: Record<SiteLocale, string> = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_AR",
}

/** Builds the absolute URL for `base` (an unprefixed path like "/" or
 *  "/designer") in a given site locale, matching the app/[locale]/*
 *  route tree's /fr/* and /ar/* prefixing scheme. */
function localizedUrl(base: string, locale: SiteLocale): string {
  const suffix = base === "/" ? "" : base
  return locale === "en" ? (base === "/" ? SITE_URL : `${SITE_URL}${suffix}`) : `${SITE_URL}/${locale}${suffix}`
}

type PageMetaInput = {
  path: string
  title: string
  description: string
  keywords?: string[]
  openGraph?: Metadata["openGraph"]
  /** Override default route OG image */
  ogImage?: OgImage
  /** Which site locale this specific page is rendering in. Defaults to
   *  "en" for every existing unprefixed page (no behavior change there). */
  locale?: SiteLocale
  /** The canonical UNPREFIXED base path this page has real translated
   *  content for (e.g. "/designer", or "/" for home) -- pass this from
   *  BOTH the English page and its /fr, /ar twins so all three emit the
   *  same reciprocal hreflang set. Omit entirely for pages with no
   *  translated twin (e.g. individual /insights/[slug] articles, which
   *  are English-only, see checklist for why). */
  hreflangPath?: string
}

/** Unprefixed routes that have real /fr and /ar twins (app/[locale]/*). */
function hasLocaleTwins(path: string): boolean {
  return (
    ["/", "/designer", "/trainer", "/developer", "/freebies", "/insights"].includes(path) ||
    path.startsWith("/insights/") ||
    path.startsWith("/work/")
  )
}

/** Per-route metadata with canonical, Open Graph, and Twitter cards. */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  openGraph,
  ogImage,
  locale = "en",
  hreflangPath: explicitHreflangPath,
}: PageMetaInput): Metadata {
  // Oct 2026 SEO fix: the /fr and /ar twins declared their English page,
  // but the English pages (/, /designer, /trainer, /developer, /freebies,
  // every /work/*) declared nothing back -- and Google ignores hreflang
  // that isn't reciprocal. English pages with twins now always emit it.
  const hreflangPath = explicitHreflangPath ?? (locale === "en" && hasLocaleTwins(path) ? path : undefined)
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`
  // hreflangPath is the unprefixed base ("/designer") for /fr and /ar pages,
  // so localized routes now get their page's card instead of the default.
  const image = ogImage ?? pageOgImage(hreflangPath ?? path, locale) ?? DEFAULT_OG_IMAGE
  const ogTitle = (openGraph && "title" in openGraph && openGraph.title) || title
  const ogDescription =
    (openGraph && "description" in openGraph && openGraph.description) || description

  return {
    // Sep 30 CRITICAL fix, found live via getComputedStyle/tab-title check
    // in a real browser: every page here already writes its own complete,
    // final title (most end in "Mohamed Dhia Arfa" or "Mohamed Dhia"
    // themselves) -- but returning it as a plain string let the root
    // layout's title.template ("%s | Mohamed Dhia Arfa") run on top of it,
    // producing titles like "Web Developer Tunisia | React & Next.js ·
    // Mohamed Dhia Arfa | Mohamed Dhia Arfa" (name duplicated) live on
    // /developer, /insights, /trainer and every other route using this
    // function -- confirmed via each page's actual <title> in a live
    // browser tab, not just source review. `absolute` bypasses the parent
    // template entirely so each page's title renders exactly as written.
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: url,
      ...(hreflangPath
        ? {
            languages: {
              en: localizedUrl(hreflangPath, "en"),
              fr: localizedUrl(hreflangPath, "fr"),
              ar: localizedUrl(hreflangPath, "ar"),
              "x-default": localizedUrl(hreflangPath, "en"),
            },
          }
        : {}),
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Mohamed Dhia Arfa Portfolio",
      locale: OG_LOCALE[locale],
      title: ogTitle,
      description: ogDescription,
      images: [image],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [image.url],
    },
  }
}
