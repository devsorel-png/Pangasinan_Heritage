<script setup>
const props = defineProps({
  site: {
    type: Object,
    required: true
  }
})

const {
  toggleFavorite,
  isFavorite
} = useFavorites()
</script>

<template>
  <article class="heritage-card">

    <img
      :src="site.image"
      :alt="site.name"
      class="heritage-image"
      loading="lazy"
    />

    <div class="heritage-content">

      <span class="category">
        {{ site.category }}
      </span>

      <h2>
        {{ site.name }}
      </h2>

      <p class="location">
        📍 {{ site.location }}
      </p>

      <p>
        {{ site.description }}
      </p>

      <div class="card-actions">

        <NuxtLink
          :to="`/heritage/${site.id}`"
          class="primary-button"
        >
          Explore
        </NuxtLink>

        <button
          class="favorite-button"
          @click="toggleFavorite(site.id)"
          :aria-label="`Add ${site.name} to favorites`"
        >
          {{ isFavorite(site.id) ? '♥ Saved' : '♡ Save' }}
        </button>

      </div>

    </div>

  </article>
</template>