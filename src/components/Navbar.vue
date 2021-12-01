<template>
  <header class="border-bottom navbar navbar-expand-lg">
    <div class="container-fluid py-2">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        id="nav"
      >
        <router-link
          to="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
        >
          <img
            src="../assets/logo.png"
            alt="mdo"
            width="48"
            height="48"
            class="rounded-circle"
          />
        </router-link>

        <ul
          class="nav col-12 col-lg-auto mr-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <router-link class="nav-link px-2 link-dark" to="/"
              >Home</router-link
            >
          </li>
          <li>
            <router-link class="nav-link px-2 link-dark" to="/about"
              >About</router-link
            >
          </li>
          <li class="">
            <router-link
              class="nav-link px-2 link-dark"
              to="/coin"
              v-if="isAuthenticated"
              >GammaCoin</router-link
            >
          </li>
          <li class="">
            <router-link
              class="nav-link px-2 link-dark"
              to="/signup"
              v-if="!isAuthenticated"
              >Register</router-link
            >
          </li>
          <li class="">
            <router-link
              class="nav-link px-2 link-dark"
              to="/chat"
              v-if="isAuthenticated"
              >Chat</router-link
            >
          </li>
          <li class="">
            <router-link
              class="nav-link px-2 link-dark"
              to="/profile"
              v-if="isAuthenticated"
              >Profile</router-link
            >
          </li>
          <li class="">
            <a
              class="nav-link px-2 link-dark"
              @click.prevent="logoutUser"
              v-if="isAuthenticated"
              >Logout</a
            >
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 mr-lg-3">
          <input
            type="search"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div class="">
          <p class="my-auto text-purple font-weight-bold">
            Hi, {{ user.name }}
          </p>
        </div>
        <div class="drop-menu">
          <b-dropdown id="dropdown-right" right variant="invisible">
            <template #button-content>
              <a>
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle"
                />
              </a>
            </template>
            <b-dropdown-item
              ><a class="dropdown-item" href="#"
                >New project...</a
              ></b-dropdown-item
            >
            <b-dropdown-item
              ><a class="dropdown-item" href="#">Settings</a></b-dropdown-item
            >
            <b-dropdown-item
              ><a class="dropdown-item" href="#">Profile</a></b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              ><a class="dropdown-item" href="#">Sign out</a></b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>
    </div>
  </header>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
  </nav> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["isAuthenticated", "user"]),
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

<style>
.drop-menu {
  background: none;
}
</style>
