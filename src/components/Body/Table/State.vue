<template>
  <div>
    <Pull
      :info="stateInfo[5]"
      v-if="issue.state === 'open' && issue.pull_request"
    />
    <Open
      :info="stateInfo[2]"
      v-else-if="issue.state === 'open' && !issue.pull_request"
    />
    <ClosedPullRequest
      :info="stateInfo[4]"
      v-if="
        issue.state === 'closed' &&
        issue.author_association === 'NONE' &&
        issue.pull_request
      "
    />
    <ClosedMerged
      :info="stateInfo[3]"
      v-if="
        issue.state === 'closed' &&
        issue.author_association === 'CONTRIBUTOR' &&
        issue.pull_request
      "
    />
    <Closed
      :info="stateInfo[1]"
      v-if="issue.state === 'closed' && !issue.pull_request"
    />
  </div>
</template>
<script>
import Pull from "@/components/svgs/pullRequst.vue";
import Closed from "@/components/svgs/Closed.vue";
import ClosedMerged from "@/components/svgs/ClosedMerged.vue";
import Open from "@/components/svgs/open.vue";
import ClosedPullRequest from "@/components/svgs/closedPullRequest.vue";
export default {
  props: {
    issue: Object,
  },
  components: {
    Pull,
    Open,
    Closed,
    ClosedMerged,
    ClosedPullRequest,
  },
  data() {
    return {
      stateInfo: {
        1: {
          state: "closed",
          color: "purple",
          mainPageTitle: "Closed issue",
          title: "Status: closed",
        },
        2: {
          state: "open",
          color: "green",
          mainPageTitle: "Open issue",
          title: "Status: open",
        },
        3: {
          state: "closed",
          color: "purple",
          mainPageTitle: "Merged pull request",
          title: "Status: merged",
        },
        4: {
          state: "closed",
          color: "red",
          mainPageTitle: "Closed pull request",
          title: "Status: closed",
        },
        5: {
          state: "open",
          color: "green",
          mainPageTitle: "Open pull request",
          title: "Status: open",
        },
      },
    };
  },
};
</script>
