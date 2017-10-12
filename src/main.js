import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  bus: new Vue(),
  render: h => h(App)
})
