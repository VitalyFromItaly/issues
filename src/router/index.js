import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage";
import Issue from "../views/Issue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainMage",
    component: MainPage,
  },
  {
    path: "/issue/:id",
    name: "Issue",
    component: Issue,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
