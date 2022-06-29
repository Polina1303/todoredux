import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteTasks,updateTasks} from '../store/actionsTasks'
import { useState } from 'react';
import {addTodo} from '../store/actionsTasks'

const TodoItem = ({ task,done }) => {
    let dispatch=useDispatch()
    const [eritble,setEritble]=useState(false)
    const [name,setName]=useState(task.title)
    const classes = []
    if (task.done) {
        classes.push('done')
      }
    
    return (
        <div className='task'  >
             <span className={classes.join(' ')}  >
            <input type='checkbox' id={task.id} checked={done} onClick={()=>dispatch(addTodo(task.id))} />
           { eritble ? <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/> : <p>{task.title}</p> }
         </span>
            <button className='button' onClick={()=>{dispatch(updateTasks({
                ...task,
              title:name
            }))
             if(eritble){
                 setName(task.title)
            }
                setEritble(!eritble)}} >{eritble?'Update': 'Edit'}</button>
            <button className='button' onClick={()=>dispatch(deleteTasks(task.id))}>Delete</button>
       
        </div>
    )
}

export default TodoItem  