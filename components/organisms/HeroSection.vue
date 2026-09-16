<script setup>
import { ref, computed } from 'vue'
import { lighthouse, galleryModes } from '../data/heritage.js'

const activeMode = ref('dusk')

const activeCaption = computed(
  () => galleryModes.find((item) => item.mode === activeMode.value)?.caption
)

function setMode(mode) {
  activeMode.value = mode
}
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="hero-eyebrow">Pangasinan Provincial Tourism Office</p>
        <h1>{{ lighthouse.name }}</h1>
        <p class="hero-lede">{{ lighthouse.tagline }}.</p>

        <div class="mode-switcher" role="group" aria-label="View the lighthouse at a different time of day">
          <button
            v-for="item in galleryModes"
            :key="item.mode"
            type="button"
            class="mode-btn"
            :class="{ active: activeMode === item.mode }"
            :aria-pressed="activeMode === item.mode"
            @click="setMode(item.mode)"
          >
            {{ item.title }}
          </button>
        </div>

        <div class="hero-actions">
          <NuxtLink to="/visit" class="btn btn-primary">Plan your visit</NuxtLink>
          <NuxtLink to="/history" class="btn btn-ghost">Read the history</NuxtLink>
        </div>
      </div>

      <div class="hero-art">
        <LighthouseIllustration :mode="activeMode" />
        <p class="hero-caption" aria-live="polite">{{ activeCaption }}</p>
      </div>
    </div>

    <svg class="hero-tide" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 30 Q150 0 300 30 T600 30 T900 30 T1200 20 V60 H0 Z" fill="#f3eee1" />
    </svg>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-deep) 100%);
  color: var(--color-foam);
  position: relative;
  padding: var(--space-5) 0 var(--space-4);
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  align-items: center;
}

.hero-eyebrow {
  color: var(--color-teal);
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.8em;
  max-width: none;
}

.hero h1 {
  color: var(--color-foam);
  font-size: clamp(1.9rem, 4.2vw, 2.9rem);
  max-width: 16ch;
}

.hero-lede {
  color: rgba(243, 238, 225, 0.82);
  max-width: 46ch;
  font-size: 1.05rem;
}

.mode-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: var(--space-3) 0;
}

.mode-btn {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.5em 1em;
  border-radius: 999px;
  border: 2px solid rgba(243, 238, 225, 0.3);
  background: transparent;
  color: var(--color-foam);
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.mode-btn:hover {
  border-color: var(--color-teal);
}

.mode-btn.active {
  background: var(--color-teal);
  border-color: var(--color-teal);
}

.hero-actions {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-3);
}

.hero-actions .btn-ghost {
  color: var(--color-foam);
}

.hero-art {
  border-radius: var(--radius-card);
  overflow: hidden;
  background: rgba(243, 238, 225, 0.06);
  padding: var(--space-2);
}

.hero-caption {
  color: rgba(243, 238, 225, 0.75);
  font-size: 0.88rem;
  text-align: center;
  margin: 0.6em 0 0;
  max-width: none;
  min-height: 2.6em;
}

.hero-tide {
  display: block;
  width: 100%;
  height: 40px;
  margin-top: var(--space-4);
}

@media (max-width: 860px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}
</style>
