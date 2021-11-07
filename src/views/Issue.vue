<template>
  <div>
    <ChosenIssue :id="this.$route.params.id" />
  </div>
</template>
<script>
import ChosenIssue from "@/components/Body/ChosenIssue";
export default {
  components: { ChosenIssue },
};
</script>
