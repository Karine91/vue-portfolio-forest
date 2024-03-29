<script setup lang="ts">
import { ref, watch } from 'vue'
import FormInput from '@/components/form/FormInput.vue'
import IconLogin from '@/components/icons/IconLogin.vue'
import IconKey from '@/components/icons/IconKey.vue'
import CheckBox from '@/components/form/CheckBox.vue'
import RadioButton from '@/components/form/RadioButton.vue'

const props = defineProps<{ isFlipped: boolean }>()
const emit = defineEmits<{ toggleFlip: [] }>()

interface IFormData {
  username: string
  password: string
  robotCheck: boolean
  confirmNoRobot: boolean | null
}

const formData = ref<IFormData>({
  username: '',
  password: '',
  robotCheck: false,
  confirmNoRobot: null
})

type ValidationFields = keyof Omit<IFormData, 'robotCheck' | 'confirmNoRobot'>

const touchedRefs = ref<Record<ValidationFields, boolean>>({
  username: false,
  password: false
})

type ErrorType = Partial<Record<keyof IFormData, string>>

const errors = ref<ErrorType>({})

const validateInputHelper = () => {
  const errors: ErrorType = {}
  if (!formData.value.username) {
    errors.username = 'Field is required.'
  }
  if (!formData.value.password) {
    errors.password = 'Field is required.'
  } else if (formData.value.password.length < 6) {
    errors.password = 'Password must have 6 characters at least.'
  }
  return errors
}

const validateInput = (e: Event) => {
  const field = (e.target as HTMLInputElement).name as ValidationFields
  touchedRefs.value[field] = true

  const err = validateInputHelper()
  errors.value = err
}

const validateForm = () => {
  const err = validateInputHelper()
  touchedRefs.value.username = true
  touchedRefs.value.password = true

  if (!formData.value.robotCheck) {
    err.robotCheck = 'Required.'
  }
  if (!formData.value.confirmNoRobot) {
    err.confirmNoRobot = 'Required.'
  }

  errors.value = err
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

const onBack = () => {
  emit('toggleFlip')
}

const onSubmit = () => {
  validateForm()
}
</script>

<template>
  <div class="wrapper">
    <h2 class="title heading-2 heading-2_offset-no">Authorization</h2>
    <div class="form-wrapper">
      <form @submit.prevent="onSubmit" id="formAuthorize">
        <div class="innerForm">
          <FormInput
            wrapper-class="field"
            v-model="formData.username"
            name="username"
            placeholder="Username"
            @blur="validateInput"
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
            @blur="validateInput"
            :error="errors.password"
            :touched="touchedRefs.password"
            name="password"
            tooltip-placement="left"
          >
            <IconKey />
          </FormInput>
          <CheckBox
            name="no-robot"
            id="no-robot"
            label="I'm a human"
            v-model="formData.robotCheck"
            :error="!!errors.robotCheck"
          />
          <div class="confirm">
            <div :class="['confirmQuestion', { error: !!errors.confirmNoRobot }]">
              Are you sure you're not a robot?
            </div>
          </div>
          <div class="radioGroup">
            <RadioButton
              id="confirm-no-robot-yes"
              label="Absolutely"
              v-model="formData.confirmNoRobot"
              value="yes"
              name="confirm-no-robot"
              class="radioItem"
            />
            <RadioButton
              id="confirm-no-robot-no"
              label="Not really"
              v-model="formData.confirmNoRobot"
              name="confirm-no-robot"
              class="radioItem"
              value="no"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="navigation">
    <div class="navigationItem" @click="onBack">
      <a href="#" class="navigationLink"> Back Home </a>
    </div>
    <div class="navigationItem">
      <button class="navigationLink formBtn" type="submit" form="formAuthorize">Login</button>
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
  flex-grow: 1;
}

.form {
  flex-grow: 1;
  width: 100%;
}

.innerForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.field {
  margin-bottom: 20px;
  width: 100%;
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
  margin-bottom: 12px;
  line-height: 1;
}

.error {
  color: $warn;
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

.navigation {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.navigationItem {
  width: 50%;
  height: 100%;
  line-height: 45px;
  border-right: 2px solid rgba($white, 0.5);
  background-color: rgba($green, 0.85);
  transition: all ease 300ms;
  text-decoration: none;
  &:last-child {
    border-right: none;
  }
  &:hover {
    background-color: rgba($darkgreen, 0.85);
    cursor: pointer;
  }
}
.navigationLink {
  text-decoration: none;
  color: $white;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
