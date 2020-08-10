import React ,{ Component } from 'react';

const TodoList = (props) => {
    const todoTask = props.tasks.map((todo,index) => {
        return <Todo content = {todo} key = {index} id = {index} onDelete = {props.onDelete}/>
    })
    return(
        <div className = "todo-wrapper">
            {todoTask}
        </div>
    )
}
const Todo  = (props) => {
    return (
        <div className="todo-item">
            {props.content}
            <button className=" btn on-right" onClick = {() =>{props.onDelete(props.id)}}>x</button>
        </div>
    )
}

export default TodoList;