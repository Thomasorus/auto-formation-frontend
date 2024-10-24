import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import HomeView from '../views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import RankingView from '@/views/RankingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
    },
    {
      path: '/user/:id/ranking/:rankingId',
      name: 'ranking',
      component: RankingView,
    },
  ],
})

export default router
