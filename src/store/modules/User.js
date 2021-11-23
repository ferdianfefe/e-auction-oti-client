import axios from "axios";

const API_URL = "http://localhost:8000/api/user/";

const state = {
  user: {},
  token: localStorage.getItem("user-token") || "",
  status: "",
  error: "",
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  status: (state) => state.status,
  error: (state) => state.error,
};

const actions = {
  async signin({ commit }, user) {
    commit("auth_request");
    try {
      const { data } = await axios.post(API_URL + "signin", user);
      console.log(data);
      localStorage.setItem("token", data.token);

      axios.defaults.headers.common.authorization = data.token;

      commit("auth_success", data);
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
      commit("auth_success", data);
      return data;
    } catch (error) {
      commit("auth_error", error);
      throw error;
    }
  },
  async logout({ commit }) {
    localStorage.removeItem("token");
    commit("logout");
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token) {
    state.status = "success";
    state.token = token;
  },
  auth_error(state) {
    state.status = "error";
  },
  logout(state) {
    state.status = "";
    state.token = "";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
