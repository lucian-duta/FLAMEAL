import React from "react";
import useListv2 from "./useListv2";
import { useState, useEffect } from "react";
import {
  BsChevronRight,
  BsChevronLeft,
  BsEmojiExpressionlessFill,
} from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";

const Listv2Fill = ({ submitList }) => {
  const {
    handleQuantityDecrease,
    handleQuantityIncrease,
    items,
    handleAdd,
    removeItem,
  } = useListv2(submitList);

  const [inputValue, setInputValue] = useState("");

  // let value = "";

  return (
    <div className="list-app">
      <div className="list-form">
        <div className="list-form">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="list-input"
            placeholder="Add an item..."
          />
          <button className="list-button" onClick={() => handleAdd(inputValue)}>
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
};

export default Listv2Fill;
