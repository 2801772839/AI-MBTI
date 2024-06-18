import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const routrer = createRouter({
  history: createWebHistory(),
  routes,
})

export default routrer
