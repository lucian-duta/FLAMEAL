import React from "react";
import useList from "./useList";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RiCloseCircleLine } from "react-icons/ri";
import "./List.css";
import validateInput from "./validateList";
/**
 * Component used to display an interactive list of items from the inventory of the user,
 * and finnaly used to be attached to the transfer.
 * @category List
 * @component
 * @returns {ReactComponent} the list component
 */
const ListFill = () => {
  const {
    handleQuantityDecrease,
    handleQuantityIncrease,
    items,
    handleAdd,
    removeItem,
    errors,
  } = useList(validateInput);

  const [inputValue, setInputValue] = useState("");

  // let value = "";

  return (
    <div className="list-app">
      <div className="list-form">
        <div className="list-form">
          <input //TODO: Add browse inventory functionality
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="list-input"
            placeholder="Add an item..."
          />

          <button
            className="list-button"
            onClick={() => {
              handleAdd(inputValue);
              setInputValue("");
            }}
          >
            Add
          </button>
          {errors.item && <p cl>{errors.item}</p>}
        </div>

        <div className="item-list">
          {items.map((item, index) => (
            <div key={index} className="list-row">
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

export default ListFill;
