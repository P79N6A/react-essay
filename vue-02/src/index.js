import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
Vue.use(Vuex)

import rootState from './store'
import './mock'

const store = new Vuex.Store(rootState)
const _App = Vue.extend(App)

const app = new _App({
    store,
})
app.$mount('#root')