<template>
  <div
    class="
      bg-gitGray
      py-2
      rounded-t-md
      text-gray-500
      px-3
      border border-gray-800
    "
  >
    <div class="lg:justify-between justify-end flex w-full">
      <IssuesStats 
        class="lg:flex hidden lg:w-1/2"
        @getIssues="getIssues"
        :openedIssues="openedIssues"
        :closedIssues="closedIssues"
      />
      <div class="flex space-x-4">
        <button class="headerBtn">Authors</button>
        <button class="headerBtn">Labels</button>
        <button class="headerBtn hidden sm:inline-block">Projects</button>
        <button class="headerBtn hidden sm:inline-block">Milestones</button>
        <button class="headerBtn">Assignee</button>
        <div class="inline relative">
          <button @click="isSortingOpened = !isSortingOpened" class="headerBtn">
            <span>Sort &#8964;</span>
          </button>
          <div
            v-if="isSortingOpened"
            class="
              absolute
              right-0
              top-6
              border
              bg-gitGray
              border-gray-800
              rounded-lg
              px-2
            "
          >
            <div class="flex justify-between border-b border-gray-800">
              <p>Sort by</p>
              <button
                @click="isSortingOpened = !isSortingOpened"
                class="headerBtn"
              >
                &#10761;
              </button>
            </div>
            <div
              class="border-b border-gray-800 my-1"
              v-for="opt in sortOptions"
              :key="opt.id"
            >
              <button
                @click="$emit('setSorting', opt)"
                class="whitespace-nowrap headerBtn py-0.5"
              >
                {{ opt.title }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IssuesStats from "./IssuesStat.vue";
export default {
  props: {
    openedIssues: Number,
    closedIssues: Number,
    sortOptions: Array,
  },
  components: { IssuesStats },
  data() {
    return {
      isSortingOpened: false,
    };
  },
  methods: {
    getIssues(stat) {
      this.$emit("getIssues", stat);
    },
  },
  computed: {},
};
</script>
