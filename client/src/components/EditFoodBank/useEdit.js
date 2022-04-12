import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createfb, getOneFb, updateFb } from "../../api/actions";
import { UserContext } from "../../context/UserContext";

/**
 * The function used to handle the logic of the {@link EditFoodBank} component
 * makes the api call to update the foodbank using the {@link updateFb} function
 * makes the api call to create a new foodbank using the {@link createfb} function
 * @param {Function} validate - the function to validate the input
 * @returns {Object} the object containing the functions and data to be used in the main component
 */
const useEdit = (validate) => {
  //hook to hold the global state
  const [state, dispatch] = useContext(UserContext);

  //constant to hold the navigator hook
  const navigate = useNavigate();

  //hooks to hold the foodbank state
  const [fbData, setfbData] = useState({
    name: "",
    description: "",
    address: state.address,
    pic: "",
  });

  //hook to hold state of foodbank existence
  const [fbExits, setFbExist] = useState(false);
  //hook to hold the errors
  const [errors, setErrors] = useState({});
  //hook to hold the state of submit button
  const [isSubmitting, setIsSubmitting] = useState(false);
  //function to handle the input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setfbData({
      ...fbData,
      [name]: value,
    });
  };
  //function to handle upload image
  const handleImageUpload = (receivedImg) => {
    setfbData({
      ...fbData,
      pic: receivedImg,
    });
  };
  //function to handle the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(fbData));
    setIsSubmitting(true);
  };

  //when component mounts
  useEffect(() => {
    //call the api to get the foodbank data
    getOneFb(state.address)
      //if the foodbank exists
      .then((res) => {
        //build the foodbank object
        const foodbank = {
          name: res.fbName,
          description: res.fbDescription,
          address: state.address,
          pic: res.fbPic,
        };
        //update the state of existance
        setFbExist(true);
        //update the foodbank data
        setfbData(foodbank);
      })
      //if the foodbank does not exist
      .catch(() => {});
    //if the form is ready for submission and the button is clicked
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //if the foodbank does not exist
      if (!fbExits) {
        //create the foodbank
        createfb(fbData)
          .then(() => {
            alert("foodbank created");
            navigate("/foodbanks");
          })
          .catch(() => {
            alert("Creation failed");
          });
      } else {
        //update an existing foodbank
        updateFb(fbData)
          .then(() => {
            alert("foodbank updated");
            navigate("/foodbanks");
          })
          .catch(() => {
            alert("update failed");
          });
      }
    }
  }, [errors]);
  return { handleChange, handleSubmit, handleImageUpload, fbData, errors };
};

export default useEdit;
