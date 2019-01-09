import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers.js'
import './mock'
import loggers from './middlewares/logger'
import chunk from './middlewares/thunk'
import promise from './middlewares/promise'
const store = createStore(rootReducer, applyMiddleware(loggers, thunk, promise))

import App from './app'
import thunk from './middlewares/thunk';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementsByTagName('BODY')[0],
)