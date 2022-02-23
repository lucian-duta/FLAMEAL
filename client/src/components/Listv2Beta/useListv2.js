import React from "react";
import { useState, useEffect } from "react";

const useListv2 = (callback) => {
  const [items, setItems] = useState([
    { itemName: "2kg box of Apples", quantity: 3 },
    { itemName: "Box of 10 Noodles", quantity: 4 },
    { itemName: "Pack of 6 Tuna", quantity: 5 },
  ]);

  function handleAdd(inputValue) {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    //alert(JSON.stringify(items));
  }

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
  return {
    handleAdd,
    handleQuantityIncrease,
    handleQuantityDecrease,
    removeItem,
    items,
  };
};

export default useListv2;