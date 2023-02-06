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
                <a
                  class="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#modalProfile"
                  >My Profile</a
                >
              </li>
              <li class="nav-item" v-if="user">
                <a class="nav-link" v-on:click="logout">logout</a>
              </li>
              <!-- Button trigger modal -->
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalProfile"
      tabindex="-1"
      aria-labelledby="modalProfileLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalProfileLabel">
              Edit Profile
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="userInfo"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  v-model="userName"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  v-model="userEmail"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="userPassword"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input Show-Password"
                  id="exampleCheck1"
                  value="adsd"
                  @change="showPassword"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Show Password</label
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="userInfo"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="update">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import $ from "jquery";
import router from "@/router";
export default {
  name: "navBar",
  data() {
    return {
      user: "",
      userID: "",
      userName: "",
      userEmail: "",
      userPassword: "",
    };
  },
  mounted() {
    this.userInfo();
  },
  methods: {
    showPassword() {
      if ($(".Show-Password").prop("checked")) {
        $("#exampleInputPassword1").prop("type", "text");
      } else {
        $("#exampleInputPassword1").prop("type", "password");
      }
    },
    logout() {
      this.user = localStorage.clear();
      router.push("signin");
    },
    userInfo() {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.user = localStorage.getItem("user-info");
        this.userName = JSON.parse(user)[0]["name"];
        this.userEmail = JSON.parse(user)[0]["email"];
        this.userPassword = JSON.parse(user)[0]["password"];
        this.userId = JSON.parse(user)[0]["id"];
      }
    },
    async update() {
      let result = await axios.put(
        `http://localhost:3000/users/${this.userID}`,
        {
          name: this.userName,
          email: this.userEmail,
          password: this.userPassword,
        }
      );
      if (!result.status == 200 || result.data.length > 0) {
        this.userNotFound = "User Not Found!";
      }
    },
  },
};
</script>
<style scope>
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
.modal-backdrop {
  z-index: -1 !important;
}
.modal-content {
  background-color: #2d2723a6 !important;
  color: #fff !important;
}
button {
  background-color: #ff5b4b !important;
  border-color: #ff5b4b !important;
}
body {
  padding-right: 0 !important;
  overflow: auto !important;
}
.modal-backdrop.show {
  opacity: 0;
}
.form-check-input:checked {
  background-color: #ff5b4b !important;
  border-color: #ff5b4b !important;
  box-shadow: none !important;
}
.form-check-input {
  box-shadow: none !important;
}
</style>
