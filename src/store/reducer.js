import {ADD_TODO_ID,ADD_TODO_TITLE,ADD_TODO_DONE} from '../App'

export const initialState={
    id:'',
    title:'',
    done:false,
}

export function rootReducer(state=initialState,action){
  switch(action.type){
    case 'ADD_TODO_TITLE': return {...state,title:action.payload}
  
      
  }
  return state
}


