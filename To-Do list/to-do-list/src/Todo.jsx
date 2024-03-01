import "./to-do.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([
    // { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
     setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deletetodo = (id) => {
    todos.filter;
    setTodos((prevtodo) => todos.filter((prevtodo) => prevtodo.id != id));
  };
  let uppercaseAll = () => {
    setTodos((prevTask) =>
      prevTask.map((todos) => {
        return {
          ...todos,
          task: todos.task.toUpperCase(),
        };
      })
    );
  };

  let toggleLineThrough = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone, // Toggle the isDone property
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
    <h1 className="head">To-Do-List</h1>
    <div className="container">
      <input
      className="input"
        type="text"
        placeholder="add your task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNewTask} className="btn1">Add Task</button>
      </div>
      <div className="main">
      <ul>
        {" "}
        {todos.map((todo) => (
          <>
            <li
              key={todo.id}
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.task}
              <span className="span">
              <button onClick={() => deletetodo(todo.id)} className="dltbtn">Delete</button>
            <button onClick={() => toggleLineThrough(todo.id)} className="donebtn">Done</button>
            </span>
            </li>
          </>
        ))}
      </ul>
      </div>
      {/* <button onClick={() => uppercaseAll(todo.id)} className="upperbtn">UpperCase All</button> */}

      <button onClick={uppercaseAll} className="upperbtn">ToUppercase All</button>
    </>
  );
}
