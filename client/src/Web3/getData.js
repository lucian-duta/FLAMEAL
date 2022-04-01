import getWeb3, { fetchWeb3 } from "./getWeb3";
import GoodsTransfer from "../contracts/GoodsTransfer.json";
import Web3 from "web3";

//global value to hold the elements needed
let web3Elements = {
  web3: null,
  accounts: null,
  contract: null,
};
let transactions = null;
/**
 * *getData
 * *Function used to extract the elements needed from the web 3 element
 * @returns - a promise
 */

const getData = () =>
  new Promise(async (resolve, reject) => {
    try {
      // Get network provider and web3 instance.
      const web3 = new Web3(window.ethereum);
      //check is the instance is valid by testing provider
      if (!web3.currentProvider) {
        //if the browser does not have metamask, ask fro another provider
        web3Elements.web3 = await getWeb3();
      } else {
        //if metamask was detected, update the elements
        web3Elements.web3 = web3;
      }

      // Use web3 to get the user's accounts.
      web3Elements.accounts = await web3Elements.web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3Elements.web3.eth.net.getId();
      const deployedNetwork = GoodsTransfer.networks[networkId];
      web3Elements.contract = new web3Elements.web3.eth.Contract(
        GoodsTransfer.abi,
        deployedNetwork && deployedNetwork.address
      );
      transactions = await web3Elements.contract.methods
        .getAllTransactions()
        .call();
      // console.log(web3Elements);
      // console.log(transactions);
      resolve(web3Elements);
    } catch (error) {
      reject(error);
      console.log(
        error,
        "Failed to load web3, accounts, or contract...check console for details"
      );
    }
  });

export default getData;
//function to send the web3 elements needed by other components
export const fetchData = () => {
  return web3Elements;
};

//function to send the transaction array needed by other components
export const fetchTransactions = () => {
  return transactions;
};

//function the send the current addtess to other components
export const fetchAddress = () => {
  return web3Elements.accounts[0];
};
