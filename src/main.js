import Vue from "vue";
try {
  window.Popper = require("popper.js").default;
} catch (e) {
  console.log(e);
}
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./style/style.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

// Set axios as default http module
Vue.prototype.$http = axios;
// Load token from local storage
const token = localStorage.getItem("token");
// If there is any token, then append it to axios default authorization header
if (token) {
  Vue.prototype.$http.defaults.headers.common.authorization = token;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
