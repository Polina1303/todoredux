import {DELETE_TASKS,UPDATE_TASKS,ADD_Todo,ADD_TODO_DONE} from '../App'

export const addToDo=(todo)=>{
   console.log(todo)
   return{
        type: ADD_Todo,
        payload:todo,
   }
   }

export const deleteTasks=(id)=>{
   console.log(id)
   return{ type:DELETE_TASKS,
      payload:id
   }
}

export const updateTasks=(task)=>{
   console.log(task)
   return{
      type:UPDATE_TASKS,
      payload:task
   }
}


export const addTodo=(id)=>{
  
   console.log(id)
   return{
     type:ADD_TODO_DONE,
     payload:id,
      }
 }