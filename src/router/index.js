import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect:"/index",
    component: () => import('../views/HomeView.vue'),
    meta:{
      isAuth:true
    },
    children:[
      {
        path: '/index',
        name: 'IndexView',
        component: () => import('../views/IndexView.vue'),
        meta:{
          isAuth:true
        }
      },
      {
        path: '/info',
        name: 'InfoView',
        component: () => import('../views/InfoView.vue'),
        meta:{
          isAuth:true
        }
      },
      
    ]
  },
  
  
  
]


// 解决重复点击路由报错

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
} 


const router = new VueRouter({
  routes,
  linkActiveClass: 'nav-active',
})



export default router
