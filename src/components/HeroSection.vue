<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import pageBg from '@/assets/images/heroBg.jpg'
import PortfolioHeaderTitle from '@/components/icons/PortfolioHeaderTitle.vue'
</script>

<template>
  <div class="hero-section">
    <div class="bg">
      <img :src="pageBg" alt="" />
    </div>
    <div class="back-title">
      <PortfolioHeaderTitle />
    </div>
  </div>
  <TheHeader />
</template>

<style lang="scss" scoped>
.hero-section {
  background: url('@/assets/images/heroBg.jpg');
  background-size: cover;
  min-height: 600px;
  height: 100vh;
  position: relative;
}

.bg,
.back-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg img {
  display: block;
  min-height: 150%;
  @include tablets {
    max-width: none;
  }
}
</style>
