import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FBProvider } from "./context/FoodBankContext";
import { StateProvider } from "./context/UserContext";
import extractFeatures from "./Web3/extractFeatures";

const app = (
  <FBProvider>
    <StateProvider>
      <App />
    </StateProvider>
  </FBProvider>
);
//render the application
ReactDOM.render(app, document.getElementById("root"));

extractFeatures();
