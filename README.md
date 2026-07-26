# Amrut Patil — Portfolio SPA

A single-page portfolio built with Angular 20 (standalone components, lazy-loaded routes).

## Features

- **Dark/Light theme** — dark by default, persisted in `localStorage`, no flash-of-wrong-theme on load
- **Fully responsive** — desktop, tablet, and mobile layouts with a mobile nav menu
- **Blog-ready** — `BlogService` is an abstract contract with a `MockBlogService` placeholder
  implementation backed by static data. Swap in a real headless CMS later (Contentful, Strapi,
  a custom GraphQL API, etc.) by writing a new class that implements `BlogService` and changing
  one provider line in `src/app/app.config.ts` — no component changes required
- **Blueprint/schematic design system** — deep navy dark theme, grid backdrop, "title block"
  style section headers, all driven by CSS custom properties in `src/styles.scss`

## Getting started

```bash
npm install
npm start          # dev server at http://localhost:4200
```

```bash
npm run build       # production build → dist/portfolio
```

## Project structure

```
src/app/
  core/
    data/            # your resume/profile content + mock blog data lives here
    models/          # TypeScript interfaces (Profile, BlogPost, etc.)
    services/        # ThemeService, BlogService (abstract) + MockBlogService
  shared/components/  # Header, Footer, ThemeToggle, SectionHeader (title-block)
  features/
    home/             # Hero, About, Skills, Experience, Projects, Contact
    blog/             # BlogList, BlogDetail
```

## Things to finish before deploying

1. **Add your real photo** — replace the placeholder avatar icon in
   `src/app/features/home/hero/hero.component.ts` with an `<img>` pointing at your photo
   (drop the file in `public/assets/`).
2. **Add your résumé PDF** — replace the placeholder file at
   `public/assets/resume/amrut-patil-resume.pdf` with your real résumé (same filename, or
   update `resumeUrl` in `src/app/core/data/profile-data.ts`).
3. **Write real blog posts** — add entries to `src/app/core/data/mock-blog-data.ts`, or build
   a CMS-backed `BlogService` implementation when you're ready (see Features above).
4. **Deploy** — the production build in `dist/portfolio` is static output; it can be hosted on
   Netlify, Vercel, GitHub Pages, Firebase Hosting, or any static host.

## Tech stack

Angular 20 · TypeScript · SCSS · standalone components · signals-based theming
