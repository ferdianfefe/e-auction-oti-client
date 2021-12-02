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
                <button
                  type="submit"
                  class="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-text-body-alt-color u-btn-1s"
                  @click="submitTopUp"
                >
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
          <SearchBar
            :results="foundUsers"
            :placeholder="`Enter id or name from your contact`"
            @search="searchUser"
            @select="setReceiver"
          />

          <div
            class="u-form-group u-form-starting-price d-flex"
            id="item-price"
          >
            <input
              type="number"
              class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
              id="starting-price"
              placeholder="Starting price (in GammaCoin)"
              v-model="transferData.amount"
            />
            <div class="input-group-prepend">
              <div class="input-group-text">GC</div>
            </div>
          </div>
          <input
            type="password"
            placeholder="Enter your pin"
            class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle"
            id="pin"
            v-model="transferData.userPassword"
          />
          <button
            type="submit"
            class="u-active-palette-1-light-1 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-50 u-text-body-alt-color u-btn-1s"
            @click="submitTransfer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import SearchBar from "@/components/SearchBar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "GammaCoin",
  components: {
    VueUploadMultipleImage,
    SearchBar,
  },
  data: () => ({
    topUpData: {
      itemName: "",
      images: [],
    },
    transferData: {
      receiver: {},
      amount: 0,
      userPassword: "",
    },
    foundUsers: [],
  }),
  computed: {
    ...mapGetters(["contacts"]),
  },
  methods: {
    ...mapActions(["getContacts", "topUp", "transfer"]),
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
    submitTopUp() {
      let itemData = {
        itemName: this.topUpData.itemName,
        images: this.topUpData.images,
      };

      this.topUp(itemData);
    },
    submitTransfer() {
      let transferData = {
        receiver: this.transferData.receiver.username,
        amount: this.transferData.amount,
        password: this.transferData.userPassword,
      };

      this.transfer(transferData);
    },
    searchUser(value) {
      if (value.length > 0) {
        this.foundUsers = this.contacts.filter((contact) => {
          return (
            contact.username.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
            contact.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          );
        });
      } else {
        this.foundUsers = [];
      }
    },
    setReceiver(contact) {
      this.transferData.receiver = contact;
    },
  },
  mounted() {
    this.getContacts();
  },
};
</script>

<style lang="scss" scoped>
.gamma-coin {
  margin: 0%;
  padding: 0%;
}
.card {
  max-width: 60%;
}

.container-flex,
.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: auto;
  align-content: center;
  text-align: center;
}

.container-flex {
  min-height: 300px;
  padding-right: 5rem;
}
.item {
  flex: 1 0 auto;
  margin: auto;
  text-align: right;
}
.row {
  align-content: space-between;
}
.card {
  margin: 1rem;
}

h4 {
  font-size: 2rem;
  font-family: Montserrat;
  text-align: center;
  font-weight: bold;
}

#transfer {
  text-align: right;
  margin: 12px;
}
#transfer input {
  margin-top: 2rem;
}
/* responsive */
@media (max-width: 1000px) {
  .container,
  .row {
    flex-direction: column;
  }
  #upload-img {
    margin: 0;
  }
  .container-flex {
    padding-right: 0;
  }
  .item {
    flex: 1 0 auto;
    margin: auto;
    text-align: center;
  }
  #upload-img {
    margin: auto;
    width: 0;
    padding: 0;
  }
  .card {
    min-width: 100vw;
    margin: 0;
    margin-bottom: 1rem;
  }
  .row {
    align-content: center;
  }
}

#upload-img {
  margin: auto;
  width: 50%;
  padding: 0;
}
</style>
