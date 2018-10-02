import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'es6-promise/auto'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {  routes  } from './routes'
import {  store   } from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Buefy)

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) =>  {
  if(to.path != '/'){
    store.commit('activateLoading')
  }
  next()
})

router.afterEach((to, from) => {
    store.commit('desactivateLoading')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
