<template>
  <div class="auction container">
    <div class="row">
      <div class="col-6 row">
        <div class="image-selector col-4">
          <div
            class="image-container w-auto p-1"
            v-for="(image, i) in currentAuction.images"
            :key="i"
          >
            <img
              width="100%"
              :src="image.path"
              alt=""
              @click="activeImageIdx = i"
            />
          </div>
        </div>
        <div class="main-image-container col-8">
          <img
            :src="currentAuction.images[activeImageIdx].path"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              <h2>{{ currentAuction.title }}</h2>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ currentAuction.itemName }}
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <ul class="list-group">
              <li class="list-group-item">
                <span class="badge badge-success">Starting Price </span>
                {{ currentAuction.startingPrice }} GC
              </li>
              <li class="list-group-item">
                <span class="badge badge-primary">Highest Bid </span>
                {{ currentAuction.currentBid }} GC
              </li>
            </ul>
            <form class="" @submit.prevent="submitBid">
              <div class="form-group">
                <div
                  class="u-form-group u-form-starting-price d-flex"
                  id="item-price"
                >
                  <input
                    type="number"
                    class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                    id="starting-price"
                    placeholder="Starting price (in GammaCoin)"
                    v-model="bidData.bid"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">GC</div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-text-body-alt-color u-btn-1"
              >
                Place Bid
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Auction",
  data: () => ({
    activeImageIdx: 0,
    bidData: {
      bid: 0,
    },
  }),
  computed: {
    ...mapGetters(["currentAuction"]),
  },
  methods: {
    ...mapActions(["getAuctionById", "placeBid"]),
    submitBid() {
      if (this.bidData.bid > 0) {
        this.placeBid({
          bid: this.bidData.bid,
          auctionId: this.currentAuction._id,
        }).then(() => {
          this.bidData.bid = 0;
          this.getAuctionById(this.currentAuction._id);
        });
      }
    },
  },
  mounted() {
    this.getAuctionById(this.$route.params.id);
    console.log(this.currentAuction);
  },
};
</script>

<style lang="scss" scoped>
.image-selector {
  .image-container {
    img {
      cursor: pointer;
    }
  }
}
</style>
