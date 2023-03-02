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
    path: '/PicturesBeforeSfter',
    name: 'PicturesBeforeSfter',
    component: () => import('@/views/Home/PicturesBeforeSfter.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
