<template>
  <div class="container">
    <br />
    <br />
    <div class="card">
      <div class="card-header">home</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "HomeView",
  components: {},
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      router.push("signup");
    }
  },
};
</script>
