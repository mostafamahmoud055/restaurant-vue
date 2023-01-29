<template>
  <div class="container">
    <div class="cards">
      <br />
      <br />
      <div class="cards">
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
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
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
          <div class="modal-body">
            <div class="mb-3">
              <input
                id="formText"
                class="form-control"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div class="mb-3">
              <input
                id="formPrice"
                class="form-control"
                type="text"
                placeholder="Price"
              />
            </div>
            <div class="mb-3">
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
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
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
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
  top: 100vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: fit-content;
}
.card {
  box-shadow: 5px 5px 10px grey;
  border: none;
}
</style>
