import { useState, useEffect, useContext } from "react";
import SendData from "../../Web3/sendData.js";
import { fetchList } from "../List/useList";
import { fetchMetaState } from "../../Web3/getWeb3.js";
import { UserContext } from "../../context/UserContext.js";
import { updateInventory } from "../../api/actions.js";
/**
 * * useForm
 * * Handles the functionality of the transfer form
 * TODO: Find a way to import items from the list
 * !Does not refresh after subbmit
 * ? Should it refresh after the transaction is confirmed ?
 *
 * @param {*} callback - the callback function
 * @param {*} validate - the function to validate the inputs
 * @returns - the functions required by the TransferFill component
 */

/**
 * The function the handle the logic of the transfer form and the validation of the data before attepmting to submit the transaction to the blockchain
 * @borrows {@link SendData} to attept to submit the transaction to the blockchain
 * @param {Function} callback - the callback function used to fetch the submission state from the parent component
 * @param {Function} validate - the function to validate the inputs
 * @returns {Object} the functions required by the TransferFill component
 */
const useForm = (callback, validate) => {
  const [state, dispatch] = useContext(UserContext);
  //declaring a variable to hold the state of blockchain transfer errors
  let transferError = null;
  //hook to hold the values of the form
  const [values, setValues] = useState({
    address: "",
    comments: "",
    itemsList: null,
  });
  //hook to hold the erros from the validation function
  const [errors, setErrors] = useState({});
  //hook to hold the state of submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  //Function to handle the change of a field and update the value to the one on the list
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  //Function to fetch the list of items from the List component
  const fetchItemList = () => {
    const fetchedItems = fetchList();
    console.log("items fetched", fetchedItems);
    setValues({
      ...values,
      itemsList: fetchedItems,
    });
  };
  //Function to handle the submition of the list
  const handleSubmit = (e) => {
    //stop refresing the form as soon as the submit button is clicked (to prevent purging the values before validation)
    e.preventDefault();
    //update the state of the errors with the erros returned by the validation function
    setErrors(validate(values));
    //put the form in submission state
    setIsSubmitting(true);
  };
  //function to remove the items sent from the list of goods
  const removeSentItems = (isUnion = false) => {
    //total items in the inventory
    const totalItems = state.inventory;
    //items sent from the transfer list
    const transferItems = values.itemsList;
    //the remaining items list created by intersecting the total items list with the items sent from the transfer list
    const remainingItems = totalItems.filter(
      (
        (set) => (a) =>
          isUnion === set.has(a.itemName)
      )(new Set(transferItems.map((b) => b.itemName)))
    );
    //call the api action to update the inventory
    updateInventory(remainingItems, state.address);
  };

  //hook to be called every time the errors are changed
  useEffect(() => {
    //test if the error array is empty and the form is submitting
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //Preparing the payload by creating a new object without the address
      let payload = {
        comments: values.comments,
        itemsList: values.itemsList,
      };
      //Transform the object into a json strig
      payload = JSON.stringify(payload);
      //Send the json string to the SendData function
      transferError = SendData(values.address, payload);
      console.log("values attached to contract", JSON.stringify(values)); //!SHOULD BE REMOVED IN FINAL
      console.log("TRANSFER ERRORRR", transferError); //!SHOULD BE REMOVED IN FINAL
      // console.log("SHOULD KEEP", inFirstOnly(state.inventory, values.items));
      removeSentItems();
      //constant to hold a bool state of the MetaMask connection
      const metaState = fetchMetaState();
      if (!transferError) {
        //if there are no transfer errors the callback function is called
        //and the form is refreshed as the transfer is considered succesfull

        callback();
      } else if (metaState) {
        //if there are transfer errors while MetaMask is connected the errors are updated
        setErrors({
          ...errors,
          itemsList: "TRANSFER FAILED: The address was not found",
        });
      } else if (!metaState) {
        //if there are transfer errors while MetaMask is NOT connected the errors are updated
        setErrors({
          ...errors,
          itemsList: "ERROR: Please login with metamask",
        });
      }
    }
  }, [errors]);

  return { handleChange, handleSubmit, fetchItemList, values, errors };
};

export default useForm;
