import React from "react";
import "./TransferForm.css";

/**
 * A react component that renders a success message after a transfer and reloads the page.
 * @returns {React.Component} the component
 */
const TransferSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">Transfer processing</h1>
    </div>
  );
};

export default TransferSuccess;
