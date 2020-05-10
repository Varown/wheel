import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Button from '@/components/Button.vue';

Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Button
  },
  {
    path: '/about',
    component: Home

  }
]

const router = new VueRouter({
  routes
})

export default router
