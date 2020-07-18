import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'Main'},
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'auth'},
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'auth'},
    component: () => import('@/views/Auth/Register.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    meta: {layout: 'auth'},
    component: () => import('@/views/Auth/ForgotPassword.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
