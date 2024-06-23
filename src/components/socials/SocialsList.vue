<template>
  <ul class="socials">
    <SocialItem :class="itemClass" v-for="item in socials" :key="item.id" :link="item.link">
      <component :is="item.icon" :class="item.class"></component>
    </SocialItem>
  </ul>
</template>

<script setup lang="ts">
import SocialItem from './SocialItem.vue'
import GitHubIcon from '@/components/icons/IconGithub.vue'
import LinkedInIcon from '@/components/icons/IconLinkedin.vue'
import Instagram from '@/components/icons/IconInstagram.vue'
defineProps(['itemClass'])

const socials = [
  {
    icon: Instagram,
    class: 'insta-icon',
    id: '1',
    link: 'https://www.instagram.com/gkarine91/'
  },
  {
    icon: GitHubIcon,
    class: 'github-icon',
    id: '2',
    link: 'https://github.com/Karine91'
  },
  {
    icon: LinkedInIcon,
    class: 'linkedin-icon',
    id: '3',
    link: 'https://www.linkedin.com/in/karinehiulumian/'
  }
]
</script>

<style lang="scss" scoped>
.socials {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .github-icon {
    position: relative;
    top: 2px;
  }
}
</style>
