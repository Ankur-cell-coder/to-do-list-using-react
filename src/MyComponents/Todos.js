import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";
export const Todos = (props) => {
    let myStyle = {
        minheight: "70vh",
        margin:"100px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length===0?"No to do to display":
            
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} 
                    onDelete={props.onDelete} />
                })
            }
            

        </div>
    )
}
