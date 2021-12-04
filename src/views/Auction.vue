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
            <h2 class="card-title">
              {{ currentAuction.title }}
            </h2>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ currentAuction.itemName }}
            </h6>
            <small>
              <span class="card-text text-muted">
                Hosted by {{ currentAuction.user.name }} on
                {{ currentAuction.startDate }}
              </span>
            </small>
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
            <div v-if="currentAuction.user.id != user.id">
              <form @submit.prevent="submitBid">
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
                  class="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-text-body-alt-color u-btn-1 form-group"
                >
                  Place Bid
                </button>
              </form>
            </div>
            <div>
              <h6>Bid Rank</h6>
              <ul class="list-group" v-if="currentAuction.participants.length">
                <li
                  v-for="(participant, i) in sortedParticipants"
                  :key="i"
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  {{ participant.user.name }} {{participant.user.id == user.id ? '(You)' : ''}}
                  <span class="badge badge-primary badge-pill"
                    >{{ participant.bid }} GC</span
                  >
                </li>
              </ul>
              <ul class="list-group" v-else>
                <li class="list-group-item">
                  <small class="text-muted">No participants yet</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3" v-if="currentAuction.user.id == user.id">
      <button
        type="button"
        class="btn btn-outline-danger"
        @click="clickDeleteAuction"
      >
        Delete Auction
      </button>
      <button
        type="button"
        class="btn btn-outline-primary ml-3"
        @click="clickEndAuction"
      >
        End Auction
      </button>
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
    ...mapGetters(["currentAuction", "user"]),
    sortedParticipants() {
      return this.currentAuction.participants.sort((a, b) => {
        return b.bid - a.bid;
      });
    },
  },
  methods: {
    ...mapActions([
      "getAuctionById",
      "placeBid",
      "deleteAuction",
      "endAuction",
    ]),
    submitBid() {
      if (this.bidData.bid > 0) {
        this.placeBid({
          bid: this.bidData.bid,
          auctionId: this.currentAuction._id,
        }).then(() => {
          this.bidData.bid = 0;
          this.getAuctionById(this.currentAuction._id);
          this.$socket.emit("bid-updated", {
            auctionId: this.currentAuction._id,
          });
        });
      }
    },
    clickDeleteAuction() {
      this.deleteAuction(this.currentAuction._id).then(() => {
        this.$router.push("/auction/me");
      });
    },
    clickEndAuction() {
      this.endAuction(this.currentAuction._id);
    },
  },
  mounted() {
    this.getAuctionById(this.$route.params.id).then(() => {
      console.log(this.currentAuction);
    });

    this.sockets.subscribe("bid-updated", (data) => {
      if (data.auctionId == this.currentAuction._id) {
        this.getAuctionById(this.currentAuction._id);
        console.log(this.sortedParticipants);
      }
    });
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

.list-group {
  position: static;
}

form {
  display: block;
  padding: 0;
}
</style>
