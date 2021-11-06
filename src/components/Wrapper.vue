<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-sans
      subpixel-antialiased
      text-gray-300
    "
  >
    <Header class="bg-dark px-3 md:px-10 border border-gray-800" />
    <router-view class="bg-dark flex-grow px-3 md:px-10" v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <Footer class="px-3 md:px-10 bg-dark border border-gray-800" />
  </div>
</template>
<script>
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
