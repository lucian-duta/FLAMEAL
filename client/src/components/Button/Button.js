import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
/**
 * *Button
 * *Function to display the button component in the navbar
 * @returns - A link to the login page and the button element
 */
export function Button() {
  return (
    <Link to="signup">
      <button className="btn">Login</button>
    </Link>
  );
}
