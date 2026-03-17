# VPA Oregon — Academic Redemption Campaign

Two-page Next.js site for Virtual Preparatory Academy of Oregon's "Academic Redemption" campaign.

## Pages

- **`/`** — Homepage with full campaign funnel (hero, pain, mechanism, proof, emotional turn, legitimacy, process, form, final close)
- **`/landing`** — Landing page variant with tighter layout and campaign-specific build rules

## Features

- Mobile-first responsive design (70%+ mobile traffic assumption)
- Sticky mobile CTA button
- Interactive diagnostic modal ("Take the 2-Minute Check")
- Dual lead capture forms with inline validation
- Scroll-triggered reveal animations
- Color scheme matching [oregon.virtualpreparatoryacademy.com](https://oregon.virtualpreparatoryacademy.com/)

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Playfair Display + DM Sans)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import in [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

Or use the Vercel CLI:

```bash
npx vercel
```

## Customization

- **Colors**: Edit `tailwind.config.js` (navy, teal, amber, coral palettes)
- **Fonts**: Change imports in `app/globals.css`
- **Form handling**: Replace the simulated submit in `app/components/LeadForm.tsx` with your actual endpoint
- **Videos**: Add video URLs to the proof blocks in each page file
- **Images**: Replace placeholder image areas with actual student/teacher photos
