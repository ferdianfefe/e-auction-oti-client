<template>
  <div class="">
    <div class="form-group">
      <input
        v-model="search"
        :placeholder="placeholder"
        type="text"
        class="form-control"
      />
      <ul class="list-group m-0">
        <li
          class="list-group-item p-1 text-left"
          v-for="(result, i) in results"
          :key="i"
          @click="select(result)"
        >
          {{ result.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    results: [],
    placeholder: "",
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    select(result) {
      this.results = [];
      this.search = result.name;
      console.log(result);
      this.$emit("select", result);
    },
  },
  watch: {
    search() {
      if (this.search) {
        this.$emit("search", this.search);
      }
    },
  },
};
</script>

<style>
.list-group{
  position: absolute;
  width: 27vw;
}
</style>
