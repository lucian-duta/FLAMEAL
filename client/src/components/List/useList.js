import { useState } from "react";

/**
 * * useListv2
 * * Holds the functions needed during user interaction i.e. adding, deleting...
 * @param {*} validate - the function used to validate the inputs of the form
 * @returns the functions needed during filling with the item list and the error list
 */
//delcare a second list of items globally to because hooks don't work outside of the function
let globalItems = null;
const useListv2 = (validate) => {
  //declare the initial state of the list (populated for testing purposes)
  const [items, setItems] = useState([
    { itemName: "2kg box of Apples", quantity: 3 },
    { itemName: "Box of 10 Noodles", quantity: 4 },
    { itemName: "Pack of 6 Tuna", quantity: 5 },
  ]);
  //constant to store the state of the errors
  const [errors, setErrors] = useState({});

  /**
   * *handleAdd
   * used to handle the addition of a new item to the list
   * @param {*} inputValue - from the main function
   */
  function handleAdd(inputValue) {
    //constant to hold the errors ( as a result of an invalid value)
    const err = validate(inputValue);
    //setting the state of the errors
    setErrors(validate(inputValue));
    //test if there are any errors
    if (Object.keys(err).length === 0) {
      //create a new item
      const newItem = {
        itemName: inputValue,
        quantity: 1,
      };
      //creating a new list holding the old list but updated with the new element
      const newItems = [...items, newItem];
      //the old list becomes the new list
      setItems(newItems);
      //update the global list
      globalItems = newItems;
    }
  }
  /**
   * *Function to take handle quantity increase
   * @param {*} index - the identifier of the item to be updated
   */
  const handleQuantityIncrease = (index) => {
    //create a new list holding old items
    const newItems = [...items];
    //increase the quantity of the specific item
    newItems[index].quantity++;
    //update the list
    setItems(newItems);
    //update the global list
    globalItems = newItems;
  };

  /**
   * *Function to take handle quantity decrease
   * @param {*} index - the identifier of the item to be updated
   */
  const handleQuantityDecrease = (index) => {
    //create a new list holding old items
    const newItems = [...items];
    //increase the quantity of the specific item
    newItems[index].quantity--;
    //update the list
    setItems(newItems);
    //update the global list
    globalItems = newItems;
  };

  /**
   * *Function to remove an item from the list
   * @param {*} index - the identifier of the item to be deleted
   */
  const removeItem = (index) => {
    //create a new list based on the old list
    const removeArr = [...items];
    //delete the specific item from the list
    delete removeArr[index];
    //remove items with the null value (resulted from the deletion of the object)
    const filterArr = removeArr.filter((item) => item !== null);
    //update the list
    setItems(filterArr);
    //update the global list
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
//Function to send the list of items to other components
export const fetchList = () => {
  //return the globally declared items
  return globalItems;
};
