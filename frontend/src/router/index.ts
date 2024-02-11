import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/signup/SignupView.vue')
    }
  ]
})

export default router
