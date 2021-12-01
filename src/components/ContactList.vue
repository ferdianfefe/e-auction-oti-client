<template>
  <div class="list-group">
    <button
      @click="selectContact(contact)"
      type="button"
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      v-for="contact in contacts"
      :key="contact._id"
      :class="contact == activeContact ? 'active' : ''"
    >
      {{ contact.name }}
      <span
        class="badge badge-pill"
        :class="contact.isOnline ? 'badge-success' : 'badge-danger'"
        >{{ contact.isOnline ? "Online" : "Offline" }}</span
      >
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Chat",
  props: ["contacts"],
  methods: {
    ...mapActions(["setActiveContact", "getMessages", "getPeople"]),
    selectContact(contact) {
      this.setActiveContact(contact);
      this.$socket.emit("enter-chat", {
        sender: localStorage.getItem("userId"),
        receiver: contact._id,
      });
    },
  },
  computed: {
    ...mapGetters(["activeContact", "socket", "people"]),
  },
  mounted() {},
};
</script>

<style scoped>
.list-group {
  border-radius: 0;
  height: 100%;
}

.list-group button.active {
  background: #95c8ff;
}
</style>
