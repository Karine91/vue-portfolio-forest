import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/welcome/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/about/AboutView.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('@/views/works/WorksView.vue')
    }
  ]
})

export const routerLinks = [
  { link: '/works', title: 'My works' },
  { link: '/about', title: 'About me' },
  { link: '/blog', title: 'Blog' },
  { link: '/', title: 'Authorization' }
]

export default router
