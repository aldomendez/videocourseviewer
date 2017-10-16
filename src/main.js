import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import store from './store'
Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  bus: new Vue(),
  render: h => h(App)
})
