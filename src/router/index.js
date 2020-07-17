import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Products.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter); /* eslint-disable */

const routes = [
  {
    path: "/",
    name: "Home", // eslint-disable-next-line
    component: Home,
  },
  {
    path: "/about",
    name: "About", // eslint-disable-next-line
    component: () => import("../views/About.vue"),
  },
  {
    path: "/products/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/cart/",
    name: "cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL, // eslint-disable-next-line
  routes,
});

export default router;
