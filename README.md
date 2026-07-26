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

## Deployment (GitHub Pages + custom domain)

This repo auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push
to `main`. The build output is served at **https://amrutpatil.in**.

### One-time setup (do this once)

1. **GitHub → repo Settings → Pages**
   - Under "Build and deployment" → **Source**, select **GitHub Actions** (not "Deploy from a branch").
2. **GitHub → repo Settings → Pages → Custom domain**
   - Enter `amrutpatil.in` and save. (The `public/CNAME` file in this repo also carries this
     domain into every build automatically — GitHub reads whichever CNAME is present after deploy.)
   - Check **Enforce HTTPS** once GitHub has issued the certificate (can take a few minutes
     to a few hours after DNS is live).
3. **Namecheap → Domain List → amrutpatil.in → Manage → Advanced DNS**
   Add these records (remove any existing conflicting `A`/`CNAME`/`URL Redirect` records for `@`):

   | Type  | Host | Value                  | TTL       |
   |-------|------|------------------------|-----------|
   | A     | @    | 185.199.108.153        | Automatic |
   | A     | @    | 185.199.109.153        | Automatic |
   | A     | @    | 185.199.110.153        | Automatic |
   | A     | @    | 185.199.111.153        | Automatic |

   (Optional, IPv6:)

   | Type  | Host | Value                    | TTL       |
   |-------|------|--------------------------|-----------|
   | AAAA  | @    | 2606:50c0:8000::153      | Automatic |
   | AAAA  | @    | 2606:50c0:8001::153      | Automatic |
   | AAAA  | @    | 2606:50c0:8002::153      | Automatic |
   | AAAA  | @    | 2606:50c0:8003::153      | Automatic |

   DNS propagation can take anywhere from a few minutes to ~24 hours.

### After that

Every `git push` to `main` triggers the workflow: it builds the Angular app, adds a
`404.html` fallback (so deep links like `/blog/my-post` work on refresh — GitHub Pages
has no server-side routing, so 404s are redirected to `index.html` and the Angular router
takes over client-side), and publishes to Pages automatically. You can watch progress
under the repo's **Actions** tab.

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

1. **Add your real photo** — drop your photo at `public/assets/displayPicture/dp.jpg`
   (the hero section already references this path with a graceful fallback to a placeholder
   icon if the file is missing — no code changes needed, just add the file).
2. **Add your résumé PDF** — replace the placeholder file at
   `public/assets/resume/amrut-patil-resume.pdf` with your real résumé (same filename, or
   update `resumeUrl` in `src/app/core/data/profile-data.ts`).
3. **Write real blog posts** — add entries to `src/app/core/data/mock-blog-data.ts`, or build
   a CMS-backed `BlogService` implementation when you're ready (see Features above).
4. **Deploy** — see the [Deployment](#deployment-github-pages--custom-domain) section above;
   this is already wired up for GitHub Pages via GitHub Actions.

## Tech stack

Angular 20 · TypeScript · SCSS · standalone components · signals-based theming
