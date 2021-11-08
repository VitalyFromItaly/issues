import Vue from "vue";
import Vuex from "vuex";
import api from "../request";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: null,
    openedIssues: null,
    allIssues: 11698,
    // allIssues: 11717,
    issuesLoading: false,
    issue: null,
  },
  getters: {},
  mutations: {
    setLoading: (state, payload) => (state.issuesLoading = payload),
    setIssues(state, payload) {
      const today = new Date();
      const mlsecPerDay = 1000 * 60 * 60 * 24;
      const getHours = (today, created) =>
        Math.round(Math.abs(today.getTime() - created.getTime()) / 36e5);

      function getDiff(date, date2) {
        return parseInt((date - date2) / mlsecPerDay, 10);
      }
      function getLeftDays(obj) {
        let created = new Date(obj.created_at);
        let closed = new Date(obj.closed_at);
        const daysOpened = getDiff(today, created);
        const daysClosed = getDiff(today, closed);
        const dayString = (state, daysO, daysC) => {
          if (state === "open" && daysO > 1) return `opened ${daysO} days ago`;
          else if (state === "open" && daysO === 1) return `opened yesterday`;
          else if (state === "open" && daysO < 1)
            return `opened ${getHours(today, created)} hours ago`;
          else if (state === "closed" && daysC > 1)
            return `closed ${daysC} days ago`;
          else if (state === "closed" && daysC === 1) return `closed yesterday`;
          else if (state === "closed" && daysO < 1)
            return `closed ${getHours(today, closed)} hours ago`;
        };
        obj.days = dayString(obj.state, daysOpened, daysClosed);
      }
      payload.forEach((e) => getLeftDays(e));
      state.issues = payload;
      state.issuesLoading = false;
    },
    setIssueAmount(state, payload) {
      state.openedIssues = payload.open_issues_count;
    },
    setIssue: (state, payload) => (state.issue = payload),
    cleanIssue: (state) => (state.issue = null),
    setAllIssueAmount: (state, payload) =>
      (state.allIssues = payload.total_count),
  },
  actions: {
    async getIssue({ commit }, id) {
      try {
        const res = await api.get(`/issues/${id}`);
        commit("setIssue", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getIssueAmount({ commit }) {
      try {
        const res = await api.get("/repos/vuejs/vue");
        commit("setIssueAmount", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getAllIssueAmount({ commit }) {
      try {
        const res = await api.get("/search/issues?q=repo:vuejs/vue/is:all");
        commit("setAllIssueAmount", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getIssues({ commit }, data) {
      try {
        commit("setLoading", true);
        const res = await api.get(
          `/repos/vuejs/vue/issues?state=${data.state}&sort=${data.sort}&direction=${data.direction}&page=${data.page}&per_page=${data.perPage}`
        );
        commit("setIssues", res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
