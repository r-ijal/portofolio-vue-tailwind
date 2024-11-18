import { createMemoryHistory, createRouter } from "vue-router";

// import HelloWorld from "../components/HelloWorld.vue";
import AboutPage from "../pages/AboutPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
