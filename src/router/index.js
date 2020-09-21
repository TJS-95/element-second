import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home'),
      meta: {
        name: '主页'
      }
    },
    {
      path: '/login',
      component: () => import('@/views/login')
    }
  ]
})

router.beforeEach(

)

export default router