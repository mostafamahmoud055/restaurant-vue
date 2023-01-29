<template>
  <navbarComp />
  <router-view />
</template>
<script>
import navbarComp from "@/components/navbarComp.vue";
import $ from "jquery";
export default {
  components: {
    navbarComp,
  },
  created() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > $("main").scrollTop()) {
        $("nav").css({ "background-color": "rgb(0 0 0 / 9%)" });
      } else {
        $("nav").css({ "background-color": "transparent" });
      }
    });
  },
};
</script>
<style>
#app {
  position: relative;
}
</style>
