# Gurram Chandini — Portfolio

A modern, animated, dark-mode-first developer portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3 (JIT, class-based dark mode)
- Framer Motion (scroll reveals, tilt cards, typing effect, page transitions)
- React Icons (Feather + Simple Icons sets)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    ui/                     # Reveal, BackgroundBlobs, SectionHeader (shared primitives)
    Navbar.jsx              # Sticky nav, active-link highlight, mobile menu, theme toggle
    Hero.jsx                # Typing animation, gradient background, CTAs
    About.jsx               # Bio + animated stat counters
    Skills.jsx              # Grouped animated skill chips
    Projects.jsx            # Tilt-on-hover project cards
    CompetitiveProgramming.jsx
    Experience.jsx
    Achievements.jsx
    Education.jsx           # Vertical timeline
    Contact.jsx             # Contact links + form
    Footer.jsx
    Loader.jsx              # Initial loading screen
    ScrollProgress.jsx      # Top scroll progress bar
    ScrollToTop.jsx         # Floating back-to-top button
  data/
    data.js                 # All content (personal info, projects, skills, etc.)
  hooks/
    useActiveSection.js     # IntersectionObserver-based active nav link
    useScrollProgress.js    # Scroll percentage for the progress bar
  App.jsx
  main.jsx
  index.css                 # Theme variables, glass-card utilities, custom scrollbar
```

## Customizing Content

All personal data lives in a single file: `src/data/data.js`. Update your name, links,
projects, skills, education, and experience there — every section reads from it.

To swap the profile initials circle in the hero for a real photo, replace the
placeholder `<div>` in `src/components/Hero.jsx` with an `<img>` tag pointing at an
image in `src/assets/`.

## Notes

- Dark mode is the default; the navbar toggle switches a `light` class on `<html>`,
  which flips a set of CSS variables (`--bg-page`, `--text-heading`, etc.) defined in
  `index.css`.
- Motion respects `prefers-reduced-motion`.
- The resume button currently points to `#` — replace `personal.resumeUrl` in
  `data.js` with a real PDF link once you have one.
