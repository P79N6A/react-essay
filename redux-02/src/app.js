import React, { Component } from 'react';

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const data = [
    {
        id: '1',
        text: '001',
        completed: false,
    },
    {
        id: '2',
        text: '002',
        completed: true,
    },
]

class App extends Component {

    constructor (props) {
        super(props)
        this.onTodoClick = this.onTodoClick.bind(this)
    }

    onTodoClick (id) {
        console.log('@@@@todo click', id)
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