<template>
  <div class="gamma-coin">
    <div class="row p-5">
      <!-- card 1 -->
      <div class="card col-8 r-5">
          <h4>Top Up</h4>
          <div class="auction-forms">
          <div class="container-flex">
            <!-- left row -->
            <div class="item" id="left">
              <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                :data-images="topUpData.images"
                idUpload="myIdUpload"
                editUpload="myIdEdit"
                dragText="Drop images here to upload"
                browseText="Search images"
                primaryText="Upload images"
                markIsPrimaryText="Upload images"
                popupText="Upload images"
                dropText="Drop images here to upload"
                id="upload-img"
              >
              </vue-upload-multiple-image>          
            </div> 
            <!-- right row -->
            <div class="item">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Enter Item name"
                  class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
                  id="item-name"
                  v-model="topUpData.itemName"
                />
                <button type="submit" class="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-text-body-alt-color u-btn-1s">
                Submit
              </button>
              </div>
            </div>
          </div>     
        </div>
      </div>
      <!-- card 2 -->
      <div class="card col-4">
        <h4>Transfer</h4>
          <div class="form-group" id="transfer">
            <input
              type="text"
              placeholder="Enter id or name from your contact"
              class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
              id="transfer-name"
              v-model="topUpData.itemName"
            />
            <input
              type="text"
              placeholder="Enter value of GammaCoin"
              class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
              id="coin-amount"
              v-model="topUpData.itemName"
            />
            <input
              type="text"
              placeholder="Enter your pin"
              class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
              id="pin"
              v-model="topUpData.itemName"
            />
            <button type="submit" class="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-text-body-alt-color u-btn-1s">
            Submit
          </button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  name: "GammaCoin",
  components: {
    VueUploadMultipleImage,
  },
  data: () => ({
    topUpData: {
      itemName: "",
      images: [],
    },
  }),
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      this.topUpData.images = fileList;
    },
    beforeRemove(formData, index, fileList) {
      var r = confirm("remove image");
      if (r == true) {
        this.topUpData.images.splice(index, 1);
      } else {
      }
    },
    editImage(file) {
      console.log("edit data", file);
    },
    SubmitTopUp() {
      console.log("submit auction", this.topUpData);
      let itemData = {
        itemName: this.topUpData.itemName,
        images: this.topUpData.images,
      };
    },
  },
};
</script>

<style>
html, body, header {
  max-width: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
body{
  background: #f2f2f2;
}
.gamma-coin {
  margin: 0%;
  padding: 0%;
}
.card{
  max-width: 60%;
}

.container-flex, .row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: auto;
  align-content: center;
  text-align:center;
}

.container-flex{
  min-height: 300px;
  padding-right: 5rem;
}
.item {
  flex: 1 0 auto;
  margin: auto;
  text-align: right;
}
.row{
  align-content: space-between;
}
.card{
  margin: 1rem;
}

h4{
  font-size: 2rem;
  font-family: Montserrat;
  text-align: center;
  font-weight: bold;
}

#transfer{
  text-align: right;
  margin: 12px;
}
#transfer input{
  margin-top: 2rem;
}
/* responsive */
@media (max-width: 1000px) {
  .container, .row {
    flex-direction: column;
  }
  #upload-img{
    margin: 0;
  }
  .container-flex{
  padding-right: 0;
  }
  .item {
  flex: 1 0 auto;
  margin: auto;
  text-align: center;
  }
  #upload-img{
  margin: auto;
  width: 0;
  padding: 0;
  }
  .card{
    min-width: 100vw;
    margin: 0;
    margin-bottom: 1rem;
  }
  .row{
  align-content: center;
  }
}

#upload-img{
  margin: auto;
  width: 50%;
  padding: 0;
}
</style>
