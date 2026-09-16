<script setup>
import { ref, computed } from 'vue'

const interests = [
  {
    id: 'sunset',
    label: 'Sunset photos',
    tip: 'Arrive about an hour before sunset. The lighthouse faces west, so the lamp and sky both catch color at the same time \u2014 no need to choose between them.'
  },
  {
    id: 'quiet',
    label: 'A quiet visit',
    tip: 'Go on a weekday morning. Weekends and late afternoons draw the biggest crowds, especially around sunset.'
  },
  {
    id: 'family',
    label: 'Visiting with kids',
    tip: 'Pair the lighthouse with Patar Beach just downhill \u2014 it\u2019s an easy walk, and kids get a swim after the climb up top.'
  },
  {
    id: 'history',
    label: 'The history',
    tip: 'Read the full timeline on the History page before you go, then look for the original 1905 stonework at the tower\u2019s base once you\u2019re there.'
  }
]

const selected = ref('sunset')
const activeTip = computed(() => interests.find((item) => item.id === selected.value)?.tip)
</script>

<template>
  <div class="visit-planner">
    <div class="planner-options" role="group" aria-label="What are you most interested in?">
      <button
        v-for="item in interests"
        :key="item.id"
        type="button"
        class="planner-btn"
        :class="{ active: selected === item.id }"
        :aria-pressed="selected === item.id"
        @click="selected = item.id"
      >
        {{ item.label }}
      </button>
    </div>

    <p class="planner-tip" role="status" aria-live="polite">{{ activeTip }}</p>
  </div>
</template>

<style scoped>
.visit-planner {
  background: var(--color-foam);
  border: 1px solid var(--color-line);
  border-left: 4px solid var(--color-clay);
  border-radius: 4px;
  padding: var(--space-3);
}

.planner-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: var(--space-2);
}

.planner-btn {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.5em 1em;
  border-radius: 999px;
  border: 2px solid var(--color-line);
  background: transparent;
  color: var(--color-navy);
  cursor: pointer;
}

.planner-btn:hover {
  border-color: var(--color-teal);
}

.planner-btn.active {
  background: var(--color-teal);
  border-color: var(--color-teal);
  color: #fff;
}

.planner-tip {
  color: var(--color-ink-soft);
  margin: 0;
  min-height: 3em;
}
</style>
