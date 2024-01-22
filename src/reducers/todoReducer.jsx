const initial_state={
    list:[]
}
const todoReducer=(state=initial_state,action)=>{
switch(action.type){
    case "ADD_TODO":
    return state=state+1;

}

}
export default todoReducer