import React, { useState } from "react";
import getData from "./getData";

const SendData = (address, content) => {
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
          .addToBlockchain(address, content)
          .send({ from: web3el.accounts[2], gas: 6721975 });

        // Get the value from the contract to prove it worked.
        const response = JSON.stringify(
          await web3el.contract.methods.getAllTransactions().call()
        );

        // Update state with the result.
        console.log(response);
      } catch (error) {
        console.log("err from sendData", error);
      }
    };
    makeTrans(web3);
  });
};

export default SendData;
