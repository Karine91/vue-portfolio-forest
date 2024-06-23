<script setup lang="ts">
import Copyright from './TheCopyright.vue'
import NavigationMenu from './NavigationMenu.vue'

const links = [{ link: '/', title: 'Authorization' }]
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="left">
        This site was created based on a design provided by the online learning school LoftSchool
        when I was studying there.
      </div>
      <div class="middle">
        <NavigationMenu :extralinks="links" class="footer-nav-menu" />
      </div>
      <div class="right"></div>
    </div>
    <Copyright />
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 185px;
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
    padding: 0 15px;
    &:last-child {
      border: none;
    }
  }

  .left {
    font-family: 'Roboto-Light';
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
</style>
