<script setup>
const props = defineProps({
  error: { type: Object, required: true }
})

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error-page">
    <AppHeader />
    <main class="container error-main">
      <LighthouseIllustration mode="storm" />
      <p class="error-code">{{ error.statusCode }}</p>
      <h1>
        {{ error.statusCode === 404 ? 'This light doesn\u2019t reach that far' : 'Something went off course' }}
      </h1>
      <p>
        {{
          error.statusCode === 404
            ? 'The page you\u2019re looking for isn\u2019t here \u2014 it may have moved, or the link may be out of date.'
            : 'An unexpected error occurred while loading this page.'
        }}
      </p>
      <button type="button" class="btn btn-primary" @click="goHome">Back to home</button>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.error-main {
  padding: var(--space-6) var(--space-3);
  max-width: 360px;
  text-align: center;
  margin: 0 auto;
}

.error-code {
  font-family: var(--font-display);
  font-size: 2.4rem;
  color: var(--color-clay);
  margin: var(--space-2) 0 0;
}

.error-main .btn {
  margin-top: var(--space-2);
}
</style>
