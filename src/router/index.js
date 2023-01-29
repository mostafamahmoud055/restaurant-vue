import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/Products",
    name: "Products",

    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/MyProducts",
    name: "MyProducts",

    component: () => import("../views/MyProducts.vue"),
  },
  {
    path: "/signin",
    name: "signin",

    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "signup",

    component: () => import("../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
