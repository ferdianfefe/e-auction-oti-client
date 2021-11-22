<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Gamma</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/chat" v-if="!isAuthenticated"
              >Chat</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register" v-if="!isAuthenticated"
              >Register</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/chat" v-if="isAuthenticated"
              >Chat</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile" v-if="isAuthenticated"
              >Profile</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click.prevent="logoutUser"
              v-if="isAuthenticated"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      // this.socket.emit('offline', localStorage.getItem('userId'))
      this.logout();
    },
  },
  mounted() {
    console.log(this.isAuthenticated);
  },
};
</script>

<style></style>
