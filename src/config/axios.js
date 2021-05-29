import axios from 'axios'
import CONSTANTS from './constants'

const axiosInstance = axios.create({
  baseURL: CONSTANTS.API_URL,
  timeout: CONSTANTS.HTTP_TIMEOUT
})

const axiosPlugin = {
  install (vue) {
    vue.axios = vue.prototype.$axios = axiosInstance
  }
}

export { axiosInstance, axiosPlugin }
