<script setup lang="tsx">
import { RouterLink } from 'vue-router'

const props = defineProps<{ extralinks?: { link: string; title: string }[] }>()

const NavLink = (props: { link: string; title: string }) => {
  return (
    <RouterLink class="navigation-link" to={props.link}>
      {props.title}
    </RouterLink>
  )
}

const defaultLinks = [
  { link: '/works', title: 'My works' },
  { link: '/about', title: 'About me' },
  { link: '/blog', title: 'Blog' }
]

const links = [...defaultLinks, ...(props.extralinks || [])]
</script>

<template>
  <ul class="navigation">
    <li v-for="item in links" :key="item.link" class="navigation-item">
      <NavLink :link="item.link" :title="item.title" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation-link {
  text-decoration: none;
  color: $white;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
