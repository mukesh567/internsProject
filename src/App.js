import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import './App.css'

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "15px" }}> Todo App </h1>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default App;
