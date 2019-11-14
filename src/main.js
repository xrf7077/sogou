import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
// 林佳琛加入了这一行,引入mint-ui
import '_mint-ui@2.2.13@mint-ui/lib/style.css' // 引入mint-ui

Vue.use(MintUI) // 引入mint-ui
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
