<script setup>
const year = new Date().getFullYear()

const socials = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    src: 'https://cdn.simpleicons.org/facebook/F3EEE1'
  },
  {
    name: 'X',
    url: 'https://x.com',
    src: 'https://cdn.simpleicons.org/x/F3EEE1'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com',
    src: 'https://cdn.simpleicons.org/tiktok/F3EEE1'
  }
]
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <p class="footer-title">Bolinao<span>Lighthouse</span></p>
        <p class="footer-copy">
          A digital initiative of the Pangasinan Provincial Tourism Office to
          promote awareness of Cape Bolinao Lighthouse and Patar Beach.
        </p>

        <ul class="footer-socials" aria-label="Social media links">
          <li
            v-for="(social, i) in socials"
            :key="social.name"
            class="footer-social-item"
            :style="{ '--delay': i * 0.12 + 's' }"
          >
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="footer-social-link"
            >
              <img
                :src="social.src"
                :alt="social.name"
                class="footer-social-icon"
              >
            </a>
          </li>
        </ul>
      </div>

      <nav aria-label="Footer">
        <p class="footer-heading">Explore</p>
        <ul class="footer-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/history">History</NuxtLink></li>
          <li><NuxtLink to="/visit">Plan a Visit</NuxtLink></li>
          <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>

      <div>
        <p class="footer-heading">Visiting</p>
        <p class="footer-copy">
          Patar, Bolinao, Pangasinan — reachable by tricycle or private
          vehicle from Bolinao town proper.
        </p>
      </div>
    </div>

    <div class="container">
      <p class="copyright">© {{ year }} Cape Bolinao Lighthouse Digital Showcase</p>
    </div>

    <div class="footer-beam"></div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background: var(--color-navy-deep);
  color: var(--color-sand);
  padding: var(--space-5) 0 var(--space-3);
  margin-top: var(--space-6);
  overflow: hidden;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.footer-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--color-foam);
  margin-bottom: 0.6em;
}
.footer-title span {
  color: var(--color-teal);
}
.footer-heading {
  font-weight: 600;
  color: var(--color-foam);
  margin-bottom: 0.6em;
}
.footer-copy {
  color: rgba(243, 238, 225, 0.75);
  font-size: 0.92rem;
  max-width: 32ch;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.footer-links a {
  color: rgba(243, 238, 225, 0.85);
  text-decoration: none;
  font-size: 0.92rem;
}
.footer-links a:hover {
  color: var(--color-teal);
}
.copyright {
  padding-top: var(--space-3);
  font-size: 0.85rem;
  color: rgba(243, 238, 225, 0.6);
  max-width: none;
}

/* --- Social icons --- */
.footer-socials {
  list-style: none;
  display: flex;
  gap: 0.9em;
  margin: 1.1em 0 0;
  padding: 0;
}
.footer-social-item {
  opacity: 0;
  transform: translateY(14px) scale(0.85);
  animation: social-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  animation-delay: var(--delay, 0s);
}
.footer-social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(243, 238, 225, 0.08);
  border: 1px solid rgba(243, 238, 225, 0.15);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}
.footer-social-link::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-teal) 0%, transparent 70%);
  opacity: 0;
  transform: scale(0.4);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.footer-social-icon {
  width: 18px;
  height: 18px;
  position: relative;
  z-index: 1;
  transition: transform 0.35s ease;
}
.footer-social-link:hover,
.footer-social-link:focus-visible {
  transform: translateY(-5px) rotate(-6deg);
  background: rgba(243, 238, 225, 0.14);
  border-color: var(--color-teal);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  outline: none;
}
.footer-social-link:hover::before,
.footer-social-link:focus-visible::before {
  opacity: 0.35;
  transform: scale(1);
}
.footer-social-link:hover .footer-social-icon,
.footer-social-link:focus-visible .footer-social-icon {
  transform: scale(1.15) rotate(6deg);
}
.footer-social-link:active {
  transform: translateY(-2px) scale(0.94);
}

@keyframes social-in {
  0% {
    opacity: 0;
    transform: translateY(14px) scale(0.85);
  }
  60% {
    opacity: 1;
    transform: translateY(-3px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* --- Decorative animated beam at footer bottom --- */
.footer-beam {
  position: absolute;
  bottom: 0;
  left: -50%;
  width: 200%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-teal),
    var(--color-clay),
    var(--color-teal),
    transparent
  );
  background-size: 50% 100%;
  animation: beam-slide 6s linear infinite;
  opacity: 0.6;
}
@keyframes beam-slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-beam {
    animation: none;
  }
  .footer-social-item {
    animation: none;
    opacity: 1;
    transform: none;
  }
  .footer-social-link,
  .footer-social-icon {
    transition: none;
  }
}

@media (max-width: 720px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
}
</style>