import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let api = "http://localhost:51135/api/";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    groups: [],
    members: []
  },

  mutations: {
    fectchGroup(state, { res }) {
      state.groups = res.data;
    },
    fetchMember(state, { res }) {
        state.members = res.data;
      },
  },

  actions: {
    async fectchGroup({ commit }) {
      await Axios.get(api + "group/")
        .then(res => commit("fectchGroup", { res }))
        .catch(err => alert(err));
    },
    async fetchMember({ commit }) {
        await Axios.get(api + "member/")
          .then(res => commit("fetchMember", { res }))
          .catch(err => alert(err));
      },
  },

  getters: {
    groups: state => state.groups,
    members: state => state.members
  }
});