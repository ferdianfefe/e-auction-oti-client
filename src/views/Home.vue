<template>
  <div class="home">
    <div class="d-flex container justify-content-end">
      <router-link to="/auction/new"
        ><button type="button" class="btn btn-primary">
          Host Auction
        </button></router-link
      >
    </div>
    <div class="container">
      <div
        class="card"
        v-for="(auction, i) in auctions"
        :key="i"
        style="width: 18rem"
      >
        <img :src="auction.images[0].path" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ auction.title }}</h5>
          <p class="card-text">
            {{ auction.itemName }}
          </p>
          <router-link :to="`/auction/${auction._id}`">
            <button class="btn btn-primary">Bid</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["getAllAuctions"]),
  },
  computed: {
    ...mapGetters(["auctions"]),
  },
  mounted() {
    this.getAllAuctions();
  },
};
</script>

<style>
.home {
  min-height: 100vh;
}
</style>
