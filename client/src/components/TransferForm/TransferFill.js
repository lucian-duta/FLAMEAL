import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./TransferForm.css";

const TransferFill = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>Transfer good to another entity</h1>

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

        <button className="form-input-btn" type="submit">
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferFill;