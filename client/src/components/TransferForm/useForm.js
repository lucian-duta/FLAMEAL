import { useState, useEffect } from "react";
import SendData from "../../Web3/sendData.js";
import { fetchList } from "../List/useList";
/**
 * * useForm
 * * Handles the functionality of the transfer form
 * TODO: Find a way to import items from the list
 * !Does not refresh after subbmit
 * ? Should it refresh after the transaction is confirmed ?
 *
 * @param {*} callback
 * @param {*} validate
 * @returns
 */
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    address: "",
    comments: "",
    itemsList: null, //! Has to be imported from the list function
  });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //alert(JSON.stringify(items));
    //console.log(items);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const fetchItemList = () => {
    const fetchedItems = fetchList();
    console.log("items fetched", fetchedItems);
    setValues({
      ...values,
      itemsList: fetchedItems,
    });
  };

  const handleSubmit = (e) => {
    //TODO: update items when submitting only
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    //alert(JSON.stringify(items));
  };
  //Triggered when submission condisions are met
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //Preparing the payload by creating a new object without the address
      let payload = {
        comments: values.comments,
        itemsList: values.itemsList,
      };
      //Transform the object into a json strig
      payload = JSON.stringify(payload);
      //Send the json string to the SendData function
      SendData(values.address, payload);
      console.log(JSON.stringify(values));
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, fetchItemList, values, errors };
};

export default useForm;
