import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MovieList from '../views/MovieList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MovieList',
    component: MovieList
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
