import React from "react";
import { connect, useDispatch,useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {addTodoTitle} from '../store/actions'
import {addToDo} from '../store/actionsTasks'


export default function AddTodoInput ({title}){
    let todo=useSelector(state =>state.todoApp.title)
    const dispatch=useDispatch()
    console.log(todo)
  
    const onSubmit = (event) => {
		event.preventDefault();}
    return(
        <div className='task-input'>
            <form  onSubmit={onSubmit} >
           <input type='text' value={title} onChange={(e)=>dispatch(addTodoTitle(e.target.value)) }/>
            <button type="submit" onClick={()=>dispatch(addToDo({title:todo,id:new Date(),done:false}))}>ADD</button>
           
            </form>
        </div>
    )
}


// class AddTodoInput extends React.Component{
//     render(){
//        const {title,addTodoTitle}=this.props
//        return(
//            <div>
//                <form className="task-input" onClick={()=>addToDo({title:title})}>
//                <input type='text' value={title} onChange={(e)=>addTodoTitle(e.target.value) }/>
//                <button type="submit" >ADD</button>
//                </form>
//            </div>
//        )
//    }
// }

// const putStateToProps=(state)=>{
//    return {
//         title:state.todoApp.title,
         
//    };
// };

// const putDispatchToProps=(dispatch)=>{
//    return{
//        addTodoTitle:bindActionCreators(addTodoTitle,dispatch),
//        addToDo:bindActionCreators(addToDo,dispatch)
//    }
// }

// export default connect(putStateToProps,putDispatchToProps)(AddTodoInput)