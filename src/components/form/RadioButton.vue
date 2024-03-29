<script lang="ts" setup>
defineProps<{ name: string; label: string; id: string; value: string }>()
const model = defineModel({ required: true })
</script>

<template>
  <div class="radio-item">
    <input
      :class="['radio-input', { checked: model === value }]"
      type="radio"
      :name="name"
      :value="value"
      v-model="model"
      :id="id"
    />
    <label :for="id" class="label" />
    <label :for="id" class="label-text">
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.radio-input {
  visibility: hidden;
}

.radio-item {
  position: relative;
  display: flex;
  align-items: center;
}

.label-text {
  cursor: pointer;
  color: rgba($white, 0.8);
  margin-left: 10px;
}

.label {
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  background-color: #fff;
  border: 1px solid #cfcfcf;

  overflow: hidden;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    background-color: #fff;
  }
}
.radio-input.checked + .label:after {
  background-color: $green;
}
.radio-input.checked + .label + .label-text {
  color: $green;
}
</style>
