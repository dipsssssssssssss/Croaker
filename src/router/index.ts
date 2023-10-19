import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('../components/UserAuthentication.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/DashBoard.vue')
    }
  ]
})

export default router