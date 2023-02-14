<template>
  <div class="container">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary float-start"
      data-bs-toggle="modal"
      data-bs-target="#addCategory"
    >
      Add New Category
    </button>
    <button type="button" class="float-end">Add New Items</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="addCategory"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add New Category
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import store from "@/store/index.js";
export default {
  name: "main-menu",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      router.push("Signup");
    }
    let userid = JSON.parse(user)[0]["id"];
    store.commit("middlewareLocations", {
      id: this.$route.params.id,
      userID: userid,
    });
  },
};
</script>

<style scope>
button {
  color: #fff;
  padding: 10px;
  border-radius: 10px;
}
</style>
