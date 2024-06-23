<script setup lang="tsx">
import Socials from '@/components/socials/SocialsList.vue'
import UserInfo from '@/components/UserInfo.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>

<template>
  <div class="wrapper">
    <UserInfo />
    <Socials />
  </div>
  <NavigationMenu />
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation {
  height: 45px;
  margin-top: auto;
}
:deep() {
  .navigation-item {
    flex-grow: 1;
    height: 100%;
    line-height: 45px;
    border-right: 2px solid rgba($white, 0.5);
    background-color: rgba($green, 0.85);
    transition: all ease 300ms;
    text-decoration: none;
    &:last-child {
      border-right: none;
    }
    &:hover {
      background-color: rgba($darkgreen, 0.85);
      cursor: pointer;
    }
  }
}
</style>
