import React from 'react'
import InputField from '../components/inputField/InputField'
import Button from '../components/button/Button_'
import './HomeDashBoard.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/Actions'

function HomeDashBoard() {
    var dispatch=useDispatch();

  return (
    <div>
        <h1 className='todo_heading text-center text-3xl mt-5 '>Todo App</h1>
      <div className='main_div'>
        <form className='form_section '>
         <InputField/>
         <Button title="Submit" handleClick={()=>dispatch(addTodo(inputData))} />
        </form>

      </div>
    </div>
  )
}

export default HomeDashBoard
