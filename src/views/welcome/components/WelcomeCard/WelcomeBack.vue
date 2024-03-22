<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '@/components/form/FormInput.vue'
import IconLogin from '@/components/icons/IconLogin.vue'
import IconKey from '@/components/icons/IconKey.vue'

const formData = ref({
  username: '',
  password: ''
})
</script>

<template>
  <div class="wrapper">
    <h2 class="title heading-2 heading-2_offset-no">Authorization</h2>
    <div class="form-wrapper">
      <form id="formAuthorize">
        <FormInput class="field" v-model="formData.username" name="username" placeholder="Username">
          <IconLogin />
        </FormInput>
        <FormInput class="field" v-model="formData.password" type="password" placeholder="Password">
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

.fieldIcon {
  background-color: #f0efe9;
  padding: 12px 15px;
  color: #c4cbcd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fieldIcon.valid {
  color: $green;
  border-right: 1px solid $green;
}

.fieldIcon.error {
  color: $warn;
  border-right: 1px solid $warn;
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
