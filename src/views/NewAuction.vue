<template>
  <div class="new-auction">
    <div class="container">
      <div class="textbox">
        <h2 class="titleA text-black align-left">New Listing</h2>
      </div>
      <form @submit.prevent="submitAuction">
        <div class="auction-forms">
          <div class="left-forms">
            <div class="item-form">
              <div class="form-group">
                <label for="title">Auction Title</label>
                <input
                  type="text"
                  class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                  id="title"
                  placeholder="Enter Listing title"
                  v-model="auctionData.title"
                />
              </div>
              <div class="form-group">
                <label for="item-name">Item Name</label>
                <input
                  type="text"
                  class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                  id="item-name"
                  placeholder="Enter Item name"
                  v-model="auctionData.itemName"
                />
              </div>
              <div class="form-group">
                <label for="starting-price">Starting Price</label>
                <div class="u-form-group u-form-starting-price" id="item-price">
                  <input
                    type="number"
                    class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
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
            <button
              type="submit"
              class="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-text-body-alt-color u-btn-1"
            >
              Submit
            </button>
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
    editImage(file) {},
    submitAuction() {
      let itemData = {
        title: this.auctionData.title,
        itemName: this.auctionData.itemName,
        startingPrice: this.auctionData.startingPrice,
        images: this.auctionData.images,
      };

      this.createAuction(itemData).then((res) => {
        console.log("Attempting Listing");
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
.input-group-prepend {
  width: 10%;
  padding-left: 10px;
}
.input-group-text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  background: none;
  outline: none;
  border: none;
}

#item-price {
  display: flex;
  flex-direction: row;
}
header {
  background: white;
}
body {
  background: #f2f2f2;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
label {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  text-align: center;
}
.auction-forms,
.textbox {
  background: white;
}
.auction-forms {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2rem;
}
@media (max-width: 1000px) {
  .auction-forms {
    flex-direction: column;
  }
}
.left-forms {
  width: 40vw;
  min-width: 20vw;
  margin: 2rem;
}
.right-forms {
  margin: 2rem;
  width: 190px;
}

.titleA {
  font-size: 3rem;
  font-family: Montserrat;
  text-align: center;
  font-weight: bolder;
}
h4 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  background: white;
}
/* forms */
.form-group {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  width: 100%;
}
button {
  width: 100%;
}

/* text to black */
li a,
h1,
h2,
.title,
label {
  color: black;
}
</style>
