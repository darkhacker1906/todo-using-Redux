const initial_state={
   data:1
}
const todoReducer=(state=initial_state,action)=>{
switch(action.type){
    case "ADD_TODO":
    return state=state+1;   
      
    
    default:
      return state;
}
}
export default todoReducer