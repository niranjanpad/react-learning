import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";

import './style.css';
import CounterComponent from "./components/CounterComponent";

const App = () => {
  return (
    <div>
      <div className="todo-container">
        <Header className="todo-header" title="My First Todo React example"/>
        <CounterComponent /> 
      </div>
      <br></br>
      <div className="todo-container">
        <TodoItem activity="Studying"/>
        <TodoItem activity="sleeping"/>
        <TodoItem activity="Working"/>
        <TodoItem activity="Dancing"/>
        <TodoItem activity="Singing"/>
        <Button />
      </div>
    </div>

  );
}

export default App;
