<script setup lang="ts">
import AvaImage from '@/assets/images/ava.jpg'
</script>

<template>
  <div class="user">
    <div class="user-picture">
      <img :src="AvaImage" alt="" class="user-image" />
    </div>
    <div class="user-name">Karine Hiulumian</div>
    <div class="user-description">Developer's personal website</div>
  </div>
</template>

<style scoped lang="scss">
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.user-picture {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 40px;
  margin-bottom: 10px;
}
.user-image {
  width: 100%;
  display: block;
}
.user-name {
  font-size: 28px;
  margin-bottom: 10px;
  font-family: 'Roboto-Medium';
  color: $white;
}
.user-description {
  font-size: 16px;
  font-family: 'Roboto-Regular';
  margin-bottom: 30px;
  color: rgba($white, 0.8);
}
</style>
