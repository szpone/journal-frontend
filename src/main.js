import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueRx from 'vue-rx'
import App from 'App'
import router from 'router'
import store from 'store'
import interceptors from 'config/interceptors'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// VueResource
Vue.use(VueResource)


// Bootstrap
Vue.use(BootstrapVue)


Vue.http.interceptors.push(function (request, next) {


  // const token = localStorage.getItem('token')
  // request.headers.set('Authorization', `JWT ${token}`)

  next()
})
Vue.http.interceptors.push(interceptors.setup())

// VueRx
Vue.use(VueRx)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
