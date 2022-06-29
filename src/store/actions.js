import {ADD_TODO_ID,ADD_TODO_TITLE,ADD_TODO_DONE, ADD_Todo} from '../App'


export const addTodoId=()=>{
  return{
    type:ADD_TODO_ID,
    payload:new Date(),
  }
}

export const addTodoTitle=(newTitle)=>{
  return{
    type:ADD_TODO_TITLE,
    payload:newTitle
  }
}


