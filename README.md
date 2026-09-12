# dhia-portfolio.com

Personal portfolio for Mohamed Dhia Arfa - Graphic Designer, Trainer, Web Developer.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- Framer Motion
- Resend (email API for contact form and newsletter)
- Vercel (hosting)

## Getting Started

``````bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build locally
``````

## Environment Variables
Copy .env.example to .env.local and fill in:

``````bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx   # from https://resend.com/api-keys
CONTACT_RECEIVER=benarfa367@gmail.com    # where contact and newsletter emails are delivered
NEXT_PUBLIC_SITE_URL=https://dhia-portfolio.com
``````

## Project Structure
- app/ - pages (App Router)
- components/ - React components
  - components/ui/ - shadcn/ui primitives
  - components/sections/ - page section components (after cleanup)
- hooks/ - custom React hooks
- lib/ - utilities, config, translations
- public/ - static assets (images, icons)

## Pages
| Route | File |
|-------|------|
| / | app/page.tsx |
| /about | app/about/page.tsx |
| /designer | app/designer/page.tsx |
| /trainer | app/trainer/page.tsx |
| /developer | app/developer/page.tsx |
| /freebies | app/freebies/page.tsx |
| /insights | app/insights/page.tsx |

## Key Config
- Site-wide config (links, stats, socials): lib/site-config.ts
- i18n strings: lib/translations.ts
- Motion helpers: components/ui/motion.tsx