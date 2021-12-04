import Vue from "vue";
try {
  window.Popper = require("popper.js").default;
} catch (e) {
  console.log(e);
}
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import moment from "moment";
import VueSocketIO from "vue-socket.io";
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

// Moment
Vue.prototype.$moment = moment;

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: "http://localhost:8000",
    // connection: "/",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mututationPrefix: "SOCKET_",
    },
  })
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
