import React, { useReducer, createContext } from "react";

/**
 * Function used to check if there is a saved state in session storage
 * @returns {Object} the state if there is one, else the {@link initialState}
 */
const checkState = () => {
  if (!sessionStorage.getItem("foodbanks")) {
    const initialState = {
      foodBankData: [],
    };
    return initialState;
  } else {
    return JSON.parse(sessionStorage.getItem("foodbanks"));
  }
};
//create the context
const FBContext = createContext(checkState());
//initialise the provider
const { Provider } = FBContext;

/**
 * The reducer function used to interact with the global state of foodbanks
 * @param {Object} state the passed state
 * @param {String} action the action to be performed
 * @returns {Object} the new state
 * @throws {Error} if the action is not recognised
 */
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
//initialise the provider
const FBProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducers, checkState());

  return <Provider value={[state, dispach]}>{children}</Provider>;
};

export { FBContext, FBProvider };
