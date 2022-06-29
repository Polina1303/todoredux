import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import AddTodoInput from './components/AddTodoInput'
import TodoList from './components/TodoList'
import reducers from './store/combineReducers'

export const ADD_TODO_ID='ADD_TODO_ID'
export const ADD_TODO_TITLE='ADD_TODO_TITLE'
export const ADD_TODO_DONE='ADD_TODO_DONE'
export const ADD_LIST='ADD_LIST'
export const DELETE_TASKS='DELETE_TASKS'
export const UPDATE_TASKS='UPDATE_TASKS'
export const ADD_Todo='ADD_Todo'

export const store=createStore(reducers)

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div className='App'>
               <h1>What's the plan today?</h1>
               <AddTodoInput/>
               <TodoList/>
              </div>
              </Provider>
            
        )
    }
}

export default App