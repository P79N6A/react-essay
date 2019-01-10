import Vue from 'vue'

import App from './App.vue'

const _App = Vue.extend(App)

const app = new _App()
app.$mount('#root')