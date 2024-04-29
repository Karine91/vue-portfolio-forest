<script setup lang="ts">
import type { ISkillGroup } from './skill.ts'
import SkillCircle from './SkillCircle.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const inView = ref(false)
const skillsRef = ref<HTMLElement | null>(null)
const { skillGroupName, skills } = defineProps<ISkillGroup>()

const onScroll = () => {
  const rect = skillsRef.value?.getBoundingClientRect()
  if (rect) {
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    ) {
      inView.value = true
    }
  }
}

onMounted(() => {
  document.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div>
    <div class="title">{{ skillGroupName }}</div>
    <ul class="skill-group" ref="skillsRef">
      <li class="skill" v-for="skill in skills" :key="skill.id">
        <SkillCircle v-bind="skill" :in-view="inView" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.skill-group {
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  @include tablets {
    justify-content: center;
  }
  @include media(480px) {
    justify-content: space-around;
  }
}

.title {
  font-size: 28px;
  font-family: 'Roboto-Medium', sans-serif;
  color: $darkgray;
  margin-bottom: 20px;
  text-align: left;
  @include tablets {
    text-align: center;
  }
  @include mobile {
    font-size: 21px;
  }
}

.skill {
  margin-right: 40px;
  margin-bottom: 40px;
  &:last-child {
    margin-right: 0;
  }
  @include large {
    margin-right: 35px;
  }
  @include media(480px) {
    margin-right: 10px;
    margin-bottom: 30px;
  }
}
</style>
