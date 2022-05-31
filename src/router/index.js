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
    // redirect:"/index",
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

const router = new VueRouter({
  routes,
  linkActiveClass: 'nav-active',
})



export default router
