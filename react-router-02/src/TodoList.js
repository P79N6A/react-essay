import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => (
    <div>
        <h1>待办列表</h1>
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} {...todo} />
            ))}
        </ul>
    </div>
)

export default TodoList