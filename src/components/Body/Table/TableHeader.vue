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
    <div class="flex justify-between">
      <div class="space-x-5">
        <button @click="$emit('getIssues', 'open')">
          opened {{ openedIssues }}
        </button>
        <button @click="$emit('getIssues', 'closed')">
          {{ closedIssues }} closed
        </button>
      </div>
      <div class="flex space-x-4">
        <button>Authors</button>
        <button>Labels</button>
        <button>Projects</button>
        <button>Milestones</button>
        <button>Assignee</button>
        <button>Sort</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    openedIssues: Number,
    closedIssues: Number,
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
