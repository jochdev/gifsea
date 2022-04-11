import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/faq',
    name: 'faq',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/FaqView.vue')
  },
  {
    path: "/gifs",
    name: "Gifs",
    // route level code-splitting
    // this generates a separate chunk (gifs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "gifs" */ '../views/Gifs.vue')
  },
  {
    path: "/stickers",
    name: "Stickes",
    // route level code-splitting
    // this generates a separate chunk (stickers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "stickers" */ '../views/Stickers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router