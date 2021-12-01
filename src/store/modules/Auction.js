import axios from "axios";

const API_URL = "http://localhost:8000/api/auction/";

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
  async createAuction({ commit }, auction) {
    commit("auction_request");
    try {
      const response = await axios.post(API_URL, auction);
      const data = response.data;
      commit("create_auction_success", data);
      return data;
    } catch (error) {
      commit("auction_error", error);
      throw error;
    }
  },
  async getAllAuctions({ commit }) {
    commit("auction_request");
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      commit("get_all_auction_success", data);
      return data;
    } catch (error) {
      commit("auction_error", error);
      throw error;
    }
  },
  async getAuctionById({ commit }, id) {
    commit("auction_request");
    try {
      const response = await axios.get(API_URL + id);
      const data = response.data;
      commit("get_auction_by_id_success", data);
      return data;
    } catch (error) {
      commit("auction_error", error);
      throw error;
    }
  },
  async placeBid({ commit }, bidData) {
    commit("auction_request");
    try {
      const response = await axios.post(API_URL + "bid", bidData);
      const data = response.data;
      commit("place_bid_success", data);
      return data;
    } catch (error) {
      commit("auction_error", error);
      throw error;
    }
  },
};

const mutations = {
  auction_request(state) {
    state.status = "loading";
  },
  create_auction_success(state, data) {
    state.status = "success";
  },
  get_all_auction_success(state, data) {
    state.status = "success";
    state.auctions = data.value.auctions;
  },
  get_auction_by_id_success(state, data) {
    state.status = "success";
    state.currentAuction = data.value.auction;
  },
  place_bid_success(state, data) {
    state.status = "success";
  },
  auction_error(state, error) {
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
