import GoodsTransfer from "./contracts/GoodsTransfer.json";
import getWeb3 from "../../getWeb3";
import React, { useState, useEffect } from "react";

const web3Connect = () => {
  const [state, setState] = useState({
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
  });

  useEffect(async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccount();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GoodsTransfer.networks[networkId];
      const instance = new web3.eth.Contract(
        GoodsTransfer.abi,
        deployedNetwork && deployedNetwork.address
      );
      setState({ web3, accounts, contract: instance }, state.runExample);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  });

  const runExample = async () => {
    const { accounts, contract } = state;

    await contract.methods
      .addToBlockchain("0x7eb86448A7B207a8Ca413cD10837E699a5Ae90b3", "hellp")
      .send({ from: accounts[2] });

    const response = await contract.methods.getAllTransactions().call();

    console.log(JSON.stringify(response));
  };

  if (!state.web3) {
    return (
      <div>
        <h1>Loading Web3, accounts, and contract...</h1>
      </div>
    );
  } else {
    <h1>{JSON.stringify(response)}</h1>;
  }
};

export default web3Connect;
