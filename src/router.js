import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ParcelStorageForm from './ParcelStorageForm.vue'
import appointment from './Appointment.vue'
import shouye from './shouye.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/parcelStorageForm',
      name: 'ParcelStorageForm',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './ParcelStorageForm.vue')
    },
    {
      path: '/appointment',
      name: 'Appointment',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './Appointment.vue')
    },
    {
      path: '/shouye',
      name: 'shouye',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './shouye.vue')
    }
  ]
})
