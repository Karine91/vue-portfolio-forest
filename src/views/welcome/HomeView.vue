<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import WaterBackground from './components/waterBackground/WaterBackground.vue'
import WelcomeCard from './components/WelcomeCard/WelcomeCard.vue'
import Preloader from '@/components/ThePreloader.vue'
import AvaImg from '@/assets/images/ava.jpg'

const assetsLoaded = ref(false)
const isFormFlipped = ref(false)
const btnRef = ref<HTMLButtonElement | null>(null)
const cardRef = ref<HTMLDivElement | null>(null)
const waterLoaded = ref(false)

const onLoad = () => {
  waterLoaded.value = true
}

const toggleFlip = () => {
  isFormFlipped.value = !isFormFlipped.value
}

const onClickAway = (e: Event) => {
  if (
    btnRef.value &&
    cardRef.value &&
    !cardRef.value.contains(e.target as Node) &&
    !btnRef.value.contains(e.target as Node)
  ) {
    isFormFlipped.value = false
  }
}

const promises = Promise.allSettled([
  document.fonts.ready,
  loadImage('/images/water-maps.jpg'),
  loadImage(AvaImg),
  loadImage('/images/water.jpg')
])
promises.then(() => {
  assetsLoaded.value = true
})

function loadImage(url: string) {
  return new Promise((resolve, reject) => {
    const imageClone = new Image()
    imageClone.src = url
    imageClone.onload = resolve
    imageClone.onerror = reject
  })
}

onMounted(() => {
  document.addEventListener('click', onClickAway)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickAway)
})

function functionRef(el: any) {
  cardRef.value = el
}
</script>

<template>
  <main>
    <WaterBackground @load="onLoad" />
    <div v-if="!(assetsLoaded && waterLoaded)" class="preloader-wrapper">
      <Preloader />
    </div>

    <div v-else class="mainWrapper">
      <header class="header">
        <button
          :class="['btnAuth', { btnAuthHide: isFormFlipped }]"
          ref="btnRef"
          @click="toggleFlip"
        >
          Authorize
        </button>
      </header>
      <div class="mainContent">
        <WelcomeCard
          :isFlipped="isFormFlipped"
          @toggleFlip="toggleFlip"
          :functionRef="functionRef"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.preloader-wrapper {
  background-image: url('@/assets/images/preloader/forest_prel_bg.jpg');
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
main {
  height: 100vh;
  @media (max-width: 968px) and (orientation: landscape) {
    height: 100vw;
  }
}

.mainWrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.headerContent {
  padding-top: 25px;
  padding-left: 30px;
  padding-right: 100px;
  justify-content: flex-end;
  @include tablets {
    padding-right: 25px;
  }
  @include media(420px) {
    justify-content: center;
  }
  position: relative;
}

.mainContent {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
  flex-grow: 1;
}

.header {
  padding-top: 25px;
  padding-right: 100px;
  padding-left: 30px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  @include tablets {
    padding-right: 30px;
  }
  @include mobile {
    justify-content: center;
  }
}

.btnAuth {
  color: $white;
  padding: 10px 25px;
  width: 150px;
  display: block;
  transition: all ease 400ms;
  text-decoration: none;
  font-family: 'Roboto-Medium';
  border-radius: 20px;
  border: 1px solid $white;
  background: none;
  &:hover,
  &:focus {
    background-color: $darkgreen;
    border-color: $green;
    cursor: pointer;
    box-shadow: none;
    outline: none;
  }
}

.btnAuthHide {
  display: none;
}

.footer {
  padding-bottom: 40px;
  text-align: center;
  @include mobile {
    padding-bottom: 10px;
  }
}

.copyright {
  color: $white;
  font-family: 'Roboto-Light';
  font-size: 16px;
}

.loadingBg {
  background-color: $green;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
