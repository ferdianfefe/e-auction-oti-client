import axios from "axios";
import router from "../../router";

const API_URL = "http://localhost:8000/api/user/";
// const API_URL = "/api/user/";

const state = {
  user: {},
  token: localStorage.getItem("token"),
  contacts: [],
  status: "",
  error: "",
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  status: (state) => state.status,
  contacts: (state) => state.contacts,
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

  async getContacts({ commit }) {
    commit("get_contacts_request");
    try {
      const res = await axios.get(`${API_URL}/contact`);
      if (res.data.success) {
        commit("get_contacts_success", res.data.value);
      }
      return res;
    } catch (error) {
      commit("get_contacts_error", error);
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
  get_contacts_request(state) {
    state.status = "loading";
  },
  get_contacts_success(state, contacts) {
    state.status = "success";
    state.contacts = contacts;
  },
  get_contacts_error(state, error) {
    state.status = "error";
    state.error = error;
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
