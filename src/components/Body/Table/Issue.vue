<template>
  <li class="py-2 px-3 border-b border-gray-800 hover:bg-gitGray">
    <div class="w-full flex justify-between">
      <div class="w-3/4 flex items-baseline">
        <State :issue="issue" />
        <span
          ><router-link
            :to="{ name: 'oneIssue', params: { id: issue.number } }"
            class="
              text-base
              cursor-pointer
              hover:text-blue-500
              whitespace-normal
            "
          >
            {{ issue.title }}
          </router-link>
        </span>
        <span v-if="issue.labels.length">
          <Labels :labels="issue.labels" />
        </span>
      </div>
      <div class="ml-auto">
        <router-link
          :to="{ name: 'oneIssue', params: { id: issue.number } }"
          class="w-8 flex items-center space-x-1 hover:text-blue-500"
          v-if="issue.comments"
        >
          <Comments /><span>{{ issue.comments }}</span>
        </router-link>
      </div>
    </div>
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
import State from "./State.vue";
import Comments from "@/components/svgs/comments";
export default {
  props: {
    issue: Object,
  },
  components: {
    Labels,
    State,
    Comments,
  },
};
</script>
