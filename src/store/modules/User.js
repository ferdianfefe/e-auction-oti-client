import axios from "axios";
import router from "../../router";

const API_URL = "http://localhost:8000/api/user/";

const state = {
  user: {},
  token: localStorage.getItem("token"),
  status: "",
  error: "",
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  status: (state) => state.status,
  user: (state) => state.user,
  error: (state) => state.error,
};

const actions = {
  async signin({ commit }, user) {
    commit("auth_request");
    try {
      const { data } = await axios.post(API_URL + "signin", user);
      console.log(data);
      localStorage.setItem("token", data.value.token);

      axios.defaults.headers.common.authorization = data.value.token;

      commit("auth_success", data.value);
      return data;
    } catch (error) {
      commit("auth_error", error);
      throw error;
    }
  },
  async signup({ commit }, user) {
    commit("auth_request");
    try {
      const { data } = await axios.post(API_URL + "signup", user);
      commit("register_success", data.value);
      return data;
    } catch (error) {
      commit("auth_error", error);
      throw error;
    }
  },
  async logout({ commit }) {
    localStorage.removeItem("token");
    commit("logout");
    delete axios.defaults.headers.common.authorization;
    router.push("/signin");
    return;
  },

  async getMyProfile({ commit }) {
    try {
      const { data } = await axios.get(API_URL + "me");
      commit("setUser", data.value);
      return data;
    } catch (error) {
      commit("auth_error", error);
      throw error;
    }
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, { token, user }) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = "error";
  },
  register_success(state) {
    state.status = "success";
  },
  setUser(state, { user }) {
    state.user = user;
  },
  logout(state) {
    state.status = "";
    state.token = "";
    state.user = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
