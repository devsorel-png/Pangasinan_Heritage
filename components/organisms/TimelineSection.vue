<script setup>
defineProps({
  entries: { type: Array, required: true }
})
</script>

<template>
  <ol class="timeline">
    <li v-for="entry in entries" :key="entry.year" class="timeline-item">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-content">
        <p class="timeline-year">{{ entry.year }}</p>
        <h3>{{ entry.title }}</h3>
        <p>{{ entry.body }}</p>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.timeline-item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: var(--space-2);
  padding-bottom: var(--space-4);
  position: relative;
}

.timeline-item:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 22px;
  bottom: 0;
  width: 2px;
  background: var(--color-line);
}

.timeline-marker {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--color-teal);
  border: 3px solid var(--color-foam);
  box-shadow: 0 0 0 2px var(--color-teal);
  margin-top: 2px;
}

.timeline-year {
  font-family: var(--font-display);
  color: var(--color-clay);
  font-weight: 600;
  margin: 0 0 0.2em;
  max-width: none;
}

.timeline-content h3 {
  font-size: 1.1rem;
  margin-bottom: 0.3em;
}

.timeline-content p:last-child {
  color: var(--color-ink-soft);
  margin-bottom: 0;
}
</style>
