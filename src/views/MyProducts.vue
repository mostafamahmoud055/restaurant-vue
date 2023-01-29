<template>
  <div class="container">
    <div class="cards">
      <br />
      <br />
      <div class="row justify-content-around">
        <div class="container text-end mb-5">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary add w-25"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Product
          </button>
        </div>

        <div class="row justify-content-around">
          <div
            class="card"
            style="width: 18rem"
            v-for="item in products"
            v-bind:key="item.id"
          >
            <img v-bind:src="item.image" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <h5 class="card-title">{{ item.price }}</h5>
              <p class="card-text">
                {{ item.desc }}
              </p>
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-primary">Buy</a>
                <button
                  class="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  v-on:click="editProduct(item)"
                >
                  Edit
                </button>
                <button class="btn btn-danger" v-on:click="Delete(item.id)">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--add Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form action="" @submit.prevent="addProduct">
            <div class="modal-body">
              <div class="mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Product Name"
                  v-model="Product.name"
                />
              </div>
              <div class="mb-3">
                <input
                  id="formPrice"
                  class="form-control"
                  type="text"
                  placeholder="Price"
                  v-model="Product.price"
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Product image"
                  v-model="Product.image"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="Product.desc"
                ></textarea>
              </div>
            </div>
            <div class="alert alert-success text-center" v-if="success">
              {{ success }}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--update Modal -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form action="" @submit.prevent="updateProduct(ProductToEdit.id)">
            <div class="modal-body">
              <div class="mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Product Name"
                  v-model="ProductToEdit.name"
                />
              </div>
              <div class="mb-3">
                <input
                  id="formPrice"
                  class="form-control"
                  type="text"
                  placeholder="Price"
                  v-model="ProductToEdit.price"
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Product image"
                  v-model="ProductToEdit.image"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="ProductToEdit.desc"
                ></textarea>
              </div>
            </div>
            <div class="alert alert-success text-center" v-if="success">
              {{ success }}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-products",
};
</script>
<style>
.cards {
  position: absolute;
  top: 80vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
}
.card {
  box-shadow: 5px 5px 10px grey;
  border: none;
  height: fit-content;
  padding: 0;
}
.add {
  border-color: transparent;
  border-radius: 10px;
  color: rgb(234, 231, 231) !important;
  background: #e56153;
  box-shadow: 1px 1px 10px #000;
}
.add:hover {
  background: #e56153;
  border-color: transparent;
}
</style>
