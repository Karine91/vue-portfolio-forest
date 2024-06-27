<script setup lang="ts">
const works = [
  {
    name: 'site online education school',
    technologies: ['html', 'css', 'js'],
    preview: 'mock-works-images/work-1.png',
    link: 'google.com'
  },
  {
    name: 'site online education school #2',
    technologies: ['html', 'css', 'js'],
    preview: 'mock-works-images/work-2.png',
    link: 'google.com'
  },
  {
    name: 'site online education school #3',
    preview: 'mock-works-images/work-3.png',
    technologies: ['html', 'css', 'js'],
    link: 'google.com'
  },
  {
    name: 'site online education school #4',
    preview: 'mock-works-images/work-4.png',
    technologies: ['html', 'css', 'js'],
    link: 'google.com'
  }
]

const currentWork = works[0]
</script>

<template>
  <section>
    <div class="title">
      <h1 class="heading-1">My works</h1>
    </div>
    <div class="slider">
      <div class="caption">
        <h2>{{ currentWork.name }}</h2>
        <div class="techs">
          <div v-for="(tech, ind) in currentWork.technologies" :key="ind">
            {{ tech }}
          </div>
        </div>
        <div class="link">
          <a :href="currentWork.link" target="_blank">Visit site</a>
        </div>
      </div>
      <div class="preview">
        <img :src="currentWork.preview" :alt="currentWork.name" />
      </div>
      <div class="controls">
        <div class="prev">Prev</div>
        <div class="next">Next</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-top: 175px;
  height: 100vh;
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
</style>
