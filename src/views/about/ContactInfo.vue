<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>

<template>
  <div class="contact-info-row">
    <div class="icon"><slot></slot></div>
    <div class="label">{{ props.text }}</div>
  </div>
</template>

<style lang="scss">
.contact-info-row {
  display: flex;

  .icon {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 8px;
  }
  .label {
    padding: 5px 8px 5px 4px;
  }
}
</style>
