import React from "react";
import "./Popup.css";
/**
 * A react component to display a popup with a message
 * @param {Object} props the desired content passed from parent component
 * @returns {ReactComponent} the popup component
 */
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">{props.content}</div>
    </div>
  );
};

export default Popup;
