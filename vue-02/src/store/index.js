import { getTodos } from '../services'

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'

const rootState = {
    state: {
        visibilityFilter: SHOW_ALL,
        todos: [],
    },
    getters: {
        visibilityFilter (state) {
            return state.visibilityFilter
        },
        todos (state) {
            return state.todos.filter((todo) => {
                if (state.visibilityFilter === SHOW_ALL) {
                    return true
                } 
                return state.visibilityFilter === SHOW_ACTIVE ? !todo.completed : todo.completed
            })
        }
    },
    mutations: {
        setVisibilityFilter (state, { filter }) {
            state.visibilityFilter = filter
        },
        addTodo (state, { text }) {
            state.todos.push({
                text,
                completed: false,
            })
        },
        toggleTodo (state, { index }) {
            state.todos.splice(index, 1, {
                ...state.todos[index],
                completed: !state.todos[index].completed,
            })
        },
        initTodos (state, {list}) {
            state.todos.splice(state.todos.length - 1, 0, ...list)
        }
    },
    actions: {
        initTodos ({ commit }) {
            getTodos().then((data) => {
                commit('initTodos', {
                    list: data.list,
                })
            })
        }
    }
}

export default rootState