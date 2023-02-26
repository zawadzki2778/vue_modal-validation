<template>
  <div>
    <Modal title="THIRD modal VALIDATE" @close="$emit('close')">
      <div slot="body">
        <form @submit.prevent="">
          <!-- to no submit form -->
          <label>Name:</label>
          <input type="number" required />
          <label>E-mail:</label>
          <input type="email" />
          <button class="btn btnPrimary">Submit form</button>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "ModalValidate",
  components: { Modal },
  data() {
    return {};
  },
};
</script>