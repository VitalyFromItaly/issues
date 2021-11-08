import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage";
import Issue from "../views/Issue";
import NotFound from "../views/NotFound";
// import ChosenIssue from "";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainMage",
    component: MainPage,
  },
  {
    path: "/issue/:id",
    name: "oneIssue",
    component: Issue,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
