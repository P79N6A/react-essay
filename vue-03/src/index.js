import Vue from 'vue'
import { createStore } from 'redux'

import './mock'
import App from './App.vue'
import rootReducer from './store/reducers'
import vueRedux from './vue-redux'

const store = createStore(rootReducer)
Vue.use(vueRedux)

const _App = Vue.extend(App)

const app = new _App({
    store
})
app.$mount('#root')