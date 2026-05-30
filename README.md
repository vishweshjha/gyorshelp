# Gyors — Reliable Help. Delivered Fast.

A production-ready, mobile-first marketing website for **Gyors**, a daily-help services marketplace that connects customers with verified service providers for on-demand and scheduled home services.

Inspired by the visual quality of Urban Company, Apple, and modern SaaS sites — built end-to-end with the latest stack.

---

## Tech Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript** (strict)
- **Tailwind CSS** + **tailwindcss-animate**
- **shadcn/ui** primitives (Radix UI under the hood)
- **Framer Motion** for premium, subtle animations
- **React Hook Form** + **Zod** for type-safe form validation
- **Lucide Icons**
- SEO: Metadata API, OpenGraph, JSON-LD structured data, `sitemap.ts`, `robots.ts`
- Accessibility: semantic landmarks, focus states, ARIA labels, skip-to-content link

## Brand

| Token         | Value     |
| ------------- | --------- |
| Primary       | `#2563EB` |
| Secondary     | `#0F172A` |
| Accent        | `#22C55E` |
| Background    | `#F8FAFC` |
| Text          | `#0F172A` |
| Display font  | Plus Jakarta Sans |
| Body font     | Inter     |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Build for production
npm run build && npm start
```

Open <http://localhost:3000> in your browser.

### Scripts

| Command            | Description                       |
| ------------------ | --------------------------------- |
| `npm run dev`      | Start dev server with hot reload  |
| `npm run build`    | Production build                  |
| `npm run start`    | Run production build              |
| `npm run lint`     | ESLint with Next.js config        |
| `npm run typecheck`| TypeScript checking               |

---

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx                  # Homepage (all 13 sections)
│   ├── globals.css               # Tailwind layers + design tokens
│   ├── sitemap.ts                # Auto-generated XML sitemap
│   ├── robots.ts                 # Robots.txt
│   ├── not-found.tsx             # 404 page
│   ├── about/                    # /about route
│   ├── contact/                  # /contact route
│   ├── login/                    # /login route
│   ├── become-a-partner/         # /become-a-partner route
│   ├── services/                 # /services index + [slug] dynamic detail
│   └── api/                      # Mock API routes (services, testimonials, contact)
├── components/
│   ├── ui/                       # Shadcn primitives (Button, Card, Input…)
│   ├── brand/                    # Logo
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # All homepage sections
│   └── shared/                   # SectionHeading, AnimatedCounter, StructuredData
├── data/                         # Mock data (services, testimonials, FAQs, stats)
└── lib/                          # site config, types, utils
```

---

## Sections (Homepage)

1. **Sticky Header** — scroll-aware, becomes solid + blurred on scroll, mobile sheet menu
2. **Hero** — gradient text headline, animated illustration card, app phone mockup, trust badges
3. **Services Grid** — 12 services, hover lift + CTA, starting price + rating
4. **How It Works** — animated 3-step timeline with numbered icons
5. **Why Choose Gyors** — 8 feature cards with hover effects
6. **Popular Categories** — horizontal scroll carousel with prev/next controls
7. **App Download** — dark gradient section with phone mockups, store buttons, QR placeholder
8. **Testimonials** — carousel with 8 testimonials, customer photos, star ratings
9. **Service Provider Recruitment** — partner CTA in primary gradient card
10. **Animated Statistics** — count-up counters on scroll (Framer Motion `useMotionValue`)
11. **FAQ** — Radix accordion with 6 questions
12. **Contact** — RHF + Zod validated form, contact cards, Google Maps placeholder
13. **Footer** — 4 columns, newsletter signup, social icons

---

## SEO & Performance

- Full Metadata API with OpenGraph + Twitter cards
- JSON-LD: `Organization`, `WebSite`, `ItemList`, `FAQPage`
- `sitemap.ts` auto-generates all service detail routes
- `robots.ts` configured for production
- Fonts loaded via `next/font` (no FOIT/FOUT)
- Images: `loading="lazy"` on below-the-fold imagery, AVIF/WebP via Next.js
- Tree-shaken icon imports via `optimizePackageImports`

---

## Mock API

Available routes:

- `GET /api/services` — list all services
- `GET /api/testimonials` — list all testimonials
- `POST /api/contact` — validated with Zod, returns a mock `ticketId`

---

## Notes

- Imagery is pulled from **Unsplash** for demonstration; replace with branded photography for production.
- Replace placeholder URLs in `src/lib/site.ts` (apps, social, email, phone, address) with real values.
- Replace `siteConfig.url` and add a real `/og.png` (1200×630) to `public/` for OpenGraph previews.
