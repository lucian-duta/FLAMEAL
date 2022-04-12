import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FBProvider } from "./context/FoodBankContext";
import { StateProvider } from "./context/UserContext";
import extractFeatures from "./Web3/extractFeatures";
import getWeb3 from "./Web3/getWeb3";
//the application wrapped in a provider to provide the context to the components
const app = (
  <FBProvider>
    <StateProvider>
      <App />
    </StateProvider>
  </FBProvider>
);
//render the application
ReactDOM.render(app, document.getElementById("root"));
//attept to get the web3 instance when the application is loaded
// getWeb3()
//   .then(() => {
//     // alert("Connection with web3 succesfull");
//   })
//   .catch((error) => {
//     alert(
//       `Failed to load web3, accounts, or contract. Check console for details.`
//     );
//     console.log(error);
//   });
//extract the features from the smart contract to be used later
extractFeatures();
