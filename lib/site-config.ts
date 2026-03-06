/**
 * Site configuration - Update these for your deployment
 *
 * Calendly: Create a free account at calendly.com and add your scheduling link
 * WhatsApp: Use country code without + (e.g., 216 for Tunisia)
 */
export const siteConfig = {
  // Contact & Booking - Update calendlyUrl with your Calendly link
  calendlyUrl: "https://calendly.com/benarfa367/30min",
  whatsappNumber: "21653580272",
  whatsappMessage: "Hello! I'd like to discuss a project or consultation.",
  email: "mohameddhiaarfa@gmail.com",
  phone: "+216 53 580 272",

  // Social – personal
  linkedin: "https://www.linkedin.com/in/dhia-/",
  behance: "https://www.behance.net/dhiaa",
  github: "https://github.com/dhiaarfa",
  instagram: "https://www.instagram.com/zia.studioo/",

  // Zia Studio (company) – make visible for clients & collaborators
  ziaStudioLinkedIn: "https://www.linkedin.com/company/104318935",
  ziaStudioInstagram: "https://www.instagram.com/zia.studioo/",

  /**
   * Social embeds (Designer page)
   *
   * Instagram:
   * - Instagram supports embeddable iframes for profiles via `/embed` for public profiles.
   * - If Instagram ever blocks profile embeds, you can instead embed specific posts/reels by using:
   *   `https://www.instagram.com/p/<SHORTCODE>/embed`
   *
   * Behance:
   * - For best reliability, copy the iframe from Behance: open a project → Share → Embed → Copy Embed
   * - Paste the iframe `src` into `behanceEmbeds` below.
   */
  socialEmbeds: {
    // Public profile embed
    instagramProfileEmbedSrc: "https://www.instagram.com/zia.studioo/embed",

    // Optional: embed specific posts (recommended if profile embed doesn't render)
    instagramPostEmbedSrcs: [] as string[],

    // Behance project embeds (paste src from Behance "Copy Embed")
    behanceEmbeds: [
      { title: "Project 1", src: "https://www.behance.net/embed/project/176172553?ilo0=1", height: 316 },
      { title: "Project 2", src: "https://www.behance.net/embed/project/224222465?ilo0=1", height: 316 },
      { title: "Project 3", src: "https://www.behance.net/embed/project/203374945?ilo0=1", height: 316 },
      { title: "Project 4", src: "https://www.behance.net/embed/project/201341801?ilo0=1", height: 316 },
    ] as Array<{ title: string; src: string; height?: number }>,
  },

  // Stats (update with real numbers)
  stats: {
    yearsExperience: 7,
    participants: 1000,
    trainingHours: 450,
    facilitationHours: 30,
    trainingCyclesSupervised: 10,
    trainingsReceivedHoursNfe: 2000,
  },

  // Consultation CTA
  ctaText: "Book a Free 30-Min Consultation",

  // Training portfolio (Google Sheets)
  trainingPortfolioUrl:
    "https://docs.google.com/spreadsheets/d/1Lt3Rr7O-0pj67lMCFB0nM7l28LdR6UMyIVIYLxxmOew/edit?usp=drive_web&ouid=100284283298477488031",
}
