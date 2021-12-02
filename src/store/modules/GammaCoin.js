import axios from "axios";

const API_URL = "http://localhost:8000/api/coin/";

const state = {
  status: "",
  error: "",
  auctions: [],
  currentAuction: {},
};

const getters = {
  status: (state) => state.status,
  error: (state) => state.error,
  auctions: (state) => state.auctions,
  currentAuction: (state) => state.currentAuction,
};

const actions = {
  async topUp({ commit }, topUpData) {
    commit("coin_request");
    try {
      const { data } = await axios.post(API_URL + "topup", topUpData);
      commit("top_up_success", data);
      return data;
    } catch (error) {
      commit("coin_error", error);
      throw error;
    }
  },

  async transfer({ commit }, transferData) {
    commit("coin_request");
    try {
      const { data } = await axios.post(API_URL + "transfer", transferData);
      commit("transfer_success", data);
      console.log(transferData);
      return data;
    } catch (error) {
      commit("coin_error", error);
      throw error;
    }
  },
};

const mutations = {
  coin_request(state) {
    state.status = "loading";
  },
  top_up_success(state, data) {
    state.status = "success";
  },
  transfer_success(state, data) {
    state.status = "success";
  },
  coin_error(state, error) {
    state.status = "error";
    state.error = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
