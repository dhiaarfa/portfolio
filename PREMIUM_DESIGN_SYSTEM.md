# Premium Editorial Design System

## Overview

A high-end, cinematic, editorial creative direction inspired by modern designer portfolios (Lens & Layers, Mohamed Rady aesthetic). Dark-first, glassmorphic, premium luxury studio vibe.

**View the live redesign:** `/premium-redesign`

---

## Color Palette

### Primary Colors
- **Background:** Deep Charcoal `#0e0e0e` (hsl: 12 8% 8%)
- **Foreground:** Off-white/Warm Gray `#ebebeb` (hsl: 0 0% 92%)
- **Accent (Primary):** Warm Amber/Golden `#d97706` (hsl: 43 94% 50%)
- **Accent (Secondary):** Muted Neon Green `#16a34a` (hsl: 142.1 76.2% 36.3%)

### Glass Elements
- **Glass Base:** `rgba(20, 20, 20, 0.4)` with `backdrop-filter: blur(12px)`
- **Glass Premium:** `rgba(20, 20, 20, 0.5)` with `backdrop-filter: blur(16px)`
- **Border:** `rgba(255, 255, 255, 0.08)`

### Shadows & Glows
- **Amber Glow:** `0 0 20px rgba(217, 119, 6, 0.3), 0 0 40px rgba(217, 119, 6, 0.1)`
- **Green Glow:** `0 0 15px rgba(22, 163, 74, 0.2)`
- **Glass Shadow:** `0 8px 32px 0 rgba(31, 38, 135, 0.07)`

---

## Typography

### Font Stack
- **Headlines:** Sora (400, 600, 700) — Editorial, clean geometric sans-serif
- **Body Text:** Poppins, Inter — Warm, readable sans-serif
- **Mono:** IBM Plex Mono — Code and technical content

### Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero Name) | 7xl–8xl | 700 | Tight |
| H2 (Section Title) | 3xl–4xl | 700 | 1.1 |
| H3 (Card Title) | xl–2xl | 600 | 1.2 |
| Body | base–lg | 400 | 1.6 |
| Small/Meta | xs–sm | 500 | 1.4 |

---

## Component Library

### 1. **PremiumGlassCard**
High-end glass morphism card with subtle depth and hover effects.

**Props:**
- `children` — Card content
- `className` — Additional Tailwind classes
- `glowColor` — `"amber"` | `"green"` | `"default"`
- `hoverLift` — Lifts on hover (default: true)
- `animated` — Framer Motion entrance animation (default: true)

**Features:**
- Glassmorphism backdrop blur
- Subtle gradient overlay for depth
- Hover lift + glow effect
- Smooth transitions
- Responsive padding

**Usage:**
```tsx
<PremiumGlassCard glowColor="amber" hoverLift>
  <h3>Title</h3>
  <p>Content</p>
</PremiumGlassCard>
```

---

### 2. **PremiumHeroSection**
Full-viewport hero with portrait placement, floating stats cards, and premium CTAs.

**Props:**
- `name` or `firstName` + `lastName` — Name display
- `role` — Primary role/title
- `tagline` — Hero tagline
- `description` — Long-form description
- `portraitSrc` — Hero image URL
- `portraitAlt` — Image alt text
- `stats` — Array of `{ label, value }`
- `email`, `linkedin`, `location` — Contact info
- `cvLink` — Optional CV download link
- `availableForWork` — Show "Open to Work" badge
- `onContactClick` — Contact CTA callback

**Features:**
- Editorial layout with asymmetrical grid
- Ambient glow behind portrait
- Floating glass cards with stats
- Smooth staggered animations
- Responsive grid (1 col mobile, 2 col desktop)
- Contact info footer with icons

---

### 3. **PremiumSkillsCard**
Organized skills display with categories, icons, and hover effects.

**Props:**
- `title` — Card title
- `subtitle` — Optional subtitle
- `categories` — Array of `{ title: string, items: string[] }`
- `icon` — Optional header icon

**Features:**
- Glass card container
- Category headers with accent color
- Skill tags with emerald dot indicators
- Hover scale animation on items
- Responsive grid layout

---

### 4. **PremiumExperienceTimeline**
Vertical timeline of experiences with highlights and badges.

**Props:**
- `title` — Section title
- `experiences` — Array of:
  ```tsx
  {
    role: string
    company: string
    period: string
    type?: string              // "Full-time", "Freelance", etc.
    description?: string
    highlights?: string[]
  }
  ```

**Features:**
- Staggered animation on load
- Hover lift on cards
- Type badge (green accent)
- Chevron-style highlight bullets
- Gradient accent line under title

---

## CSS Utilities

