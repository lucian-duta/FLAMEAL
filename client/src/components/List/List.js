import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";
import "./List.css";

function List() {
  const [items, setItems] = useState([
    { itemName: "2kg box of Apples", quantity: 3 },
    { itemName: "Box of 10 Noodles", quantity: 4 },
    { itemName: "Pack of 6 Tuna", quantity: 5 },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
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
    alert(JSON.stringify(items));
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
    <div className="list-app">
      <h1>Add goods to the contract</h1>
      <div className="list-form">
        <div className="list-form">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="list-input"
            placeholder="Add an item..."
          />
          <button className="list-button" onClick={() => handleAdd()}>
            Add
          </button>
        </div>

        <div className="item-list">
          {items.map((item, index) => (
            <div className="list-row">
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
