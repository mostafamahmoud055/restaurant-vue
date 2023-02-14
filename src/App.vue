<template>
  <div class="parent">
    <navbarComp />
    <br />
    <router-view />
  </div>
</template>
<script>
import navbarComp from "@/components/navbarComp.vue";
import store from "@/store/index.js";
export default {
  mounted() {
    let user = localStorage.getItem("user-info");
    let userID = JSON.parse(user)[0]["id"];
    store.commit("listOfLocations", { userID: userID });
  },
  components: {
    navbarComp,
  },
};
</script>
<style>
#app {
  position: relative;
}
.parent {
  font-family: cursive;
  min-height: 100vh;
  background-image: url("@/assets/headimg.jpg");
  background-size: cover;
  background-position: center center;
}
input {
  opacity: 0.8;
}
</style>
