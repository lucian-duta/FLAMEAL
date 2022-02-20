import React, { useState, useEffect, useRef } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import "./Goods.css";

function Goods({ todos, removeTodo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default Goods;
