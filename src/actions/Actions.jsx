export const addTodo=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTodo = (todoId) => ({
    type: "DELETE_TODO",
    payload: {
      todoId: todoId,
    },
  });
  
export const editTodo=()=>{
    return {
        type:"EDIT_TODO"
    }
}