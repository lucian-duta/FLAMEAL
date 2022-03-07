import React, { useState } from "react";
import TransferFill from "../../components/TransferForm/TransferFill";
import TransferSuccess from "../../components/TransferForm/TransferSuccess";
import "./Transfer.css";
import ListFill from "../../components/List/ListFill";

const Transfer = () => {
  //hook to hold the state of submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  //function to set the state of submission to true
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    //TODO: Improve mobile compatibility
    <>
      <div className="form-container-transfer">
        <div className="form-content-left-transfer">
          <div className="list-app">
            <h1>Add goods to the contract</h1>
            <ListFill />
          </div>
        </div>
        {!isSubmitted ? (
          //if the form is not submitted -> display the form
          <TransferFill submitForm={submitForm} />
        ) : (
          //if the form is submitted -> display the success page
          <>
            <TransferSuccess />
          </>
        )}
      </div>
    </>
  );
};

export default Transfer;
