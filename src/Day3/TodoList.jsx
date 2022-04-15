
import { useState } from "react"
import {nanoid} from "nanoid"

const TodoList =() =>{
    const [task, setTask] = useState("")
    const [todo, setTodo] = useState([])
    const handleClick =() =>{
        let taskObj = {
            id:nanoid(),
            title:task,
            status:false

        }
        setTodo([...todo,taskObj])

    }
    return(
        <>
        <input type={"text"} value={task} placeholder="enter your task"
        onChange={(e)=>setTask (e.target.value)} />
        <button onClick={handleClick}>Add todo</button>
        {todo.map((item,index )=>{
            return <h1 key={index.id}>{item.title}</h1>
        })}
        
        </>
    )

}

export default TodoList