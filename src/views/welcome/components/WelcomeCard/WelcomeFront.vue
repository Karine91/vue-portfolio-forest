<script setup lang="tsx">
import AvaImg from '@/assets/images/ava.jpg'
import Socials from '@/components/socials/SocialsList.vue'
import { RouterLink } from 'vue-router'
import UserInfo from '@/components/UserInfo.vue'

const NavLink = (props: { link: string; title: string }) => {
  return (
    <RouterLink class="navigation-link" to={props.link}>
      {props.title}
    </RouterLink>
  )
}

const links = [
  { link: '/works', title: 'My works' },
  { link: '/about', title: 'About me' },
  { link: '/blog', title: 'Blog' }
]
</script>

<template>
  <div class="wrapper">
    <UserInfo />
    <Socials />
  </div>
  <ul class="navigation">
    <li v-for="item in links" :key="item.link" class="navigation-item">
      <NavLink :link="item.link" :title="item.title" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: auto;
}

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
.navigation-link {
  text-decoration: none;
  color: $white;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
