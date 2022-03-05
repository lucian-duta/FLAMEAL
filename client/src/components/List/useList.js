import { useState } from "react";

/**
 * * useListv2
 * * Holds the functions needed during user interaction i.e. adding, deleting...
 * @param {*} callback
 * @returns the functions needed during filling
 */
let globalItems = null;
const useListv2 = (callback, validate) => {
  const [items, setItems] = useState([
    { itemName: "2kg box of Apples", quantity: 3 },
    { itemName: "Box of 10 Noodles", quantity: 4 },
    { itemName: "Pack of 6 Tuna", quantity: 5 },
  ]);
  const [errors, setErrors] = useState({});

  /**
   * *handleAdd
   * @param {*} inputValue - from the main function
   * ! VALIDATE BEFORE ADDING
   */
  function handleAdd(inputValue) {
    const err = validate(inputValue);
    setErrors(validate(inputValue));
    if (Object.keys(err).length === 0) {
      const newItem = {
        itemName: inputValue,
        quantity: 1,
      };

      const newItems = [...items, newItem];

      setItems(newItems);
      globalItems = newItems;
    }
    //alert(JSON.stringify(items));
  }

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    globalItems = newItems;
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
    globalItems = newItems;
  };

  const removeItem = (index) => {
    const removeArr = [...items];
    delete removeArr[index];
    const filterArr = removeArr.filter((item) => item != null); //? Is there a better way to delete ?
    setItems(filterArr);
    globalItems = filterArr;
  };
  return {
    handleAdd,
    handleQuantityIncrease,
    handleQuantityDecrease,
    removeItem,
    items,
    errors,
  };
};

export default useListv2;
export const fetchList = () => {
  return globalItems;
};
