import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MovieList from '@/views/MovieList.vue'
import MovieDetail from '@/views/MovieDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MovieList',
    component: MovieList
  },
  {
    path: '/:id',
    name: 'MovieDetail',
    props: route => ({title: route.query.title, poster_path: route.query.poster_path}),
    component: MovieDetail
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
