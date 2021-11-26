<template>
  <div class="new-auction">
    <div class="container">
      <h1 class="title text-white align-left">New Auction</h1>
      <form @submit.prevent="submitAuction">
        <div class="auction-forms">
          <div class="left-forms">
            <div class="item-form">
              <div class="form-group">
                <label for="title">Auction Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="auctionData.title"
                />
              </div>
              <div class="form-group">
                <label for="item-name">Item Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="item-name"
                  v-model="auctionData.itemName"
                />
              </div>
              <div class="form-group">
                <label for="starting-price">Starting Price</label>
                <div class="input-group mb-2 mr-sm-2">
                  <input
                    type="number"
                    class="form-control"
                    id="starting-price"
                    placeholder="Starting price (in GammaCoin)"
                    v-model="auctionData.startingPrice"
                  />
                  <div class="input-group-prepend">
                    <div class="input-group-text">GC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="right-forms">
            <div class="form-group">
              <label for="">Item Images</label>
              <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                :data-images="auctionData.images"
                idUpload="myIdUpload"
                editUpload="myIdEdit"
                dragText="Drop images here to upload"
                browseText="Search images"
                primaryText="Upload images"
                markIsPrimaryText="Upload images"
                popupText="Upload images"
                dropText="Drop images here to upload"
              >
              </vue-upload-multiple-image>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import { mapActions } from "vuex";

export default {
  name: "NewAuction",
  components: {
    VueUploadMultipleImage,
  },
  data: () => ({
    auctionData: {
      title: "",
      itemName: "",
      startingPrice: "",
      images: [],
    },
  }),
  methods: {
    ...mapActions(["createAuction"]),
    uploadImageSuccess(formData, index, fileList) {
      this.auctionData.images = fileList;
    },
    beforeRemove(formData, index, fileList) {
      var r = confirm("remove image");
      if (r == true) {
        this.auctionData.images.splice(index, 1);
      } else {
      }
      console.log(this.imagesauctionData.images);
    },
    editImage(file) {
      console.log("edit data", file);
    },
    submitAuction() {
      console.log("submit auction", this.auctionData);
      let itemData = {
        title: this.auctionData.title,
        itemName: this.auctionData.itemName,
        startingPrice: this.auctionData.startingPrice,
        images: this.auctionData.images,
      };

      this.createAuction(itemData).then((res) => {
        if (res) {
          if (res.success) {
            this.$router.push("/");
          }
        }
      });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;

  min-height: 100vh;
  background-position: bottom;
  transition: 0.4s;

  background: linear-gradient(
      180deg,
      rgba(75, 24, 24, 0.58) 0%,
      rgba(3, 13, 52, 0.5) 68.75%,
      #141341 97.4%
    ),
    url("../assets/landing-bg.png");
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-size: 100%;
  background-repeat: no-repeat;
}
.new-auction {
  min-height: 90vh;
}
label {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  color: white;
}
.auction-forms {
  display: flex;
  margin-top: 10vh;
  flex-direction: row wrap;
  column-count: 2;
  justify-content: space-around;
}
.left-forms {
  width: 40vw;
}
.right-forms {
  display: flex;
  flex-direction: column;
}
h1 {
  padding-left: 7vw;
}
h4 {
  font-style: normal;
  font-weight: 600;
}
.form-group {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  text-align: left;
}
.btn {
  border-radius: 50px;
}
.form-control {
  border-radius: 50px;
}
</style>
