import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { axiosPlugin } from './config/axios'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false
Vue.use(axiosPlugin)
Vue.use(Toasted, {
  position: 'bottom-center',
  duration: 2000
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
