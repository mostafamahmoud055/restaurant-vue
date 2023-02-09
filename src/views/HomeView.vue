<template>
  <div class="container">
    <NewLocation />
  </div>
</template>

<script>
import router from "@/router";
import NewLocation from "@/components/NewLocation.vue";
export default {
  name: "HomeView",
  components: { NewLocation },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      router.push("Signup");
    }
  },
};
</script>
