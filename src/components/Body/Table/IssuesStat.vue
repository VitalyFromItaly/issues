<template>
  <div class="flex flex-col sm:flex-row sm:space-x-5">
    <button class="headerBtn" @click="$emit('getIssues', 'open')">
      opened {{ openedIssues }}
    </button>
    <button class="headerBtn" @click="$emit('getIssues', 'closed')">
      {{ closedIssues }} closed
    </button>
    <button class="headerBtn" @click="$emit('getIssues', 'all')">all</button>
  </div>
</template>
<script>
export default {
  props: {
    openedIssues: Number,
    closedIssues: Number,
  },
};
</script>
