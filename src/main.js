import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '../src/mock/mockServer'


Vue.config.productionTip = false;

router.beforeEach((to,from,next) => {
  let token = sessionStorage.getItem('token');
  if(to.meta.isAuth){
    if(token){
      next()
    }else{
      next({name:"login"})
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
