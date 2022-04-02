import Web3 from "web3";
//global variable to hold the state of the MetaMask connection
let metamaskConnected = false;
/**
 * *getWeb3
 * *Function the fetch the web 3 elements based on the enviroment
 * @returns - a promise
 */
const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Accounts now exposed
        resolve(web3);
        console.log("CONNECTED TO METAMASK");
        metamaskConnected = true;
      } catch (error) {
        console.log(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      console.log("Injected web3 detected.");
      metamaskConnected = true;
      resolve(web3);
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
      resolve(web3);
    }
  });

export default getWeb3;
//function used to send the state of the MetaMask connection to other components
export const fetchMetaState = () => {
  return metamaskConnected;
};
