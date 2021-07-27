import Vue from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap 설정 추가
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//bootstrap 설정 추가


Vue.config.productionTip = false

//
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
