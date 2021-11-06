<template>
  <li class="py-2 px-3 border-b border-gray-800 hover:bg-gitGray">
    <div class="flex items-baseline">
      <Pull v-if="issue.state === 'open' && issue.pull_request" />
      <Open v-else-if="issue.state === 'open' && !issue.pull_request" />
      <ClosedPullRequest
        v-if="
          issue.state === 'closed' &&
          issue.author_association === 'NONE' &&
          issue.pull_request
        "
      />
      <ClosedMerged
        v-if="
          issue.state === 'closed' &&
          issue.author_association === 'CONTRIBUTOR' &&
          issue.pull_request
        "
      />

      <Closed v-if="issue.state === 'closed' && !issue.pull_request" />
      <span class="text-base cursor-pointer hover:text-blue-500">{{
        issue.title
      }}</span>
    </div>
    <span v-if="issue.labels.length">
      <Labels :labels="issue.labels" />
    </span>
    <p class="text-sm text-gray-600">
      <span class="pr-1">#{{ issue.number }}</span>
      <span class="pr-1">
        {{ issue.days }}
      </span>
      <span class="pr-1">by {{ issue.user.login }}</span>
    </p>
  </li>
</template>
<script>
import Labels from "./Labels.vue";
import Pull from "@/components/svgs/pullRequst.vue";
import Closed from "@/components/svgs/Closed.vue";
import ClosedMerged from "@/components/svgs/ClosedMerged.vue";
import ClosedPullRequest from "@/components/svgs/closedPullRequest.vue";
import Open from "@/components/svgs/open.vue";
export default {
  props: {
    issue: Object,
  },
  components: {
    Labels,
    Pull,
    Open,
    Closed,
    ClosedMerged,
    ClosedPullRequest,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
