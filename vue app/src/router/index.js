import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/smartHome",
    name: "smartHome",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/smartHome/SmartHomeView.vue"
      ),
  },
  {
    path: "/lightsControl",
    name: "lightsControl",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/smartHome/features/lightsControl.vue"
      ),
  },
  {
    path: "/temperatureRooms",
    name: "temperatureRooms",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/smartHome/features/temperatureRooms.vue"
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
