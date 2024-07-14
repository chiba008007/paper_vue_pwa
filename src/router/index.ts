import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TopView from "../views/TopView.vue";
import ErrorView from "../views/ErrorView.vue";
import { START_LOCATION } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "top",
    component: TopView,
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: AboutView,
  //   beforeEnter: (to, from) => {
  //     if (from === START_LOCATION) {
  //       // 直アクセスだった場合
  //       return "/"; // '/hoge' へリダイレクトする
  //     }
  //   },
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
