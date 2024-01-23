import { useState } from "react";

const initial_state={
   list:[]
}
// const [list,setList]=useState([])

const todoReducer=(state=initial_state,action)=>{
switch(action.type){
    case "ADD_TODO":
      const{id,data}=action.payload;
      return{
         ...state,
            list:[
               ...state.list,
               {
                  data:data,
                  id:id
               }
            ]
            
      }
      case "DELETE_TODO":
         const { todoId } = action.payload;
         const updatedList = state.list.filter((todo) => todo.id !== todoId);
         return {
           ...state,
           list: updatedList
         };
      
    default:
      return state;
}
}
export default todoReducer