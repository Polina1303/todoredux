import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { tasksReducer } from "../store/reducerTasks";
import { tasksInitialState } from '../store/reducerTasks'



export default function TodoList() {
    let tasks=useSelector(state => state.tasksList.tasks)
     console.log(tasks)
    return (
        <div>
           <ul>{tasks.map(task => {
            return <TodoItem id={task.id} task={task}/>
            })}</ul> 
          
        </div>
    )
}


