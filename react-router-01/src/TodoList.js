import React from 'react'
import { Link } from 'react-router-dom'
import Todo from './Todo'

const TodoList = ({todos}) => (
    <div>
        <h1>待办列表</h1>
        <Link to="addTodo">添加</Link>
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} {...todo} />
            ))}
        </ul>
    </div>
)

export default TodoList