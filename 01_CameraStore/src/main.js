import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/01_store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
