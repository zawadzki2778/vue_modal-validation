<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <section>
        <div class="container">
          <!--********************* FIRST MODAL ************************-->
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">
            FIRST MODAL
          </button>
          <!--emit 'close' принимаем в Modal-->
          <Modal
            title="First modal"
            v-show="modalFirst"
            @close="modalFirst = false"
          >
            <div slot="body">
              <p>Tipe text</p>
              <input type="text" v-model="text" />
              <button class="btn btnPrimary" @click="addText">Done</button>
            </div>
          </Modal>

          <!--********************* SECOND MODAL ************************-->
          <button
            class="btn btnPrimary"
            @click="modalSecond.show = !modalSecond.show"
          >
            SECOND MODAL
          </button>
          <Modal
            title="Second modal FORM"
            v-show="modalSecond.show"
            @close="modalSecond.show = false"
          >
            <div slot="body">
              <form @submit.prevent="submitForm">
                <!-- to no submit form -->
                <label>Name:</label>
                <input type="number" v-model="modalSecond.name" required />
                <label>E-mail:</label>
                <input type="email" v-model="modalSecond.email" />
                <button class="btn btnPrimary">Submit form</button>
              </form>
            </div>
          </Modal>

          <!--********************* VALIDATE NAME/EMAIL ************************-->
          <button
            class="btn btnPrimary"
            @click="modalValidate = !modalValidate"
          >
            VALIDATE NAME/EMAIL
          </button>
          <ModalValidate
            v-show="modalValidate"
            @close="modalValidate = false"
          />

          <!--*************VALIDATE NAME AND CONFIRM PASSWORD  *******************-->
          <button
            class="btn btnPrimary"
            @click="modalValidatePassword = !modalValidatePassword"
          >
            VALIDATE NAME AND CONFIRM PASSWORD
          </button>
          <ModalValidatePassword
            v-show="modalValidatePassword"
            @close="modalValidatePassword = false"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import ModalValidate from "@/components/ModalValidate.vue";
import ModalValidatePassword from "./components/ModalValidatePassword.vue";
export default {
  name: "App",
  components: { Modal, ModalValidate, ModalValidatePassword },
  data() {
    return {
      text: "",
      modalFirst: false,
      modalSecond: {
        show: false,
        name: "",
        email: "",
      },
      modalValidate: false,
      modalValidatePassword: false,
    };
  },
  methods: {
    addText() {
      this.modalFirst = false;
      this.text = "";
      this.$emit("close");
    },
    submitForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email,
      });
      this.modalSecond.name = this.modalSecond.email = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  justify-content: space-between;
}
.btn.btnPrimary {
  margin-right: 20px;
}
</style>
