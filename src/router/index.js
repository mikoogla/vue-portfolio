import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/project",
      name: "project",
      component: Project,
    },
    {
      path: "/project/:id",
      name: "project",
      component: Project,
      props: true,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/:notFound(.*)",
      redirect: "/",
      component: Home,
    },
  ],
});

export default router;
