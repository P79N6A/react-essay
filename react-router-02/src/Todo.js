import React from 'react';


const Todo = ({ completed, text }) => {
    const style = {textDecoration: completed ? 'line-through' : 'none'}
    return (
    <li
        style={style}
    >
        {text}
    </li>
    )
}

export default Todo