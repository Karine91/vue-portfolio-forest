<script lang="ts" setup>
import Socials from './socials/SocialsList.vue'
import HeaderMenu from './HeaderMenu.vue'
</script>

<template>
  <header>
    <Socials itemClass="header-socials-item" />
    <HeaderMenu />
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  :deep(.socials-link .icon) {
    color: white;
  }
}
</style>
