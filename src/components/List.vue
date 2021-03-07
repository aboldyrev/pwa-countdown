<template>
  <div>
    <div class="divide-y divide-gray-200">
      <ListItem
        v-for="(item, index) in $store.state.items"
        v-bind:key="index"
        v-bind:item="item"
      ></ListItem>
    </div>
    <router-link
      class="absolute w-16 m-4 p-2 right-0 bottom-0 rounded-full text-gray-100 bg-blue-500 hover:bg-blue-700 hover:text-gray-600 cursor-pointer transition-colors"
      to="/add"
    >
      <svg
        class="stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  name: "List",
  components: {
    ListItem,
  },
};
</script>

<style>
</style>