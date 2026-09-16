<script setup>
import { timeline, lighthouse } from '../data/heritage.js'

useHead({
  title: 'History',
  meta: [{ name: 'description', content: 'The history of Cape Bolinao Lighthouse, from construction in 1897 to today.' }]
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">History</p>
        <h1>From Spanish-era construction to a working landmark today</h1>
        <p class="lede">{{ lighthouse.description }}</p>
      </div>
    </section>

    <section class="container timeline-section">
      <TimelineSection :entries="timeline" />
    </section>

    <section class="container next-section">
      <NuxtLink to="/visit" class="btn btn-primary">Plan your visit</NuxtLink>
      <NuxtLink to="/gallery" class="btn btn-ghost">See the gallery</NuxtLink>
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
  max-width: 28ch;
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

.timeline-section {
  max-width: 720px;
  padding: var(--space-5) 0;
}

.next-section {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  padding-bottom: var(--space-6);
}
</style>
