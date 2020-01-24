import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Accueil.vue";
import Médecin from "../views/Médecin.vue";
import Contact from "../views/contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home
  },
  {
    path: "/Médecin",
    name: "Médecin",
    component: Médecin
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },

  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
