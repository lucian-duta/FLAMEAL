import Web3 from "web3";
import GoodsTransfer from "../contracts/GoodsTransfer.json";

/**
 * Function used to fetch the web 3 elements from a http rpc provider regardless of browser instance
 *
 * !IMPORTANT: If using a local provider (e.g. ganache-cli, truffle), make sure to update the address in the {@link provider} variable
 *
 * @category Web3
 * @method getWeb3Http
 * @returns {Promise<object>} the promise that resolves to the {@link web3Elements} object or rejects with an error
 */
const getWeb3Http = () =>
  new Promise(async (resolve, reject) => {
    try {
      //!Change if you are using a local provider
      const provider = new Web3.providers.HttpProvider(
        "https://eth.techlmd.co.uk"
      );
      //after the provider is set, create the web3 instance
      const web3 = new Web3(provider);
      //reveal the accounts
      const accounts = await web3.eth.getAccounts();

      //get the network id
      const networkId = await web3.eth.net.getId();
      //get the network data
      const deployedNetwork = GoodsTransfer.networks[networkId];
      //create the contract instance
      const contract = new web3.eth.Contract(
        GoodsTransfer.abi,
        deployedNetwork && deployedNetwork.address
      );
      //get all the transactions stored in the contract
      const transactions = await contract.methods.getAllTransactions().call();

      const web3Elements = {
        web3: web3,
        transactions: transactions,
      };
      resolve(web3Elements);
    } catch (error) {
      reject(error);
    }
  });

export default getWeb3Http;
