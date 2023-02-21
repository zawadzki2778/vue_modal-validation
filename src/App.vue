<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">
            Show modal
          </button>
          <Modal
            title="First modal" v-show="modalFirst" @close="modalFirst =!
            modalFirst">
            <div slot="body">
              <p>Tipe text for my modal ;)</p>
              <input type="text"/>
              <button class="btn btnPrimary" @click="modalFirst = !modalFirst">
                Done
              </button>
            </div>
          </Modal>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      modalFirst: false,
    };
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
</style>
