import { useState, useEffect } from "react";
import { items } from "../List/List.js";
import useListv2 from "../Listv2Beta/useListv2";
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    address: "",
    comments: "",
    itemsList: [],
  });
  let { items } = useListv2();
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //alert(JSON.stringify(items));
    console.log(items);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    //alert(JSON.stringify(items));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
