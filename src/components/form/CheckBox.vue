<script setup lang="ts">
import CheckIcon from '@/components/icons/CheckIcon.vue'
const props = defineProps<{ id: string; name: string; label: string; error?: boolean }>()
const model = defineModel({ required: true })
console.log(props.error)
</script>

<template>
  <div :class="['checkbox', { error }]">
    <div class="checkbox-input-wrapper">
      <input
        :class="['input', { checked: model }]"
        type="checkbox"
        :id="id"
        :name="name"
        v-model="model"
      />
      <label class="checkbox-label" :for="id">
        <CheckIcon class="icon" />
      </label>
    </div>
    <label class="description" :for="id"> {{ label }} </label>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;

  &.error {
    .checkbox-label {
      border: 2px solid $warn;
    }
  }
}

.checkbox-input-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
}

.checkbox-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #ccc;
}

.input {
  margin: 0;
  border: none;
  outline: none;
}

.input[type='checkbox'].checked + .checkbox-label {
  background-color: $green;
  border-color: transparent;
}

.icon {
  position: absolute;
  top: 5px;
  left: 3px;
  font-size: 9px;
  color: #fff;
  width: 12px;
  height: 9px;
}

.description {
  color: white;
  display: block;
  margin-left: 10px;
  cursor: pointer;
}
</style>
