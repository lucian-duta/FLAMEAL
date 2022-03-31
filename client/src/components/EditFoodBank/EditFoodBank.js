import React, { useState } from "react";
import "./EditFoodBank.css";
import useEdit from "./useEdit";
import validateEdit from "./validateEdit";
import FileBase from "react-file-base64";
import FoodBankCard from "../FoodBankCard/FoodBankCard";

const EditFoodBank = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    address: "",
    pic: "",
  });
  const retrieveData = (data) => {
    setData(data);
    console.log(data);
  };
  const { handleChange, handleSubmit, handleImageUpload, fbData, errors } =
    useEdit(retrieveData, validateEdit);
  // const fbdata = {
  //   name: "BASIC",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla",
  // };

  return (
    <>
      <div className="fb-page">
        <div className="edit-fb-container">
          <h1>Fill in the information for your food bank</h1>
          <form className="fb-form" onSubmit={handleSubmit} noValidate>
            <div className="fb-form-inputs">
              <label className="fb-form-label">Name</label>
              <input
                type="text"
                name="name"
                className="fb-form-input"
                placeholder="enter name"
                value={fbData.name}
                onChange={handleChange}
              />
              {errors.name && <p>{errors.name}</p>}

              <label className="fb-form-label">Description</label>
              <textarea
                type="text"
                name="description"
                className="fb-form-input-desc"
                placeholder="enter description"
                value={fbData.description}
                onChange={handleChange}
              />
              {errors.description && <p>{errors.description}</p>}
              <label className="fb-form-label">Image</label>
              <div className="fb-form-img">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => {
                    handleImageUpload(base64);
                  }}
                />
              </div>
              {errors.pic && <p>{errors.pic}</p>}
            </div>

            <button
              className="fb-form-input-btn"
              type="submit"
              onMouseEnter={() => {
                //fetching the items from the list component every time the mouse enters the transfer button
                //used to avoid submitting with a null list
              }}
            >
              Done
            </button>
          </form>
        </div>
        <div className="preview-card">
          <FoodBankCard fbData={fbData} />
        </div>
      </div>
    </>
  );
};

export default EditFoodBank;
