# Pangasinan Heritage Digital Showcase

**Student Name:** Chystine Jaylyn D. Sorel
**Selected Framework:** Vue.js 3 with Nuxt.js 3 (Static Site Generation)

**Live Website:** https://\<your-github-username\>.github.io/\<your-repo-name\>/
*(update this link once GitHub Pages is live — see Deployment below)*

A digital showcase of the Cape Bolinao Lighthouse, built for the Pangasinan Provincial
Tourism Office as a fast, mobile-first, accessible static site.

## Tech stack

- **Framework:** Nuxt 3 (Vue 3), rendered as a fully static site via `nuxt generate`
- **Structure:** Atomic Design — `components/atoms`, `components/molecules`,
  `components/organisms`, `layouts` (templates), `pages`
- **Styling:** hand-written CSS with design tokens (`assets/css/main.css`) — no
  framework/utility library, so every rule is intentional and CSS stays small
- **Hosting:** GitHub Pages, deployed automatically by GitHub Actions

## Project structure

```
components/
  atoms/         # LighthouseIllustration (SVG identity graphic)
  molecules/      # FaqAccordion, QuickFacts, VisitPlanner, HeritageCard
  organisms/      # AppHeader, AppFooter, HeroSection, GalleryGrid, TimelineSection
layouts/
  default.vue    # the "template" level: skip link + header + page slot + footer
pages/
  index.vue, history.vue, visit.vue, gallery.vue, about.vue
data/
  heritage.js    # single content source — facts, timeline, FAQs, gallery captions
composables/
  useFavorites.js
public/
  assets/        # gif + video assets served as static files
  .nojekyll      # tells GitHub Pages not to run Jekyll over the build output
```

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Building the static site

```bash
npm run generate    # outputs to .output/public
npx serve .output/public   # preview the static build locally
```

The site reads its base path from the `NUXT_APP_BASE_URL` environment variable
(defaults to `/` for local dev). GitHub Actions sets this automatically at
build time — see below.

## Deployment (GitHub Pages)

This repo includes `.github/workflows/deploy.yml`, which builds the site with
`npm run generate` and publishes `.output/public` to GitHub Pages on every
push to `main`.

To turn it on after pushing this repo to GitHub:

1. Go to **Settings → Pages** in your GitHub repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
4. Once the workflow finishes, your site is live at
   `https://<your-username>.github.io/<your-repo-name>/`.
5. Update the **Live Website** link at the top of this README with that URL.

The workflow automatically computes the correct base path for a project page
(`/repo-name/`) or a user/organization page (`username.github.io`, base `/`),
so no manual configuration is needed for either case.

## Accessibility & performance notes

- Skip-to-content link, visible focus states, and `prefers-reduced-motion`
  handling are built into `assets/css/main.css` and `layouts/default.vue`.
- All decorative scenes (`LighthouseIllustration`) are inline SVG, not raster
  images, keeping pages light on constrained mobile connections.
- Layout is mobile-first: single-column by default, widened with
  `min-width` media queries for tablet/desktop.
