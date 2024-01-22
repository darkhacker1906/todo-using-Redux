import React,{useState} from 'react'
import InputField from '../components/inputField/InputField'
import Button from '../components/button/Button_'
import './HomeDashBoard.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/Actions'
import TodoTable from '../components/todoTable/todoTable'

function HomeDashBoard() {
    var dispatch=useDispatch();
    const [todoInput, setTodoInput] = useState("");
    const handleSubmit = () => {
      if (todoInput.trim() !== '') {
        dispatch(addTodo(todoInput));
        setTodoInput(''); 
      }
    };
  return (
    <div>
        <h1 className='todo_heading text-center text-3xl mt-5 '>Todo App</h1>
      <div className='main_div'>
        <form className='form_section'onSubmit={(e) => e.preventDefault()}>
         <InputField value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}/>
         <Button title="Submit" handleClick={handleSubmit}/*handleClick={()=>dispatch(addTodo(todoInput))}*/ />
        </form>
        <TodoTable/>

      </div>
    </div>
  )
}

export default HomeDashBoard
