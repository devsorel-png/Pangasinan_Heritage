<script setup>
import { ref } from 'vue'

defineProps({
  items: { type: Array, required: true }
})


const photoItems = ref([
  { id: 1, src: 'data:image/webp;base64,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', title: 'Bolinao Lighthouse',  },
  { id: 2, src: 'https://www.bing.com/th/id/OIP.q8RdcsRu1RkYoxT1Qx8DewAAAA?w=184&h=245&c=7&r=0&o=7&pid=1.7&rm=3&r=0', title: 'Bolinao Lighthouse',  },
  { id: 3, src: 'https://www.bing.com/th/id/OIP.3HUfxFfRAjw2DKlOTpaq1gHaFj?w=184&h=138&c=7&r=0&o=7&pid=1.7&rm=3&r=0', title: 'Bolinao Lighthouse', },
  { id: 4, src: 'https://www.bing.com/th/id/OIP.RALo0_cDb2DX2b7bAkS8_wHaLH?w=184&h=276&c=7&r=0&o=7&pid=1.7&rm=3&r=0', title: 'Bolinao Lighthouse',  },
  { id: 5, src: 'https://www.bing.com/th/id/OIP.HpNsJTLmKb3PhoHWVhKbmQHaLG?w=184&h=276&c=7&r=0&o=7&pid=1.7&rm=3&r=0', title: 'Bolinao Lighthouse', },
  { id: 6, src: 'https://outoftownblog.com/wp-content/uploads/2014/04/Lighthouse-in-Bolinao-Pangasinan.jpg', title: 'Bolinao Lighthouse',  },
  { id: 7, src: 'https://tse3.mm.bing.net/th/id/OIP.mH491AeOxipR_LycD4mRQgHaFj?r=0&pid=ImgDet&w=191&h=143&c=7&o=7&rm=3', title: 'Bolinao Lighthouse',  },
  { id: 8, src: 'https://i.pinimg.com/736x/ba/7e/4b/ba7e4bda9d723dd01062f613b2dd4c00.jpg', title: 'Bolinao Lighthouse',  },
  { id: 9, src: 'https://www.bing.com/th/id/OIP.p7Zf3wZMBYavWx-dRBvFLgHaEK?w=184&h=103&c=7&r=0&o=7&pid=1.7&rm=3&r=0', title: 'Bolinao Lighthouse',  },
  { id: 10, src: 'https://www.bing.com/th/id/OIP.hKgUiPr-gw6bwpEBNksS2wHaJ4?w=184&h=245&c=7&r=0&o=7&pid=1.7&rm=3&r=0', title: 'Bolinao Lighthouse', }
])


const hoveredSrc = ref(null)

function showPreview(item) {
  if (item.src && !item.src.startsWith('https://www.bing.com/th/id/OIP.BE3bTWmESYTpUn5KeWO_CAHaF-?w=184&h=148&c=7&r=0&o=7&pid=1.7&rm=3&r=0')) {
    hoveredSrc.value = item.src
  }
}

function hidePreview() {
  hoveredSrc.value = null
}
</script>

<template>
  <div>
  
    <div class="gallery-grid">
      <figure v-for="item in items" :key="item.mode" class="gallery-item">
        <LighthouseIllustration :mode="item.mode" :animate-beam="false" />
        <figcaption>
          <p class="gallery-title">{{ item.title }}</p>
          <p class="gallery-caption">{{ item.caption }}</p>
        </figcaption>
      </figure>
    </div>

  
    <h2 class="gallery-heading">Featured of Bolinao Lighthouse</h2>

    <div class="gallery-grid photo-grid">
      <figure
        v-for="item in photoItems"
        :key="item.id"
        class="gallery-item photo-item"
        @mouseenter="showPreview(item)"
        @mouseleave="hidePreview"
      >
        <div class="image-wrapper">
          <img :src="item.src" :alt="item.title" class="gallery-img" />
        </div>
        <figcaption>
          <p class="gallery-title">{{ item.title }}</p>
          <p class="gallery-caption">{{ item.caption }}</p>
        </figcaption>
      </figure>
    </div>

 
    <Transition name="fade">
      <div v-if="hoveredSrc" class="preview-overlay">
        <img :src="hoveredSrc" class="preview-image" alt="Full preview" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.gallery-heading {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-navy, #1b2a4a);
  margin: var(--space-4, 2rem) 0 var(--space-3, 1.5rem);
  letter-spacing: 0.5px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: var(--space-3);
}

.gallery-item {
  margin: 0;
  background: var(--color-foam);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-card);
  overflow: hidden;
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}

.gallery-item figcaption {
  padding: var(--space-2);
}

.gallery-title {
  font-weight: 600;
  color: var(--color-navy);
  margin: 0 0 0.2em;
}

.gallery-caption {
  color: var(--color-ink-soft);
  font-size: 0.9rem;
  margin: 0;
}


.photo-item {
  cursor: pointer;
}

.image-wrapper {
  overflow: hidden;
  border-radius: var(--radius-card, 12px) var(--radius-card, 12px) 0 0;
}

.gallery-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease, filter 0.45s ease;
}

.photo-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  border-color: var(--color-navy, #1b2a4a);
  z-index: 2;
}

.photo-item:hover .gallery-img {
  transform: scale(1.1);
  filter: brightness(1.05);
}


.preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  pointer-events: none;
}

.preview-image {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  object-fit: contain;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>