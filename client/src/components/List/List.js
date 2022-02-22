import React, { useState, useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";
import "./List.css";

function List() {
  const [items, setItems] = useState([
    { itemName: "item1", quantity: 1 },
    { itemName: "item2", quantity: 4 },
    { itemName: "item3", quantity: 5 },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    console.log(items);
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
  };

  const removeItem = (index) => {
    const removeArr = [...items];
    delete removeArr[index];

    console.log(removeArr);
    const filterArr = removeArr.filter((item) => item != null);
    console.log(filterArr);
    setItems(filterArr);
  };

  return (
    <div className="todo-app">
      <h1>Add goods to the contract</h1>
      <div className="todo-form">
        <div className="todo-form">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="todo-input"
            placeholder="Add an item..."
          />
          <button
            className="todo-button"
            onClick={() => handleAddButtonClick()}
          >
            Add
          </button>
        </div>

        <div className="item-list">
          {items.map((item, index) => (
            <div className="todo-row">
              <div>{item.itemName}</div>

              <div className="icons">
                <div className="quantity">
                  <BsChevronLeft
                    className="delete-icon"
                    onClick={() => handleQuantityDecrease(index)}
                  />
                  <span> {item.quantity} </span>

                  <BsChevronRight
                    className="delete-icon"
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </div>
                <RiCloseCircleLine
                  className="delete-icon"
                  onClick={() => removeItem(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
