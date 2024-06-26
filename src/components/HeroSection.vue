<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import pageBg from '@/assets/images/heroBg.jpg'
import PortfolioHeaderTitle from '@/components/icons/PortfolioHeaderTitle.vue'
import UserInfo from './UserInfo.vue'
import ArrowDown from '@/components/icons/ArrowDown.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const bgRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const userRef = ref<HTMLElement | null>(null)
const heroSectionRef = ref<HTMLElement | null>(null)

const move = (element: HTMLElement, wScroll: number, amount: number) => {
  const delta = -wScroll / amount
  element.style.transform = `translate3d(0, ${delta}%, 0)`
}

const onScroll = () => {
  const wScroll = window.scrollY
  if (bgRef.value && titleRef.value && userRef.value) {
    move(bgRef.value, wScroll, 45)
    move(titleRef.value, wScroll, 10)
    move(userRef.value, wScroll, 8)
  }
}

onMounted(() => {
  document.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
})

const moveDown = () => {
  const nextSection = heroSectionRef.value?.getBoundingClientRect()
  if (nextSection) {
    window.scrollTo({ top: window.scrollY + nextSection.bottom, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="hero-section" ref="heroSectionRef">
    <div class="bg" ref="bgRef">
      <img :src="pageBg" alt="" />
    </div>
    <div class="back-title" ref="titleRef">
      <PortfolioHeaderTitle />
    </div>
    <TheHeader />
    <div class="hero" ref="userRef">
      <UserInfo class="user-info" />
    </div>
    <div class="arrow-bottom">
      <button class="icon-button" @click="moveDown">
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
  z-index: 10;

  .icon-button {
    margin-bottom: 5px;
  }

  .arrow-icon {
    height: 20px;
    color: rgba($white, 0.7);
  }
}
</style>
