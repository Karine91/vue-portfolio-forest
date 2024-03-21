<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WaterBackground from './components/waterBackground/WaterBackground.vue'
import Header from './components/Header.vue'
import WelcomeCard from './components/WelcomeCard/WelcomeCard.vue'

const isLoading = ref(true)
const isFormFlipped = ref(false)
const btnRef = ref(null)
const cardRef = ref(null)

const onLoad = () => {
  console.log('loaded')
  isLoading.value = false
}

const toggleFlip = () => {
  isFormFlipped.value = !isFormFlipped.value
}

const onClickAway = (e) => {
  if (!cardRef.value.contains(e.target) && !btnRef.value.contains(e.target)) {
    isFormFlipped.value = false
  }
}

onMounted(() => {
  console.log(btnRef.value)
})
</script>

<template>
  <main>
    <div v-if="isLoading">Loading...</div>
    <WaterBackground @load="onLoad" />

    <div class="mainWrapper">
      <header>
        <button
          :class="['btnAuth', { btnAuthHide: isFormFlipped }]"
          ref="btnRef"
          @click="toggleFlip"
        >
          Authorize
        </button>
      </header>
      <div class="mainContent">
        <WelcomeCard :isFlipped="isFormFlipped" @toggleFlip="toggleFlip" :cardRef="cardRef" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
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
