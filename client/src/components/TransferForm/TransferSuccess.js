import React from "react";
import "./TransferForm.css";

/**
 * * TransferSuccess
 * * Simple function to inform the user that the transfer was successful
 * @returns
 */
const TransferSuccess = () => {
  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
  }

  window.onload = timedRefresh(5000);
  return (
    <div className="form-content-right">
      <h1 className="form-success">Transfer complete</h1>
    </div>
  );
};

export default TransferSuccess;
