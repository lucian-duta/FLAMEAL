import React, { useState } from "react";
import TransferFill from "../../components/TransferForm/TransferFill";
import TransferSuccess from "../../components/TransferForm/TransferSuccess";
import "./Transfer.css";
import ListFill from "../../components/List/ListFill";

const Transfer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    //TODO: Improve mobile compatibility
    <>
      <div className="form-container">
        <div className="form-content-left">
          <div className="list-app">
            <h1>Add goods to the contract</h1>
            <ListFill />
          </div>
        </div>
        {!isSubmitted ? (
          <TransferFill submitForm={submitForm} />
        ) : (
          <>
            <TransferSuccess />
          </>
        )}
      </div>
    </>
  );
};

export default Transfer;
