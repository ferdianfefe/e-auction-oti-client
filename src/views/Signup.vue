<template>
  <body class="u-body">
    <section
      class="u-align-center u-clearfix u-grey-5 u-section-1"
      id="sec-d516"
    >
      <br /><br />
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div
                class="u-align-left u-container-style u-image u-layout-cell u-size-31 u-image-1"
                data-image-width="1600"
                data-image-height="900"
              >
                <div class="u-container-layout u-container-layout-1"></div>
              </div>

              <div
                class="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-shape-rectangle u-size-29 u-white u-layout-cell-2"
              >
                <div class="u-container-layout u-container-layout-2">
                  <br /><br />
                  <h3
                    class="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-default u-text-1"
                  >
                    Create Your Gamma Account.
                  </h3>
                  <div
                    class="u-expanded-width-xs u-form u-login-control u-form-1"
                  >
                    <form
                      @submit.prevent="submitSignup"
                      class="u-clearfix u-form-custom-backend u-form-spacing-15 u-form-vertical u-inner-form"
                      source="custom"
                      name="form-3"
                      style="padding: 0px"
                    >
                      <div class="u-form-group u-form-name">
                        <label
                          for="name"
                          class="u-form-control-hidden u-label"
                        ></label>
                        <input
                          type="text"
                          class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                          id="name"
                          placeholder="Enter name"
                          v-model="user.name"
                        />
                      </div>
                      <div class="u-form-group u-form-username">
                        <label
                          for="username"
                          class="u-form-control-hidden u-label"
                        ></label>
                        <input
                          type="text"
                          class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                          id="username"
                          placeholder="Enter username"
                          v-model="user.username"
                        />
                      </div>
                      <div class="u-form-group u-form-password">
                        <label
                          for="password"
                          class="u-form-control-hidden u-label"
                        ></label>
                        <input
                          type="password"
                          class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                          id="password"
                          placeholder="Enter password"
                          v-model="user.password"
                        />
                      </div>
                      <div class="u-form-group u-form-repassword">
                        <label
                          for="password"
                          class="u-form-control-hidden u-label"
                        ></label>
                        <input
                          type="password"
                          class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                          id="confirm-password"
                          placeholder="Repeat password"
                          v-model="user.confirmPassword"
                        />
                      </div>

                      <div class="u-align-center u-form-group u-form-submit">
                        <br />
                        <button
                          type="submit"
                          class="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-text-body-alt-color u-btn-1"
                        >
                          Sign Up
                        </button>
                      </div>
                      <input type="hidden" value="" name="recaptchaResponse" />
                    </form>

                    <a
                      @click="$router.push('/signin')"
                      class="u-border-1 u-border-active-palette-1-base u-border-hover-palette-1-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-1-base u-btn-2"
                    >
                      Already have an account?
                    </a>
                  </div>
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </section>
  </body>
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

      this.signup(userData).then((res) => {
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

<style lang="scss" scoped></style>
