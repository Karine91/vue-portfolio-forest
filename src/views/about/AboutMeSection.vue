<script lang="ts" setup>
import aboutMeImg from '@/assets/images/about.jpg'
import SkillGroup from './skills/SkillGroup.vue'

const skills = [
  {
    id: '1',
    skillGroupName: 'Frontend',
    skills: [
      {
        skillName: 'HTML5',
        proficiencyLevel: 80
      },
      {
        skillName: 'CSS3',
        proficiencyLevel: 80
      }
    ]
  },
  {
    id: '2',
    skillGroupName: 'Backend',
    skills: [
      {
        skillName: 'Node.js',
        proficiencyLevel: 40
      },
      {
        skillName: 'MongoDB',
        proficiencyLevel: 70
      }
    ]
  }
]
</script>

<template>
  <section>
    <div class="about-left">
      <div class="title">
        <h1 class="heading-1">About me</h1>
      </div>

      <div class="about-me">
        <div class="user-image">
          <img :src="aboutMeImg" alt="me" />
        </div>

        <h2 class="heading-2">Who I am</h2>
        <p>
          I'm front-end developer from Ukraine. Developing modern websites and applications. I like
          to do interesting and modern projects.
        </p>
      </div>
    </div>
    <div class="about-right">
      <h2 class="heading-2">What can I do for you</h2>
      <p>Most experience I have related to front-end but also could do some stuff in backend.</p>
      <div class="skills">
        <SkillGroup v-for="group in skills" v-bind="group" :key="group.id" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section {
  background-color: #ebefe2;
  display: flex;

  margin-top: 175px;

  @include tablets {
    margin-top: 155px;
  }

  .title {
    padding: 0 30px;
  }

  h1 {
    background-image: url('@/assets/images/about_header.svg');
    background-size: contain;
    background-repeat: no-repeat;
    white-space: nowrap;
    background-position: center center;
    &.heading-1 {
      padding: 0.5em 1em;
    }
  }

  .about-left,
  .about-right {
    width: 50%;
  }

  .about-left {
    display: flex;
    align-items: flex-start;
  }
  .about-right {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-me {
    display: flex;
    flex-direction: column;
    align-items: center;
    .user-image {
      width: 443px;
      height: 390px;
      overflow: hidden;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
