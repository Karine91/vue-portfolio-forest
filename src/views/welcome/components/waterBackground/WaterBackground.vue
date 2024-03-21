<script setup lang="ts">
import { ref, onMounted } from 'vue'
import waterInit from './water'

const emit = defineEmits<{ load: [] }>()

const containerRef = ref(null)
const canvasRef = ref(null)

const onLoad = () => {
  emit('load')
}

onMounted(() => {
  waterInit(containerRef.value, canvasRef.value, onLoad)
})
</script>

<template>
  <div ref="containerRef" class="background">
    <canvas ref="canvasRef" class="background-canvas"></canvas>
  </div>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), transparent 50%, rgba(0, 0, 0, 0.5));
}
</style>
