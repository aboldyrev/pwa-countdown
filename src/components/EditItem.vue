<template>
  <div>
    <div class="grid grid-rows-none gap-3 mt-2">
      <input
        class="mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300"
        type="date"
        v-model="date"
        v-bind:class="{ 'border-red-300 bg-red-100': errors.date }"
      />
      <input
        class="mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300"
        type="time"
        v-model="time"
        v-bind:class="{ 'border-red-300 bg-red-100': errors.time }"
      />
      <input
        class="mx-2 py-2 px-4 bg-gray-100 rounded border-2 border-gray-300"
        type="text"
        placeholder="Название события"
        v-model="name"
        v-bind:class="{ 'border-red-300 bg-red-100': errors.name }"
      />
      <button
        class="block mx-2 p-4 rounded text-gray-100 bg-blue-500 hover:bg-blue-700 text-center"
        type="button"
        @click="update"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditItem",
  data: () => {
    return {
      id: "",
      date: "",
      time: "",
      name: "",
      errors: {
        date: false,
        time: false,
        name: false,
      },
    };
  },
  methods: {
    update() {
      this.errors.date = this.date == "";
      this.errors.time = this.time == "";
      this.errors.name = this.name == "";

      if (this.date && this.time && this.name) {
        this.$store.commit("editItem", {
          id: this.id,
          date: this.date,
          time: this.time,
          name: this.name,
          diff: "",
          inFuture: false,
        });
        this.$store.dispatch("sort");
        this.$router.push("/");
      }
    },
  },
  mounted() {
    let item = this.$store.state.items.find((item) => {
      return item.id == this.$route.params.id;
    });

    this.id = item.id;
    this.date = item.date;
    this.time = item.time;
    this.name = item.name;
  },
};
</script>

<style>
</style>