<script setup lang="ts">
import { ref, watch } from 'vue'
import FormInput from '@/components/form/FormInput.vue'
import IconLogin from '@/components/icons/IconLogin.vue'
import IconKey from '@/components/icons/IconKey.vue'

const props = defineProps<{ isFlipped: boolean }>()

interface IFormData {
  username: string
  password: string
}

const formData = ref<IFormData>({
  username: '',
  password: ''
})

const touchedRefs = ref<Record<keyof IFormData, boolean>>({
  username: false,
  password: false
})

type ErrorType = Record<keyof IFormData, string>

const errors = ref<ErrorType>({} as ErrorType)

const validate = (e: Event) => {
  const field = (e.target as HTMLInputElement).name as keyof IFormData
  touchedRefs.value[field] = true
  errors.value = {} as ErrorType
  if (!formData.value.username) {
    errors.value.username = 'Field is required.'
  }
  if (!formData.value.password) {
    errors.value.password = 'Field is required.'
  } else if (formData.value.password.length < 6) {
    errors.value.password = 'Password must be 6 characters at least.'
  }
}

watch(props, (newVal) => {
  if (!newVal.isFlipped) {
    errors.value = {} as ErrorType
    formData.value.username = ''
    formData.value.password = ''
    touchedRefs.value.username = false
    touchedRefs.value.password = false
  }
})
</script>

<template>
  <div class="wrapper">
    <h2 class="title heading-2 heading-2_offset-no">Authorization</h2>
    <div class="form-wrapper">
      <form id="formAuthorize">
        <FormInput
          wrapper-class="field"
          v-model="formData.username"
          name="username"
          placeholder="Username"
          @blur="validate"
          :error="errors.username"
          :touched="touchedRefs.username"
          tooltip-placement="right"
        >
          <IconLogin />
        </FormInput>
        <FormInput
          wrapper-class="field"
          v-model="formData.password"
          type="password"
          placeholder="Password"
          @blur="validate"
          :error="errors.password"
          :touched="touchedRefs.password"
          name="password"
          tooltip-placement="left"
        >
          <IconKey />
        </FormInput>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: $white;
  margin-bottom: 30px;
  align-self: center;
}
.wrapper {
  padding: 40px 20px;
}

.form {
  flex-grow: 1;
}

.innerForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.field {
  margin-bottom: 20px;
}

.icon {
  width: 15px;
  height: 17px;
}

.checkbox {
  margin-left: -20px;
  margin-bottom: 20px;
}

.radioGroup {
  display: flex;
}

.radioItem {
  margin-right: 40px;

  &:last-child {
    margin: 0;
  }
}

.confirm {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.confirmQuestion {
  color: rgba($white, 0.8);
  font-family: 'Roboto-Bold';
  margin-bottom: 15px;
}

.formBtn {
  border: none;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  &:focus {
    outline: none;
  }
}
</style>
