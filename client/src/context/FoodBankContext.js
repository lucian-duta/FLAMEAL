import { func } from "prop-types";
import React, { useState, useContext, useReducer, createContext } from "react";

const checkState = () => {
  if (!localStorage.getItem("foodbanks")) {
    const initialState = {
      foodBankData: [],
    };
    return initialState;
  } else {
    return JSON.parse(localStorage.getItem("foodbanks"));
  }
};

const FBContext = createContext(checkState());

const { Provider } = FBContext;
const reducers = (state, action) => {
  switch (action.type) {
    case "auth":
      return {
        ...state,
        auth: true,
      };
    case "de_auth":
      return {
        ...state,
        auth: false,
      };

    case "address":
      return {
        ...state,
        address: action.payload,
      };
    case "add_to_inv":
      return {
        ...state,
        inventory: action.payload,
      };
    case "rm_from_inv":
      return {
        inventory: state.inventory.filter((item) => item.id !== action.payload),
      };
    default:
      throw new Error();
  }
};
const FBProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducers, checkState());

  return <Provider value={[state, dispach]}>{children}</Provider>;
};

export { FBContext, FBProvider };
