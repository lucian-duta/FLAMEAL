import React, { useContext, useEffect, useState } from "react";
import { createfb } from "../../api/actions";
import { UserContext } from "../../context/UserContext";

const useEdit = (sendData, validate) => {
  const [state, dispatch] = useContext(UserContext);

  const [fbData, setfbData] = useState({
    name: "",
    description: "",
    address: state.address,
    pic: "",
  });
  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfbData({
      ...fbData,
      [name]: value,
    });
  };

  const handleImageUpload = (receivedImg) => {
    setfbData({
      ...fbData,
      pic: receivedImg,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(fbData));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      sendData(fbData);
      createfb(fbData)
        .then(() => {
          alert("foodbank created");
        })
        .catch(() => {
          alert("Creation failed");
        });
    }
  }, [errors]);
  return { handleChange, handleSubmit, handleImageUpload, fbData, errors };
};

export default useEdit;
