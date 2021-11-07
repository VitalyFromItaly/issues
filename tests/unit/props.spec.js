import { shallowMount, createLocalVue } from "@vue/test-utils";
// import { mount } from '@vue/test-utils'
import TableHeader from "@/components/Body/Table/TableHeader.vue";
import Issue from "@/components/Body/Table/Issue.vue";
import IssueStat from "@/components/Body/Table/IssuesStat.vue";
import Labels from "@/components/Body/Table/Labels.vue";
import Pagination from "@/components/Body/Table/Pagination.vue";
import State from "@/components/Body/Table/State.vue";
import VueRouter from "vue-router";
const issue = {
  url: "https://api.github.com/repos/vuejs/vue/issues/12348",
  repository_url: "https://api.github.com/repos/vuejs/vue",
  labels_url:
    "https://api.github.com/repos/vuejs/vue/issues/12348/labels{/name}",
  comments_url: "https://api.github.com/repos/vuejs/vue/issues/12348/comments",
  events_url: "https://api.github.com/repos/vuejs/vue/issues/12348/events",
  html_url: "https://github.com/vuejs/vue/pull/12348",
  id: 1046534461,
  node_id: "PR_kwDOALL9ps4uLrs9",
  number: 12348,
  title: "chore: fix typos [skip ci]",
  user: {
    login: "180909",
    id: 70465953,
    node_id: "MDQ6VXNlcjcwNDY1OTUz",
    avatar_url: "https://avatars.githubusercontent.com/u/70465953?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/180909",
    html_url: "https://github.com/180909",
    followers_url: "https://api.github.com/users/180909/followers",
    following_url: "https://api.github.com/users/180909/following{/other_user}",
    gists_url: "https://api.github.com/users/180909/gists{/gist_id}",
    starred_url: "https://api.github.com/users/180909/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/180909/subscriptions",
    organizations_url: "https://api.github.com/users/180909/orgs",
    repos_url: "https://api.github.com/users/180909/repos",
    events_url: "https://api.github.com/users/180909/events{/privacy}",
    received_events_url: "https://api.github.com/users/180909/received_events",
    type: "User",
    site_admin: false,
  },
  labels: [],
  state: "closed",
  locked: false,
  assignee: null,
  assignees: [],
  milestone: null,
  comments: 0,
  created_at: "2021-11-06T15:34:37Z",
  updated_at: "2021-11-06T22:43:57Z",
  closed_at: "2021-11-06T22:43:57Z",
  author_association: "CONTRIBUTOR",
  active_lock_reason: null,
  pull_request: {
    url: "https://api.github.com/repos/vuejs/vue/pulls/12348",
    html_url: "https://github.com/vuejs/vue/pull/12348",
    diff_url: "https://github.com/vuejs/vue/pull/12348.diff",
    patch_url: "https://github.com/vuejs/vue/pull/12348.patch",
  },
  body: null,
  reactions: {
    url: "https://api.github.com/repos/vuejs/vue/issues/12348/reactions",
    total_count: 0,
    "+1": 0,
    "-1": 0,
    laugh: 0,
    hooray: 0,
    confused: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  },
  timeline_url: "https://api.github.com/repos/vuejs/vue/issues/12348/timeline",
  performed_via_github_app: null,
};
describe("TableHeader", () => {
  it("gets props when passed", () => {
    const wrapper = shallowMount(TableHeader, {
      propsData: { closedIssues: 1, openedIssues: 1, sortOptions: [] },
    });
    expect(wrapper.vm.closedIssues).toBe(1);
    expect(typeof wrapper.vm.closedIssues).toBe("number");
    expect(wrapper.vm.openedIssues).toBe(1);
    expect(typeof wrapper.vm.openedIssues).toBe("number");
    expect(wrapper.vm.sortOptions).toEqual([]);
    expect(Array.isArray(wrapper.vm.sortOptions)).toBe(true);
  });
});
describe("Labels", () => {
  it("gets props when passed", () => {
    const wrapper = shallowMount(Labels, {
      propsData: { labels: [] },
    });
    expect(Array.isArray(wrapper.vm.labels)).toBe(true);
  });
});

describe("State", () => {
  it("gets props when passed", () => {
    const wrapper = shallowMount(State, {
      propsData: { issue },
    });
    expect(typeof wrapper.vm.issue).toBe("object");
    expect(wrapper.vm.issue).toEqual(issue);
  });
});
describe("Pagination", () => {
  it("gets props when passed", () => {
    const wrapper = shallowMount(Pagination, {
      propsData: { page: 1, totalPages: 235 },
    });
    expect(wrapper.vm.page).toBe(1);
    expect(typeof wrapper.vm.page).toBe("number");
    expect(wrapper.vm.totalPages).toBe(235);
    expect(typeof wrapper.vm.totalPages).toBe("number");
  });
});
describe("IssueStat", () => {
  it("gets props when passed", () => {
    const wrapper = shallowMount(IssueStat, {
      propsData: { openedIssues: 541, closedIssues: 1235 },
    });
    expect(wrapper.vm.openedIssues).toBe(541);
    expect(typeof wrapper.vm.closedIssues).toBe("number");
    expect(wrapper.vm.closedIssues).toBe(1235);
    expect(typeof wrapper.vm.openedIssues).toBe("number");
  });
});
describe("Issue", () => {
  it("gets props when passed", async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const wrapper = shallowMount(Issue, {
      localVue,
      propsData: {
        issue,
      },
    });
    expect(wrapper.vm.issue).toEqual(issue);
    expect(typeof wrapper.vm.issue).toBe("object");
  });
});
