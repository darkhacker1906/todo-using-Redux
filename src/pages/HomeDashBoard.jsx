import React, { useState } from "react";
import InputField from "../components/inputField/InputField";
import Button from "../components/button/Button";
import "./HomeDashBoard.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/Actions";
import TodoTable from "../components/todoTable/todoTable";

function HomeDashBoard() {
  var dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = () => {
    if (todoInput.trim() !== "") {
      dispatch(addTodo(todoInput));
      setTodoInput("");
    }
  };
  return (
    <div>
      <h1 className="todo_heading text-center text-3xl mt-5 ">Todo App</h1>
      <div className="main_div">
        <form className="form_section" onSubmit={(e) => e.preventDefault()}>
          <InputField
            value={todoInput}
            inputTextId="username"
            inputTextType="text"
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <div className="button_div">
            {!isEdit && (
              <Button type="submit" title="Submit" handleClick={handleSubmit} />
            )}
            {isEdit && (
              <>
                <Button
                  type="submit"
                  title="Update"
                  handleClick={handleSubmit}
                />
                <Button
                  type="button"
                  title="Cancel"
                  handleClick={handleSubmit}
                />
              </>
            )}
          </div>
        </form>
        <TodoTable setIsEdit={setIsEdit} setTodoInput={setTodoInput}/>
      </div>
    </div>
  );
}

export default HomeDashBoard;
