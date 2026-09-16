<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { lighthouse, quickFacts, timeline, faqs } from '../data/heritage.js'

useHead({ title: 'Home' })

const { app } = useRuntimeConfig()
const videoSrc = (name) => `${app.baseURL}assets/${name}`
const posterSrc = (name) => `${app.baseURL}assets/${name.replace('.mp4', '.jpg')}`

// --- Video autoplay-on-scroll logic ---
const videoRefs = ref([])
let observer = null

function setVideoRef(el, index) {
  if (el) videoRefs.value[index] = el
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      })
    },
    { threshold: 0.4 }
  )

  videoRefs.value.forEach((video) => {
    if (video) observer.observe(video)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div>
    <HeroSection />

    <QuickFacts :facts="quickFacts" />

    <!-- Animated Cape Bolinao Lighthouse title -->
    <section class="container title-banner">
      <h1 class="animated-title">
        <span class="title-mark">Cape Bolinao</span>
        <span class="title-accent">Lighthouse</span>
      </h1>
    </section>

    <section class="container intro-section">
      <div class="intro-copy">
        <h2>A landmark with over a century of history</h2>
        <p>{{ lighthouse.description }}</p>
        <NuxtLink to="/history" class="text-link">Read the full timeline →</NuxtLink>
      </div>
      <div class="intro-timeline-preview">
        <TimelineSection :entries="timeline.slice(0, 2)" />
      </div>
    </section>

    <!-- Video showcase: autoplay on scroll -->
    <section class="container video-showcase">
      <div class="video-showcase-head">
        <h2>Experience the Lighthouse</h2>
        <p>Watch it come alive — scroll to play each moment.</p>
      </div>

      <div class="video-grid">
        <div class="video-card video-card-1">
          <video
            :ref="(el) => setVideoRef(el, 0)"
            :src="videoSrc('videoplayback.mp4')"
            :poster="posterSrc('videoplayback.mp4')"
            muted
            loop
            playsinline
            preload="none"
          ></video>
          <div class="video-glow"></div>
          <span class="video-label">Sunrise View</span>
        </div>

        <div class="video-card video-card-2">
          <video
            :ref="(el) => setVideoRef(el, 1)"
            :src="videoSrc('videoplayback-1.mp4')"
            :poster="posterSrc('videoplayback-1.mp4')"
            muted
            loop
            playsinline
            preload="none"
          ></video>
          <div class="video-glow"></div>
          <span class="video-label">Coastal Waves</span>
        </div>

        <div class="video-card video-card-3">
          <video
            :ref="(el) => setVideoRef(el, 2)"
            :src="videoSrc('videoplayback-2.mp4')"
            :poster="posterSrc('videoplayback-2.mp4')"
            muted
            loop
            playsinline
            preload="none"
          ></video>
          <div class="video-glow"></div>
          <span class="video-label">Night Beacon</span>
        </div>
      </div>
    </section>

    <section class="container visit-teaser">
      <div class="visit-teaser-copy">
        <h2>Planning to visit?</h2>
        <p>
          Tell us what you're after and get a tailored tip — or head
          straight to the full visit guide for directions, hours, and fees.
        </p>
      </div>
      <VisitPlanner />
    </section>

    <section class="cta-band">
      <div class="container cta-inner">
        <h2>See it in every light</h2>
        <p>
          From dawn to storm weather, browse the full gallery of the
          lighthouse across the day.
        </p>
        <NuxtLink to="/gallery" class="btn btn-primary">Open the gallery</NuxtLink>
      </div>
    </section>

    <section class="container faq-teaser">
      <h2>Common questions</h2>
      <FaqAccordion :items="faqs.slice(0, 2)" />
      <NuxtLink to="/visit" class="text-link">See all visitor FAQs →</NuxtLink>
    </section>
  </div>
</template>

<style scoped>
.intro-section {
  padding: var(--space-5) 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  align-items: start;
}

.intro-copy p {
  color: var(--color-ink-soft);
}

.text-link {
  color: var(--color-clay-dark);
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5em;
}

.visit-teaser {
  padding-bottom: var(--space-5);
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: var(--space-4);
  align-items: start;
}

.visit-teaser-copy p {
  color: var(--color-ink-soft);
}

.cta-band {
  background: var(--color-teal);
  color: #fff;
}

.cta-inner {
  padding: var(--space-5) 0;
  max-width: 60ch;
}

.cta-inner h2 {
  color: #fff;
}

.cta-inner p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space-3);
}

.cta-inner .btn-primary {
  background: var(--color-navy-deep);
}

.faq-teaser {
  padding: var(--space-5) 0 var(--space-6);
  max-width: 720px;
}

/* --- Animated title banner (gold beacon-light theme) --- */
.title-banner {
  padding: var(--space-4) 0 var(--space-2);
  text-align: center;
  background: var(--color-navy);
  border-radius: 12px;
}
.animated-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.01em;
  display: inline-flex;
  gap: 0.4em;
  flex-wrap: wrap;
  justify-content: center;
  padding: var(--space-3) 0;
}
.title-mark,
.title-accent {
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: title-shine 4s linear 3;
}
.title-mark {
  background-image: linear-gradient(
    90deg,
    #f7c948 0%,
    #ffffff 25%,
    #f7c948 50%
  );
}
.title-accent {
  background-image: linear-gradient(
    90deg,
    #ff8a5c 0%,
    #ffe08a 25%,
    #ff8a5c 50%
  );
}
@keyframes title-shine {
  to {
    background-position: -200% center;
  }
}
@media (prefers-reduced-motion: reduce) {
  .title-mark,
  .title-accent {
    animation: none;
  }
}

/* --- Video showcase: unique staggered design --- */
.video-showcase {
  padding: var(--space-6) 0;
}
.video-showcase-head {
  text-align: center;
  max-width: 60ch;
  margin: 0 auto var(--space-5);
}
.video-showcase-head p {
  color: var(--color-ink-soft);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  align-items: center;
}

.video-card {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  aspect-ratio: 9 / 14;
  background: var(--color-navy);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.video-card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.video-card-1 {
  transform: rotate(-4deg) translateY(10px);
}
.video-card-2 {
  transform: rotate(2deg) translateY(-14px);
  z-index: 2;
}
.video-card-3 {
  transform: rotate(-2deg) translateY(10px);
}
.video-card:hover {
  transform: rotate(0deg) translateY(-6px) scale(1.03);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.video-glow {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  pointer-events: none;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    180deg,
    transparent 60%,
    rgba(0, 0, 0, 0.6) 100%
  );
}
.video-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(
    120deg,
    var(--color-teal),
    var(--color-clay),
    var(--color-teal)
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.7;
}

.video-label {
  position: absolute;
  left: 12px;
  bottom: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  z-index: 2;
}

@media (max-width: 860px) {
  .intro-section,
  .visit-teaser {
    grid-template-columns: 1fr;
  }
  .video-grid {
    grid-template-columns: 1fr;
  }
  .video-card-1,
  .video-card-2,
  .video-card-3 {
    transform: none;
  }
}
</style>