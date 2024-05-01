import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MainLayout from "@/layout/MainLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/login',
      component: MainLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView
        },
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
      ]
    },
  ]
})

router.beforeEach((from, to, next) => {
  document.title = "Felix.ai"
  next();
})
export default router
