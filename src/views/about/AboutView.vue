<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import AboutMeSection from './AboutMeSection.vue'
import TriangleSection from '@/components/TriangleSection.vue'
import ContactSection from './ContactSection.vue'
</script>

<template>
  <MainLayout>
    <TriangleSection class="triangle" />
    <AboutMeSection />
    <ContactSection />
  </MainLayout>
</template>

<style scoped lang="scss">
.triangle {
  :deep(.left) {
    fill: $lightgreen;
  }

  :deep(.right) {
    fill: #f4f5f0;
  }
}
</style>
