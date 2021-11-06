<template>
  <div>
    <div class="my-10" v-if="!issuesLoading">
      <TableHeader
        @getIssues="getIssues"
        :openedIssues="openedIssues"
        :closedIssues="closedIssues"
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
    <div v-else>Loading.....</div>
  </div>
</template>
<script>
import TableHeader from "./Table/TableHeader.vue";
import Pagination from "./Table/Pagination.vue";
import Issue from "./Table/Issue.vue";
import { mapState } from "vuex";
export default {
  components: { TableHeader, Issue, Pagination },
  data() {
    return {
      page: 1,
      perPage: 20,
      state: "all",
    };
  },
  methods: {
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
