import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { updateInventory } from "../../api/actions";
import { UserContext } from "../../context/UserContext";
let url = "https://flameal.herokuapp.com/users";

//delcare a second list of items globally to because hooks don't work outside of the function
let globalItems = null;

/**
 * Holds the functions needed during user interaction i.e. adding, deleting..
 * and makes api call to update the list if the used is logged in.
 * @category List
 * @function useList
 * @param {Function} validate - the function used to validate the inputs of the form
 * @returns the functions needed during filling with the item list and the error list
 */
const useList = (validate) => {
  //hook to hold the global state
  const [state, dispatch] = useContext(UserContext);

  //declare the initial state of the list (populated for testing purposes)
  const [items, setItems] = useState([]);

  //constant to store the state of the errors
  const [errors, setErrors] = useState({});

  //function the find out if the current page is the inventory
  const pathName = () => {
    if (window.location.pathname === "/myinventory") {
      return true;
    } else {
      return false;
    }
  };

  //function the update the database when the list is updated
  const updateDatabase = (items) => {
    console.log(state);

    if (pathName()) {
      updateInventory(items, state.address)
        .then(() => {
          dispatch({
            type: "add_to_inv",
            payload: items,
          });
        })
        .catch((e) => {
          alert(e);
        });
    }
  };

  useEffect(() => {
    //on the first render, retrieve items from the backend
    axios
      .get(`${url}/getinventory/${state.address}`)
      .then((res) => {
        //parse the string holding the object
        const inv = JSON.parse(res.data);
        //update the items
        setItems(inv);
      })
      .catch(() => {
        setItems([]);
      });
  }, [state.address]);

  /**
   * Function used to handle the addition of a new item in the list
   * it updates the local and global state of the list
   * @param {Object} inputValue - the object holding the item name and quantity
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

      updateDatabase(newItems);
      //the old list becomes the new list
      setItems(newItems);

      //update the global list
      globalItems = newItems;
    }
  }
  /**
   * The function used to hande the quantity increase of an item
   * @param {Number} index - the identifier of the item to be updated
   */
  const handleQuantityIncrease = (index) => {
    //create a new list holding old items
    const newItems = [...items];
    //increase the quantity of the specific item
    newItems[index].quantity++;
    //update the global state
    updateDatabase(newItems);
    //update the list
    setItems(newItems);
    //update the global list
    globalItems = newItems;
  };

  /**
   * The function used to hande the quantity decrease of an item
   * @param {Number} index - the identifier of the item to be updated
   */
  const handleQuantityDecrease = (index) => {
    //create a new list holding old items
    const newItems = [...items];
    //increase the quantity of the specific item
    newItems[index].quantity--;
    //update the global state
    updateDatabase(newItems);

    //update the list
    setItems(newItems);
    //update the global list
    globalItems = newItems;
  };

  /**
   * The function used to hande the deletion of an item
   * @param {Number} index - the identifier of the item to be deleted
   */
  const removeItem = (index) => {
    //create a new list based on the old list
    const removeArr = [...items];
    //delete the specific item from the list
    delete removeArr[index];
    //remove items with the null value (resulted from the deletion of the object)
    const filterArr = removeArr.filter((item) => item !== null);
    //update database and global state
    updateDatabase(filterArr);
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

export default useList;
//Function to send the list of items to other components
export const fetchList = () => {
  //return the globally declared items
  return globalItems;
};
