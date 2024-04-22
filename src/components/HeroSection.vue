<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import pageBg from '@/assets/images/heroBg.jpg'
import PortfolioHeaderTitle from '@/components/icons/PortfolioHeaderTitle.vue'
import UserInfo from './UserInfo.vue'
import ArrowDown from '@/components/icons/ArrowDown.vue'
</script>

<template>
  <div class="hero-section">
    <div class="bg">
      <img :src="pageBg" alt="" />
    </div>
    <div class="back-title">
      <PortfolioHeaderTitle />
    </div>
    <TheHeader />
    <div class="hero">
      <UserInfo class="user-info" />
    </div>
    <div class="arrow-bottom">
      <button class="icon-button">
        <ArrowDown class="arrow-icon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-section {
  background: url('@/assets/images/heroBg.jpg');
  background-size: cover;
  min-height: 600px;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
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

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
}

.user-info :deep(.user-description) {
  color: $white;
}

.arrow-bottom {
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 90px;

  .icon-button {
    margin-bottom: 5px;
  }

  .arrow-icon {
    height: 20px;
    color: rgba($white, 0.7);
  }
}
</style>
