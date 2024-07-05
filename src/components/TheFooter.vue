<script setup lang="ts">
import Copyright from './TheCopyright.vue'
import NavigationMenu from './NavigationMenu.vue'
import SocialsList from './socials/SocialsList.vue'

import { routerLinks as links } from '@/router'
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="left">
        This site was created based on a design provided by the online learning school LoftSchool
        when I was studying there.
      </div>
      <div class="middle">
        <NavigationMenu :links="links" class="footer-nav-menu" />
        <SocialsList />
      </div>
      <div class="right">
        <em
          >Always code as if the guy who ends up maintaining your code will be a violent psychopath
          who knows where you live. <br /><strong>- Martin Golding</strong></em
        >
      </div>
    </div>
    <Copyright />
  </footer>
</template>

<style lang="scss" scoped>
footer {
  min-height: 185px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
}
.footer-content {
  display: flex;
  color: white;
  background-color: rgba($darkgray, 0.85);
  flex-grow: 1;
  padding: 30px;

  div {
    border-right: 1px solid rgba(white, 0.2);
    padding: 0 30px;
    flex: 1;

    &:last-child {
      border: none;
    }
  }

  .left {
    font-family: 'Roboto-Light';
    line-height: 1.5;
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .right {
    font-family: 'Roboto-Light';
    color: rgba(white, 0.5);
    line-height: 1.5;
  }
}

.footer-nav-menu {
  gap: 20px;

  :deep(.navigation-item) {
    &:hover {
      text-decoration: underline;
    }
  }
}

footer:deep(.copyright) {
  background-color: rgba($green, 0.85);
  color: white;
  margin-top: auto;
}

:deep(.socials-link) {
  .icon:hover {
    color: white;
  }
}
</style>
