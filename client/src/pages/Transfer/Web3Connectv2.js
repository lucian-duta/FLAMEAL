import GoodsTransfer from "../../contracts/GoodsTransfer.json";
import getWeb3 from "../../getWeb3";
import React, { useState, useEffect, Component } from "react";

const Web3Connectv2 = () => {
  const [state, setState] = useState({
    storageValue: null,
    web3: null,
    accounts: null,
    contract: null,
  });

  const [response, setResponse] = useState(null);

  const getData = async () => {
    try {
      // Get network provider and web3 instance.
      const fetchedWeb3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const fetchedAccounts = await fetchedWeb3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await fetchedWeb3.eth.net.getId();
      const deployedNetwork = GoodsTransfer.networks[networkId];
      const fetchedContract = new fetchedWeb3.eth.Contract(
        GoodsTransfer.abi,
        deployedNetwork && deployedNetwork.address
      );
      console.log(fetchedContract);

      setState((prevState) => {
        return {
          ...prevState,
          web3: fetchedWeb3,
          accounts: fetchedAccounts,
          contract: fetchedContract,
        };
      });
      console.log(state);
      runExample();
    } catch (error) {
      console.log(error);
      alert(
        "Failed to load web3, accounts, or contract...check console for details"
      );
    }
  };
  getData();
  const runExample = async () => {
    try {
      //   const { accounts, contract } = state;
      const accounts = state.accounts;
      const contract = state.contract;

      // Stores a given value, 5 by default.
      await contract.methods
        .addToBlockchain("0x7eb86448A7B207a8Ca413cD10837E699a5Ae90b3", "hellp")
        .send({ from: accounts[2], gas: 6721975 });

      // Get the value from the contract to prove it worked.
      const response = JSON.stringify(
        await contract.methods.getAllTransactions().call()
      );

      // Update state with the result.
      setState({ storageValue: response });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (!state.web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  } else {
    return <h1> {state.storageValue}</h1>;
  }
};

export default Web3Connectv2;
