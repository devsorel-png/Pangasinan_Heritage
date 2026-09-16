import { defineNuxtConfig } from "nuxt/config";

// When building for GitHub Pages, the CI workflow sets NUXT_APP_BASE_URL
// to "/<repo-name>/" so every internal link, script, and style tag is
// correctly prefixed for a project-page URL like
// https://<user>.github.io/<repo-name>/.  Locally (npm run dev / npm run
// generate without the env var) it falls back to "/".
const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  // Static Site Generation: every route below is rendered to a plain
  // .html file at build time (`npm run generate`), so the deployed site
  // needs no Node server at runtime — a requirement for GitHub Pages.
  ssr: true,

  devtools: {
    enabled: true
  },

  css: ["/assets/css/main.css"],

  // Atomic Design structure: components are grouped into atoms/,
  // molecules/, and organisms/ folders. pathPrefix: false keeps the
  // original component tag names (e.g. <AppHeader>, <HeroSection>)
  // working without an Atoms/Molecules/Organisms prefix.
  components: [
    { path: "~/components/atoms", pathPrefix: false },
    { path: "~/components/molecules", pathPrefix: false },
    { path: "~/components/organisms", pathPrefix: false }
  ],

  app: {
    baseURL,
    head: {
      title: "Bolinao Lighthouse Digital Showcase",

      link: [
        { rel: "icon", type: "image/gif", href: `${baseURL}assets/lighthouse-animation.gif` }
      ],
      meta: [
        {
          name: "description",
          content: "Discover the history, heritage, and beauty of the Cape Bolinao Lighthouse in Pangasinan."
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ]
    }
  },

  nitro: {
    prerender: {
      // The crawler starts at "/" and follows every <NuxtLink> it finds,
      // so all five pages (home, history, visit, gallery, about) get
      // rendered to static HTML automatically. Fail the build if a link
      // is broken rather than silently shipping a 404.
      crawlLinks: true,
      failOnError: true
    }
  }
});
