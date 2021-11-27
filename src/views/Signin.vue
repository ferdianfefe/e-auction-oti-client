<template>
  <div class="signin h-100">
    <div class="container">
      <h1 class="title">Welcome to Gamma.</h1>
      <br>
      <h4 class="getstarted">
        Get started with Gamma now!
      </h4>
      <div class="mainblur">

        <form class="col-6" @submit.prevent="submitSignin">

          <p class ="login">Login.</p>
          <br>

          <div class="form-group">
            <label for="username" class="userpass">Username</label>
            <input
              type="text"
              class="form-control"
              style="border-radius: 22px; width: 300px; height: 40px; padding-left:20px;"
              id="username"
              placeholder="Enter username"
              v-model="user.username"
            />
          </div>

          <div class="form-group mt-4">
            <label for="password" class="userpass">Password</label>
            <input
              type="password"
              class="form-control"
              style="border-radius: 22px; width: 300px; height: 40px; padding-left:20px;"
              id="password"
              placeholder="Enter password"
              v-model="user.password"
            />
          </div>

          <br>

          <div class="signinpadding">
            <button type="submit" class="btn btn-primary mt-3" style="border-radius: 10px; font-weight:bold; font-size: 20px;">Log in</button>
            <br><br>
            <small class="donthave">
            Don't have an account? <router-link to="/signup" class="donthave" style="font-size:20px;">Sign up</router-link>
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
  background-image: url("../assets/newbackground.jpg");
  background-size: 100% 100%;
}
.title{
  color: white;
}
</style>
