import axios from 'axios'
import CONFIG from './config'

const axiosInstance = axios.create({
  baseURL: CONFIG.API_URL,
  timeout: CONFIG.HTTP_TIMEOUT
})

const axiosPlugin = {
  install (vue) {
    vue.axios = vue.prototype.$axios = axiosInstance
  }
}

export { axiosInstance, axiosPlugin }
