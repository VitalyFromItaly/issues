import Vue from "vue";
import Vuex from "vuex";
import api from "../request";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issues: null,
    openedIssues: null,
    allIssues: 11716,
    closedIssues: 11716,
    state: "open",
    issuesLoading: false,
    issue: null,
  },
  getters: {},
  mutations: {
    setLoading: (state, payload) => (state.issuesLoading = payload),
    setIssues(state, payload) {
      const today = new Date();
      const mlsecPerDay = 1000 * 60 * 60 * 24;
      const getHours = (today, created) => {
        const h = Math.round(
          Math.abs(today.getTime() - created.getTime()) / 36e5
        );
        console.log(h);
        return h;
      };
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
          else if (state === "open" && daysO < 1)
            return `opened ${getHours(today, created)} hours ago`;
          else if (state === "closed" && daysC > 1)
            return `closed ${daysC} days ago`;
          else if (state === "closed" && daysO < 1)
            return `closed ${getHours(today, closed)} hours ago`;
        };

        obj.days = dayString(obj.state, daysOpened, daysClosed);
        // console.log(obj.days);
        // console.log(obj);
        // } else if (obj.state === "closed") {
        //   obj.days = "closed " + days + " days ago";
        // }
        // : "yesterday";
        // } else if (obj.state === "closed") {
        //   obj.days =
        //     new Date(obj.closed_at).getDay() > 1
        //       ? "closed " + new Date(obj.created_at).getDay() + " days ago"
        //       : "closed yesterday";
        // }
      }
      payload.forEach((e) => getLeftDays(e));
      state.issues = payload;
      state.issuesLoading = false;
    },
    setIssueAmount(state, payload) {
      state.openedIssues = payload.open_issues_count;
      console.log(payload);
    },
    setIssue(state, payload) {
      state.issue = payload;
      console.log(payload);
    },
    cleanIssue: (state) => (state.issue = null),
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
          `/issues?state=${data.state}&sort=${data.sort}&direction=${data.direction}&page=${data.page}&per_page=${data.perPage}`
        );
        commit("setIssues", res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
