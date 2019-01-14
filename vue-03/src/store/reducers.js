// reducers.js
import { combineReducers } from 'redux'

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'

// 待办事项的过滤条件
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}
// 待办事项列表reducer
function todos(state = [], action) {
    switch (action.type) {
        // 添加待办事项
        case 'ADD_TODO':
            return [...state, {
                text: action.text,
                completed: false,
            }]
            break
        // 对index对应待办事项的状态进行取反操作
        case 'TOGGLE_TODO':
            const data = state.map((todo, index) => {
                return {
                    ...todo,
                    completed: index === action.index ? !todo.completed : todo.completed
                }
            })
            return data
            break
        // 初始化 todos
        case 'INIT_TODOS':
            return [...state, ...action.list]
        break
        default:
            return state
    }
}

function loading (state=false, action) {
    switch(action.type) {
        case 'SET_LOADING':
            return !!action.loading
        break
        default:
            return state
    }
}

const rootReducer = combineReducers({
    visibilityFilter,
    todos,
    loading,
})

export default rootReducer