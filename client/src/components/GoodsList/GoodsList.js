import React, { useState } from "react";
import GoodsForm from "./GoodsForm";
import Goods from "./Goods";
import "./Goods.css";

function GoodsList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  return (
    <div>
      <h1>Add goods to the contract</h1>
      <GoodsForm onSubmit={addTodo} />
      <Goods todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default GoodsList;
