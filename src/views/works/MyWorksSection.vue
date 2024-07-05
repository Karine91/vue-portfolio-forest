<script setup lang="ts">
import { ref, computed } from 'vue'
import ArrowDown from '@/components/icons/ArrowDown.vue'
import ArrowUp from '@/components/icons/ArrowUp.vue'
import LinkIcon from '@/components/icons/LinkIcon.vue'
import { imagePreload } from '@/utils/imagePreload'

const works = [
  {
    id: '1',
    name: "online education school's site",
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'react',
      'react-query',
      'HTML',
      'CSS',
      'Javascript',
      'react',
      'react-query',
      'HTML',
      'CSS',
      'Javascript',
      'react',
      'react-query'
    ],
    preview: 'mock-works-images/work-1.png',
    link: 'google.com'
  },
  {
    id: '2',
    name: 'site online education school #2',
    technologies: ['HTML', 'CSS', 'Javascript'],
    preview: 'mock-works-images/work-2.png',
    link: 'google.com'
  },
  {
    id: '3',
    name: 'site online education school #3',
    preview: 'mock-works-images/work-3.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    link: 'google.com'
  },
  {
    id: '4',
    name: 'site online education school #4',
    preview: 'mock-works-images/work-4.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    link: 'google.com'
  }
]

const getIndex = (n: number) => {
  return (n + works.length) % works.length
}
const currentIndex = ref(0)
const currentWork = computed(() => {
  return works[currentIndex.value]
})
const prevWork = computed(() => works[getIndex(currentIndex.value - 1)])
const nextWork = computed(() => works[getIndex(currentIndex.value + 1)])

const nextSlide = () => {
  currentIndex.value = getIndex(currentIndex.value + 1)
}

const prevSlide = () => {
  currentIndex.value = getIndex(currentIndex.value - 1)
}
</script>

<template>
  <section>
    <div class="title">
      <h1 class="heading-1">My works</h1>
    </div>
    <div class="slider">
      <div class="caption">
        <div
          class="caption-inner"
          :key="currentWork.name"
          v-motion
          :initial="{
            opacity: 0
          }"
          :enter="{
            opacity: 1,
            transition: {
              type: 'keyframes',
              ease: 'easeIn',
              duration: 1000
            }
          }"
        >
          <h2 class="heading-2">
            {{ currentWork.name }}
          </h2>
          <div class="techs">
            <div class="techs-item" v-for="(tech, ind) in currentWork.technologies" :key="ind">
              {{ tech }} {{ ind === currentWork.technologies.length - 1 ? '' : ',' }}
            </div>
          </div>

          <a class="button-link" :href="currentWork.link" target="_blank">
            <LinkIcon class="link-icon" />
            Visit site
          </a>
        </div>
      </div>
      <div class="preview">
        <img
          v-motion
          :key="currentWork.id"
          :initial="{
            opacity: 0,
            scale: 0.8
          }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1000,
              type: 'keyframes',
              ease: 'easeOut'
            }
          }"
          :src="currentWork.preview"
          :alt="currentWork.name"
        />
      </div>
      <div class="controls">
        <button
          class="prev"
          @click="prevSlide"
          @mouseover="() => imagePreload(works[getIndex(currentIndex - 2)].preview)"
        >
          <img
            v-motion
            :key="prevWork.id"
            :initial="{
              y: '-110%'
            }"
            :enter="{
              y: '0%',
              transition: {
                duration: 500,
                type: 'keyframes',
                ease: 'easeOut'
              }
            }"
            :src="prevWork.preview"
            alt=""
          />
          <ArrowDown class="icon" />
        </button>
        <button
          class="next"
          @click="nextSlide"
          @mouseover="() => imagePreload(works[getIndex(currentIndex + 2)].preview)"
        >
          <div></div>
          <img
            v-motion
            :key="nextWork.id"
            :initial="{
              y: '110%'
            }"
            :enter="{
              y: '0%',
              transition: {
                duration: 500,
                type: 'keyframes',
                ease: 'easeOut'
              }
            }"
            :src="nextWork.preview"
            alt=""
          />
          <ArrowUp class="icon" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 175px;
}

.title {
  background-color: #f8f9f5;
  padding: 0 30px;
  display: flex;
  justify-content: center;
}

h1 {
  background-image: url('@/assets/images/works_header.svg');
  background-size: contain;
  background-repeat: no-repeat;
  white-space: nowrap;
  background-position: center center;
  &.heading-1 {
    padding: 0.5em 1em;
    text-transform: uppercase;
  }
}

.slider {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'caption view' 'caption controls';
  grid-template-rows: 525px 225px;
}

.caption {
  grid-area: caption;
  background-color: $lightgreen;

  .caption-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .heading-2 {
    max-width: 350px;
  }

  .techs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    &-item {
      color: $green;
      line-height: 1;
      font-size: 18px;
    }
    align-items: center;
    justify-content: center;
    max-width: 80%;

    margin-bottom: 60px;

    .techs-item {
      flex-shrink: 0;
    }
  }
}

.preview {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1e4d7;

  img {
    height: 80%;
    filter: drop-shadow(0px 4px 9px $gray);
  }
}

.controls {
  grid-area: controls;
  display: flex;

  .prev,
  .next {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: white;
    position: relative;
    overflow: hidden;

    cursor: pointer;

    img {
      height: 80%;
    }

    .icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 3;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 2;
      background-color: rgba(176, 183, 170, 0.65);
    }
  }

  .prev:hover .icon {
    animation: 0.6s ease-in infinite alternate both down;
  }

  .next:hover .icon {
    animation: 0.6s ease-in infinite alternate both up;
  }
}

.button-link {
  padding: 10px 20px;
  background-color: $green;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 150px;
  transition: background-color 0.3s ease;

  .link-icon {
    margin-left: -3px;
  }

  &:hover {
    background-color: darken($green, 5);
  }
}

@keyframes down {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(10px);
  }
}

@keyframes up {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(-10px);
  }
}
</style>
