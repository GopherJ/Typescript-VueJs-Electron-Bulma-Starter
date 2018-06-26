// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNativeSock from 'vue-native-websocket'
import * as config from './config.dev.json'


Vue.use(Buefy)
Vue.use(VueNativeSock, `ws://${(<any>config).ws_socket.host}:${(<any>config).ws_socket.port}`, {
  store,
  format: 'json',

  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
