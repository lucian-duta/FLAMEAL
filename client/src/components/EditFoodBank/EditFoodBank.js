import React, { useState } from "react";
import "./EditFoodBank.css";
import useEdit from "./useEdit";
import validateEdit from "./validateEdit";
import FileBase from "react-file-base64";
import FoodBankCard from "../FoodBankCard/FoodBankCard";

/**
 * The edit foodbank component used in the edit foodbank page consisting
 * of the foodbank card preview and the edit form
 * @category Edit Foodbank
 * @component
 * TODO: Perform image validation
 * @returns {ReactComponent} the edit foodbank component
 * @borrows FoodBankCard from the FoodBankCard component
 * @borrows useEdit from the useEdit hook
 */
const EditFoodBank = () => {
  //get the data from the form

  const { handleChange, handleSubmit, handleImageUpload, fbData, errors } =
    useEdit(validateEdit);

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

            <button className="fb-form-input-btn" type="submit">
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
