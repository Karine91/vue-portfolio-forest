<template>
  <li class="socials-item">
    <a :href="link" target="_blank" rel="noreferrer" class="socials-link">
      <div class="icon">
        <slot></slot>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts" scoped>
defineProps<{ link: string; iconClass?: string }>()
</script>

<style lang="scss">
.socials-item {
  margin-right: 25px;
  list-style: none;
  width: 25px;
  height: 25px;

  &:last-child {
    margin: 0;
  }
}

.socials-link {
  text-decoration: none;
  display: block;
  height: 100%;

  .icon {
    width: 25px;
    height: 25px;
    color: rgba($white, 0.5);

    &:hover {
      color: rgba($darkgreen, 1);
    }
  }
}
</style>
