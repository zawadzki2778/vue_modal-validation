<template>
  <div>
    <Modal title="THIRD modal VALIDATE" @close="$emit('close')">
      <div slot="body">
        <form @submit.prevent="">
          <!--*********************** NAME ***********************-->
          <div class="form-item" :class="{ errorInput: $v.name.$error }">
            <label>Name:</label>
            <p class="errorText" v-if="!$v.name.required">field is required</p>
            <p class="errorText" v-if="!$v.name.minLength">
              Name must be have at least
              {{ $v.name.$params.minLength.min }} simbols
            </p>
            <input
              v-model="name"
              :class="{ error: $v.name.$error }"
              @change="$v.name.$touch()"
            />
          </div>
          <!--*********************** EMAIL ***********************-->
          <div class="form-item" :class="{ errorInput: $v.email.$error }">
            <label>E-mail:</label>
            <p class="errorText" v-if="!$v.email.required">field is required</p>
            <p class="errorText" v-if="!$v.email.email">
              E-mail is not correct
            </p>
            <input
              v-model="email"
              :class="{ error: $v.email.$error }"
              @change="$v.email.$touch()"
            />
          </div>
          <button class="btn btnPrimary">Submit form</button>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import Modal from "@/components/Modal.vue";
export default {
  name: "ModalValidate",
  components: { Modal },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
  },
};
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: firebrick;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border-color: firebrick;
}
</style>