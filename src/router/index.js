import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Accueil.vue";
import Médecin from "../views/Médecin.vue";
import Contact from "../views/contact.vue";
import Horaire from "../views/Horaires.vue";
import Urgence from "../views/Urgence.vue";

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
  },

  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/Horaires",
    name: "Horaires",
    component: Horaire
  },
  {
    path: "/Urgence",
    name: "Urgence",
    component: Urgence
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
