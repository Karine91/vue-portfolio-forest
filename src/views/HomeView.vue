<script setup lang="ts">
import WaterBackground from '@/components/waterBackground/WaterBackground.vue'
</script>

<template>
  <main>
    <WaterBackground />
  </main>
</template>
<style scoped>
main {
  min-height: 100vh;
  @media (max-width: 968px) and (orientation: landscape) {
    height: 100vw;
  }
}
</style>
