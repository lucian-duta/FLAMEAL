import GoodsTransfer from "../../contracts/GoodsTransfer.json";
import getWeb3 from "../../getWeb3";
import React, { useState, useEffect, Component } from "react";

// function Web3Connect() {
//   const [state, setState] = useState({
//     storageValue: 0,
//     web3: null,
//     accounts: null,
//     contract: null,
//   });
//   const [response, setResponse] = useState(null);

//   useEffect(async () => {
//     try {
//       const web3 = await getWeb3();
//       const accounts = await web3.eth.getAccounts();
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = GoodsTransfer.networks[networkId];
//       const instance = new web3.eth.Contract(
//         GoodsTransfer.abi,
//         deployedNetwork && deployedNetwork.addsress
//       );
//       setState({ web3, accounts, contract: instance });
//     } catch (error) {
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`
//       );
//       console.error(error);
//     }
//   });

//   const runExample = async () => {
//     const { accounts, contract } = state;

//     const answer = await contract.methods
//       .addToBlockchain("0x7eb86448A7B207a8Ca413cD10837E699a5Ae90b3", "hellp")
//       .send({ from: accounts[2] });

//     setResponse(await contract.methods.getAllTransactions().call());

//     console.log(JSON.stringify(response));
//     console.log(JSON.stringify(answer));
//   };

//   if (!state.web3) {
//     return (
//       <div>
//         <h1>Loading Web3, accounts, and contract...</h1>
//       </div>
//     );
//   } else {
//     return (
//       <h1>
//         {runExample()}
//         {JSON.stringify(response)}
//       </h1>
//     );
//   }
// }

class Web3Connect extends Component {
  state = { storageValue: "", web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GoodsTransfer.networks[networkId];
      const instance = new web3.eth.Contract(
        GoodsTransfer.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods
      .addToBlockchain("0x7eb86448A7B207a8Ca413cD10837E699a5Ae90b3", "hellp")
      .send({ from: accounts[2], gas: 6721975 });

    // Get the value from the contract to prove it worked.
    const response = JSON.stringify(
      await contract.methods.getAllTransactions().call()
    );

    // Update state with the result.
    this.setState({ storageValue: response });
    console.log(response);

    //const answer = await contract.methods
    //       .addToBlockchain("0x7eb86448A7B207a8Ca413cD10837E699a5Ae90b3", "hellp")
    //       .send({ from: accounts[2] });

    //     setResponse(await contract.methods.getAllTransactions().call());

    //     console.log(JSON.stringify(response));
    //     console.log(JSON.stringify(answer));
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    } else {
      return <h1> {this.state.storageValue}</h1>;
    }
  }
}
export default Web3Connect;
