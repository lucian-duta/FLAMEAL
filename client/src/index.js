import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import getData from "./Web3/getData";
//*If you ever feel useless...this about this index page
ReactDOM.render(<App />, document.getElementById("root"));

getData()
  .then(() => {
    // alert("Connection with web3 succesfull");
  })
  .catch((error) => {
    alert(
      `Failed to load web3, accounts, or contract. Check console for details.`
    );
    console.log(error);
  });
