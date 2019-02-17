import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Lazyload } from 'vant'
Vue.use(Lazyload)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import { Loading } from 'element-ui'
Vue.use(ElementUI)

Vue.prototype.HOST='/api'

import axios from "axios"
Vue.prototype.axios=axios

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
