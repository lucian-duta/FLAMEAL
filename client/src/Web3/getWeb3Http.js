import Web3 from "web3";
import GoodsTransfer from "../contracts/GoodsTransfer.json";

/**
 * Function used to fetch the web 3 elements from a http rpc provider regardless of browser instance
 * @returns {Promise<object>} the promise that resolves to the {@link web3Elements} object or rejects with an error
 */
const getWeb3Http = () =>
  new Promise(async (resolve, reject) => {
    try {
      const provider = new Web3.providers.HttpProvider(
        "http://techlmd.co.uk:30308"
      );
      const web3 = new Web3(provider);
      console.log("web3 fetched", web3);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GoodsTransfer.networks[networkId];
      const contract = new web3.eth.Contract(
        GoodsTransfer.abi,
        deployedNetwork && deployedNetwork.address
      );
      const transactions = await contract.methods.getAllTransactions().call();

      console.log("Transactions fetched: ", transactions);
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
