<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
const route = useRoute()
const { app } = useRuntimeConfig()
const logoSrc = `${app.baseURL}assets/lighthouse-animation.gif`

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
function closeMenu() {
  isMenuOpen.value = false
}

watch(() => route.path, closeMenu)
</script>

<template>
  <header class="header">
    <div class="container header-row">
      <NuxtLink to="/" class="logo" aria-label="Cape Bolinao Lighthouse, home">
        <img :src="logoSrc" alt="" class="logo-icon" aria-hidden="true" />
        <span class="logo-mark">Bolinao</span><span class="logo-accent">Lighthouse</span>
      </NuxtLink>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        @click="toggleMenu"
      >
        <span class="visually-hidden">{{ isMenuOpen ? 'Close menu' : 'Open menu' }}</span>
        <span class="menu-toggle-bars" :class="{ open: isMenuOpen }" aria-hidden="true">
          <span /><span /><span />
        </span>
      </button>
      <nav
        id="primary-navigation"
        class="nav"
        :class="{ open: isMenuOpen }"
        aria-label="Primary"
      >
        <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/history" @click="closeMenu">History</NuxtLink>
        <NuxtLink to="/visit" @click="closeMenu">Plan a Visit</NuxtLink>
        <NuxtLink to="/gallery" @click="closeMenu">Gallery</NuxtLink>
        <NuxtLink to="/about" @click="closeMenu">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--color-navy);
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  position: relative;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-foam);
  letter-spacing: 0.01em;
}
.logo-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  flex-shrink: 0;
}

/* --- Logo text animation --- */
.logo-mark,
.logo-accent {
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 4s linear 3;
}
.logo-mark {
  background-image: linear-gradient(
    90deg,
    var(--color-foam) 0%,
    #ffffff 25%,
    var(--color-foam) 50%
  );
}
.logo-accent {
  background-image: linear-gradient(
    90deg,
    var(--color-teal) 0%,
    #ffffff 25%,
    var(--color-teal) 50%
  );
}
@keyframes shine {
  to {
    background-position: -200% center;
  }
}
@media (prefers-reduced-motion: reduce) {
  .logo-mark,
  .logo-accent {
    animation: none;
  }
}

.nav {
  display: flex;
  gap: var(--space-3);
}

/* --- Nav link animation --- */
.nav a {
  position: relative;
  color: var(--color-foam);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5em 0.2em;
  border-bottom: 2px solid transparent;
  transition: color 0.25s ease, transform 0.25s ease;
}
.nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: var(--color-teal);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.nav a:hover {
  color: #fff;
  transform: translateY(-2px);
}
.nav a:hover::after {
  transform: scaleX(1);
}
.nav a:active {
  transform: translateY(0) scale(0.96);
  transition: transform 0.1s ease;
}
.nav a.router-link-exact-active {
  border-bottom-color: transparent;
  color: #fff;
}
.nav a.router-link-exact-active::after {
  background: var(--color-clay);
  transform: scaleX(1);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  padding: 0.5em;
  cursor: pointer;
}
.menu-toggle-bars {
  display: block;
  width: 24px;
  height: 18px;
  position: relative;
}
.menu-toggle-bars span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-foam);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.menu-toggle-bars span:nth-child(1) { top: 0; }
.menu-toggle-bars span:nth-child(2) { top: 8px; }
.menu-toggle-bars span:nth-child(3) { top: 16px; }
.menu-toggle-bars.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.menu-toggle-bars.open span:nth-child(2) {
  opacity: 0;
}
.menu-toggle-bars.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
@media (max-width: 720px) {
  .menu-toggle {
    display: block;
  }
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-navy);
    flex-direction: column;
    padding: var(--space-2) var(--space-3) var(--space-3);
    gap: var(--space-1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .nav.open {
    display: flex;
  }
}
</style>