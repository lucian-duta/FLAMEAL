import Web3 from "web3";
//global variable to hold the state of the MetaMask connection
let metamaskConnected = false;
/**
 * Function the fetch the web 3 instance based on the enviroment the application is opened in.
 *
 * TODO: Fetch instance from remote provider as well
 *
 * !IMPORTANT: If using a local provider (e.g. ganache-cli, truffle), make sure to update the address in the {@link provider} variable
 * @returns {Promise.<Web3>} The promise that resolves to the web 3 instance or rejects with an error
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
