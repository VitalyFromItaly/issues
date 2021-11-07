<template>
  <div class="my-10" v-if="!issuesLoading">
    <div class="flex space-x-5 lg:space-x-0  items-baseline">
      <IssuesStats
        class="block lg:hidden  text-gray-500"
        @getIssues="getIssues"
        :openedIssues="openedIssues"
        :closedIssues="closedIssues"
      />
      <p class="my-1">
        Shown <span class="text-purple-500">{{ state }}</span> issues
      </p>
    </div>
    <div>
      <TableHeader
        :currentIssues="state"
        @getIssues="getIssues"
        :openedIssues="openedIssues"
        :closedIssues="closedIssues"
        @setSorting="setSorting"
        :sortOptions="sortOptions"
      />
      <div class="border border-gray-800">
        <ul>
          <Issue :issue="issue" v-for="issue in issues" :key="issue.id" />
        </ul>
      </div>
      <Pagination
        :page="page"
        :totalPages="totalPages"
        @pageChanged="changePage"
      />
    </div>
  </div>
  <div v-else>Loading.....</div>
</template>
<script>
import IssuesStats from "./Table/IssuesStat.vue";
import TableHeader from "./Table/TableHeader.vue";
import Pagination from "./Table/Pagination.vue";
import Issue from "./Table/Issue.vue";
import { mapState } from "vuex";
export default {
  components: { TableHeader, Issue, Pagination, IssuesStats },
  data() {
    return {
      page: 1,
      perPage: 20,
      state: "all",
      sort: "created",
      currentsortId: 1,
      direction: "desc",
      sortOptions: [
        {
          id: 1,
          title: "Newest",
          sort: "created",
          direction: "desc",
        },
        {
          id: 2,
          title: "Oldest",
          sort: "created",
          direction: "asc",
        },
        {
          id: 3,
          title: "Most commented",
          sort: "comments",
          direction: "desc",
        },
        {
          id: 4,
          title: "Least commented",
          sort: "comments",
          direction: "asc",
        },
        {
          id: 5,
          title: "Recently updated",
          sort: "updated",
          direction: "desc",
        },
        {
          id: 6,
          title: "Least recenty updated",
          sort: "updated",
          direction: "asc",
        },
      ],
    };
  },
  methods: {
    setSorting(item) {
      this.sort = item.sort;
      this.direction = item.direction;
      console.log(this.option);
      this.getIssues();
    },
    changePage(p) {
      this.page = p;
      this.getIssues();
    },
    getIssues(state = this.state) {
      this.state = state;
      this.$store.dispatch("getIssues", this.options);
    },
  },
  mounted() {
    this.getIssues();
    this.$store.dispatch("getIssueAmount");
  },
  computed: {
    options() {
      return {
        page: this.page,
        perPage: this.perPage,
        state: this.state,
        sort: this.sort,
        direction: this.direction,
      };
    },
    ...mapState(["openedIssues", "issues", "allIssues", "issuesLoading"]),
    closedIssues() {
      return this.allIssues - this.openedIssues;
    },
    totalPages() {
      return Math.ceil(this.allIssues / this.perPage);
    },
  },
};
</script>
