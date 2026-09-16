<script setup>
defineProps({
  mode: {
    type: String,
    default: 'day',
    validator: (value) => ['dawn', 'day', 'dusk', 'night', 'storm'].includes(value)
  },
  animateBeam: {
    type: Boolean,
    default: true
  }
})

const skyByMode = {
  dawn: ['#f6d9b0', '#f3eee1'],
  day: ['#bfe1f2', '#fbf9f3'],
  dusk: ['#e79a63', '#5a3a52'],
  night: ['#0a1830', '#081a26'],
  storm: ['#5c6b73', '#3a464c']
}
</script>

<template>
  <svg
    class="lighthouse-illustration"
    viewBox="0 0 320 220"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    :aria-label="`Illustration of Cape Bolinao Lighthouse at ${mode}`"
  >
    <defs>
      <linearGradient :id="`sky-${mode}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" :stop-color="skyByMode[mode][0]" />
        <stop offset="1" :stop-color="skyByMode[mode][1]" />
      </linearGradient>
      <radialGradient :id="`beam-glow-${mode}`" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#fff7dc" stop-opacity="0.9" />
        <stop offset="1" stop-color="#fff7dc" stop-opacity="0" />
      </radialGradient>
    </defs>

    <rect width="320" height="220" :fill="`url(#sky-${mode})`" />

    <!-- Stars, only at night -->
    <g v-if="mode === 'night'" opacity="0.9">
      <circle v-for="star in 18" :key="star" :cx="(star * 47) % 300 + 10" :cy="(star * 29) % 90 + 10" r="1.3" fill="#fbf9f3" />
    </g>

    <!-- Sun, day only -->
    <circle v-if="mode === 'day'" cx="260" cy="35" r="18" fill="#f6d9b0" opacity="0.9" />

    <!-- Storm clouds and rain -->
    <g v-if="mode === 'storm'" opacity="0.8">
      <ellipse cx="80" cy="35" rx="46" ry="16" fill="#2c3a40" />
      <ellipse cx="220" cy="25" rx="56" ry="18" fill="#2c3a40" />
      <line v-for="drop in 10" :key="drop" :x1="20 + drop * 28" y1="55" :x2="10 + drop * 28" y2="80" stroke="#dfe9ec" stroke-width="2" opacity="0.6" />
    </g>

    <!-- Sea -->
    <path d="M0 168 Q80 158 160 168 T320 164 V220 H0 Z" :fill="mode === 'night' ? '#0f2a3d' : '#3e8977'" :opacity="mode === 'night' ? 0.9 : 0.35" />
    <path d="M0 178 Q80 170 160 178 T320 174" stroke="#fbf9f3" stroke-width="2" fill="none" opacity="0.5" />

    <!-- Cliff -->
    <path d="M110 220 L130 150 L230 150 L260 220 Z" fill="#c99a3c" opacity="0.55" />

    <!-- Lighthouse beam (behind tower so it appears to emanate from the lamp) -->
    <g v-if="mode === 'night' || mode === 'storm' || mode === 'dusk'" class="beam-group" :class="{ sweeping: animateBeam && (mode === 'night' || mode === 'storm') }">
      <polygon points="176,95 320,40 320,150" :fill="`url(#beam-glow-${mode})`" />
    </g>

    <!-- Lighthouse tower -->
    <g>
      <rect x="160" y="70" width="32" height="82" fill="#f3eee1" stroke="#0f2a3d" stroke-width="2" />
      <rect x="164" y="88" width="8" height="10" fill="#0f2a3d" opacity="0.45" />
      <rect x="180" y="88" width="8" height="10" fill="#0f2a3d" opacity="0.45" />
      <rect x="164" y="112" width="8" height="10" fill="#0f2a3d" opacity="0.45" />
      <rect x="180" y="112" width="8" height="10" fill="#0f2a3d" opacity="0.45" />
      <rect x="156" y="58" width="40" height="14" fill="#c4472f" />
      <polygon points="156,58 176,40 196,58" fill="#c4472f" />
      <circle cx="176" cy="65" r="4" :fill="mode === 'day' || mode === 'dawn' ? '#fff' : '#fff7dc'" />
    </g>
  </svg>
</template>

<style scoped>
.lighthouse-illustration {
  width: 100%;
  height: auto;
  aspect-ratio: 320 / 220;
}

.beam-group {
  transform-origin: 176px 65px;
}

.beam-group.sweeping {
  animation: sweep 6s ease-in-out infinite;
}

@keyframes sweep {
  0%, 100% {
    transform: rotate(-14deg);
  }
  50% {
    transform: rotate(14deg);
  }
}
</style>
