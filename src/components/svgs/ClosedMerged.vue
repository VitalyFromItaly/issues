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
        fill-rule="evenodd"
        d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
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
