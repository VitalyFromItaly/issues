import Vue from "vue";
import Vuex from "vuex";
import api from "../request";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: null,
    page: 1,
    perPage: 20,
    openedIssues: null,
    allIssues: 11716,
    closedIssues: 11716,
    state: "open",
    issuesLoading: false,
  },
  getters: {},
  mutations: {
    setLoading: (state, payload) => (state.issuesLoading = payload),
    setIssues(state, payload) {
      console.log(payload);
      payload.forEach((e) => {
        if (e.state === "open")
          e.days =
            new Date(e.created_at).getDay() > 1
              ? "opened " + new Date(e.created_at).getDay() + " days ago"
              : "yesterday";
        else if (e.state === "closed") {
          e.days =
            new Date(e.closed_at).getDay() > 1
              ? "closed " + new Date(e.created_at).getDay() + " days ago"
              : "closed yesterday";
        }
      });
      state.issues = payload;
      state.issuesLoading = false;
    },
    setIssueAmount(state, payload) {
      state.openedIssues = payload.open_issues_count;
      console.log(payload);
    },
  },
  actions: {
    async getIssueAmount({ commit }) {
      try {
        const res = await api.get();
        commit("setIssueAmount", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getIssues({ commit }, data) {
      try {
        console.log(data);
        commit("setLoading", true);
        const res = await api.get(
          `/issues?state=${data.state}&page=${data.page}&per_page=${data.perPage}`
        );
        commit("setIssues", res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
