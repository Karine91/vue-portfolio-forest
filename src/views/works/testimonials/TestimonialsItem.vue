<script setup lang="ts">
import type { TestimonialsItemType } from './types.ts'

const props = defineProps<TestimonialsItemType>()
</script>

<template>
  <li class="testimonial-item">
    <img :src="props.avatar" :alt="props.name" />
    <p>{{ props.message }}</p>
    <div>{{ props.name }}</div>
    <div>- {{ props.occupation }}</div>
  </li>
</template>

<style scoped lang="scss"></style>
