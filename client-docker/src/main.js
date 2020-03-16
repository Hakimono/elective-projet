import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import feather from 'vue-icon'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.use(feather, 'v-icon')

new Vue({
  icons: {
    iconfont: 'mdi'
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
