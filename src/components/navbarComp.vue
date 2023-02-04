<template>
  <main v-bind:class="{ mainDiv: user }">
    <div class="opacity">
      <nav
        class="navbar navbar-expand-lg w-100 position-fixed bg-body-tertiary"
      >
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand"
            ><img src="@/assets/logoU.png" alt=""
          /></router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav align-items-baseline fs-4 me-auto mb-2 mb-lg-0"
              v-if="user"
            >
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  v-bind:to="{
                    name: 'home',
                    params: { pageTitle: 'Home Page' },
                  }"
                  >Home</router-link
                >
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/products"
                  >Products</router-link
                >
              </li>
            </ul>
            <ul class="navbar-nav fs-4 ms-auto mb-2 mb-lg-0">
              <li class="nav-item" v-if="user == null">
                <router-link class="nav-link" to="/signin">Sign in</router-link>
              </li>
              <li class="nav-item" v-if="user == null">
                <router-link class="nav-link" to="/signup">Sign up</router-link>
              </li>
              <li class="nav-item" v-if="user">
                <a class="nav-link" v-on:click="logout">logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </main>
</template>
<script>
import router from "@/router";
export default {
  name: "navBar",
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    this.user = localStorage.getItem("user-info");
  },
  methods: {
    logout() {
      this.user = localStorage.clear();
      router.push("signin");
    },
  },
};
</script>
<style>
nav {
  -webkit-transition: background-color 0.5s ease-in-out;
  -moz-transition: background-color 0.5s ease-in-out;
  -ms-transition: background-color 0.5s ease-in-out;
  -o-transition: background-color 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
}
.mainDiv {
  height: 100vh;
  background-image: url("@/assets/headimg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.nav-link {
  cursor: pointer;
  color: #fff !important;
}
.router-link-exact-active {
  color: #ff5b4b !important;
}
.opacity {
  height: 100%;
  width: 100%;
  opacity: 0.7;
  background-color: #000;
}
</style>
