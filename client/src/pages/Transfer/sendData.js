import React, { useState } from "react";
import getData from "./getData";

const SendData = () =>
  new Promise((resolve, reject) => {
    let web3 = null;
    getData().then(function (res) {
      console.log("THIS IS RES", res);
      web3 = res;
      //const web3Elements = res;
      console.log("INSIDE THE NEW FUNC", web3);

      const makeTrans = async (web3el) => {
        console.log("beforew TRY", web3el);
        try {
          // Stores a given value, 5 by default.
          await web3el.contract.methods
            .addToBlockchain(
              "0x7eb86448A7B207a8Ca413cD10837E699a5Ae90b3",
              "hellp"
            )
            .send({ from: web3el.accounts[2], gas: 6721975 });

          // Get the value from the contract to prove it worked.
          const response = JSON.stringify(
            await web3el.contract.methods.getAllTransactions().call()
          );

          // Update state with the result.
          console.log(response);
          resolve(response);
        } catch (error) {
          reject(error);
          console.log("err from runEX", error);
        }
      };
    });
  });

export default SendData;
