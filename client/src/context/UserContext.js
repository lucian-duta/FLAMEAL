import React, { useReducer, createContext } from "react";

/**
 * Function used to check if there is a saved state in session storage
 * @category Context
 * @function checkStateUser
 * @returns {Object} the state if there is one, else the {@link initialState}
 */
const checkState = () => {
  if (!sessionStorage.getItem("state")) {
    const initialState = {
      auth: false,
      address: null,
      inventory: [],
      isfb: false,
    };
    return initialState;
  } else {
    return JSON.parse(sessionStorage.getItem("state"));
  }
};
//create the context
const UserContext = createContext(checkState());

//initialise the provider
const { Provider } = UserContext;

/**
 * The reducer function used to interact with the state
 * @category Context
 * @function userReducers
 * @see {@link https://reactjs.org/docs/hooks-reference.html#usereducer} for more information the reducer hook
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
        isfb: false,
        address: null,
        inventory: [],
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
/**
 * The provider to be used to handle the global state of the user to be used in any component of the application
 * @category Context
 * @see {@link https://reactjs.org/docs/hooks-reference.html#usecontext} for more information the useContext hook
 * @param {ReactComponent} children the children provider will be wrapped around
 * @returns {<Provider>} the provider component
 */
const StateProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducers, checkState());

  return <Provider value={[state, dispach]}>{children}</Provider>;
};

export { UserContext, StateProvider };
