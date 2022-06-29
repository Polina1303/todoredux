import { combineReducers } from "redux";
import { rootReducer } from "./reducer";
import { tasksReducer } from "./reducerTasks";

 const reducers= combineReducers({
tasksList:tasksReducer,
todoApp:rootReducer
})

export default reducers