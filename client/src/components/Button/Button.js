import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
/**
 * A function to return a button component.
 * @category Components
 * @component
 * @param {String} buttonName name of the button to be displayed
 * @param {String} toPage the path to navigate to
 * @returns {ReactComponent} the button component
 */
export const Button = ({ buttonName, toPage }) => {
  return (
    <Link to={toPage}>
      <button className="btn">{buttonName}</button>
    </Link>
  );
};
