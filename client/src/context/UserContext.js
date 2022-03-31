import React, { useReducer, createContext } from "react";

const checkState = () => {
  if (!localStorage.getItem("state")) {
    const initialState = {
      auth: false,
      address: null,
      inventory: [],
      isfb: false,
    };
    return initialState;
  } else {
    return JSON.parse(localStorage.getItem("state"));
  }
};

const UserContext = createContext(checkState());

const { Provider } = UserContext;
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

    case "isfb":
      return {
        ...state,
        isfb: true,
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
const StateProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducers, checkState());

  return <Provider value={[state, dispach]}>{children}</Provider>;
};

export { UserContext, StateProvider };
