import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/User";
import Auction from "./modules/Auction";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Auction
  },
});
