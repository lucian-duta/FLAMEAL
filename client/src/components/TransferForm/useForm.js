import { useState, useEffect } from "react";
import { items } from "../List/List.js";
import useListv2 from "../Listv2Beta/useListv2";
import SendData from "../../pages/Transfer/sendData.js";
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
    itemsList: [], //! Has to be imported from the list function
  });
  let { items } = useListv2();
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

    setErrors(validate(values));
    setIsSubmitting(true);

    //alert(JSON.stringify(items));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("should go", values.address, values.comments);
      SendData("0x41FdC3a760C618f15AE1F314E80781b6cf4AAE1E", "salutttt");
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
