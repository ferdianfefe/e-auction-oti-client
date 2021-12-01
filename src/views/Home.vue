<template>
  <body>
    <!-- image on top section -->
    <img id="placeholder" src="../assets/auction-placeholder.jpeg" alt="">
    <div class="top-bar">
      <div class="textbox">
        <h4>Ongoing Auctions</h4>
        <div class="line"></div>
      </div>
      <div class="new-auc">
              <router-link to="/auction/new"
        ><button type="button" class="btn btn-primary">
          Host Auction
        </button></router-link
      >
      </div>

    </div>
    <!-- auctions -->
    <div class="container row">
      <div
        class="card col-3 mx-4"
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
  </body>
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
body {
  font-family: Montserrat;
  background: white;
  margin: 0;
  padding: 0;
}
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
.card img{
  width: 15rem;
  height: 15.5rem;
  object-fit: cover;
  margin-left: 1rem;
}
.card-body{
  padding-top: 0;
}
.card-body button{
  background: none;
  border: 1px solid #000000;
  box-sizing: border-box;
  color: black;
  border-radius: 0%;
  width: 10rem;
}

.d-flex{
  background: red;
}
/* flexbox end */
@media (max-width: 800px) {
  .row {
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
  }
}
/* responsive */

h5, p{
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 15px;
}
p{
  font-size: 0.75rem;
}

/* top panel */
.top-bar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 2rem;
}
.textbox{
  margin: 0;
  padding: 0;
}
.line{
  width: 7rem;
  height: 4px;
  left: 183px;
  top: 650px;

  background: #BC9B33;
}
.new-auc{
  float: right;
}
h4{
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 24px;
}

#placeholder{
  width: 100%;
  height: auto;
}
</style>
