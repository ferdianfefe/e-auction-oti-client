<template>
  <div class="home">
    <!-- image on top section -->
    <img id="placeholder" src="../assets/auction-placeholder.jpeg" alt="" />
    <div class="d-flex container justify-content-end">
      <router-link to="/auction/new"
        ><button type="button" class="btn btn-primary">Host an Auction</button>
      </router-link>
    </div>
    <div class="container row">
      <div
        class="card col-12 col-md-3 mx-4 m-0 m-md-3"
        v-for="(auction, i) in myAuctions"
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
            <button class="btn btn-primary">Detail</button></router-link
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
    ...mapActions(["getAuctionsByUserID"]),
  },
  computed: {
    ...mapGetters(["myAuctions", "user"]),
  },
  mounted() {
    this.getAuctionsByUserID(this.user.id);
  },
};
</script>

<style>
.home {
  min-height: 100vh;
}
body {
  margin: 0;
  padding: 0;
  background: white;
}

#placeholder {
  width: 100%;
  height: auto;
}
</style>
