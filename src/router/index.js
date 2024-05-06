import { createRouter, createWebHistory } from "vue-router";

const options = {
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("@/pages/index.vue"),
      meta: { title: "" }
    },
    {
      name: "Taxi",
      path: "/taxi",
      component: () => import("@/pages/taxi.vue"),
      meta: { title: "Taxi", auth: "taxi" }
    },
    {
      name: "Food",
      path: "/food",
      component: () => import("@/pages/food.vue"),
      meta: { title: "Food", auth: "food" }
    },
    {
      name: "ServerError",
      path: "/500",
      component: () => import("@/pages/error/500.vue"),
      meta: { title: "500 Server Error" }
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: () => import("@/pages/error/404.vue"),
      meta: { title: "404 Page Not Found" }
    }
  ]
};

export default createRouter(options);
