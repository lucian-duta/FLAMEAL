import React, { useState } from "react";
import TransferFill from "../../components/TransferForm/TransferFill";
import TransferSuccess from "../../components/TransferForm/TransferSuccess";
import "./Transfer.css";

const Transfer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left"></div>
        {!isSubmitted ? (
          <TransferFill submitForm={submitForm} />
        ) : (
          <TransferSuccess />
        )}
      </div>
    </>
  );
};

export default Transfer;
