import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { axiosPlugin } from './config/axios'

Vue.config.productionTip = false
Vue.use(axiosPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
