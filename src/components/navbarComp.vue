<template>
  <nav class="navbar navbar-expand-lg w-100 bg-body-tertiary">
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
                name: 'Home',
                params: { pageTitle: 'Home Page' },
              }"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <button
              id="#NewRestaurant"
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#AddRestaurant"
              v-if="this.$store.state.home"
            >
              New Restaurant
            </button>
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
            <a class="nav-link" v-on:click="logout">Logout</a>
          </li>
          <!-- Button trigger modal -->
        </ul>
      </div>
    </div>
  </nav>
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
          <h1 class="modal-title fs-5" id="modalProfileLabel">Edit Profile</h1>
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
              <label for="name" class="form-label">Name</label>
              <input
                id="name"
                type="text"
                class="form-control"
                v-model="name"
              />
            </div>
            <div class="error-feedback text-danger" v-if="v$.name.$error">
              {{ v$.name.$errors[0].$message }}
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                id="email"
                type="email"
                class="form-control"
                v-model="email"
              />
            </div>
            <div class="error-feedback text-danger" v-if="v$.email.$error">
              {{ v$.email.$errors[0].$message }}
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                id="password"
                type="password"
                class="form-control"
                v-model="password"
              />
            </div>
            <div class="error-feedback text-danger" v-if="v$.password.$error">
              {{ v$.password.$errors[0].$message }}
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input Show-Password"
                id="exampleCheck1"
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
            id="closeModal"
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
</template>
<script>
import axios from "axios";
import $ from "jquery";
import router from "@/router";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "navBar",
  data() {
    return {
      // data info must be equal to validations info
      v$: useValidate(),
      user: null,
      userID: "",
      name: "",
      email: "",
      password: "",
    };
  },
  validations() {
    // data info must be equal to validations info
    return {
      name: { required, minLength: minLength(3) },
      email: { required, email },
      password: { required },
    };
  },
  mounted() {
    this.userInfo();
  },
  methods: {
    showPassword() {
      if ($(".Show-Password").prop("checked")) {
        $("#password").prop("type", "text");
      } else {
        $("#password").prop("type", "password");
      }
    },
    logout() {
      localStorage.clear();
      this.user = null;
      router.push("Signin");
    },
    userInfo() {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.user = JSON.parse(user)[0];
        this.name = this.user["name"];
        this.email = this.user["email"];
        this.password = this.user["password"];
        this.userID = this.user["id"];
        $(".Show-Password").prop("checked", false);
        $("#password").prop("type", "password");
        $(".modal").removeClass("show");
      }
    },
    async update() {
      this.v$.$validate(); // validations() للبيانات اللي في  validate معناها اعملي
      if (!this.v$.$error) {
        let result = await axios.put(
          `http://localhost:3000/users/${this.userID}`,
          {
            name: this.name,
            email: this.email,
            password: this.password,
          }
        );

        //put 200
        if (result.status == 200 || result.data.length > 0) {
          localStorage["user-info"] = JSON.stringify([result.data]);
          this.userInfo();
        }
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
.nav-link {
  cursor: pointer;
  color: #bdbbbb !important;
}
.router-link-exact-active {
  color: #ff5b4b !important;
}
.modal-backdrop {
  z-index: -1 !important;
}
.modal-content {
  background-color: #2d2723a6 !important;
  color: #fff !important;
}
button {
  background-color: #ff5b4b73 !important;
  border-color: transparent !important;
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
