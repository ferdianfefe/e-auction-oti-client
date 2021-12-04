<template>
  <div class="chat">
    <ContactList class="contact-list" v-if="contacts" :contacts="contacts" />
    <Message class="message" v-if="activeContact != null" />
    <div v-else class="no-msg-placeholder w-100">
      <!-- <img class src="@/assets/logo.png" width="50px" alt /> -->
      <small>Select one of the contacts to start chatting!</small>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ContactList from "@/components/ContactList";
import Message from "@/components/Message";

export default {
  components: {
    ContactList,
    Message,
  },
  computed: {
    ...mapGetters(["contacts", "activeContact"]),
  },
  methods: {
    ...mapActions(["getContacts", "getMessages"]),
  },
  created() {
    this.getMessages();
    let el = this;
    this.sockets.subscribe("online", (userId) => {
      console.log(el.contacts);
      el.contacts.find((contact) => contact._id == userId).isOnline = true;
    });
    this.sockets.subscribe("offline", (userId) => {
      console.log(this.contacts);
      el.contacts.find((contact) => contact._id == userId).isOnline = false;
    });

    this.getContacts();
    this.$socket.emit("online", localStorage.getItem("userId"));
    console.log("destroyed");
  },
  beforeDestroy() {
    this.$socket.emit("offline", localStorage.getItem("userId"));
  },
};
</script>
<style lang="scss" scoped>
.chat {
  display: grid;
  grid-template-columns: 25vw 75vw;
  grid-template-rows: calc(100vh - 56px);
}
.contact-list {
  border-right: 1px solid #ccc;
}
.message {
  height: calc(100vh - 56px);
}
.no-msg-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
  }
}

.list-group {
  position: static;
  width: auto;
}
</style>
