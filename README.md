# 🌌 Lunaire Events — Luxury Moonlit Weddings & Celebrations

Lunaire Events is a cinematic, multi-page web application built for a high-end wedding planning and event production studio. Designed with an editorial-magazine aesthetic, it combines elegant typography, rich dark/gold themes, interactive micro-animations, and fluid transitions to create an immersive, luxury brand experience.

Live Demo URL: [lunaire-events-nine.vercel.app](https://lunaire-events-nine.vercel.app/)

---

## ✨ Features

- **Split Masonry Galleries**: Separate dedicated portfolio pages for `/gallery/weddings` and `/gallery/parties`, plus a split-column landing hub page (`/gallery`) allowing guests to pick their journey.
- **Vibrant Romantic Imagery**: A database of over 40 curated Unsplash image assets containing ceremony settings, champagne tables, and celebrations in full, warm color (no heavy grayscale overrides).
- **Gold Crest Emblem Logo**: A customized SVG monogram seal incorporating the precise crescent moon contour (`d="M20 6a11 11 0 1 0 6 14 9 9 0 0 1-6-14z"`) from `public/moon.svg` cradling the letter "L".
- **Buttery Inertial Smooth Scroll**: Integrated with Lenis to deliver ultra-smooth page scrolling.
- **Drifting Particles Emitter**: High-visibility golden bokeh sparks and romance blossom petals drift dynamically across the hero and page layouts.
- **Stable Interactive Buttons**: Magnetic buttons with structured hover transformations (fluid scale-up on hover, click feedback, and hearts that smoothly fill with color).
- **Champagne Route Transition Sweeps**: Smooth page swiping transitions styled in champagne and deep ink tones using Framer Motion's `AnimatePresence`.
- **High-End Typography**: Elegant pairings of serif display types (`Fraunces` and `Cormorant Garamond`) with clean sans-serif bodies (`Inter`).
- **Fully SEO-Optimized**: Features a search-engine-ready layout including canonical links, meta tags, sitemap.xml, robots.txt, and high-resolution Open Graph/Twitter card preview assets.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (extended custom theme: `ink`, `midnight`, `champagne`, `blush`, `pearl`, `sage`)
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Scroll Inertia**: Lenis (by Studio Freight)
- **Icons**: Lucide React
- **Code Quality**: ESLint Flat Configuration (resolves all lints with 0 errors/warnings)

---

## ⚡ Quick Start

### Installation

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/lunaire-events.git
cd lunaire-events

# Install dependencies
npm install
```

### Scripts

Run the project locally or build for production:

```bash
# Start local development server (http://localhost:5173)
npm run dev

# Run TypeScript compilation and build production bundles
npm run build

# Preview the built production output locally
npm run preview

# Run ESLint quality audit
npx eslint src
```

---

## 📁 Directory Structure

```
lunaire-events/
├── public/                 # Static assets (moon.svg, favicon, sitemap.xml, robots.txt)
├── src/
│   ├── components/         # Reusable UI widgets (Crest, Loader, Header, Footer, HeartButton, etc.)
│   ├── hooks/              # Custom React hooks (useLenis, useScrollProgress, etc.)
│   ├── data/               # Curated assets datasets (images, services, testimonials)
│   ├── pages/              # Routed pages (Home, About, Weddings, Parties, Galleries, Contact, etc.)
│   ├── styles/             # Global Tailwind stylesheets and backdrop-grain vignette shaders
│   ├── App.tsx             # Route management, scroll-restoration, and Lenis entry points
│   └── main.tsx            # Application mounting and standard router definitions
├── eslint.config.js        # ESLint flat code quality rules
├── tailwind.config.js      # Tailwired color tokens and luxury typography variables
├── vite.config.ts          # Vite bundler options
└── tsconfig.json           # Type checking guidelines
```

---

## ♿ Fallback, Accessibility, & Performance

- **Reduced Motion Support**: Listens to browser `prefers-reduced-motion` settings. If detected, heavy particle physics, masked typography reveals, page swipes, and smooth scroll behaviors automatically deactivate to show a clean, gorgeous static layout.
- **Resource Optimization**: Implements lazy-loaded media (`loading="lazy"`) and optimized picture ratios for accelerated mobile rendering.
- **Custom Cursor Fallbacks**: The custom luxury pointer cursor automatically hides on touchscreen devices and small tablet screens to maintain native usability.

---

## 🔒 Portfolio Showcase

This project is a personal portfolio showcase demonstrating high-end front-end styling, typography, and layout engineering. All rights reserved.
