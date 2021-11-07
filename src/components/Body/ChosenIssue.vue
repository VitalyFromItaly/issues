<template>
  <div>
    <button @click="goBack">back</button>
    <div class="mt-5" v-if="issue">
      <h1 class="text-3xl">{{ issue.title }} #{{ issue.number }}</h1>
      <State :issue="issue"> </State>
      <p v-html="issue.body"></p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import State from "./Table/State.vue";
export default {
  props: {
    id: [Number, String],
  },
  components: { State },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getIssue", this.id);
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/" });
      this.$store.commit("cleanIssue");
    },
  },
  computed: {
    ...mapState(["issue"]),
  },
};
</script>
