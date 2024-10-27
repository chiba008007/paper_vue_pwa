import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createMemoryHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TopView from "../views/TopView.vue";
import ListView from "../views/ListView.vue";
import LoginFormView from "../views/LoginFormView.vue";
import LogoutFormView from "../views/LogoutFormView.vue";
import ForgetFormView from "../views/ForgetFormView.vue";
import QuestionFormView from "../views/QuestionFormView.vue";
import QuestionFinFormView from "../views/QuestionFinFormView.vue";
import RegistView from "../views/RegistView.vue";
import RegistFinView from "../views/RegistFinView.vue";
import RegisterFinView from "../views/RegisterFinView.vue";
import EditView from "../views/EditView.vue";
import OpenView from "../views/OpenView.vue";

import ErrorView from "../views/ErrorView.vue";
import { START_LOCATION } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "top",
    component: TopView,
    //props: (route) => ({ text: route.params.text }),
  },
  {
    path: "/lists",
    name: "lists",
    component: ListView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginFormView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutFormView,
  },
  {
    path: "/forget",
    name: "forget",
    component: ForgetFormView,
  },
  {
    path: "/question",
    name: "question",
    component: QuestionFormView,
  },
  {
    path: "/questionFin",
    name: "questionFin",
    component: QuestionFinFormView,
  },
  {
    path: "/regist",
    name: "regist",
    component: RegistView,
  },
  {
    path: "/registFin",
    name: "registFin",
    component: RegistFinView,
  },
  {
    path: "/register",
    name: "register",
    component: EditView,
  },
  {
    path: "/registerFin",
    name: "registerfin",
    component: RegisterFinView,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditView,
  },
  {
    path: "/open",
    name: "open",
    component: OpenView,
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
