/** Full case study bodies (English). Metadata in lib/work.ts */
export const workContent: Record<string, string> = {
  "speranza-cafe": `Speranza is a Tunisian café that wanted to feel warm, premium, and recognizable on Instagram before anyone walked through the door. The brief was not "make a pretty logo." It was build a system that works on cups, bags, posts, and promos without looking like five different brands.

### The brief

The client needed an identity that reads **local and inviting** but not cheap: gold accents, cream backgrounds, and typography that feels crafted. Social content was being posted daily, so the system had to be easy to reuse, not a one-off export.

### The approach

I started with a **wordmark-first direction**: a serif-leaning logotype that feels hand-crafted, paired with a simple monogram for small sizes (cup sleeves, profile avatars). Gold became the accent, not the background, so photography and food still lead the feed.

Color roles were locked early: cream for backgrounds, deep brown for text, gold for highlights and CTAs. Every social template uses the same grid, type sizes, and margin rules so the feed reads as one brand when you scroll.

### The system in use

![](/images/speranza-benna.jpg)

Packaging and promo posts share the same type hierarchy. Seasonal campaigns (Ramadan, summer drinks) swap photography but keep the frame, logo placement, and accent color.

![](/images/speranza-pasta.jpg)

### Outcome

The identity was adopted across **in-store packaging, Instagram, and seasonal promos**. The client could hand templates to staff without re-explaining fonts or colors each time. That consistency is what made the brand feel established faster than the business age suggested.

**Tools:** Adobe Illustrator, Photoshop, InDesign · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  "lone-space": `Lone Space is a creative studio that wanted a **luxurious gold identity** without looking generic. The mark needed to work on dark backgrounds, foil stationery, and digital proposals.

### The brief

Create a full identity: logotype, monogram, business cards, letterhead, and social headers. The client wanted something that feels **premium and minimal**, not loud.

### The logo-mark

I designed a **combination mark**: a geometric monogram paired with a refined wordmark. Gold is used as a spot color for print and as a flat metallic tone for digital. Light and dark versions were built from day one so the logo never gets forced onto the wrong background.

![](/images/lone-space-gold.png)

### Stationery & print

Business cards and letterhead use the same spacing system: generous margins, one accent line, monogram as a subtle watermark on letterhead. Print specs were documented so reprints stay consistent.

![](/images/lone-space-cards.jpg)

![](/images/lone-space-mockup.jpg)

### Outcome

The gold system is used across **cards, letterhead, and client-facing PDFs**. The studio reports that proposals feel more aligned and clients mention the branding before discussing scope.

**Tools:** Illustrator, Photoshop, InDesign · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  "tafani-travel": `Tafani Travel needed a mark that reads **trustworthy and modern** on a phone screen and on printed offers. Travel buyers decide quickly; the logo has to feel stable, not trendy for six months.

### The brief

Logo, color system, and social templates for a travel agency operating in Tunisia. The identity must work in Arabic and French contexts without separate redesigns.

### The approach

I pushed for **clarity over decoration**: a clean symbol suggesting movement and connection, paired with a strong sans wordmark. Blue and white anchor trust; a single warm accent prevents the palette from feeling cold.

Templates were built for **Instagram posts and story covers** with fixed logo placement and photo overlay rules so non-designers can publish on busy days.

![](/images/tafani-white-png.png)

### Outcome

Clearer brand recognition on **social and client proposals within the first month** of rollout. Sales material looked aligned instead of a collection of one-off posts.

**Tools:** Illustrator, Figma, Photoshop · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  "meetup-pro": `MeetUp Pro 1.0 was a **youth networking event** that needed to sell tickets through social before anyone saw the venue. Visuals had to feel energetic, credible, and shareable.

### The brief

Event branding, social campaign assets, and on-site promotional design. Timeline was tight; templates had to scale across speakers, schedules, and countdown posts.

### The approach

I built a **campaign identity** around bold type, high contrast, and repeatable layouts: speaker cards, countdown stories, and registration CTAs all share one grid. Photography slots were standardized so the team could swap faces without breaking alignment.

![](/images/meetuppro-thumbnail.png)

### Outcome

Strong social traction and **sold-out attendance**. Visuals were reused for follow-up editions because the system was template-based, not one-off exports. For the full event breakdown, see the [detailed MeetUp Pro case study](/case-study/meetup-pro).

**Tools:** Illustrator, Photoshop, Canva · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  "traveltodo-campaign": `TravelTodo needed **one campaign look** across billboard, poster, and Instagram. Without a system, outdoor and social would read as separate brands.

### The brief

Seasonal travel promotion: large-format outdoor mockup, print poster, and feed assets. Emphasis on destination photography with a consistent type and color frame.

### The approach

One **master layout grid**: headline zone, image window, logo lockup, CTA bar. The same grid scales from billboard proportion to square social. Mockups were used to sell the concept before print spend.

![](/images/billboard-48x14-ft-mockup-3.jpeg)

![](/images/affiche-traveltodo.jpg)

### Outcome

**Unified campaign look** across OOH, poster, and Instagram. Client could approve one system instead of three separate designs.

**Tools:** Photoshop, Illustrator · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,
}

export function getWorkContent(slug: string): string | undefined {
  return workContent[slug]
}
