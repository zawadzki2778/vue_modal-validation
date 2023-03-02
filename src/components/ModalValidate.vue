<template>
  <transition name="modal">
    <Modal title="THIRD modal VALIDATE" @close="$emit('close')">
      <div slot="body">
        <form @submit.prevent="onSubmit">
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
            <!-- @change запускает валидацию только после того, как пользователь закончил ввод и перешел к следующему полю или снял фокус с поля-->
          </div>
          <!--*********************** EMAIL ***********************-->
          <div class="form-item" :class="{ errorInput: $v.email.$error }">
            <label>E-mail:</label>
            <p class="errorText" v-if="!$v.email.required">field is required</p>
            <p class="errorText" v-if="!$v.email.email">
              E-mail is not correct
            </p>
            <input
              type="email"
              v-model="email"
              :class="{ error: $v.email.$error }"
              @keypress="$v.email.$touch()"
            />
            <!-- @keypress запускает валидацию при каждом нажатии клавиши на клавиатуре -->
          </div>
          <button class="btn btnPrimary">Submit form</button>
        </form>
      </div>
    </Modal>
  </transition>
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
      submitStatus: null,
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
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        const user = {
          // условия чтобы не отправлялись пустые данные
          name: this.name,
          email: this.email,
        };
        console.log(user);
        (this.name = ""), (this.email = ""), this.$v.$reset();
        this.$emit("close");
      }
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