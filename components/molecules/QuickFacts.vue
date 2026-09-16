<script setup>
defineProps({
  facts: { type: Array, required: true }
})
</script>

<template>
  <section class="quick-facts" aria-label="Quick facts about the lighthouse">
    <div class="container facts-row">
      <div v-for="fact in facts" :key="fact.label" class="fact">
        <p class="fact-number">{{ fact.number }}</p>
        <p class="fact-label">{{ fact.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quick-facts {
  border-bottom: 1px solid var(--color-line);
}

.facts-row {
  display: flex;
  flex-wrap: wrap;
  padding: var(--space-4) 0;
}

.fact {
  flex: 1 1 160px;
  padding: 0 var(--space-3);
  border-left: 1px solid var(--color-line);
}

.fact:first-child {
  border-left: none;
  padding-left: 0;
}

.fact-number {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  color: var(--color-clay);
  margin: 0;
}

.fact-label {
  margin: 0;
  color: var(--color-ink-soft);
  font-size: 0.88rem;
}

@media (max-width: 640px) {
  .fact {
    flex: 1 1 45%;
    border-left: none;
    padding-left: 0;
    margin-bottom: var(--space-2);
  }
}
</style>
