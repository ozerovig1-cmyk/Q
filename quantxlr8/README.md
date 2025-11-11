# QuantXlr8 Marketing Site

Welcome to the source code for the **QuantXlr8 (QX8)** marketing site. This repository contains a fully‑featured, production‑ready Next.js project designed to showcase a venture‑client accelerator and collect applications from startups, corporates and investors.

## Overview

QuantXlr8 bridges the gap between startups and corporates by acting as a venture‑client accelerator. Corporates present strategic challenges, startups supply cutting‑edge solutions and investors gain insight into validated technologies. The site illustrates the value of the venture‑client model, outlines the process and provides application forms for each audience segment.

Key features include:

- **Responsive design** built with Next.js and Tailwind CSS.
- **Three application forms** (startups, corporates and investors) with client‑side validation via react‑hook‑form and Zod.
- **Stubbed API routes** under `app/api/*` that log submissions to the server.
- **Accessible components** including a skip link, semantic landmarks and focus outlines.
- **SEO metadata** defined in `app/layout.tsx` (title, description, Open Graph and Twitter cards) and a `site.webmanifest` for PWA support.
- **Generated brand assets** (logos, monogram marks, favicons) and illustrative images stored in the `public` folder.

## Getting Started

This project requires **Node.js 18+** and **npm**. To start a development server, run:

```bash
cd quantxlr8
npm install      # install dependencies
npm run dev      # start dev server on http://localhost:3000
```

Alternatively, you can use the provided `bootstrap.sh` script:

```bash
./bootstrap.sh
```

### Building for Production

To create an optimized production build:

```bash
npm run build
npm run start   # serves the built app
```

## Project Structure

- **`app/`** – Uses Next.js App Router. The marketing homepage resides at `app/(marketing)/page.tsx`. API routes live in `app/api/*`.
- **`components/`** – Reusable UI components such as the header, footer, feature grid, timeline, FAQ and tabbed forms.
- **`public/`** – Static assets including images, brand logos and icons. The `site.webmanifest` references the exported favicons.
- **`styles/`** – Global styles built with Tailwind CSS.
- **`tailwind.config.ts`** – Tailwind configuration with the brand colour palette and font families.

## Customisation

- **Branding** – See `public/brand/README.md` for guidelines on using the logos, colours and typography.
- **Forms** – The validation rules are defined in `components/CTAForms.tsx` using Zod. Adjust the schemas or add fields to suit your needs. Submitted data is printed to the server console by the API routes; replace this behaviour with real persistence in a production environment.
- **Content** – Edit the copy in `app/(marketing)/page.tsx`, the feature definitions in `components/FeatureGrid.tsx` and the FAQ entries in `components/FAQ.tsx`.

## License

All generated assets and code are provided without warranty. You are free to adapt this project for internal or commercial use. Illustrative images were generated via AI to avoid copyright issues.