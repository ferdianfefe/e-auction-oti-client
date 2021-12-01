<template>
  <div id="app">
    <Navbar
      v-if="
        $route.name !== 'Signin' &&
        $route.name !== 'Signup' &&
        $route.name !== 'PageNotFound'
      "
    />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["getMyProfile"]),
  },
  mounted() {
    this.getMyProfile();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