### Glassmorphism Classes
```css
.glass          /* Base glassmorphism */
.glass-premium  /* Stronger blur + shadow */
.glass-border   /* Glass border styling */
.glass-hover    /* Hover transitions */
```

### Glow Effects
```css
.glow-amber           /* Amber glow shadow */
.glow-amber-hover     /* Enhanced glow on hover */
.glow-green           /* Green glow shadow */
.soft-glow            /* Subtle ambient glow */
```

### Grain Texture
```css
.grain            /* Adds film grain overlay to background */
```

---

## Animations

All animations use **Framer Motion** for smooth, hardware-accelerated performance.

### Standard Patterns

**Entrance Animation:**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
viewport={{ once: true }}
```

**Hover Effects:**
```tsx
whileHover={{ y: -8, scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ duration: 0.3 }}
```

**Stagger Container:**
```tsx
variants={containerVariants}
initial="hidden"
whileInView="visible"
transition={{ staggerChildren: 0.1 }}
```

---

## Layout Patterns

### Hero Layout
- Full viewport height
- 2-column grid (desktop), 1-column (mobile)
- Left: Name, tagline, description, CTAs, contact info
- Right: Portrait with floating cards

### Section Layout
- Max-width container (max-w-7xl)
- 20-32 padding (py)
- Border-top divider (border-white/10)
- Asymmetrical content flow

### Card Grid
- **Desktop:** 3-4 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column
- Gap: 4–6 (spacing scale)

---

## Interactive Elements

### Buttons (Premium Style)
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold glow-amber-hover hover:shadow-lg transition-all"
>
  Get In Touch
</motion.button>
```

**Variants:**
- **Primary:** Amber gradient with glow
- **Secondary:** Glass border with hover fill
- **Icon Buttons:** Minimal, hover accent color change

### Links & Hover States
- Base color: `foreground/60`
- Hover color: `amber-400`
- Transition: `0.2s ease`
- No underline, smooth hover

---

## Dark Mode

This design is **dark-first, dark-always**. No light mode switching.

All colors are optimized for dark backgrounds:
- High contrast for readability
- Warm accents (amber) against cool charcoal
- Soft glows reduce harshness
- Glass elements add subtle depth

---

## Performance Optimizations

1. **Next.js Image Component** — Lazy loading, responsive sizes
2. **Framer Motion** — GPU-accelerated animations, reduced motion support
3. **CSS Utilities** — Pre-compiled Tailwind classes
4. **Backdrop Blur** — Hardware-accelerated blur filters
5. **Viewport Animations** — Only animate visible elements

---

## Responsive Design

### Breakpoints (Tailwind)
- `mobile` — Default (0px)
- `sm` — 640px
- `md` — 768px (tablet)
- `lg` — 1024px (desktop)
- `xl` — 1280px
- `2xl` — 1536px

### Mobile-First Approach
All styles start mobile, enhanced with `md:` and `lg:` prefixes.

**Hero Section Responsive:**
- Mobile: 1 column, portrait below text
- Tablet: 2 columns, adjusted spacing
- Desktop: 2 columns, full featured experience

---

## Accessibility

- **Semantic HTML** — Proper heading hierarchy, section landmarks
- **Color Contrast** — WCAG AAA compliant (foreground on background)
- **Motion:** Respects `prefers-reduced-motion`
- **Alt Text** — All images have descriptive alt text
- **Focus States** — Keyboard navigation support on interactive elements
- **ARIA Labels** — Proper labels on buttons and icons

---

## Implementation Checklist

- [ ] Replace placeholder content with real data
- [ ] Update portrait images (use Vercel Blob URLs)
- [ ] Customize color palette if needed
- [ ] Add real experience data
- [ ] Test on mobile, tablet, desktop
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Optimize images (use next/image)
- [ ] Deploy to production
- [ ] Monitor Core Web Vitals

---

## File Structure

```
components/
├── premium-glass-card.tsx          (63 lines)
├── premium-hero-section.tsx        (252 lines)
├── premium-skills-card.tsx         (87 lines)
└── premium-experience-timeline.tsx (107 lines)

app/
├── premium-redesign/
│   └── page.tsx                    (362 lines)
└── globals.css                     (Enhanced with premium utilities)
```

---

## Next Steps

1. **Integrate into main homepage** — Replace current design with this premium system
2. **Create additional components** — Portfolio grid, testimonials, case studies
3. **Add dark mode persistence** — Remember user theme preference
4. **Analytics integration** — Track user interactions
5. **Progressive enhancement** — Add micro-interactions, sound effects

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari 15+, Chrome Android)

**Note:** Backdrop blur may degrade gracefully on older browsers.

---

**Design System Version:** 1.0.0  
**Last Updated:** 2026-02-08  
**Creator:** Mohamed Dhia Arfa
