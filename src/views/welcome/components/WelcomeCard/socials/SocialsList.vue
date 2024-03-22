<template>
  <ul class="socials">
    <SocialItem v-for="item in socials" :key="item.id" :link="item.link">
      <component :is="item.icon"></component>
    </SocialItem>
  </ul>
</template>

<script setup lang="ts">
import SocialItem from './SocialItem.vue'
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import GitHubIcon from '@/components/icons/IconGithub.vue'
import LinkedInIcon from '@/components/icons/IconLinkedin.vue'

const socials = [
  {
    icon: FacebookIcon,
    id: '1',
    link: 'https://www.facebook.com/gkarine91/'
  },
  {
    icon: GitHubIcon,
    id: '2',
    link: 'https://github.com/Karine91'
  },
  {
    icon: LinkedInIcon,
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
}
</style>
