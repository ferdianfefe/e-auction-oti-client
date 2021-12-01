import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/User";
import Auction from "./modules/Auction";
import Chat from "./modules/Chat";
import GammaCoin from "./modules/GammaCoin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Auction,
    Chat,
    GammaCoin,
  },
});
