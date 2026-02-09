# Navigation & URL Reference Guide

## Complete Website URL Structure

### Main Pages

| Page | URL | Component | Status |
|------|-----|-----------|--------|
| Homepage | `/` | HomePageClient.tsx | ✅ Active |
| Designer Portfolio | `/designer` | DesignerPageClient.tsx | ✅ Active |
| Developer Portfolio | `/developer` | DeveloperPageClient.tsx | ✅ Active |
| Trainer & Educator | `/trainer` | TrainerClientPage.tsx | ✅ Active |
| About | `/about` | AboutPageClient.tsx | ✅ Active |
| 3D Viewer | `/3d-viewer` | 3DViewerPage.tsx | ✅ Active |

### Case Studies

| Case Study | URL | Status | Metrics |
|-----------|-----|--------|---------|
| MeetUp Pro | `/case-study/meetup-pro` | ✅ Complete | 200+ attendees, 800+ leads |
| Case Studies Index | `/case-studies` | ✅ Complete | Grid of all case studies |
| CRIT Tunisie | Coming Soon | 🚧 Placeholder | Development & UI/UX |
| Youth Training Impact | Coming Soon | 🚧 Placeholder | Trainer impact story |

### External Links (Social & Portfolio)

| Platform | URL | Purpose | Security |
|----------|-----|---------|----------|
| LinkedIn | `https://www.linkedin.com/in/dhia-/` | Professional Network | ✅ Verified |
| GitHub | `https://github.com/dhiaarfa` | Code Portfolio | ✅ Verified |
| Behance | `https://www.behance.net/dhiaarfa` | Design Portfolio | ✅ Verified |
| Instagram | `https://www.instagram.com/zia.studioo/` | Creative Work | ✅ Verified |
| Email | Contact Form | Professional Inquiries | ✅ Secure Form |

---

## Page Navigation Structure

### Homepage (/)
```
├── Hero Section
│   ├── Profile Bio
│   ├── CTA Buttons: "Explore My Work" → /designer
│   └── Sticky Notes (8 draggable)
│
├── Expertise Cards
│   ├── Trainer Card → /trainer
│   ├── Designer Card → /designer
│   └── Developer Card → /developer
│
├── Featured Projects
│   └── Links to role pages
│
└── Contact Section
    └── Contact Form
```

### Designer Page (/designer)
```
├── Hero Section
│   ├── Title: "Graphic Designer"
│   ├── CTA: "View Behance Portfolio" → behance.net/dhiaarfa
│   └── Sticky Notes (2 draggable)
│
├── Design Philosophy
│   └── 4 Philosophy Cards
│
├── Portfolio Gallery
│   ├── 6 Project Images
│   └── Each links to → behance.net/dhiaarfa
│
├── Featured Projects
│   ├── 6 Gradient Cards
│   └── Each links to → behance.net/dhiaarfa
│
├── Experience
│   └── 5 Position Cards
│
├── Certifications
│   └── 4 Certification Cards
│
├── "Let's Create Together" CTA
│   └── Contact Form Section
│
└── Contact Form
```

### Developer Page (/developer)
```
├── Hero Section
│   ├── Title: "Web Developer — Learning by Building"
│   ├── CTA: "View GitHub" → github.com/dhiaarfa
│   ├── CTA: "Discuss a Project" → Scroll to contact
│   └── Sticky Notes (2 draggable)
│
├── Experience
│   ├── CRIT Tunisie (2025)
│   ├── Speranza Cafe (2025)
│   └── Self-Directed (2023-Present)
│
├── Tech Stack
│   └── Skills Overview
│
├── Design-Informed Development
│   └── 4 Key Points
│
├── What I Can Build Today
│   └── 5 Capability Cards
│
├── "Let's Build Together" CTA
│   ├── CTA: "Discuss A Project" → Scroll to contact
│   └── CTA: "Connect on LinkedIn" → linkedin.com/in/dhia-/
│
└── Contact Form
```

### Trainer Page (/trainer)
```
├── Hero Section
│   ├── Title: "Trainer & Educator"
│   ├── Stats: 934+ Trainees, 381+ Hours, 61 Events
│   └── Sticky Notes (2 draggable)
│
├── Impact Metrics
│   └── 4 Large Stat Cards
│
├── Evolution as an Educator
│   ├── 2017: Certified Trainer
│   ├── 2019: Design Education Pioneer
│   ├── 2021: Soft Skills Facilitator
│   └── 2024: Movement Leader
│
├── Certifications
│   ├── CNFCPP (2017)
│   ├── GOMYCODE Academy (2019)
│   ├── INCO Academy (2021)
│   └── HubSpot Academy (2022)
│
├── "Ready to Transform Through Learning?" CTA
│   └── Contact Form Section
│
└── Contact Form
```

