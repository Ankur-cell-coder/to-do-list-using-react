import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
             {/* use a for loop to print every todos */}
             {props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={props.onDelete}/>
             })}
            
        </div>
    )
}
