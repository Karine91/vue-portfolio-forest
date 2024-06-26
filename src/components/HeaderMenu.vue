<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)

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
      clipPath: 'circle(200vh at calc(100% - 50px) 42px)',
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
    Menu popup
  </div>

  <button class="hamburger hamburger--spring" :class="open && 'is-active'" @click.stop="toggleMenu">
    <span class="hamburger-box"></span>
    <span class="hamburger-inner"></span>
  </button>
</template>

<style lang="scss">
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
</style>
