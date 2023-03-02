<template>
  <transition name="modal">
    <Modal title="VALIDATE PASSWORD" @close="$emit('close')">
      <div slot="body">
        <!-- ********** Код из Vuelidate **************** -->
        <form @submit.prevent="submit">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.name.$error }"
          >
            <label class="form__label">Name</label>
            <input class="form__input" v-model.trim="$v.name.$model" />
          </div>
          <div class="error" v-if="!$v.name.required">Name is required</div>
          <div class="error" v-if="!$v.name.minLength">
            Name must have at least {{ $v.name.$params.minLength.min }} letters.
          </div>
          <button
            class="btn btnPrimary"
            type="submit"
            :disabled="submitStatus === 'PENDING'"
          >
            Submit!
          </button>
          <p class="typo__p" v-if="submitStatus === 'OK'">
            Thanks for your submission!
          </p>
          <p class="typo__p" v-if="submitStatus === 'ERROR'">
            Please fill the form correctly.
          </p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
        <!-- ********************************************* -->
      </div>
    </Modal>
  </transition>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Modal from "@/components/Modal.vue";
export default {
  name: "ModalValidatePassword",
  components: { Modal },
  data() {
    return {
      name: "",
      age: 0,
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.name = ""; // Очищаем инпут
        this.$emit("close"); // Закрываем окно 
        this.$v.$reset(); // Если форма отправлена успешно, она очищается

        setTimeout(() => {
          this.submitStatus = "OK";
          // hide the "Thanks for your submission!" message 
          this.submitStatus = null; //Если форма отправлена успешно, очишаем подсказки
        }, 500);
      }
    },
  },
};
</script>


<style lang="scss">
.error {
  display: block;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: firebrick;
}
</style>