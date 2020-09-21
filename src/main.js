import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Component from '@/components'
import '@/assets/scss/index.scss';
import router from '@/router'

Vue.use(Component)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
