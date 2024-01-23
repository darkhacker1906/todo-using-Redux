import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useSelector,useDispatch} from 'react-redux';
import {deleteTodo} from '../../actions/Actions';

function TodoTable() {
  const todos = useSelector((state) => state.todoReducer.list);
  const dispatch=useDispatch();
  
  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr
              key={todo.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className='flex justify-between '>
                <div>{todo.data}</div>
                <div className='text-xl flex gap-2'><FaEdit onClick={() => handleEdit(todo.id)}/><MdDelete onClick={() => handleDelete(todo.id)}/></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoTable;
