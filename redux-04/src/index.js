import React from 'react'
import ReactDOM from 'react-dom'
import Mock from 'mockjs'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers.js'
const store = createStore(rootReducer)

import App from './app'

Mock.mock('/getTodos', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-5': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'text': 'todo-item',
        'completed|1': true,
    }]
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementsByTagName('BODY')[0],
)