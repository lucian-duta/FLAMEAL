import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Login.css";
import validateRegister from "./validateRegister";
/**
 * * RegisterInput
 * * a React component to handle the user input when it registers for the first time
 * @param {*} param0 the callback function from the parent component
 * @returns the component
 */
const RegisterInput = ({ sendInfo }) => {
  //hook to hold the input value (name)
  const [inputValue, setInputValue] = useState("");
  //hook to hold the food bank option
  const [isFoodBank, setisFoodbank] = useState(true);
  //hook to hold the erros from the validation function
  const [errors, setErrors] = useState({});

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          //prepare the data for the parent component (Login.js)
          const info = {
            name: event.target.value,
            isFB: !isFoodBank,
            errors: null,
          };
          info.errors = validateRegister(info);
          setErrors(info.errors);
          //send the data to the parent
          sendInfo(info);
        }}
        className="name-input"
        placeholder="Organisation's name"
      />
      {errors.name && <p>{errors.name}</p>}
      <Checkbox
        onClick={() => {
          //changes the state based on the user input
          setisFoodbank(!isFoodBank);
          //prepare the data for the parent component (Login.js)
          const info = {
            name: inputValue,
            isFB: isFoodBank,
          };
          //send the data to the parent
          sendInfo(info);
          console.log(isFoodBank);
        }}
      />
    </>
  );
};

export default RegisterInput;
