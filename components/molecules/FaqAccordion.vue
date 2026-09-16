<script setup>
defineProps({
  items: { type: Array, required: true }
})
</script>

<template>
  <div class="faq-list">
    <details v-for="item in items" :key="item.question" class="faq-item">
      <summary>{{ item.question }}</summary>
      <p>{{ item.answer }}</p>
    </details>
  </div>
</template>

<style scoped>
.faq-list {
  display: grid;
  gap: var(--space-2);
}

.faq-item {
  background: var(--color-foam);
  border: 1px solid var(--color-line);
  border-radius: 8px;
  padding: 0.9em 1.1em;
}

.faq-item summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--color-navy);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  font-size: 1.2rem;
  color: var(--color-clay);
  flex-shrink: 0;
}

.faq-item[open] summary::after {
  content: '\2212';
}

.faq-item p {
  color: var(--color-ink-soft);
  margin: 0.8em 0 0;
}
</style>
