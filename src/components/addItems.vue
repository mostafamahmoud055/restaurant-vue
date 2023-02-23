<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="addItems"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header fs-5">
          Add item to {{ idOfCat.name }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="mx-3 my-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="itemName"
            id="exampleFormControlInput1"
          />
          <div class="mt-3 error-feedback text-danger" v-if="itemNameError">
            {{ itemNameError }}
          </div>
          <div class="mt-3 error-feedback text-danger" v-if="errorMessage">
            {{ errorMessage }}
          </div>
        </div>
        <div class="d-flex">
          <div class="mx-3 mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Price</label
            >
            <input
              type="text"
              class="form-control"
              v-model="itemPrice"
              id="exampleFormControlInput1"
            />
            <div class="mt-3 error-feedback text-danger" v-if="itemPriceError">
              {{ itemPriceError }}
            </div>
          </div>
          <div class="mx-3 mb-3">
            <label for="exampleFormControlInput1" class="form-label">Qty</label>
            <input
              type="text"
              class="form-control"
              v-model="itemQty"
              id="exampleFormControlInput1"
            />
            <div class="mt-3 error-feedback text-danger" v-if="itemQtyError">
              {{ itemQtyError }}
            </div>
          </div>
        </div>
        <div class="mx-3 mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Descriptiom</label
          >
          <input
            type="text"
            class="form-control"
            v-model="itemDesc"
            id="exampleFormControlInput1"
          />
          <div class="mt-3 error-feedback text-danger" v-if="itemDescError">
            {{ itemDescError }}
          </div>
        </div>

        <div class="modal-footer">
          <button
            id="closeAddItems"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="addItem(categoryInfo().id)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";
import axios from "axios";
import $ from "jquery";
export default {
  name: "addItems",
  props: ["catId"],
  data() {
    return {
      itemName: "",
      itemDesc: "",
      itemPrice: "",
      itemQty: "",
    };
  },
  computed: {
    idOfCat() {
      console.log(this.catId);
      return this.catId;
    },
  },
  methods: {
    categoryInfo() {
      return store.state.category;
    },
    async addItem(id) {
      let result = await axios.delete(`http://localhost:3000/categories/${id}`);
      //delete 200
      if (result.status == 200) {
        $("#closeAddItems").click();
        store.commit("listOfCategories", {
          userID: JSON.parse(localStorage.getItem("user-info"))[0]["id"],
          locationID: this.$route.params.id,
        });
      }
    },
  },
};
</script>

<style></style>
