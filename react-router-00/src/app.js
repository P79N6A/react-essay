import React, { Component } from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const data = [
    {
        text: '001',
        completed: false,
    },
    {
        text: '002',
        completed: false,
    },
]

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList todos={data} />
            </div>
        )
    }
}

export default App