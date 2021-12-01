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
          <h1>G</h1>
        </router-link>

        <ul
          class="nav col-12 col-lg-auto mr-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <router-link class="nav-link px-2 text-purple" to="/"
              >Home</router-link
            >
          </li>
          <li class="">
            <router-link
              class="nav-link px-2 text-purple"
              to="/coin"
              v-if="isAuthenticated"
              >GammaCoin</router-link
            >
          </li>
          <li class="">
            <router-link
              class="nav-link px-2 text-purple"
              to="/register"
              v-if="!isAuthenticated"
              >Register</router-link
            >
          </li>
          <li class="">
            <router-link
              class="nav-link px-2 text-purple"
              to="/chat"
              v-if="isAuthenticated"
              >Chat</router-link
            >
          </li>
          <li class="">
            <router-link
              class="nav-link px-2 text-purple"
              to="/profile"
              v-if="isAuthenticated"
              >Profile</router-link
            >
          </li>
        </ul>

        <!-- <form class="col-12 col-lg-auto mb-3 mb-lg-0 mr-lg-3">
          <input
            type="search"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form> -->
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
              ><a @click.prevent="logoutUser" class="dropdown-item"
                >Sign out</a
              ></b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>
    </div>
  </header>
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
    console.log(this.user);
  },
};
</script>

<style>
.drop-menu {
  /* background: none; */
}

.active {
  text-decoration: underline;
}
</style>
