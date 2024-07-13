<script setup lang="ts">
import type { TestimonialsItemType } from './types.ts'

const props = defineProps<TestimonialsItemType>()
</script>

<template>
  <li class="testimonial-item">
    <div class="avatar-wrapper">
      <img class="avatar" :src="props.avatar" :alt="props.name" />
    </div>
    <p class="message">{{ props.message }}</p>
    <div class="name">
      <strong>{{ props.name }}</strong>
    </div>
    <div class="occupation">&mdash;&nbsp;{{ props.occupation }}</div>
  </li>
</template>

<style scoped lang="scss">
.testimonial-item {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  background: url('@/assets/images/quotes.png') no-repeat 20px 50px;

  .avatar-wrapper {
    width: 77px;
    height: 77px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .message {
    margin: 20px 0;
    color: #5d5a55;
  }

  .name {
    color: $green;
    align-self: end;
  }

  .occupation {
    align-self: end;
    text-align: end;
  }
}
</style>
