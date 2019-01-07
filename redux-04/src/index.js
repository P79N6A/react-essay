import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers.js'
import './mock'
const store = createStore(rootReducer)

import App from './app'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementsByTagName('BODY')[0],
)