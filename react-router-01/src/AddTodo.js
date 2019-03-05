import React from 'react';
import { Link } from 'react-router-dom'

const AddTodo = () => {
    return (
        <div>
            <h1>添加待办</h1>
            <Link to="/">返回</Link>
            <br />
            <input type="text" />
            <button type="button">Add</button>
        </div>
    )
}

export default AddTodo