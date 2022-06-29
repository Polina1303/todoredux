export const tasksInitialState={
   tasks:[{ id: 0, title: 'Create todo-react app', done: false },
        { id: 1, title: 'Learn react', done: false },
        { id: 2, title: 'Read book', done: false }
    ]}
    
    export function tasksReducer(state=tasksInitialState,action){
      
         switch (action.type){
                case 'DELETE_TASKS':return {...state,tasks:state.tasks.filter(task=>task.id!=action.payload)}
                
                case 'ADD_Todo': return {...state,tasks:[...state.tasks,action.payload]}
                case 'ADD_TODO_DONE' : return {...state,...state.tasks.map(task=>task.id=!action.payload.id ? {...task, done:!task.done}: task )}
                
               //  case 'UPDATE_TASKS': 
         }
        
         return state 
    }


    


  