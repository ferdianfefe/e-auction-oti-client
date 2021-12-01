import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signin.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue"),
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/auction/new",
    name: "NewAuction",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewAuction.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/auction/:id",
    name: "Auction",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Auction.vue"),
  },
  {
    path: "/coin",
    name: "GammaCoin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GammaCoin.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PageNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("token")) {
      next();
      return;
    }
    next("/signin");
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (!localStorage.getItem("token")) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
