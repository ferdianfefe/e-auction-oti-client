<template>
  <div class="landing h-100">
    <div class="container">
      <h4 class="text-white align-left my-5">Sign Up</h4>
      <div class="row">
        <form class="col-6" @submit.prevent="submitSignup">
          <div class="form-group">
            <label for="name" class="text-white align-left">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name"
              v-model="user.name"
            />
          </div>
          <div class="form-group mt-4">
            <label for="username" class="text-white align-left">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter username"
              v-model="user.username"
            />
          </div>
          <div class="form-group mt-4">
            <label for="password" class="text-white align-left">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
              v-model="user.password"
            />
          </div>
          <div class="form-group mt-4">
            <label for="password" class="text-white align-left"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="confirm-password"
              placeholder="Repeat password"
              v-model="user.confirmPassword"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-3">Sign Up</button>
          <small class="text-white"
            >Already had an account?
            <router-link to="/" class="text-white">Sign in</router-link></small
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Signup",
  components: {},
  data: () => ({
    user: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  }),
  methods: {
    ...mapActions(["signup"]),
    submitSignup() {
      if (this.user.password !== this.user.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      /* Check if name, username, and password are valid inputs */
      if (
        this.user.name.length === 0 ||
        this.user.username.length === 0 ||
        this.user.password.length === 0
      ) {
        alert("Please fill out all fields");
        return;
      }

      /* Check if password is valid */
      if (this.user.password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }

      let userData = {
        name: this.user.name,
        username: this.user.username,
        password: this.user.password,
      };

      this.signup(userData);
    },
  },
};
</script>

<style lang="scss" scoped>
.landing {
  min-height: 100vh;
  background-image: url("../assets/landing-bg.png");
  background-size: 100% 100%;
}
</style>
