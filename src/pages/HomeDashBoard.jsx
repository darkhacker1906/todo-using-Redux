import React from 'react'
import InputField from '../components/inputField/InputField'
import Button from '../components/button/Button_'
import './HomeDashBoard.css'

function HomeDashBoard() {
  return (
    <div>
        <h2 className='todo_heading'>Todo App</h2>
      <div className='main_div'>
        <form className='form_section'>
         <InputField/>
         <Button/>

        </form>


      </div>
    </div>
  )
}

export default HomeDashBoard
