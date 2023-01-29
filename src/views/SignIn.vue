<template class="BG">
  <div class="container-fluid BG">
    <form class="w-50 m-auto display-6">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "signIn",
};
</script>
<style scope>
.BG {
  background-image: url("@/assets/ComingAttraction.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
label {
  color: #fff;
}
button {
  background-color: #ff5b4b !important;
  border-color: #ff5b4b !important;
}
form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2d2723a6;
  padding: 70px 40px;
  border-radius: 10px;
}
.form-control:focus {
  border-color: #000 !important;
  box-shadow: none !important;
}
</style>
