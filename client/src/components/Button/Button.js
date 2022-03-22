import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
/**
 * *Button
 * *Function to display the button component in the navbar
 * @returns - A link to the login page and the button element
 */
export function Button({ buttonName, toPage }) {
  return (
    <Link to={toPage}>
      <button className="btn">{buttonName}</button>
    </Link>
  );
}
