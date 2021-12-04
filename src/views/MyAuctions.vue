<template>
  <div class="my-auctions">
    <!-- image on top section -->
    <img id="placeholder" src="../assets/auction-placeholder.jpeg" alt="" />
    <div class="d-flex container justify-content-end">
      <router-link to="/auction/new"
        ><button type="button" class="btn btn-primary">Host an Auction</button>
      </router-link>
    </div>
    <div class="container row" v-if="myAuctions.length > 0">
      <div
        class="card col-12 col-md-3 mx-4 m-0 m-md-3"
        v-for="(myAuction, i) in myAuctions"
        :key="i"
        style="width: 18rem"
      >
        <img :src="myAuction.images[0].path" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ myAuction.title }}</h5>
          <p class="card-text">
            {{ myAuction.itemName }}
          </p>
          <router-link :to="`/auction/${myAuction._id}`">
            <button class="btn btn-primary">Detail</button></router-link
          >
        </div>
      </div>
    </div>
    <div class="container row" v-else>
      <div class="mx-auto">
        <small class="text-muted">You have no auction</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MyAuctions",
  components: {},
  methods: {
    ...mapActions(["getMyAuctions"]),
  },
  computed: {
    ...mapGetters(["myAuctions", "user", "status"]),
  },
  created() {
    this.getMyAuctions().then(() => {
      console.log(this.myAuctions);
    });
  },
};
</script>

<style lang="scss" scoped>
.my-auctions {
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
