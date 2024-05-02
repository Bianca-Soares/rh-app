import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Favoritos",
    name: "Favoritos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "favoritos" */ "../views/FavoritosView.vue"),
  },
  {
    path: "/Funcionario/:id",
    name: "Funcionario",
    component: () =>
      import("../views/FuncionarioView.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
