import GoodsTransfer from "../../contracts/GoodsTransfer.json";
import getWeb3 from "../../getWeb3";
import React, { useState, useEffect, Component } from "react";
import getData from "./getData";
import SendData from "./sendData";

function Web3Connectv2() {
  // const [response2, setResponse2] = useState(null);
  // const [response, setResponse] = useState(null);
  // let web3Elements = null;
  // getData().then(function (res) {
  //   console.log("THIS IS RES", res);
  //   web3Elements = res;
  //   console.log("INSIDE THE NEW FUNC", web3Elements);
  // });
  // function runExample(web3el) {
  //   console.log("beforew TRY", web3el);
  //   try {
  //     // Stores a given value, 5 by default.
  //     web3el.contract.methods
  //       .addToBlockchain("0x7eb86448A7B207a8Ca413cD10837E699a5Ae90b3", "hellp")
  //       .send({ from: web3el.accounts[2], gas: 6721975 });

  //     // Get the value from the contract to prove it worked.
  //     const response = JSON.stringify(
  //       web3el.contract.methods.getAllTransactions().call()
  //     );

  //     // Update state with the result.
  //     setResponse(response);
  //     console.log(response);
  //     return <div>{response}</div>;
  //   } catch (error) {
  //     console.log("err from runEX", error);
  //   }
  // }
  // console.log("Web 3 in main func", web3Elements);
  getData().then(function (res) {
    console.log("THIS IS RES", res);
    //const web3Elements = res;
    return <p>{res}</p>;
  });
}

// return (
//   <>
//     {/* <button
//         onClick={() => {
//           // console.log("button web", web3Elements);
//           runExample(web3Elements);
//         }}
//       >
//         Transfer
//       </button>
//       <textarea
//         type="text"
//         name="comments"
//         className="form-input-comm"
//         placeholder="enter comments"
//         value={response}
//       /> */}
//   </>
// );

// //   if (!web3Elements.web3) {
// //     return <div>Loading Web3, accounts, and contract...</div>;
// //   } else {

// //}

export default Web3Connectv2;
