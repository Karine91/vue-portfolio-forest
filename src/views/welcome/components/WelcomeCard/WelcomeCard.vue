<script lang="ts" setup>
import type { VNodeRef } from 'vue'
import WelcomeBack from './WelcomeBack.vue'
import WelcomeFront from './WelcomeFront.vue'

const emit = defineEmits<{ toggleFlip: [] }>()

const props = defineProps<{ isFlipped: boolean; functionRef: VNodeRef }>()
</script>

<template>
  <div class="welcome-card" :class="{ flipped: isFlipped }" :ref="props.functionRef">
    <div class="front">
      <WelcomeFront />
    </div>
    <div class="back">
      <WelcomeBack :isFlipped="isFlipped" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome-card {
  transform-style: preserve-3d;
  width: 380px;
  height: 395px;
  position: relative;
  transition: all 0.6s ease;
  transform: rotateY(0deg);
  @include media(420px) {
    width: 100%;
    margin: 0 10px;
  }

  .back {
    pointer-events: none;
  }

  &.flipped {
    transform: rotateY(180deg);
    .front {
      pointer-events: none;
    }

    .back {
      pointer-events: auto;
    }
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    backface-visibility: hidden;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: rgba(#122620, 0.6);
  }

  .front {
    justify-content: space-between;
  }
  .back {
    height: 427px;
    transform: rotateY(180deg);
    pointer-events: none;
  }
}
</style>
