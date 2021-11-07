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
      :class="[$route.path === '/' ? 'text-red-700' : 'text-white']"
      class="fill-current inline mr-1"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      height="16"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M10.72 1.227a.75.75 0 011.06 0l.97.97.97-.97a.75.75 0 111.06 1.061l-.97.97.97.97a.75.75 0 01-1.06 1.06l-.97-.97-.97.97a.75.75 0 11-1.06-1.06l.97-.97-.97-.97a.75.75 0 010-1.06zM12.75 6.5a.75.75 0 00-.75.75v3.378a2.251 2.251 0 101.5 0V7.25a.75.75 0 00-.75-.75zm0 5.5a.75.75 0 100 1.5.75.75 0 000-1.5zM2.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.25 1a2.25 2.25 0 00-.75 4.372v5.256a2.251 2.251 0 101.5 0V5.372A2.25 2.25 0 003.25 1zm0 11a.75.75 0 100 1.5.75.75 0 000-1.5z"
      ></path>
    </svg>
    <slot v-if="$route.path !== '/'">{{ info.title }}</slot>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
  },
};
</script>
