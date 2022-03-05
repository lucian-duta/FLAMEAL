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

  const handleSubmit = (e) => {
    //TODO: update items when submitting only
    e.preventDefault();
    const fetchedItems = fetchList();
    console.log("items fetched", fetchedItems);
    setValues({
      ...values,
      itemsList: fetchedItems,
    });

    setErrors(validate(values));
    setIsSubmitting(true);

    //alert(JSON.stringify(items));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("should go", values.address, values.comments);
      const payload = JSON.stringify(values);
      SendData(values.address, payload);
      console.log(JSON.stringify(values));
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
