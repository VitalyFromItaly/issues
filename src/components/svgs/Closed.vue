<template>
  <div
    :class="[
      $route.path === '/'
        ? ''
        : `bg-${info.color}-500 inline py-1 mt-1 rounded-md px-1 `,
    ]"
    :title="$route.path === '/' ? info.mainPageTitle : info.title"
  >
    <svg
      :class="[$route.path === '/' ? 'text-purple-700' : 'text-white']"
      class="fill-current inline mr-1"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path
        d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
      ></path>
    </svg>
    <slot v-if="$route.path !== '/'">
      <span>{{ info.title }}</span>
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
  },
};
</script>
