<script setup>
import { lighthouse, faqs, nearby } from '../data/heritage.js'

useHead({
  title: 'Plan a Visit',
  meta: [{ name: 'description', content: 'How to get to Cape Bolinao Lighthouse, what to expect, and answers to common visitor questions.' }]
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Plan a Visit</p>
        <h1>Getting to {{ lighthouse.shortName }}</h1>
        <p class="lede">{{ lighthouse.location }}</p>
      </div>
    </section>

    <section class="container planner-section">
      <h2>What are you after?</h2>
      <VisitPlanner />
    </section>

    <section class="container info-grid">
      <div class="info-card">
        <h3>Getting there</h3>
        <p>
          From Bolinao town proper, the lighthouse is roughly a 15–20 minute
          tricycle or private vehicle ride toward Patar. Follow signage
          toward Patar Beach; the lighthouse turnoff is clearly marked
          before the beach itself.
        </p>
      </div>
      <div class="info-card">
        <h3>Nearby</h3>
        <ul>
          <li v-for="place in nearby" :key="place.name">
            <strong>{{ place.name }}</strong> — {{ place.note }}
          </li>
        </ul>
      </div>
    </section>

    <section class="container faq-section">
      <h2>Visitor FAQs</h2>
      <FaqAccordion :items="faqs" />
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
  max-width: 26ch;
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
  max-width: none;
}

.planner-section {
  padding: var(--space-5) 0 var(--space-4);
  max-width: 720px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-3);
  padding-bottom: var(--space-4);
}

.info-card {
  background: var(--color-foam);
  border: 1px solid var(--color-line);
  border-radius: 8px;
  padding: var(--space-3);
}

.info-card h3 {
  font-size: 1.05rem;
}

.info-card p,
.info-card li {
  color: var(--color-ink-soft);
  font-size: 0.95rem;
}

.info-card ul {
  padding-left: 1.1em;
  margin: 0;
}

.info-card li {
  margin-bottom: 0.4em;
}

.faq-section {
  max-width: 720px;
  padding-bottom: var(--space-6);
}
</style>
