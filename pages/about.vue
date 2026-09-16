<script setup>
useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: 'About the Cape Bolinao Lighthouse Digital Showcase, an initiative of the Pangasinan Provincial Tourism Office.'
    }
  ]
})

const commitments = [
  {
    title: 'Lightning fast',
    body: 'No page downloads a single photo. Every scene on this site is inline vector artwork, so pages stay small and load quickly on 3G and 4G connections.'
  },
  {
    title: 'Mobile-first',
    body: 'Laid out for a phone screen first, then widened for tablets and desktops — not the other way around.'
  },
  {
    title: 'Maintainable',
    body: 'Every fact, timeline entry, and FAQ lives in one content file. Updating a detail never requires touching a component.'
  },
  {
    title: 'Accessible',
    body: 'Built to WCAG 2.1 AA principles: visible focus states, a skip-to-content link, native accessible accordions, and labeled interactive controls.'
  }
]
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <p class="eyebrow">About this project</p>
        <h1>A single landmark, shown properly</h1>
        <p class="lede">
          This site is a digital initiative of the Pangasinan Provincial
          Tourism Office, focused entirely on Cape Bolinao Lighthouse — its
          history, how to visit, and what it looks like across a full day.
        </p>
      </div>
    </section>

    <section class="container commitments">
      <h2>What this site is built on</h2>
      <div class="commitment-grid">
        <article v-for="item in commitments" :key="item.title" class="commitment-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section class="container contact-section">
      <h2>Get in touch</h2>
      <p>
        For corrections, updated visiting hours, or partnership inquiries,
        reach the Pangasinan Provincial Tourism Office directly.
      </p>
      <dl class="contact-list">
        <div>
          <dt>Office</dt>
          <dd>Pangasinan Provincial Tourism Office, Lingayen, Pangasinan</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>tourism@pangasinan.gov.ph</dd>
        </div>
      </dl>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
  background: var(--color-navy);
  color: var(--color-foam);
  padding: var(--space-5) 0 var(--space-4);
}

.about-hero h1 {
  color: var(--color-foam);
  max-width: 22ch;
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

.commitments {
  padding: var(--space-5) 0;
}

.commitment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-3);
  margin-top: var(--space-3);
}

.commitment-card {
  border-left: 3px solid var(--color-clay);
  padding-left: var(--space-2);
}

.commitment-card h3 {
  font-size: 1.05rem;
}

.commitment-card p {
  color: var(--color-ink-soft);
  font-size: 0.95rem;
}

.contact-section {
  padding-bottom: var(--space-6);
}

.contact-list {
  margin-top: var(--space-2);
  display: grid;
  gap: var(--space-2);
}

.contact-list dt {
  font-weight: 600;
  color: var(--color-navy);
}

.contact-list dd {
  margin: 0.1em 0 0;
  color: var(--color-ink-soft);
}
</style>
