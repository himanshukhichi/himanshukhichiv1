# Himanshu website

Fresh Next.js + Tailwind rebuild inspired by the layout at `brittanychiang.com`.

## What Changed From [Brittany Chiang v4 layout](https://github.com/bchiang7/v4)

- Gatsby and styled-components are replaced with Next.js App Router and Tailwind CSS.
- The page uses desktop split layout: sticky left identity/nav/social column and right scrolling content.
- Section cards use the hover treatment with muted sibling opacity, subtle slate panels, teal chips, and animated external-link arrows.
- Mobile uses sticky translucent section headings instead of the desktop side nav.
- Content is centralized in `lib/profile.ts` so editing the portfolio does not require touching layout code.

## Run Locally

```bash
npm install
npm run dev

```

Open `http://localhost:3000`.

## Edit Content

Update the portfolio data in:

```text
lib/profile.ts
```

Replace `public/assets/himanshu-khichi-resume.pdf` whenever you update the resume.
