<template>
  <div :class="['form-input', { 'with-icon': !!$slots.default }]">
    <div class="icon">
      <slot></slot>
    </div>

    <input
      class="input"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-model.trim="model"
    />
  </div>
</template>

<script lang="ts" setup>
const [model] = defineModel({ required: true })
withDefaults(defineProps<{ type?: string; name: string; placeholder: string }>(), {
  type: 'text'
})
</script>

<style scoped lang="scss">
.form-input {
  background: $white;
  border-radius: 25px;
  display: flex;
  width: 100%;
  border: 2px solid transparent;

  overflow: hidden;

  &:not(.error):focus-within {
    border: 2px solid $green;
    transition: all ease 0.3s;
  }

  .valid {
    border-color: $green;
    .icon {
      color: $green;
    }
  }

  .error {
    border-color: $warn;
    .icon {
      color: $warn;
    }
  }
}
.input {
  border: 0;
  border-radius: 25px;
  width: 100%;
  padding: 12px 15px;
  border: none;
  @include placeholder {
    color: rgba($gray, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
}

.with-icon {
  .icon {
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $lightgray;
    color: #c4cbcd;
  }
}
</style>
