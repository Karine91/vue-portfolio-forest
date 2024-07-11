<script lang="ts" setup>
import TestimonialsItem from './TestimonialsItem.vue'
import LarsAvatar from '@/assets/images/testimonials-avatar-Lars.jfif'
import PaulAvatar from '@/assets/images/testimonials-avatar-Paul.jfif'
import SergeyAvatar from '@/assets/images/testimonials-Sergey.jfif'

import type { TestimonialsItemType } from './types.ts'

const testimonials: TestimonialsItemType[] = [
  {
    avatar: LarsAvatar,
    message:
      'During Karines time working for Redwerk we used her on a project to add a new module to our system at Orderstep. Karine had the job to build a front-end from scratch based on a design in Figma. She did an outstanding job. Delivered to spec and on time. Would not think twice to use Karine again on future projects.',
    name: 'Lars Olafsson',
    occupation: '@Orderstep',
    id: '1'
  },
  {
    avatar: PaulAvatar,
    message:
      "I'm deeply impressed by Karine's work. She developed the front-end (React.js) for a project of mine and it left me speechless. She absolutely nailed it! It was the perfect intersection of functional, intuitive, and elegant. I tend toward minimalism in design and Karine brought my vision to live. I'd recommend her 100% of the time.",
    name: 'Paul McIsaac',
    occupation: 'Enterpreneur & Veteran Technology Marketer',
    id: '2'
  },
  {
    avatar: SergeyAvatar,
    message:
      'I only got the pleasure of working with Karine for about 9 months, but in that time I saw Front-End developer (React.js) who strived to push herself and others around her in a fast-paced environment. If she struggled, she asked questions and yearned to understand the problem at hand. Her professional skills helped to have performed complex tasks in short amount of time, quickly fit into any existing team of developers and come up with solutions to seemingly intractable problems. Overall, Karine is a talented, hard-working person and I strongly recommend Karine for any software development position. I am sure Karine will be a good asset to any organization and I wish her all the best!',
    occupation: 'CEO at Light IT',
    id: '3',
    name: 'Sergey Maschenko'
  }
]
</script>

<template>
  <ul>
    <TestimonialsItem v-for="review in testimonials" :key="review.id" v-bind="review" />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
}
</style>
