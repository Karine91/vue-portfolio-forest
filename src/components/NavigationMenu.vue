<script setup lang="tsx">
import { RouterLink } from 'vue-router'
import { routerLinks } from '@/router'

const props = defineProps<{ links?: { link: string; title: string }[] }>()

const NavLink = (props: { link: string; title: string }) => {
  return (
    <RouterLink class="navigation-link" to={props.link}>
      {props.title}
    </RouterLink>
  )
}

const _links = props.links ?? routerLinks.slice(0, -1)
</script>

<template>
  <ul class="navigation">
    <li v-for="item in _links" :key="item.link" class="navigation-item">
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
