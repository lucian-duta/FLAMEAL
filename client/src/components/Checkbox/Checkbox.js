import React from "react";
import "./Checkbox.css";
const Checkbox = ({ onClick }) => {
  return (
    <div className="checkbox-container">
      <input type="checkbox" onClick={onClick} />
      <label>Foodbank</label>
    </div>
  );
};

export default Checkbox;
