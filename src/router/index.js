import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
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
    redirect: "/index",
    component: () => import('../views/HomeView.vue'),
    meta: {
      isAuth: true,
      isKeepAlive: false
    },
    children: [
      {
        path: '/index',
        name: 'IndexView',
        component: () => import('../views/IndexView.vue'),
        meta: {
          isAuth: true,
          isKeepAlive: false
        }
      },
      {
        path: '/info',
        name: 'InfoView',
        component: () => import('../views/InfoView.vue'),
        meta: {
          isAuth: true,
          isKeepAlive: false
        }
      },
      {
        path: '/security',
        name: 'SecurityIndex',
        redirect: '/security/equipment',
        component: () => import('../views/security/Index.vue'),
        meta: {
          isAuth: true,
          isKeepAlive: true
        },
        children: [
          {
            path: '/security/equipment',
            name: 'SecurityEquipment',
            component: () => import('../views/security/Equipment.vue'),
            meta: {
              isAuth: true,
              isKeepAlive: true
            },
          },
          {
            path: '/security/blacklist',
            name: "SecurityBlackList",
            component: () => import('../views/security/BlackList.vue'),
            meta: {
              isAuth: true,
              isKeepAlive: true
            },
          },
        ]
      },
      {
        path: "/control",
        name: "ControlIndex",
        redirect: "/control/traffic",
        component: () => import("../views/control/Index.vue"),
        meta: {
          isAuth: true,
          isKeepAlive: false
        },
        children: [
          {
            path: "/control/traffic",
            name: "ControlTraffic",
            component: () => import("../views/control/Traffic.vue"),
            meta: {
              isAuth: true,
              isKeepAlive: true
            },
          },
          {
            path: "/control/visitor",
            name: "ControlVisitor",
            component: () => import("../views/control/Visitor.vue"),
            meta: {
              isAuth: true,
              isKeepAlive: true
            },
          }
        ]
      },
      {
        path: '/setting',
        name: 'SettingIndex',
        redirect: '/setting/info',
        component: () => import('../views/setting/Index.vue'),
        meta: {
          isAuth: true,
          isKeepAlive: false
        },
        children: [
          {
            path: "/setting/info",
            name: "UserInfo",
            component: () => import('../views/setting/UserInfo.vue'),
            meta: {
              isAuth: true,
              isKeepAlive: true
            },
          }
        ]
      }
    ]
  },



]


// 解决重复点击路由报错

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  routes,
})



export default router
