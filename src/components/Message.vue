<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">
        <img
          src="@/assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
          loading="lazy"
        />
        {{ activeContact.name }}
      </a>
    </nav>
    <main>
      <div
        class="message-item"
        v-for="chat in thisRoomMessages"
        :key="chat._id"
        :class="chat.sender == user.id ? 'mine' : 'others'"
      >
        <div class="message-box">
          <p class="text-primary">{{ chat.message }}</p>
        </div>
        <small class="text-muted">{{ Date(chat.date) }}</small>
      </div>
    </main>
    <footer class="bg-light">
      <form @submit.prevent="onSubmit">
        <input
          name="message"
          type="text"
          placeholder="Type a message..."
          v-model="message"
        />
        <input type="submit" value="Send" class="btn btn-primary" />
      </form>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Message",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    ...mapActions(["getMessages", "sendMessage"]),
    onSubmit() {
      let messageObj = {
        receiverId: this.activeContact._id,
        message: this.message,
      };
      this.sendMessage(messageObj).then((sentMessage) => {
        console.log(sentMessage.value.message);
        this.$socket.emit("send-message", sentMessage.value.message);
        this.getMessages().then((messages) => {
          console.log(messages);
        });
      });
      this.message = "";
    },
  },
  computed: {
    ...mapGetters(["activeContact", "messages", "socket", "user"]),
    thisRoomMessages() {
      return this.messages.filter(
        (message) =>
          message.room.participants.includes(this.activeContact._id) &&
          message.room.participants.includes(this.user.id)
      );
    },
  },
};
</script>

<style lang="scss">
.message-card {
  height: 100vh;
  nav a {
    display: flex;
    align-items: center;
  }
}
footer {
  bottom: 0;
  width: 100%;
  height: 56px;
  border-top: 1px solid #ccc;
}
main {
  border-top: 1px solid #ccc;
  height: calc(100% - 112px);
  overflow: auto;
}
form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0 50px;
}
form > input[type="text"] {
  flex: 3;
  margin-right: 2rem;
  padding: 5px 10px;
  outline: none;
  border: 1px solid #ccc;
}
form > input[type="submit"] {
  flex: 1;
}
.message-item {
  padding: 5px 10px;
  margin: 10px;
  width: 80%;
  border-radius: 5px;
  word-wrap: break-word;
}

.mine {
  background: #c8e3ff;
  float: right;
}

.mine::after {
  content: "";
  clear: both;
  display: table;
}

.others {
  background: #e2e2e2;
  float: left;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
