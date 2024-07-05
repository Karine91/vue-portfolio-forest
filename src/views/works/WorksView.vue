<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import TriangleSection from '@/components/TriangleSection.vue'
import MyWorksSection from './MyWorksSection.vue'
import TestimonialsSection from './TestimonialsSection.vue'
</script>

<template>
  <MainLayout>
    <TriangleSection class="triangle" />
    <MyWorksSection />
    <TestimonialsSection />
  </MainLayout>
</template>

<style scoped lang="scss">
.triangle {
  :deep(.left) {
    fill: #f8f9f5;
  }

  :deep(.right) {
    fill: #f8f9f5;
  }
}
</style>
