import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createfb, getOneFb, updateFb } from "../../api/actions";
import { UserContext } from "../../context/UserContext";

const useEdit = (sendData, validate) => {
  const [state, dispatch] = useContext(UserContext);

  const navigate = useNavigate();

  const [fbData, setfbData] = useState({
    name: "",
    description: "",
    address: state.address,
    pic: "",
  });

  const [fbExits, setFbExist] = useState(false);

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
    getOneFb(state.address)
      .then((res) => {
        const foodbank = {
          name: res.fbName,
          description: res.fbDescription,
          address: state.address,
          pic: res.fbPic,
        };
        setFbExist(true);
        setfbData(foodbank);
      })
      .catch(() => {});
    if (Object.keys(errors).length === 0 && isSubmitting) {
      sendData(fbData);
      if (!fbExits) {
        createfb(fbData)
          .then(() => {
            alert("foodbank created");
          })
          .catch(() => {
            alert("Creation failed");
          });
      } else {
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
