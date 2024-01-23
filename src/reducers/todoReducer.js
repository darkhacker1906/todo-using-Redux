const initial_state = {
  list: [],
};

const todoReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            data: data,
            id: id,
          },
        ],
      };
    case "DELETE_TODO":
      const { todoId } = action.payload;
      const updatedList = state.list.filter((todo) => todo.id !== todoId);
      return {
        ...state,
        list: updatedList,
      };
    case "EDIT_TODO":
      const { todoid, newData } = action.payload;
      const updateList = state.list.map((todo) =>
        todo.id === todoid ? { ...todo, data: newData } : todo
      );
      return {
        ...state,
        list: updateList,
      };
    default:
      return state;
  }
};
export default todoReducer;
