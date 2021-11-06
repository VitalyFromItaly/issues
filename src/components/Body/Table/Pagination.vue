<template>
  <div id="paganation">
    <div class="space-x-3 items-center flex justify-center mt-3">
      <button
        @click="onClickPrevPage"
        :disabled="isInFirstPage"
        class="h-6 px-1 text-gray-300"
        :class="[
          page == 1
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:text-blue-600 hover:border-blue-600',
        ]"
      >
        ‹ Previous
      </button>
      <button
        @click="onClickFirstPage"
        v-if="!paginationPages.map((e) => e.name).includes(1)"
        :disabled="isInFirstPage"
        class="px-2 rounded-lg border-2 border-dark"
        :class="[
          page == 1
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:border-gray-800',
        ]"
      >
        1
      </button>
      <span v-if="!paginationPages.map((e) => e.name).includes(1)">...</span>
      <div class="flex">
        <ul>
          <li
            v-for="paginationPage in paginationPages"
            :key="paginationPage.name"
            class="inline-block mx-1"
          >
            <button
              type="button"
              :disabled="paginationPage.isDisabled"
              class="px-2 rounded-lg border-2 border-dark"
              :class="
                page == paginationPage.name
                  ? 'bg-blue-600 text-white'
                  : 'hover:border-gray-800'
              "
              @click="onClickPage(paginationPage.name)"
            >
              {{ paginationPage.name }}
            </button>
          </li>
        </ul>
        <span v-if="!paginationPages.map((e) => e.name).includes(totalPages)"
          >...</span
        >
        <ul v-if="!paginationPages.map((e) => e.name).includes(totalPages)">
          <li
            v-for="lastPage in getLastPages"
            :key="lastPage.index"
            class="inline-block mx-1"
          >
            <button
              v-if="!paginationPages.map((e) => e.name).includes(lastPage)"
              type="button"
              :disabled="lastPage === totalPages"
              class="px-1 rounded-lg border-2 border-dark"
              :class="
                page == lastPage
                  ? 'bg-blue-600 text-white'
                  : 'hover:border-gray-800'
              "
              @click="onClickPage(lastPage)"
            >
              {{ lastPage }}
            </button>
          </li>
        </ul>
      </div>
      <button
        v-if="!paginationPages.map((e) => e.name).includes(totalPages)"
        @click="onClickLastPage"
        :disabled="isInLastPage"
        class="h-6 px-1 text-gray-300"
        :class="[
          page == totalPages
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:text-blue-600 hover:border-blue-600',
        ]"
      >
        {{ totalPages }}
      </button>
      <button
        @click="onClickNextPage"
        :disabled="isInLastPage"
        class="h-6 px-1 text-gray-300 rounded-sm"
        :class="[
          page == totalPages
            ? 'cursor-not-allowed'
            : 'cursor-pointer hover:text-blue-600 hover:border-blue-600',
        ]"
      >
        Next ›
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["page", "totalPages"],
  data() {
    return {
      maxVisibleButtons: 5,
      amountOfLastPages: 1,
    };
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pageChanged", 1);
    },
    onClickPrevPage() {
      this.$emit("pageChanged", this.page - 1);
    },
    onClickPage(paginationPage) {
      this.$emit("pageChanged", paginationPage);
    },
    onClickNextPage() {
      this.$emit("pageChanged", this.page + 1);
    },
    onClickLastPage() {
      this.$emit("pageChanged", this.totalPages);
    },
  },
  computed: {
    isInFirstPage() {
      return this.page === 1;
    },
    isInLastPage() {
      return this.page === this.totalPages;
    },
    startPage() {
      // When on the first page
      if (this.page === 1) {
        return 1;
      }
      // When on the last page
      if (this.page === this.totalPage) {
        return this.totalPages - this.maxVisibleButtons;
      }
      // When in between
      return this.page - 1;
    },
    paginationPages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.page,
        });
      }
      return range;
    },
    getLastPages() {
      const lastNumbers = this.totalPages - this.amountOfLastPages;
      let arr = [];
      for (let i = lastNumbers; i < this.totalPages; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
</script>
