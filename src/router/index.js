
import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/view/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  }
]


const creatRouter = () => new Router({
	scrollBehavior: () => ({ y:0}),
	routes:constantRoutes
})

const router = creatRouter()

export function resetRouter(){
	const newRouter = creatRouter()
	outer.matcher = newRouter.matcher 
}

export default router