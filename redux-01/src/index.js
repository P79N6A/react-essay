// index.js
import { createStore } from 'redux'
import { addTodo, toggleTodo, setVisibilityFilter } from './actions.js'
import rootReducer from './reducers.js'
const store = createStore(rootReducer)

// 验证
store.subscribe(() => {
    console.log(store.getState())
})
// 打印初始状态
console.log('初始状态', store.getState())

store.dispatch(addTodo('Learn Action'))
store.dispatch(addTodo('Learn reducer'))
store.dispatch(addTodo('Learn state'))
store.dispatch(addTodo('Learn store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
