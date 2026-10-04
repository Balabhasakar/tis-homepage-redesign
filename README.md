# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** [https://tis-homepage-redesign-sand.vercel.app/](https://tis-homepage-redesign-sand.vercel.app/)
- **Repository:** [https://github.com/Balabhasakar/tis-homepage-redesign](https://github.com/Balabhasakar/tis-homepage-redesign)

## 🛠️ Tech Stack
- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS v4 (brand colors defined as theme tokens in `src/styles/index.css`)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## ✨ Standout Features Implemented
1. **Scroll-Triggered Reveals:** A reusable `Reveal` component fades sections in once as they enter the viewport (`whileInView`, `once: true`, 0.5s). Stat counters also count up when visible.
2. **Scroll Progress Bar:** A thin teal bar at the top of the page, driven by `useScroll` and smoothed with `useSpring`. It animates `scaleX` only, so it stays on the compositor.
3. **Animated Dark/Light Theme Switcher:** The `useTheme` hook toggles a `dark` class on `<html>`, remembers the choice in `localStorage`, and falls back to the system preference. It applies the theme before first paint, so there is no flash.
4. **Custom Cursor:** A dot and a spring-following ring, driven by motion values so mouse movement never re-renders React. The ring grows over links and buttons. It is hidden on touch devices (`pointer: coarse`).

All animations respect `prefers-reduced-motion`.

## 📦 Getting Started Locally

1. **Clone the repository:**
```bash
   git clone https://github.com/Balabhasakar/tis-homepage-redesign.git
   cd tis-homepage-redesign
```

2. **Install dependencies:**
```bash
   npm install
```

3. **Run the development server:**
```bash
   npm run dev
```

4. Open the local URL printed in the terminal (usually http://localhost:5173).

### Other scripts
- `npm run build` - production build
- `npm run preview` - preview the production build
- `npm run lint` - run the linter

## Component Architecture Overview

```
src/
├── components/
│   ├── ui/          # Button, SectionHeading, StatCard, TestimonialCard
│   ├── layout/      # Navbar, MobileNav, Footer
│   ├── sections/    # Hero, About, Why TIS (stats + rankings), Sports, Testimonials, CTA
│   └── animation/   # Reveal, ScrollProgress, ThemeToggle, CustomCursor
├── hooks/           # useTheme, useCountUp
├── data/            # Site info, navigation, stats, sports, testimonials
└── styles/          # Global CSS and Tailwind theme
```

All page content lives in `src/data/`, so components contain only layout and behavior.

## Responsive Design
Mobile-first, tested at 375px, 768px and 1280px+. Interactive targets are at least 44px, and the mobile menu is a slide-in panel that locks page scroll while open.

## Brand Identity Retained
- Primary colors (crimson red and teal), copy, and contact details from [tis.edu.in](https://tis.edu.in/)
- Parent testimonials are shown with initials instead of the school's hosted photos.

## Notes
This is an assessment project. School name, copy and trademarks belong to Tulas International School.