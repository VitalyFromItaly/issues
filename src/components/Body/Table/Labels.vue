<template>
  <span>
    <span
      class="text-white mx-0.5 text-xs rounded-md px-1"
      :style="`background-color:#${label.color}`"
      v-for="label in labels"
      :key="label.id"
    >
      {{ label.name }}
    </span>
  </span>
</template>
<script>
export default {
  props: {
    labels: Array,
    default: [],
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
