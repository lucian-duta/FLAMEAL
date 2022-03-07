import React from "react";
import "./TransferForm.css";

/**
 * * TransferSuccess
 * * Simple function to inform the user that the transfer was successful
 * @returns
 */
const TransferSuccess = () => {
  /**
   * *Function used to refresh the page
   * @param {*} timeoutPeriod - the time to wait before refreshing
   */
  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
  }
  //call the function after the page loads to refresh after 5 seconds
  window.onload = timedRefresh(5000); //TODO make dependent on the metamask window
  return (
    <div className="form-content-right">
      <h1 className="form-success">Transfer complete</h1>
    </div>
  );
};

export default TransferSuccess;
