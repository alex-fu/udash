// Polyfills
import 'es6-promise/auto'
import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'
import './i18n'

Vue.config.productionTip = false

Vue.use(VuesticPlugin)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })


router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
