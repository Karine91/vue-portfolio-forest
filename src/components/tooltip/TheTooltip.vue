<template>
  <Teleport to="body">
    <div :class="['tooltip', placement, { center: placement === 'bottom' }]" :style="styling">
      <slot></slot>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { TooltipPlacement } from '@/hooks/useTooltip'
const props = withDefaults(
  defineProps<{ coords: { x: number; y: number }; placement?: TooltipPlacement }>(),
  {
    placement: 'bottom'
  }
)

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
  }

  &.center {
    &::before {
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  &.left {
    transform: translate(-100%, -50%);

    &:before {
      top: 0;
      bottom: 0;
      height: 0;
      right: -9px;
      margin: auto;
      border: 10px solid transparent;

      border-right: 0;
      border-left: 20px solid $warn;
      border-width: 10px;
    }
  }
  &.right {
    transform: translateY(-50%);

    &:before {
      top: 0;
      bottom: 0;
      height: 0;
      left: -10px;
      margin: auto;
      border: 10px solid transparent;

      border-left: 0;
      border-right: 20px solid $warn;
      border-width: 10px;
    }
  }

  &.top {
    transform: translate(-50%, -100%);

    &:before {
      left: 0;
      right: 0;
      height: 0;
      bottom: -10px;
      top: auto;
      margin: 0 auto;
      border: 10px solid transparent;

      border-bottom: 0;
      border-top: 20px solid $warn;
      border-width: 10px;
    }
  }
}
</style>
