<template>
  <div v-bind:class="{ mainDiv: userDataInfo, BG: !userDataInfo }">
    <navbarComp />
    <br />
    <router-view />
  </div>
</template>
<script>
import navbarComp from "@/components/navbarComp.vue";
export default {
  computed: {
    userDataInfo() {
      return localStorage.getItem("user-info");
    },
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
.mainDiv {
  height: 100vh;
  background-image: url("@/assets/headimg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.BG {
  background-image: url("@/assets/ComingAttraction.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
