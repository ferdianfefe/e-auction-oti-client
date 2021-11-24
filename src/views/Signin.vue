<template>
  <div class="signin h-100">
    <div class="container">
      <h1 class="title text-white align-left">Welcome to Gamma E-Auction</h1>
      <h4 class="text-white align-left my-5">
        Get started with Gamma E-Auction now!
      </h4>
      <div class="row">
        <form class="col-6" @submit.prevent="submitSignin">
          <div class="form-group">
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
          <div class="signin-buttons">
            <button type="submit" class="btn btn-primary mt-3">Sign In</button>
            <small class="text-white">
              Don't have an account?
              <router-link to="/signup" class="text-white">
              Sign up</router-link>
              </small>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Signin",
  components: {},
  data: () => ({
    user: {
      username: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(["signin"]),
    submitSignin() {
      /* Check if name, username, and password are valid inputs */
      if (this.user.username.length === 0 || this.user.password.length === 0) {
        alert("Please fill out all fields");
        return;
      }

      let userData = {
        username: this.user.username,
        password: this.user.password,
      };

      this.signin(userData).then((res) => {
        if (res) {
          if (res.success) {
            this.$router.push("/");
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.signin {
  min-height: 100vh;
  background-position: bottom;
  transition: 0.4s;

  background: linear-gradient(
      180deg,
      rgba(75, 24, 24, 0.58) 0%,
      rgba(3, 13, 52, 0.5) 68.75%,
      #141341 97.4%
    ),
    url("../assets/landing-bg.png");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-size: 100%;
  background-repeat: no-repeat;
}

.btn {
  margin-bottom: 15px;
}
.signin-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 5%;
}
</style>
