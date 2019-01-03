import React, { Component } from 'react';
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import { toggleTodo, initTodos } from './actions'
import { getTodos } from './services/app'

class App extends Component {

    constructor (props) {
        super(props)
        this.onTodoClick = this.onTodoClick.bind(this)
    }

    componentDidMount () {
        const { dispatch } = this.props
        getTodos().then((data) => {
            // console.log('@@@success', data)
            dispatch(initTodos(data.list))
        }, (err) => {
            console.log('@@@fail', err)
        })
    }

    onTodoClick (index) {
        const { dispatch } = this.props
        dispatch(toggleTodo(index))
    }

    render() {
        const { todos } = this.props
        return (
            <div>
                <AddTodo />
                <TodoList todos={todos} onTodoClick={this.onTodoClick}/>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.filter((todo) => {
            if (state.visibilityFilter === 'SHOW_ACTIVE') {
                return !todo.completed
            } else if (state.visibilityFilter === 'SHOW_COMPLETED') {
                return todo.completed
            } else {
                // SHOW_ALL
                return true
            }
        }),
    }
}

export default connect(mapStateToProps)(App)