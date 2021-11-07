<template>
  <div class="space-x-5">
    <button class="headerBtn" @click="$emit('getIssues', 'open')">
      opened {{ openedIssues }}
    </button>
    <button class="headerBtn" @click="$emit('getIssues', 'closed')">
      {{ closedIssues }} closed
    </button>
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
