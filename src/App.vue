<script setup>
import { onMounted } from 'vue';
import { useThemeStore } from './stores/theme';

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.checkTheme()
})
</script>

<template>
  <!-- <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav> -->
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
