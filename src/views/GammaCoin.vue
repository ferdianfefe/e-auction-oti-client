<template>
  <div class="gamma-coin">
    <div class="row p-5">
      <div class="card col-8 r-5">
        <h4>Top Up</h4>
        <div class="auction-forms">
          <div class="left-forms">
            <div class="item-form">
              <div class="form-group">
                <label for="item-name">Item Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="item-name"
                  v-model="topUpData.itemName"
                />
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
                :data-images="topUpData.images"
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
      </div>
      <div class="card col-4">
        <h4>Transfer</h4>
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
.gamma-coin {
  min-height: 100vh;
  background-size: 100% 100%;
}
</style>
