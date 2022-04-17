import Web3 from "web3";
//global variable to hold the state of the MetaMask connection
let metamaskConnected = false;
/**
 * Function the fetch the web 3 instance based on the enviroment the application is opened in.
 *
 * !IMPORTANT: If using a local provider (e.g. ganache-cli, truffle), make sure to update the address in the {@link provider} variable
 * @method getWeb3
 * @category Web3
 * @returns {Promise.<Web3>} The promise that resolves to the web 3 instance or rejects with an error
 */
const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    // If the browser supports a web3 instance, it will attempt to connect with the provider
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access
        await window.ethereum
          .enable()
          .then(() => {
            resolve(web3);
            console.log("CONNECTED TO METAMASK");
            metamaskConnected = true;
          })
          .catch((error) => {
            reject(error);
            console.log("FAILED TO CONNECT TO METAMASK");
            metamaskConnected = false;
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      //!Change if you are using a local provider
      //const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      //const web3 = new Web3(provider);
      //console.log("No web3 instance injected, using Local web3.");
      reject("No web3 instance injected, using Local web3.");
    }
  });

export default getWeb3;
/**
 * A function to return the state of the MetaMask connection state.
 * @category Web3
 * @extends getWeb3
 * @returns {Boolean} true if the user is connected to the MetaMask, false otherwise
 */
export const fetchMetaState = () => {
  return metamaskConnected;
};
