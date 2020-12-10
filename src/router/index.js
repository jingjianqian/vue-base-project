import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
 {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
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