import React from "react";
import "./Checkbox.css";
/**
 * A function used to return the checkbox component used in the register form
 * @param {Function} onClick - the function to be called when the checkbox is clicked
 * @returns {ReactComponent} the checkbox component
 */
const Checkbox = ({ onClick }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" onClick={onClick} />
      <label>Foodbank</label>
    </div>
  );
};

export default Checkbox;
