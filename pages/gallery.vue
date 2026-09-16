<script setup>
import { galleryModes } from '../data/heritage.js'

useHead({
  title: 'Gallery',
  meta: [{ name: 'description', content: 'Cape Bolinao Lighthouse illustrated across dawn, day, dusk, night, and storm weather.' }]
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Gallery</p>
        <h1>The lighthouse in every light</h1>
        <p class="lede">
          These are stylized illustrations — built this
          way to keep the site fast on mobile data,and featured images of Bolinao Lighthouse

        </p>
      </div>
    </section>

    <section class="container gallery-section">
      <GalleryGrid :items="galleryModes" />
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  background: var(--color-navy);
  color: var(--color-foam);
  padding: var(--space-5) 0 var(--space-4);
}

.page-hero h1 {
  color: var(--color-foam);
  max-width: 24ch;
  font-size: clamp(1.7rem, 3.6vw, 2.4rem);
}

.eyebrow {
  color: var(--color-teal);
  font-weight: 600;
  font-size: 0.85rem;
  max-width: none;
}

.lede {
  color: rgba(243, 238, 225, 0.85);
  max-width: 56ch;
}

.gallery-section {
  padding: var(--space-5) 0 var(--space-6);
}
</style>
