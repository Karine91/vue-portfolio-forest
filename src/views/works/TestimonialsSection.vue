<script setup lang="ts">
import TestimonialsList from './testimonials/TestimonialsList.vue'
</script>

<template>
  <section>
    <div class="title">
      <h2 class="heading-1">What clients say about me</h2>
    </div>
    <TestimonialsList />
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 30px;
  min-height: 150vh;
  background:
    url('@/assets/images/contact-form-bg.png') no-repeat bottom / 100%,
    url('@/assets/images/list2.png') no-repeat 5% 60px,
    url('@/assets/images/list1.png') no-repeat 15% center,
    url('@/assets/images/list3.png') no-repeat 95% center,
    #f4f5f0;
}
.title {
  padding: 0 30px;
  display: flex;
  justify-content: center;
}
h2 {
  background-image: url('@/assets/images/about_header.svg');
  background-size: contain;
  background-repeat: no-repeat;
  white-space: nowrap;
  background-position: center center;
  max-width: 700px;
  text-wrap: wrap;
  &.heading-1 {
    padding: 0.5em 1em;
    text-transform: uppercase;
  }
}
</style>
