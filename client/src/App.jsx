import React, { Fragment, useState } from "react";
import "./App.css";

// components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos todos={todos} setTodos={setTodos} />
      </div>
    </Fragment>
  );
}

export default App;
