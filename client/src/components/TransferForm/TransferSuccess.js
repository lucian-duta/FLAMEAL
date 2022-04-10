import React from "react";
import "./TransferForm.css";

/**
 * A react component that renders a success message after a transfer and reloads the page.
 * @returns {React.Component} the component
 */
const TransferSuccess = () => {
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
