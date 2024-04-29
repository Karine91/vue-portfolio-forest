<script setup lang="ts">
import type { ISkill } from './skill.ts'
import { computed } from 'vue'
const props = defineProps<ISkill & { inView: boolean }>()

const { proficiencyLevel, skillName } = props

const circleStyle = computed(() => {
  if (props.inView) {
    return { strokeDasharray: Math.round((proficiencyLevel / 100) * 314) }
  }
  return {}
})
</script>

<template>
  <svg viewBox="0 0 120 120" width="120px" height="120px" class="skill-circle">
    <g>
      <circle r="50" cx="50%" cy="50%" fill="none" class="skill-circle__first"></circle>
      <text x="50%" y="50%" text-anchor="middle" dy="2%" class="skill-circle__text">
        {{ skillName }}
      </text>
      <circle
        r="50"
        cx="50%"
        cy="50%"
        fill="none"
        :style="circleStyle"
        class="skill-circle__second"
      ></circle>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.skill-circle {
  fill: none;
  stroke-width: 20;
  vertical-align: middle;
  width: 120px;
  height: 120px;
  @include large {
    width: 110px;
    height: 110px;
  }
}

.skill-circle__text {
  font-size: 13px;
  fill: $darkgreen;
}
.skill-circle__second {
  transform: rotate(-90deg);
  transform-origin: 60px 60px;
  stroke: #77a266;
  stroke-dasharray: 0.001 314;
  transition: all 1s;
  vertical-align: middle;
}
.skill-circle__first {
  stroke: #dfdcd5;
  width: 120px;
  height: 120px;
}
</style>
