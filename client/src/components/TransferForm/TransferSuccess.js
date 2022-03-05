import React from "react";
import "./TransferForm.css";

/**
 * * TransferSuccess
 * * Simple function to inform the user that the transfer was successful
 * @returns
 */
const TransferSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">Transfer complete</h1>
    </div>
  );
};

export default TransferSuccess;
