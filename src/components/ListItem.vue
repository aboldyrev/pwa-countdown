<template>
  <div class="cursor-pointer p-4">
    <div class="grid grid-cols-12">
      <router-link :to="'/edit/' + item.id" class="block col-span-10">
        <div>{{ item.name }}</div>
        <div class="text-gray-400" :class="{ 'text-green-600': inFuture }">
          {{ diff }}
        </div>
      </router-link>
      <div class="col-span-2 self-center text-right">
        <span
          class="inline-block w-8 mt-3 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
          @click="deleteItem()"
        >
          <svg
            class="stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
moment.locale("ru");

export default {
  props: ["item"],
  computed: {
    inFuture() {
      return this.item.inFuture;
    },
    diff() {
      return this.item.diff;
    },
  },
  methods: {
    deleteItem() {
      this.$store.commit("removeItem", this.item.id);
      this.$store.dispatch("sort");
    },
  },
};
</script>

<style>
</style>