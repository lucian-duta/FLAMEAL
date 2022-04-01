import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FBProvider } from "./context/FoodBankContext";
import { StateProvider } from "./context/UserContext";
import extractFeatures from "./Web3/extractFeatures";
import getData from "./Web3/getData";
import getWeb3 from "./Web3/getWeb3";
//*If you ever feel useless...this about this index page
const app = (
  <FBProvider>
    <StateProvider>
      <App />
    </StateProvider>
  </FBProvider>
);
ReactDOM.render(app, document.getElementById("root"));
getWeb3()
  .then(() => {
    // alert("Connection with web3 succesfull");
  })
  .catch((error) => {
    alert(
      `Failed to load web3, accounts, or contract. Check console for details.`
    );
    console.log(error);
  });

extractFeatures();
