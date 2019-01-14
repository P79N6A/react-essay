import Vue from 'vue'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import './mock'
import App from './App.vue'
import rootReducer from './store/reducers'
import vueRedux from './vue-redux'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

Vue.use(vueRedux, { store })

const _App = Vue.extend(App)

const app = new _App({
    store
})
app.$mount('#root')