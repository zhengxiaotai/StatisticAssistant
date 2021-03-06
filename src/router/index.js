import { createRouter, createWebHashHistory } from 'vue-router'
import PageBuilder from '../views/PageBuilder.vue'
import ExcelVisualizer from '../views/ExcelVisualizer.vue'

const routes = [
  {
    path: '/',
    name: 'PageBuilder',
    component: PageBuilder
  },
  {
    path: '/excel',
    name: 'ExcelVisualizer',
    component: ExcelVisualizer
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
