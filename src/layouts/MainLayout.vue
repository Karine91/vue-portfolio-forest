<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import Footer from '@/components/TheFooter.vue'
</script>

<template>
  <HeroSection />
  <slot></slot>
  <Footer />
</template>
