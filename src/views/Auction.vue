<template>
  <div class="auction container">
    <div class="row">
      <div class="col-8 row">
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
      <div class="col-4">
        <h1>{{ currentAuction.title }}</h1>
        <p></p>
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
  }),
  computed: {
    ...mapGetters(["currentAuction"]),
  },
  methods: {
    ...mapActions(["getAuctionById"]),
  },
  mounted() {
    this.getAuctionById(this.$route.params.id);
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
