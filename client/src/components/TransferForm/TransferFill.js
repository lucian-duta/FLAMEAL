import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./TransferForm.css";

/**
 * The react component to display the transfer form and collect the data of the transfer and update the {@link values} object
 * @param {Function} submitForm - the callback function used to fetch the submission state from the parent component
 * @returns {ReactComponent} the transfer form component
 */
const TransferFill = ({ submitForm }) => {
  //importing the functions from the useForm function while passing the callback function and validation function
  const { handleChange, handleSubmit, fetchItemList, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>Transfer goods to another entity</h1>
        <div className="form-inputs">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-input"
            placeholder="enter address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Comments</label>
          <textarea
            type="text"
            name="comments"
            className="form-input-comm"
            placeholder="enter comments"
            value={values.comments}
            onChange={handleChange}
          />
          {errors.comments && <p>{errors.comments}</p>}
        </div>

        <button
          className="form-input-btn"
          type="submit"
          onMouseEnter={() => {
            //fetching the items from the list component every time the mouse enters the transfer button
            //used to avoid submitting with a null list
            fetchItemList(); //!THIS MAY BE A PROBLEM
          }}
        >
          Transfer
        </button>
        {errors.itemsList && <p>{errors.itemsList}</p>}
      </form>
    </div>
  );
};

export default TransferFill;