### Case Studies (/case-studies)
```
├── Hero Section
│   ├── Title: "Real Projects. Real Results."
│   └── Intro Text
│
├── Case Study Grid (3 columns)
│   ├── MeetUp Pro Card → /case-study/meetup-pro ✅
│   ├── CRIT Tunisie Card (Coming Soon)
│   └── Youth Training Card (Coming Soon)
│
├── What You'll Learn Section
│   ├── The Challenge
│   ├── My Approach
│   └── The Results
│
└── CTA Section
    ├── "View Design Work" → /designer
    └── "View Development Work" → /developer
```

### MeetUp Pro Case Study (/case-study/meetup-pro)
```
├── Hero Section
│   ├── Title: "MeetUp Pro Brand & Campaign"
│   ├── Metrics: 200+ Attendees, 800+ Leads, Radio & TV
│   └── Back Navigation → /case-studies
│
├── The Challenge
│   └── 5-Point Breakdown
│
├── My Role
│   ├── Brand Strategy & Visual Identity
│   ├── Marketing Campaign Design
│   └── Campaign Execution & Optimization
│
├── Process & Methodology
│   ├── 01: Research & Strategy
│   ├── 02: Visual Identity Design
│   ├── 03: Campaign Asset Creation
│   ├── 04: Multi-Channel Execution
│   └── 05: Results & Optimization
│
├── Key Deliverables
│   ├── Brand Identity System (5 items)
│   ├── Digital Campaign Assets (5 items)
│   ├── Print & Outdoor Materials (5 items)
│   └── Campaign Strategy (5 items)
│
├── Outcomes & Impact
│   ├── 4 Key Metrics
│   └── 5 Success Factors
│
├── Key Learnings
│   ├── Brand Consistency Drives Results
│   ├── Data-Driven Design Optimization
│   ├── Integrated Channels Multiply Impact
│   └── Target Audience Research Informs Everything
│
├── "Ready to Elevate Your Brand?" CTA
│   ├── "Start Your Project" → Scroll to contact
│   └── "View More Work" → behance.net/dhiaarfa
│
└── Contact Form
```

---

## Navigation Elements

### Navbar (All Pages)
```
Left:  Logo + Name → /
Center: Home | About | Designer | Developer | Trainer | LinkedIn
Right: Search | Theme Toggle (Light/Dark)
```

### Footer (All Pages)
```
Brand:     Mohamed Dhia | Trainer, Designer, Developer
Navigation: About | Services | Contact
Contact:    mohameddhiaarfa@gmail.com | Tunisia
Social:     LinkedIn → linkedin.com/in/dhia-/
            Instagram → instagram.com/zia.studioo/
            Email → Contact Form
```

---

## CTA Button Navigation Map

### Homepage CTAs
| Button | Action | Destination |
|--------|--------|-------------|
| "Explore My Work" | Direct | /designer |
| "Learn More" | Direct | /about |
| "Explore Training" | Direct | /trainer |
| "View Design Work" | Direct | /designer |
| "See My Projects" | Direct | /developer |

### Designer Page CTAs
| Button | Action | Destination |
|--------|--------|-------------|
| "View Behance Portfolio" | External | behance.net/dhiaarfa |
| "See Work" (in gallery) | External | behance.net/dhiaarfa |
| "View Featured Projects" | External | behance.net/dhiaarfa |
| "Start A Design Project" | Scroll | #contact-form |
| "View Full Portfolio" | External | behance.net/dhiaarfa |

### Developer Page CTAs
| Button | Action | Destination |
|--------|--------|-------------|
| "View GitHub" | External | github.com/dhiaarfa |
| "Discuss a Project" | Scroll | #contact-form |
| "Discuss A Project" (CTA section) | Scroll | #contact-form |
| "Connect on LinkedIn" | External | linkedin.com/in/dhia-/ |

### Trainer Page CTAs
| Button | Action | Destination |
|--------|--------|-------------|
| "Explore My Journey" | Scroll | #journey |
| "Connect on LinkedIn" | External | linkedin.com/in/dhia-/ |
| "Request Training" | Scroll | #contact-form |

### Case Study CTAs
| Button | Action | Destination |
|--------|--------|-------------|
| "Start Your Project" | Scroll | #contact-form |
| "View More Work" | External | behance.net/dhiaarfa |

### Case Studies Index CTAs
| Button | Action | Destination |
|--------|--------|-------------|
| MeetUp Pro Card | Direct | /case-study/meetup-pro |
| "View Design Work" | Direct | /designer |
| "View Development Work" | Direct | /developer |

---

## Sticky Notes Placement

### Homepage (8 Notes - Hero & Roles)
```
Hero Section:
├── "Currently crafting digital experiences" (Yellow)
├── "Trainer • Designer • Developer" (Blue)
├── "7+ Years Experience" (Green)
└── "Let's collaborate!" (Light Yellow)

Roles Section:
├── "Building meaningful experiences" (Orange)
├── "Creative problem solving" (Pink)
├── "Always learning & growing" (Purple)
└── "Design + Code + Teaching" (Cyan)
```

