// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import VueNativeSock from 'vue-native-websocket'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notification from 'vue-notification'
import App from './App.vue'
import router from './router'
import store from './store'
import * as config from '../config/index.json'


Vue.use(VueAxios, axios)
Vue.use(Notification)
Vue.use(Buefy)
Vue.use(VueNativeSock, `ws://${(<any>config).ws_socket.host}:${(<any>config).ws_socket.port}/${(<any>config).ws_socket.path}`, {
  store,
  format: 'json',

  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000
})

// Vue config
Vue.config.productionTip = false
Vue.config.silent = true
Vue.config.errorHandler = (err, vm, info) =>  {

}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
