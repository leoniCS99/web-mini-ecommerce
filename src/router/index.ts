import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterProduct from '../views/RegisterProduct.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: CartView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadastro-produto',
    name: 'cadastro-produto',
    component: RegisterProduct
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
