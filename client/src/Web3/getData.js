import getWeb3 from "./getWeb3";
import GoodsTransfer from "../contracts/GoodsTransfer.json";

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
      web3Elements.web3 = await getWeb3();

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
      console.log(web3Elements);
      console.log(transactions);
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
