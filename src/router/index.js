// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import('@/views/Home/AboutUs.vue'),
  },
  {
    path: '/PortfolioMe',
    name: 'PortfolioMe',
    component: () => import('@/components/PortfolioComponent/PortfolioMe.vue'),
  },
  {
    path: '/ServicesMe',
    component: () => import('@/components/PortfolioComponent/ServicesMe.vue')
  },
  {
    path: '/FirstPage',
    component: () => import('@/views/Home/FirstPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
