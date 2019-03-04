import React, { Component } from 'react';

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const data = [
    {
        text: '001',
        completed: false,
    },
    {
        text: '002',
        completed: true,
    },
]

class App extends Component {

    constructor (props) {
        super(props)
        this.onTodoClick = this.onTodoClick.bind(this)
    }

    onTodoClick (index) {
        console.log('@@@@todo click', index)
    }

    render() {
        return (
            <div>
                <AddTodo />
                <TodoList todos={data} onTodoClick={this.onTodoClick}/>
                <Footer />
            </div>
        )
    }
}

export default App