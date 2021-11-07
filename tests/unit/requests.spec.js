import { shallowMount, createLocalVue } from "@vue/test-utils";
import IssueTable from "@/components/Body/IssueTable.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
let actions;
let store;
beforeEach(() => {
  actions = {
    getIssues: jest.fn(),
    getIssueAmount: jest.fn(),
    getIssue: jest.fn(),
  };
  store = new Vuex.Store({
    actions,
  });
});
describe("IssueTable", () => {
  it("is calls dispatch to get issues from gitHub", () => {
    const wrapper = shallowMount(IssueTable, {
      store,
      localVue,
    });
    expect(wrapper.exists()).toBe(true);
    expect(actions.getIssues).toHaveBeenCalled();
  });
});
