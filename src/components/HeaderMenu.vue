<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
import { routerLinks } from '@/router'
import { RouterLink } from 'vue-router'

const handleMenuOpen = () => {
  open.value = true
  document.body.style.overflow = 'hidden'
}

const handleMenuClose = () => {
  open.value = false
  document.body.style.overflow = ''
}

const toggleMenu = () => {
  if (open.value) {
    handleMenuClose()
  } else {
    handleMenuOpen()
  }
}
</script>

<template>
  <div
    class="menu-modal"
    v-if="open"
    v-motion
    :initial="{
      clipPath: 'circle(30px at calc(100% - 50px) 42px)',
      opacity: 0
    }"
    :enter="{
      clipPath: 'circle(150vw at calc(100% - 50px) 42px)',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 45,
        mass: 0.5
      }
    }"
    @click="handleMenuClose"
  >
    <div class="menu-navigation">
      <RouterLink
        v-for="(link, ind) in routerLinks"
        v-motion
        :initial="{
          opacity: 0,
          y: 15
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            opacity: {
              duration: 400,
              delay: 250 * (ind + 1),
              type: 'keyframes',
              ease: 'linear'
            },

            y: {
              duration: 150,
              delay: 250 * (ind + 1),
              type: 'keyframes',
              ease: 'linear'
            }
          }
        }"
        class="menu-nav-item"
        :key="ind"
        :to="link.link"
        >{{ link.title }}</RouterLink
      >
    </div>
  </div>

  <button class="hamburger hamburger--spring" :class="open && 'is-active'" @click.stop="toggleMenu">
    <span class="hamburger-box"></span>
    <span class="hamburger-inner"></span>
  </button>
</template>

<style lang="scss" scoped>
.menu-modal {
  background-color: rgba($green, 0.85);
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  bottom: 0;
  clip-path: circle(30px at calc(100% - 50px) 42px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hamburger {
  z-index: 999999;
  position: relative;
  padding: 0;

  .hamburger-inner,
  .hamburger-inner:before,
  .hamburger-inner:after,
  &.is-active .hamburger-inner,
  &.is-active .hamburger-inner:before,
  &.is-active .hamburger-inner:after {
    background-color: white;
  }
}

.menu-navigation {
  max-width: 600px;
  width: 100%;
}

.menu-nav-item {
  background-color: $green;
  padding: 20px;
  margin: 5px;
  width: 100%;
  transition:
    transform ease 0.3s,
    background-color ease 0.3s;
  text-decoration: none;
  color: white;
  font-size: 24px;
  display: inline-block;

  &:hover {
    transform: translateX(10px);
    background-color: $darkgreen;
  }
}
</style>
