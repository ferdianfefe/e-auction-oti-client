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
/* flexbox start */
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;

  min-width: 100%;
  margin: 0;
  padding: 0;
}
.card {
  margin: 10px;
  padding: 1rem;
  background: none;
  border: none;
  box-shadow: none;
  min-width: 300px;
}
.card img {
  width: 15rem;
  height: 15.5rem;
  object-fit: cover;
  margin-left: 1rem;
}
.card-body {
  padding-top: 0;
}
.card-body button {
  background: none;
  border: 1px solid #000000;
  box-sizing: border-box;
  color: black;
  border-radius: 0%;
  width: 10rem;
}
// .d-flex {
//   background: red;
// }
/* flexbox end */
@media (max-width: 800px) {
  .row {
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }
}
/* responsive */
h5,
p {
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 15px;
}
p {
  font-weight: normal;
  font-size: 0.75rem;
}
/* top panel */
.top-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
}
.textbox {
  margin: 0;
  padding: 0;
}
.line {
  width: 7rem;
  height: 4px;
  left: 183px;
  top: 650px;
  background: #bc9b33;
}
.new-auc {
  float: right;
}
h4 {
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 24px;
}
#placeholder {
  width: 100%;
  height: auto;
}
</style>
