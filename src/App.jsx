import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const todos = [
    { input: "Learn React", completed: false },
    { input: "Build a ToDo App", completed: true },
    { input: "Master JavaScript", completed: false },
    { input: "Explore CSS Tricks", completed: true },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <ToDoInput todos={todos} />
      <ToDoList />
    </>
  );
}
export default App;