### Designer Page (2 Notes)
```
├── "Every design tells a story" (Green, top-left)
└── "Design is problem-solving" (Amber, top-right)
```

### Developer Page (2 Notes)
```
├── "Learning by shipping" (Orange, top-left)
└── "Real projects drive growth" (Blue, top-right)
```

### Trainer Page (2 Notes)
```
├── "Empowering the next generation" (Blue, top-left)
└── "Impact through education" (Cyan, top-right)
```

---

## Error Handling & Fallbacks

| Scenario | Fallback |
|----------|----------|
| Broken Behance Link | Returns to behance.net/dhiaarfa |
| Broken GitHub Link | Returns to github.com/dhiaarfa |
| Broken LinkedIn Link | Returns to linkedin.com/in/dhia-/ |
| Form Submission Error | Displays error message, allows retry |
| Image Load Failure | Shows placeholder, renders alt text |
| JavaScript Disabled | Static content still accessible |

---

## Mobile Navigation

### Mobile Menu (Hamburger)
```
Home
Designer
Developer
Trainer
About
LinkedIn
Search
Theme Toggle
```

### Touch Interactions
- All buttons have 44x44px+ hit targets
- Sticky notes work with touch dragging
- Forms have large input fields
- CTAs have sufficient spacing

---

## Performance Optimizations

### Route Pre-loading
- `/designer` pre-loads on homepage
- `/developer` pre-loads on homepage
- `/trainer` pre-loads on homepage
- `/case-studies` pre-loads on role pages

### Image Lazy Loading
- Portfolio images: lazy loading
- Below-fold sections: lazy loading
- Hero images: eager loading

### Bundle Splitting
- Each route has separate bundle
- Shared components loaded once
- Heavy libraries: code-split

---

## SEO URLs

All URLs are:
- ✅ SEO-friendly (descriptive slugs)
- ✅ Canonicalized (one URL per page)
- ✅ Mobile-responsive
- ✅ Accessible (navigation keyboard-friendly)
- ✅ Indexed (no robots.txt blocks)

---

## URL Change Log

### Corrected URLs
| Previous | Current | Date | Reason |
|----------|---------|------|--------|
| `behance.net/dhiaa` | `behance.net/dhiaarfa` | 2024 | Correct profile slug |
| `linkedin.com/in/dhia-arfa/` | `linkedin.com/in/dhia-/` | 2024 | User correction |
| `instagram.com/dhia_arfa_/` | `instagram.com/zia.studioo/` | 2024 | Active account |
| `mailto:` links | Contact Form | 2024 | Professional form submission |

---

## Testing URLs

To verify all navigation works:

```bash
# Test main pages
curl https://portfolio.com/
curl https://portfolio.com/designer
curl https://portfolio.com/developer
curl https://portfolio.com/trainer
curl https://portfolio.com/about

# Test case studies
curl https://portfolio.com/case-studies
curl https://portfolio.com/case-study/meetup-pro

# Test external links (manual)
https://www.linkedin.com/in/dhia-/
https://github.com/dhiaarfa
https://www.behance.net/dhiaarfa
https://www.instagram.com/zia.studioo/
```

---

## Maintenance & Updates

### Monthly Checks
- [ ] All external links still active
- [ ] All CTAs routing correctly
- [ ] No broken images
- [ ] Contact form working
- [ ] Analytics tracking

### Quarterly Updates
- [ ] Review case study performance
- [ ] Update statistics if available
- [ ] Add new case studies (CRIT Tunisie, Training)
- [ ] Refresh portfolio with new projects

### Annual Review
- [ ] Full site audit
- [ ] Performance optimization
- [ ] SEO audit
- [ ] Accessibility review
- [ ] Security assessment

---

## Support & Troubleshooting

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Page won't load | Clear cache, check internet connection |
| Behance link broken | Check if profile is active on Behance |
| Form not submitting | Try refreshing page, check email verification |
| Dark mode not working | Clear theme preference, refresh page |
| Images not showing | Check file paths, try CTRL+F5 hard refresh |

---

## Quick Links Reference

Save these for quick access:

**Development:**
- Designer Page: `/designer`
- Developer Page: `/developer`
- Trainer Page: `/trainer`
- Case Studies: `/case-studies`
- MeetUp Pro Case Study: `/case-study/meetup-pro`

**External:**
- Behance: `https://www.behance.net/dhiaarfa`
- GitHub: `https://github.com/dhiaarfa`
- LinkedIn: `https://www.linkedin.com/in/dhia-/`
- Instagram: `https://www.instagram.com/zia.studioo/`

---

**Last Updated:** 2024  
**Status:** ✅ All URLs Verified & Tested
