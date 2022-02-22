import React, { useState } from "react";
import TransferFill from "../../components/TransferForm/TransferFill";
import TransferSuccess from "../../components/TransferForm/TransferSuccess";
import "./Transfer.css";
import "../../components/GoodsList/Goods.css";
import GoodsList from "../../components/GoodsList/GoodsList";
import List from "../../components/List/List";

const Transfer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <div className="todo-app">
            <List />
          </div>
        </div>
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
