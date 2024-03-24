<template>
  <Teleport to="body">
    <div class="tooltip" :style="styling">
      <slot></slot>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ coords: { x: number; y: number } }>()

const styling = computed(() => {
  return { top: props.coords.y + 'px', left: props.coords.x + 'px' }
})
</script>

<style scope lang="scss">
.tooltip {
  position: absolute;
  background-color: $warn;
  padding: 15px 20px;
  border-radius: 5px;
  color: $white;
  transform: translateX(-50%);
  z-index: 99;
  margin-top: 12px;
  &:before {
    content: '';
    display: block;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom: 20px solid $warn;
    border-width: 10px;
    position: absolute;
    top: -10px;

    width: 0px;

    z-index: 100;

    .center {
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}
</style>
