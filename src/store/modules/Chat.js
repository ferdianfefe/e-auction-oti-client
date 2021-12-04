import axios from "axios";

const API_URL = "http://localhost:8000/api/chat";
// const API_URL = "/api/chat";

const state = {
  activeContact: null,
  messages: [],
};

const getters = {
  messages: (state) => state.messages,
  activeContact: (state) => state.activeContact,
  socket: (state) => state.socket,
};

const actions = {
  SOCKET_message({ commit }) {
    actions.getMessages({ commit });
  },

  // Get messages
  async getMessages({ commit }) {
    commit("messages_request");
    try {
      const { data } = await axios.get(API_URL);
      console.log(data.value.messages);
      if (data.success) {
        commit("get_messages_success", data.value.messages);
      }
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  // Send message
  async sendMessage({ commit }, messageObj) {
    commit("messages_request");
    try {
      const { data } = await axios.post(API_URL, messageObj);
      if (data.status) {
        commit("send_message_success", data.value);
      }
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  // Set selected contact
  setActiveContact({ commit }, user) {
    commit("contact_selected", user);
  },
};

const mutations = {
  messages_request(state) {
    state.status = "loading";
  },
  get_messages_success(state, messages) {
    state.status = "success";
    state.messages = messages;
  },
  send_message_success(state) {
    state.status = "success";
  },
  contact_selected(state, user) {
    state.activeContact = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
