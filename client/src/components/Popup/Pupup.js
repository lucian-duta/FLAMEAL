import React from "react";
import "./Popup.css";
/**
 * *Popup
 * * a react component to display a popup on top of the login component
 * @param {*} props the desired content passed from parent
 * @returns the component
 */
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">{props.content}</div>
    </div>
  );
};

export default Popup;
