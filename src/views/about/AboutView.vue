<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import AboutMeSection from './AboutMeSection.vue'
import TriangleSection from '@/components/TriangleSection.vue'
</script>

<template>
  <MainLayout>
    <TriangleSection class="triangle" />
    <AboutMeSection />
  </MainLayout>
</template>

<style scoped lang="scss">
.triangle {
  color: #ebefe2;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
