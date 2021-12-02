<template>
  <div class="container" v-if="user">
    <div class="card mt-3" style="width: 18rem">
      <img
        :src="
          user.img ||
          'https://pruittcares.org/wp-content/uploads/bb-plugin/cache/placeholder-circle.jpg'
        "
        alt
        class="w-100"
      />
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: {{ user.name }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Balance: {{ user.balance }}</li>
      </ul>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#editModal"
      >
        Edit
      </button>
    </div>
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form>
              <div class="custom-file mb-3">
                <input
                  type="file"
                  ref="profileImg"
                  name="profileImg"
                  class="custom-file-input"
                  id="customFile"
                />
                <label class="custom-file-label" for="customFile"
                  >Profile Picture</label
                >
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  :value="name === null ? user.name : name"
                  @input="getInputValue($event)"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="username"
                  :value="username === null ? user.username : username"
                  @input="getInputValue($event)"
                  class="form-control"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="onUpdateUser"
              :disabled="name === null || username === null"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      name: null,
      username: null,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["getMyProfile", "updateMyProfile"]),
    async onUpdateUser() {
      let newData = new FormData();
      newData.append("name", this.name);
      newData.append("username", this.username);
      newData.append("image", this.$refs.profileImg.files[0]);
      this.updateMyProfile(newData).then((res) => {
        this.name = this.username = null;
        this.getMyProfile();
      });
    },
    getInputValue(event) {
      if (event.target.name == "name") {
        this.name = event.target.value;
        if (this.name === null) this.name = this.user.name;
      } else {
        this.username = event.target.value;
        if (this.username === null) this.username = this.user.username;
      }
    },
  },
  created() {
    this.getMyProfile();
  },
};
</script>

<style></style>
